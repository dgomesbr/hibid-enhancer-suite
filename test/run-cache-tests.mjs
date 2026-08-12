/**
 * Cache-epoch tests.
 *
 * Cached quotes survive a script update, so a change to the matching rules
 * reaches nobody until the 12h TTL expires. After the accessory fixes a real lot
 * still showed a $47.84 TPM module chosen under the old rules. The cache key
 * carries an epoch and old epochs are swept at startup; this proves both, and
 * proves settings are not collateral damage.
 *
 *   node test/run-cache-tests.mjs
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const store = new Map();
// A quote cached by an older version, under the old un-epoched key shape.
store.set('hes:cache:retail:msi b550m pro-vdh|f37', JSON.stringify({
  at: Date.now(), val: { quotes: [{ provider: 'Amazon.ca', price: 47.84, condition: 'new' }], errors: [] },
}));
store.set('hes:cache:1:retail:something-older', JSON.stringify({ at: Date.now(), val: { quotes: [] } }));
store.set('hes:cfg', JSON.stringify({}));

const classListStub = () => { const s = new Set(); return {
  add: (...c) => c.forEach((x) => s.add(x)), remove: (...c) => c.forEach((x) => s.delete(x)),
  toggle: (c, on) => (on ? s.add(c) : s.delete(c)), contains: (c) => s.has(c) }; };
Object.assign(globalThis, {
  GM_getValue: (k, d) => (store.has(k) ? store.get(k) : d),
  GM_setValue: (k, v) => store.set(k, v),
  GM_deleteValue: (k) => store.delete(k),
  GM_listValues: () => [...store.keys()],
  GM_addStyle: () => {}, GM_registerMenuCommand: () => {}, GM_openInTab: () => {},
  GM_xmlhttpRequest: () => {},
  location: { pathname: '/', href: 'https://hibid.com/', search: '' },
  MutationObserver: class { observe() {} disconnect() {} },
  DOMParser: class { parseFromString() { return { querySelector: () => null, querySelectorAll: () => [] }; } },
  history: { pushState() {}, replaceState() {} },
});
globalThis.document = { body: { classList: classListStub(), appendChild() {} },
  documentElement: { classList: classListStub() },
  querySelector: () => null, querySelectorAll: () => [], getElementById: () => null,
  getElementsByTagName: () => [],
  createElement: () => ({ style: {}, className: '', classList: classListStub(),
    setAttribute() {}, appendChild() {}, addEventListener() {}, textContent: '' }) };
globalThis.window = globalThis;
globalThis.addEventListener = () => {};

eval(readFileSync(join(here, '..', 'src', 'hibid-enhancer.user.js'), 'utf8'));

const keys = [...store.keys()];
const staleGone = !keys.includes('hes:cache:retail:msi b550m pro-vdh|f37');
const oldEpochGone = !keys.includes('hes:cache:1:retail:something-older');
const cfgKept = keys.includes('hes:cfg');
console.log('stale un-epoched quote retired :', staleGone);
console.log('old epoch-1 quote retired      :', oldEpochGone);
console.log('settings preserved             :', cfgKept);
console.log('remaining keys                 :', keys);
process.exit(staleGone && oldEpochGone && cfgKept ? 0 : 1);
