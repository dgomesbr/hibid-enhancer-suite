/**
 * Offline benchmark of the catalog pass-1 CPU cost, over 100 real lots.
 *
 *   node tools/bench-catalog.mjs [auctionId]
 *
 * Pass 1 is the part that runs before any retail lookup, so it is the only part
 * of a catalog sweep where CPU rather than the network could be the bottleneck.
 * This exists because that question kept being answered by guessing: the answer
 * is 14.4ms for all 100 lots, and the real cost is elsewhere (see the README).
 *
 * Fetches the lots once into tools/.bench-lots-<id>.json — gitignored — and runs
 * offline from then on, so repeated runs are both fast and gentle on HiBid.
 *
 * Uses the script's own exported internals, so it measures the shipped code.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const auctionId = Number(process.argv[2] || 764522);
const fixture = join(here, `.bench-lots-${auctionId}.json`);

if (!existsSync(fixture)) {
  const query = 'query($id:Int!,$p:Int!,$l:Int!){lotSearch(input:{auctionId:$id,status:ALL},'
    + 'pageNumber:$p,pageLength:$l){pagedResults{results{id lead description estimate lotNumber}}}}';
  const r = await fetch('https://hibid.com/graphql', {
    method: 'POST', headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ query, variables: { id: auctionId, p: 1, l: 100 } }),
  });
  const j = await r.json();
  const rows = j && j.data && j.data.lotSearch && j.data.lotSearch.pagedResults
    && j.data.lotSearch.pagedResults.results;
  if (!rows || !rows.length) {
    console.error(`no lots for auction ${auctionId}: ${JSON.stringify((j || {}).errors || j).slice(0, 300)}`);
    process.exit(1);
  }
  writeFileSync(fixture, JSON.stringify(rows));
  console.log(`fetched ${rows.length} lots into ${fixture}`);
}
const lots = JSON.parse(readFileSync(fixture, 'utf8'));

// --- the same minimal environment the test suites use -----------------------
const store = new Map();
const classList = () => {
  const s = new Set();
  return { add: (...c) => c.forEach((x) => s.add(x)), remove: (...c) => c.forEach((x) => s.delete(x)),
    toggle: (c, on) => (on ? s.add(c) : s.delete(c)), contains: (c) => s.has(c) };
};
Object.assign(globalThis, {
  GM_getValue: (k, d) => (store.has(k) ? store.get(k) : d),
  GM_setValue: (k, v) => store.set(k, v),
  GM_deleteValue: (k) => store.delete(k),
  GM_listValues: () => [...store.keys()],
  GM_addStyle: () => {}, GM_registerMenuCommand: () => {}, GM_openInTab: () => {},
  GM_xmlhttpRequest: () => { throw new Error('network disabled in the benchmark'); },
  location: { pathname: '/', href: 'https://hibid.com/', search: '' },
  MutationObserver: class { observe() {} disconnect() {} },
  DOMParser: class { parseFromString() { return { querySelector: () => null, querySelectorAll: () => [] }; } },
  history: {},
});
globalThis.document = {
  body: { classList: classList(), appendChild() {} },
  documentElement: { classList: classList(), scrollHeight: 0 },
  querySelector: () => null, querySelectorAll: () => [], getElementsByTagName: () => [],
  getElementById: () => null,
  createElement: () => ({ style: {}, className: '', classList: classList(),
    setAttribute() {}, appendChild() {}, addEventListener() {}, textContent: '' }),
};
globalThis.window = globalThis;
// eslint-disable-next-line no-eval
eval(readFileSync(join(root, 'src', 'hibid-enhancer.user.js'), 'utf8'));
const H = globalThis.__hesInternals;

const TERMS = 'All items sold AS-IS. 16% Buyers Premium plus HST. $1.5 Handling Fee per Item. '
  + '$10 Handling Fee per Large Item (Appliances). Pickup in London, Ontario. '
  + 'A 2.4% credit card processing fee applies.';
const fees = H.parseFees([TERMS]);

const bench = (label, fn, iters = 20) => {
  fn();                                   // let the JIT warm up first
  const t = process.hrtime.bigint();
  for (let i = 0; i < iters; i++) fn();
  const ms = Number(process.hrtime.bigint() - t) / 1e6 / iters;
  return { label, total: +ms.toFixed(3), per: +((ms * 1000) / lots.length).toFixed(1) };
};

const rows = [
  bench('parseFees (once per page)', () => H.parseFees([TERMS]), 200),
  bench('assessCondition', () => {
    for (const l of lots) H.assessCondition([l.lead || '', l.description || ''].join('\n'));
  }),
  bench('isLargeItem', () => {
    for (const l of lots) H.isLargeItem(`${l.lead || ''}\n${l.description || ''}`);
  }),
  bench('extractProduct', () => {
    for (const l of lots) H.extractProduct(l.lead || '', l.description || '');
  }),
  bench('extractStatedRetail', () => {
    for (const l of lots) H.extractStatedRetail(l.lead || '', l.description || '', l.estimate || '');
  }),
  bench('allIn', () => {
    for (let i = 0; i < lots.length; i++) H.allIn(1 + (i % 7), fees, { large: false });
  }),
  bench('everything pass 1 does per lot', () => {
    for (const l of lots) {
      const lead = l.lead || '', description = l.description || '';
      H.assessCondition([lead, description].join('\n'));
      H.isLargeItem(`${lead}\n${description}`);
      H.allIn(1, fees, { large: false });
      const p = H.extractProduct(lead, description);
      const s = H.extractStatedRetail(lead, description, l.estimate || '');
      if (s) p.statedRetail = s.value;
    }
  }),
];

console.log(`\nauction ${auctionId}, ${lots.length} real lots\n`);
console.log('span                                ms/all   µs/lot');
for (const r of rows) {
  console.log(r.label.padEnd(34) + String(r.total).padStart(8) + String(r.per).padStart(9));
}

// How much of the sweep is even eligible for a lookup, and how much duplicates.
const keys = new Map();
let partsOnly = 0, noQuery = 0;
for (const l of lots) {
  const lead = l.lead || '', description = l.description || '';
  const cond = H.assessCondition([lead, description].join('\n'));
  const product = H.extractProduct(lead, description);
  const stated = H.extractStatedRetail(lead, description, l.estimate || '');
  if (stated) product.statedRetail = stated.value;
  if (cond.partsOnly) { partsOnly++; continue; }
  if (!product.query) { noQuery++; continue; }
  const k = H.retailCacheKey(product);
  keys.set(k, (keys.get(k) || 0) + 1);
}
const repeated = [...keys.values()].filter((n) => n > 1);
console.log(`\nlookup demand for ${lots.length} lots:`);
console.log(`  parts-only, never looked up : ${partsOnly}`);
console.log(`  no usable query             : ${noQuery}`);
console.log(`  distinct cache keys         : ${keys.size}`);
console.log(`  keys wanted more than once  : ${repeated.length}`);

// The script installs a setInterval, so Node would never exit on its own and the
// buffered output would never flush.
process.exit(0);
