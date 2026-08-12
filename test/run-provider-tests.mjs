/**
 * Provider tests — exercise the Amazon.ca HTML parser and the Best Buy Canada
 * JSON parser against real captured responses, with the network stubbed out.
 *
 *   npm install --no-save linkedom
 *   node test/run-provider-tests.mjs
 *
 * Fixtures in test/fixtures/ are trimmed but otherwise untouched real responses,
 * so a markup change at either retailer shows up here as a failure.
 */

import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');

let DOMParserImpl;
try {
  ({ DOMParser: DOMParserImpl } = await import('linkedom'));
} catch (_) {
  console.log('SKIP: linkedom is not installed.  npm install --no-save linkedom');
  process.exit(0);
}

const AMAZON_FIXTURE = join(here, 'fixtures', 'amazon-search.html');
const BESTBUY_FIXTURE = join(here, 'fixtures', 'bestbuy-search.json');
for (const f of [AMAZON_FIXTURE, BESTBUY_FIXTURE]) {
  if (!existsSync(f)) { console.log(`SKIP: missing fixture ${f}`); process.exit(0); }
}

// ---------------------------------------------------------------------------
// Environment
// ---------------------------------------------------------------------------
const store = new Map();
Object.assign(globalThis, {
  GM_getValue: (k, d) => (store.has(k) ? store.get(k) : d),
  GM_setValue: (k, v) => store.set(k, v),
  GM_deleteValue: (k) => store.delete(k),
  GM_listValues: () => [...store.keys()],
  GM_addStyle: () => {},
  GM_registerMenuCommand: () => {},
  GM_openInTab: () => {},
  GM_xmlhttpRequest: () => { throw new Error('network disabled'); },
  location: { pathname: '/', href: 'https://hibid.com/' },
  MutationObserver: class { observe() {} disconnect() {} },
  DOMParser: DOMParserImpl,
});
globalThis.document = {
  body: {}, querySelector: () => null, querySelectorAll: () => [],
  getElementById: () => null,
  createElement: () => ({ style: {}, className: '', setAttribute() {}, appendChild() {}, addEventListener() {}, textContent: '' }),
};
globalThis.window = globalThis;

// eslint-disable-next-line no-eval
eval(readFileSync(join(root, 'src', 'hibid-enhancer.user.js'), 'utf8'));
const H = globalThis.__hesInternals;

let pass = 0, fail = 0;
const check = (name, actual, expected) => {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (ok) { pass++; console.log(`  ok   ${name}`); }
  else { fail++; console.log(`  FAIL ${name}\n         expected: ${JSON.stringify(expected)}\n         actual:   ${JSON.stringify(actual)}`); }
};
const truthy = (name, v) => { if (v) { pass++; console.log(`  ok   ${name}`); } else { fail++; console.log(`  FAIL ${name} (got ${JSON.stringify(v)})`); } };
const falsy = (name, v) => { if (!v) { pass++; console.log(`  ok   ${name}`); } else { fail++; console.log(`  FAIL ${name} (got ${JSON.stringify(v)})`); } };

// The lot under test.
const product = H.extractProduct(
  'Retail $328.00 | Sony WF-1000XM5 The Best Truly...',
  'Retail $328.00 | Sony WF-1000XM5 The Best Truly Wireless Bluetooth Noise Cancelling Earbuds Headphones with Alexa Built in, Black\n\n****\nNotes: Tested Working.'
);

/** Serve a fixture for whichever host the provider asks for. */
function stubHttp(map) {
  return async ({ url }) => {
    for (const [frag, body] of Object.entries(map)) {
      if (url.includes(frag)) return { status: 200, responseText: body, finalUrl: url };
    }
    throw new Error(`unstubbed URL: ${url}`);
  };
}

const amazonHtml = readFileSync(AMAZON_FIXTURE, 'utf8');
const bestbuyJson = readFileSync(BESTBUY_FIXTURE, 'utf8');

// ===========================================================================
console.log('\n1. Amazon.ca parser (real search HTML)');
// ===========================================================================
H.setHttp(stubHttp({ 'amazon.ca': amazonHtml }));
const az = await H.Providers.amazon(product);

truthy('returned a quote', !!az);
check('price is the live $278.00', az.price, 278);
check('condition is new', az.condition, 'new');
check('ASIN captured', az.asin, 'B0C33XXS56');
truthy('full title recovered, not just the brand', /WF-1000XM5/i.test(az.title));
truthy('title is a real title, not "Sony"', az.title.length > 20);
check('product URL', az.url, 'https://www.amazon.ca/dp/B0C33XXS56');
check('CamelCamelCamel history deep-link', az.historyUrl, 'https://ca.camelcamelcamel.com/product/B0C33XXS56');
falsy('title is not a sponsored ad', /^Sponsored/i.test(az.title));
truthy('did not pick up a cheap sponsored earbud ad', az.price > 100);

// ===========================================================================
console.log('\n2. Best Buy Canada parser (real search JSON)');
// ===========================================================================
H.setHttp(stubHttp({ 'bestbuy.ca': bestbuyJson }));
const bb = await H.Providers.bestBuy(product);

truthy('returned a quote', !!bb);
truthy('matched the right product', /WF-1000XM5/i.test(bb.title));
truthy('did not return the Sony camera lens', !/50mm|Lens/i.test(bb.title));
truthy('did not return the older WF-1000XM4', !/XM4/i.test(bb.title));
truthy('condition reported as new', /^new/.test(bb.condition));
falsy('did not pass off an Open Box unit as the retail price', /open box/i.test(bb.title));
truthy('price is plausible retail', bb.price >= 200 && bb.price <= 600);
truthy('links to the product page', bb.url.startsWith('https://www.bestbuy.ca/en-ca/product/'));

// ===========================================================================
console.log('\n3. Cross-provider selection');
// ===========================================================================
H.setHttp(stubHttp({ 'amazon.ca': amazonHtml, 'bestbuy.ca': bestbuyJson }));
H.setConfig({ useAmazon: true, useBestBuy: true, useKeepa: false });
const res = await H.lookupRetail(product);
check('two quotes gathered', res.quotes.length, 2);
check('no provider errors', res.errors, []);

const best = H.pickBest(res.quotes);
check('cheapest NEW quote wins ($278 Amazon)', best.price, 278);
check('and it comes from Amazon.ca', best.provider, 'Amazon.ca');

// A used quote must never beat a new one on price alone.
const mixed = [
  { provider: 'X', price: 150, condition: 'open box / refurb' },
  { provider: 'Y', price: 300, condition: 'new' },
];
check('used $150 does not beat new $300', H.pickBest(mixed).price, 300);
check('used is used when nothing new exists',
  H.pickBest([mixed[0]]).price, 150);

// ===========================================================================
console.log('\n4. Failure handling');
// ===========================================================================
H.setHttp(async () => { throw new Error('boom'); });
const failed = await H.lookupRetail(H.extractProduct('Retail $1 | Nonexistent ZZZ9999 Widget', ''));
check('no quotes on total failure', failed.quotes.length, 0);
truthy('errors are reported, not swallowed', failed.errors.length > 0);

H.setHttp(stubHttp({ 'amazon.ca': '<html><body>no results</body></html>' }));
const empty = await H.Providers.amazon(product);
check('empty search page yields null, not a bogus price', empty, null);

H.setHttp(stubHttp({ 'bestbuy.ca': '{"products":[]}' }));
check('empty Best Buy result yields null', await H.Providers.bestBuy(product), null);

// A page full of accessories must not produce a price for the device.
H.setHttp(stubHttp({
  'amazon.ca': `<html><body>
    <div data-asin="B000000001"><img class="s-image" alt="Silicone Case Cover for Sony WF-1000XM5 Earbuds Protective Skin">
      <span class="a-price"><span class="a-offscreen">$12.99</span></span></div>
    <div data-asin="B000000002"><img class="s-image" alt="Replacement Ear Tips for Sony WF-1000XM5">
      <span class="a-price"><span class="a-offscreen">$8.49</span></span></div>
  </body></html>`,
}));
const accOnly = await H.Providers.amazon(product);
check('accessory-only results yield null', accOnly, null);

// ===========================================================================
console.log(`\n${pass + fail} assertions: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
