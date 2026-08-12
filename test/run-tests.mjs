/**
 * Logic tests for the HiBid Enhancer Suite.
 *
 * The userscript is loaded into a minimal fake DOM/GM environment so the pure
 * functions it exposes on `window.__hesInternals` can be exercised in Node.
 *
 *   node test/run-tests.mjs
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(join(here, '..', 'src', 'hibid-enhancer.user.js'), 'utf8');

// ---------------------------------------------------------------------------
// Minimal environment: enough for the script to initialise without a browser.
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
  GM_xmlhttpRequest: () => { throw new Error('network disabled in tests'); },
  location: { pathname: '/', href: 'https://hibid.com/' },
  MutationObserver: class { observe() {} disconnect() {} },
  DOMParser: class { parseFromString() { return { querySelector: () => null, querySelectorAll: () => [] }; } },
});
globalThis.document = {
  body: {},
  querySelector: () => null,
  querySelectorAll: () => [],
  getElementById: () => null,
  createElement: () => ({
    style: {}, className: '', setAttribute() {}, appendChild() {},
    addEventListener() {}, textContent: '',
  }),
};
globalThis.window = globalThis;

// eslint-disable-next-line no-eval
eval(src);

const H = globalThis.__hesInternals;
if (!H) { console.error('FATAL: script did not expose __hesInternals'); process.exit(1); }

// ---------------------------------------------------------------------------
// Test harness
// ---------------------------------------------------------------------------
let pass = 0, fail = 0;
const near = (a, b, tol = 0.01) => Math.abs(a - b) <= tol;

function check(name, actual, expected, tol) {
  const ok = (typeof expected === 'number' && typeof actual === 'number')
    ? near(actual, expected, tol ?? 0.01)
    : JSON.stringify(actual) === JSON.stringify(expected);
  if (ok) { pass++; console.log(`  ok   ${name}`); }
  else { fail++; console.log(`  FAIL ${name}\n         expected: ${JSON.stringify(expected)}\n         actual:   ${JSON.stringify(actual)}`); }
}

function truthy(name, v) {
  if (v) { pass++; console.log(`  ok   ${name}`); }
  else { fail++; console.log(`  FAIL ${name} (expected truthy, got ${JSON.stringify(v)})`); }
}

function falsy(name, v) {
  if (!v) { pass++; console.log(`  ok   ${name}`); }
  else { fail++; console.log(`  FAIL ${name} (expected falsy, got ${JSON.stringify(v)})`); }
}

// ---------------------------------------------------------------------------
// Real page text captured from lot 316725406 (OnDeals, Stoney Creek ON)
// ---------------------------------------------------------------------------
const TERMS = `Terms and Conditions

All items sold are FINAL SALE and are sold AS-IS (PARTS NOT VERIFIED). Unless otherwise specified items are not tested and not inspected.

FEES
16% Buyers Premium plus HST.
$1.5 Handling Fee per Item.
$10 Handling Fee per Large Item (Appliances).

PAYMENT
If you are the successful bidder we will assume you are paying by credit card and we reserve the right to charge your credit card for the total invoice.

PICK UP
All auction locations for pickup are announced in the online auction notes.`;

const PAYMENT = `Payment Information
Currency
CAD
Buyer Premium
16% Buyers Premium
Payment Terms
If you are the successful bidder we will assume you are paying by credit card.`;

const NOTICE = `Bidding Notice:

ALL ITEMS ARE SOLD AS-IS. **ITEMS HAVE NOT BEEN TESTED & ITEM PARTS HAVE NOT BEEN VERIFIED**, and there will not be any returns or refunds unless "NEW" is stated in the lot description.`;

const LOCATION = 'Stoney Creek, ON L8E 5P4';

const LEAD = 'Retail $328.00 | Sony WF-1000XM5 The Best Truly...';
const DESCRIPTION = `Retail $328.00 | Sony WF-1000XM5 The Best Truly Wireless Bluetooth Noise Cancelling Earbuds Headphones with Alexa Built in, Black

****
Notes: Tested Working.`;
const ESTIMATE = '278.00 - 328.00 CAD';

const INCREMENT_TABLE = `Bid Increments
Your bid must adhere to the bid increment schedule.
Bid Amount\tBid Increment
0.00 - 99.00\t1.00 CAD
99.01 - 198.00\t2.00 CAD
198.01 - 999,999.00\t5.00 CAD`;

// ===========================================================================
console.log('\n1. Fee parsing from the real terms text');
// ===========================================================================
const fees = H.parseFees([TERMS, PAYMENT, NOTICE, LOCATION]);
check('buyer premium = 16%', fees.premiumPct, 16);
check('per-item handling = $1.50', fees.perItemFee, 1.5);
check('large-item handling = $10', fees.largeItemFee, 10);
check('no card surcharge', fees.cardPct, 0);
check('tax = 13% (ON)', fees.taxPct, 13);
check('province detected', fees.province, 'ON');
truthy('premium was parsed, not defaulted', /parsed/.test(fees.premiumSource));

console.log('\n1b. Fee parsing variants seen on other auctions');
const v1 = H.parseFees(['15% BP + for Handling Fee /Lot', 'Toronto, ON']);
check('"15% BP" parsed', v1.premiumPct, 15);
const v2 = H.parseFees(['10% BP + 1% card + HST ?', 'Calgary, AB']);
check('"10% BP" parsed', v2.premiumPct, 10);
check('1% card surcharge parsed', v2.cardPct, 1);
check('Alberta GST = 5%', v2.taxPct, 5);
const v3 = H.parseFees(['Buyer Premium: 18%', 'Vancouver, BC']);
check('"Buyer Premium: 18%" parsed', v3.premiumPct, 18);
check('BC = 12%', v3.taxPct, 12);
const v4 = H.parseFees(['No fee information whatsoever.', 'Montreal, QC']);
check('falls back to 18% premium', v4.premiumPct, 18);
check('QC = 14.975%', v4.taxPct, 14.975);
truthy('fallback is flagged in notes', v4.notes.length > 0);

// ===========================================================================
console.log('\n2. Bid increments');
// ===========================================================================
const incs = H.parseIncrements(INCREMENT_TABLE);
check('three increment tiers', incs.length, 3);
check('increment at $50 is $1', H.incrementAt(50, incs), 1);
check('increment at $150 is $2', H.incrementAt(150, incs), 2);
check('increment at $500 is $5', H.incrementAt(500, incs), 5);
check('104.75 floors to 104 (tier $2)', H.floorToIncrement(104.749, incs), 104);
check('98.9 floors to 98 (tier $1)', H.floorToIncrement(98.9, incs), 98);

// ===========================================================================
console.log('\n3. Money engine — the worked example (retail C$278)');
// ===========================================================================
// all-in = (hammer + 16% BP + $1.50 handling) x 1.13
const at31 = H.allIn(31, fees, { large: false });
check('hammer 31 -> premium 4.96', at31.premium, 4.96);
check('hammer 31 -> pre-tax 37.46', at31.preTax, 37.46);
check('hammer 31 -> all-in 42.33', at31.total, 42.33);
check('hammer 31 -> 84.8% under retail', H.discountPct(at31.total, 278), 84.77, 0.05);

const at60 = H.allIn(60, fees, { large: false });
check('hammer 60 -> all-in 80.34', at60.total, 80.34);

// Ceiling for a 50%-off deal.
const max50 = H.maxHammerFor(278, 50, fees, { large: false });
check('max hammer for 50% off = 104.75', max50, 104.749, 0.01);
check('rounded to a valid bid = 104', H.floorToIncrement(max50, incs), 104);
check('bidding exactly the ceiling lands at 50% off',
  H.discountPct(H.allIn(max50, fees, { large: false }).total, 278), 50, 0.001);

// Ceiling for the 25% warning floor.
const max25 = H.maxHammerFor(278, 25, fees, { large: false });
check('max hammer for 25% off = 157.77', max25, 157.77, 0.01);
check('bidding above it drops under 25% off',
  H.discountPct(H.allIn(max25 + 5, fees, { large: false }).total, 278) < 25, true);

// Large-item surcharge must change the answer.
const maxLarge = H.maxHammerFor(278, 50, fees, { large: true });
truthy('large-item fee lowers the ceiling', maxLarge < max50 - 8);
check('large-item ceiling = 96.13', maxLarge, 96.13, 0.01);

// Round-trip property: allIn(maxHammerFor(r, d)) is always d% under r.
let roundTripOk = true;
for (const r of [50, 278, 1299.99]) {
  for (const d of [10, 25, 40, 50, 70]) {
    const h = H.maxHammerFor(r, d, fees, { large: false });
    if (h > 0 && !near(H.discountPct(H.allIn(h, fees).total, r), d, 0.0001)) roundTripOk = false;
  }
}
truthy('round-trip holds across prices and targets', roundTripOk);

// ===========================================================================
console.log('\n4. Product name extraction');
// ===========================================================================
const p = H.extractProduct(LEAD, DESCRIPTION);
check('search query', p.query, 'Sony WF-1000XM5');
check('model token', p.model, 'WF-1000XM5');
check('brand', p.brand, 'Sony');
truthy('name drops the "Retail $328.00 |" prefix', !/Retail/i.test(p.name));
truthy('name drops the Notes block', !/Tested Working/i.test(p.name));
truthy('name keeps the product', /Sony WF-1000XM5/.test(p.name));

const p2 = H.extractProduct('$650 CORSAIR Vengeance DDR5 32GB (2x16GB) 6000MHz', '');
check('Corsair query keeps line + capacity', p2.query, 'CORSAIR Vengeance DDR5 32GB');
truthy('Corsair name has no leading price', !/^\$/.test(p2.name));

const p5 = H.extractProduct('Retail $189.99 | Samsung 980 PRO 2TB NVMe SSD', '');
truthy('SSD query keeps the 2TB capacity', /2TB/i.test(p5.query));

const p3 = H.extractProduct('MSI B650 GAMING PLUS WIFI MOTHERBOARD', '');
check('MSI query', p3.query, 'MSI B650');

const p4 = H.extractProduct('Retail $89.99 | Assorted Kitchen Utensils Set', '');
truthy('no model token for a generic lot', p4.model === null);
truthy('generic query is still usable', p4.query.length > 3);

// ===========================================================================
console.log('\n5. Stated retail extraction');
// ===========================================================================
const stated = H.extractStatedRetail(LEAD, DESCRIPTION, ESTIMATE);
check('reads $328.00 from the lead', stated.value, 328);
const statedEst = H.extractStatedRetail('Sony Earbuds', 'No price here', ESTIMATE);
check('falls back to estimate high 328', statedEst.value, 328);
check('no price anywhere -> null', H.extractStatedRetail('Widget', 'Nothing', ''), null);
const statedField = H.extractStatedRetail('Item', 'Est. Retail Price: $1,299.99', '');
check('reads "Est. Retail Price:" with a comma', statedField.value, 1299.99);

// ===========================================================================
console.log('\n6. Condition detection');
// ===========================================================================
const lotText = [LEAD, DESCRIPTION].join('\n');
const c1 = H.assessCondition(lotText);
falsy('this lot is NOT parts-only', c1.partsOnly);
truthy('"Tested Working" registers as positive', c1.positive);
check('soft cautions suppressed by the positive claim', c1.cautions, []);

// The critical regression: auction-wide boilerplate must never trigger the
// parts-only banner, or every lot in the sale gets one.
const cNotice = H.assessCondition(NOTICE);
truthy('auction notice alone contains no parts-only trigger', !cNotice.partsOnly);

const c2 = H.assessCondition('MSI B650 MOTHERBOARD\nCondition: FOR PARTS ONLY\nIs Item Damaged? Yes');
truthy('"FOR PARTS ONLY" detected', c2.partsOnly);
truthy('reasons are reported', c2.partsReasons.length >= 2);

for (const [t, label] of [
  ['Screen is cracked', 'cracked'],
  ['Unit does not power on', 'does not power on'],
  ['Sold as salvage', 'salvage'],
  ['Item is broken', 'broken'],
  ['Non-functional display', 'non-functional'],
  ['Missing parts, incomplete set', 'missing parts'],
]) {
  truthy(`parts-only: ${label}`, H.assessCondition(t).partsOnly);
}

const c3 = H.assessCondition('Sony Camera - open box, untested');
falsy('open box + untested is not parts-only', c3.partsOnly);
truthy('open box + untested raises cautions', c3.cautions.length >= 2);

// ===========================================================================
console.log('\n7. Large-item detection');
// ===========================================================================
truthy('fridge is a large item', H.isLargeItem('Samsung French Door Refrigerator'));
truthy('washer is a large item', H.isLargeItem('LG Front Load Washer'));
falsy('earbuds are not a large item', H.isLargeItem('Sony WF-1000XM5 Earbuds'));

// ===========================================================================
console.log('\n8. Relevance scoring (accessory + homonym traps)');
// ===========================================================================
const prod = H.extractProduct(LEAD, DESCRIPTION);
const scoreReal = H.relevance('Sony WF-1000XM5 Truly Wireless Noise Cancelling Earbuds, Black', prod);
const scoreCase = H.relevance('Silicone Case Cover for Sony WF-1000XM5 Earbuds', prod);
const scoreOther = H.relevance('JBL Tune 520BT Wireless On-Ear Headphones', prod);
truthy('real product scores positive', scoreReal > 0);
truthy('accessory scores below the real product', scoreCase < scoreReal);
check('unrelated product is rejected outright', scoreOther, 0);

const ramProd = H.extractProduct('CORSAIR Vengeance DDR5 32GB', '');
check('Dodge Ram truck part rejected for a DDR5 lot',
  H.relevance('Dodge Ram 1500 Oxygen Sensor', ramProd), 0);

// Accessory traps observed on real Amazon.ca / Best Buy results. Each of these
// matches the brand AND model perfectly, so only the accessory rules stop them.
for (const bad of [
  'Spigen Rugged Armor Designed for Sony WF-1000XM5 Case (2023) | TPU & PC Dual Layer',
  'SAHARA - Venture Series Silicone Case for Sony WF-1000XM5 True Wireless Earbuds',
  'Silicone Case Cover for Sony WF-1000XM5 Earbuds Protective Skin',
  'Replacement Ear Tips for Sony WF-1000XM5',
  'Charging Cable Compatible with Sony WF-1000XM5',
]) {
  check(`accessory rejected: ${bad.slice(0, 42)}…`, H.relevance(bad, prod), 0);
}

// ...while the genuine product and its retailer-prefixed variants survive.
for (const good of [
  'Sony WF-1000XM5 The Best Truly Wireless Bluetooth Noise Cancelling Earbuds Headphones with Alexa Built in, Black',
  'Sony WF-1000XM5 Wireless Earbuds with Charging Case, Black',
  'Open Box - Sony WF-1000XM5 In-Ear Noise Cancelling True Wireless Earbuds',
]) {
  truthy(`genuine listing kept: ${good.slice(0, 42)}…`, H.relevance(good, prod) > 0);
}

// A lot that IS an accessory must still be priceable.
const caseLot = H.extractProduct('Retail $29.99 | Spigen Rugged Armor Case for Sony WF-1000XM5', '');
truthy('an accessory lot can still match accessory listings',
  H.relevance('Spigen Rugged Armor Designed for Sony WF-1000XM5 Case', caseLot) > 0);

// ===========================================================================
console.log('\n9. Province / tax detection');
// ===========================================================================
check('ON from "Stoney Creek, ON L8E 5P4"', H.detectTax('Stoney Creek, ON L8E 5P4').pct, 13);
check('NS from ", NS "', H.detectTax('Halifax, NS B3H 1A1').pct, 15);
check('SK from ", SK "', H.detectTax('Regina, SK S4P 3Y2').pct, 11);
check('named province fallback', H.detectTax('Located in British Columbia').pct, 12);
check('unknown location defaults to 13', H.detectTax('somewhere').pct, 13);

// ===========================================================================
console.log('\n9b. Regression: lot 317094078 (Encore Auctions, RODE NT-USB+)');
// ===========================================================================
/*
 * A brand-new microphone was flagged PARTS-ONLY, priced with an 18% premium the
 * terms never mentioned, and produced empty retail search links. Real page text
 * below; four separate bugs.
 */
const RODE_LEAD = 'RODE NT-USB+ USB CONDENSER MICROPHONE';
const RODE_DESC = `Est. Retail Price: 251.00
Condition: BRAND NEW - OPEN BOX
Model: NT-USB+
In packaging? Yes
Requires Assembly? No
Is Item Functional? Yes
Is Item Damaged? No
Missing Major Parts? No`;

// Bug 1 — "Is Item Damaged? No" matched a bare /damaged/ pattern, and
// "Missing Major Parts?" contains the word "parts".
const rodeCond = H.assessCondition([RODE_LEAD, RODE_DESC].join('\n'));
falsy('brand-new lot is NOT parts-only', rodeCond.partsOnly);
check('no parts-only reasons at all', rodeCond.partsReasons, []);
truthy('reads as positive (functional = Yes / brand new)', rodeCond.positive);
check('Condition field captured', rodeCond.condition, 'BRAND NEW - OPEN BOX');
truthy('open box still raises a caution', rodeCond.cautions.includes('open box'));

// The negated fields must not be readable as damage in isolation either.
falsy('"Is Item Damaged? No" alone is not damage', H.assessCondition('Is Item Damaged? No').partsOnly);
falsy('"Missing Major Parts? No" alone is not damage', H.assessCondition('Missing Major Parts? No').partsOnly);
falsy('"Is Item Functional? Yes" alone is not damage', H.assessCondition('Is Item Functional? Yes').partsOnly);
// ...but the affirmative answers still must fire.
truthy('"Is Item Damaged? Yes" IS damage', H.assessCondition('Is Item Damaged? Yes').partsOnly);
truthy('"Missing Major Parts? Yes" IS damage', H.assessCondition('Missing Major Parts? Yes').partsOnly);
truthy('"Is Item Functional? No" IS damage', H.assessCondition('Is Item Functional? No').partsOnly);
truthy('"Condition: FOR PARTS ONLY" IS damage',
  H.assessCondition('Condition: FOR PARTS ONLY\nIs Item Damaged? No').partsOnly);

// Bug 2 — the description is structured-only, so the product name and search
// query came out empty and every retail link was unpopulated.
const rode = H.extractProduct(RODE_LEAD, RODE_DESC);
truthy('query is not empty', rode.query.length > 0);
check('query uses brand + model', rode.query, 'RODE NT-USB+');
check('model comes from the Model: field', rode.model, 'NT-USB+');
check('brand', rode.brand, 'RODE');
truthy('name falls back to the Lead', /RODE NT-USB\+/.test(rode.name));
truthy('name is not the structured block', !/Est\. Retail Price/i.test(rode.name));

// Bug 3 — the trailing "+" of NT-USB+ was stripped by token cleaning.
truthy('trailing + survives in the query', rode.query.includes('+'));
const plusLot = H.extractProduct('Google Pixel 9 Pro+ 256GB', '');
truthy('another "+" model keeps its plus', plusLot.query.includes('+') || plusLot.model === null);

// Bug 4 — "A 16% Buyer's Premium" with a curly apostrophe (U+2019) failed every
// premium pattern and silently fell back to the 18% default, which moved every
// ceiling on the page.
const RODE_TERMS = `1. Fees & Charges
All successful bids are subject to the following fees:
A 16% Buyer’s Premium
Harmonized Sales Tax (HST)
A $1.50 handling fee per item
A 2.4% credit card processing fee (only applicable when paying by credit card)
Toronto, ON M5V 4A6`;
const rodeFees = H.parseFees([RODE_TERMS]);
check('curly-apostrophe premium parses as 16%', rodeFees.premiumPct, 16);
truthy('premium was parsed, not defaulted', /parsed/.test(rodeFees.premiumSource));
check('handling fee', rodeFees.perItemFee, 1.5);
check('2.4% card fee', rodeFees.cardPct, 2.4);
check('ON tax', rodeFees.taxPct, 13);

// And the resulting bid maths, which is what the user actually sees.
const rodeInc = H.parseIncrements(`Bid Amount\tBid Increment
0.00 - 29.00\t1.00 CAD
29.01 - 97.50\t2.50 CAD
97.51 - 990.00\t10.00 CAD`);
const rodeStated = H.extractStatedRetail(RODE_LEAD, RODE_DESC, '');
check('stated retail 251.00', rodeStated.value, 251);
// (251 x 0.5 / 1.13 - 1.50) / (1.16 x 1.024) = 92.24 — the 2.4% card fee counts.
const rodeMax = H.maxHammerFor(251, 50, rodeFees, { large: false });
check('50%-off ceiling on the corrected 16% premium', rodeMax, 92.24, 0.02);
check('rounded down to the $2.50 increment tier', H.floorToIncrement(rodeMax, rodeInc), 90);
check('bidding the ceiling lands exactly 50% under retail',
  H.discountPct(H.allIn(rodeMax, rodeFees, { large: false }).total, 251), 50, 0.001);
// The old 18% fallback would have produced a materially different ceiling.
const wrongFees = Object.assign({}, rodeFees, { premiumPct: 18 });
truthy('the 18% fallback really did change the answer',
  Math.abs(H.maxHammerFor(251, 50, wrongFees, { large: false }) - rodeMax) > 1);

// ===========================================================================
console.log('\n10. Packaging / release metadata');
// ===========================================================================
/*
 * Tampermonkey only offers an update when @version INCREASES, so a release
 * whose @version was not bumped silently never reaches anyone. These guards
 * make that a test failure instead of a mystery.
 */
const meta = src.slice(0, src.indexOf('// ==/UserScript=='));
const pkg = JSON.parse(readFileSync(join(here, '..', 'package.json'), 'utf8'));

const scriptVersion = (meta.match(/^\/\/ @version\s+(\S+)/m) || [])[1];
truthy('@version is present', !!scriptVersion);
check('@version matches package.json', scriptVersion, pkg.version);
truthy('@version is semver-ish', /^\d+\.\d+\.\d+$/.test(scriptVersion || ''));

truthy('@icon is inside the metadata block', /^\/\/ @icon\s+\S+/m.test(meta));
truthy('@icon is a self-contained PNG data URI',
  /^\/\/ @icon\s+data:image\/png;base64,[A-Za-z0-9+/=]{500,}$/m.test(meta));
truthy('@updateURL is set so installs auto-update', /^\/\/ @updateURL\s+https:\/\//m.test(meta));
truthy('@downloadURL is set', /^\/\/ @downloadURL\s+https:\/\//m.test(meta));

// Every cross-origin host the providers touch needs a matching @connect, or
// Tampermonkey blocks the request at runtime.
for (const host of ['amazon.ca', 'bestbuy.ca', 'api.keepa.com']) {
  truthy(`@connect ${host}`, meta.includes(`@connect      ${host}`) || meta.includes(`@connect ${host}`));
}

// ===========================================================================
console.log(`\n${pass + fail} assertions: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
