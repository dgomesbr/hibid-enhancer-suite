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

console.log('\n1c. Fee text pulled from every GraphQL field, not just the terms');
/*
 * A catalog page renders no fee text at all, so it comes from GraphQL. The
 * structured fields are not trustworthy — on auction 764522 `buyerPremium` reads
 * "Please see Terms and Conditions" and `buyerPremiumRate` reads 1.0 (0%) while
 * the terms say 16% — so several free-text fields are parsed together.
 */
const GQL_TERMS = 'A 16% Buyer’s Premium\nHarmonized Sales Tax (HST)\nA $1.50 handling fee per item';
const GQL_PAYMENT = 'Credit card (2.4% processing fee applies)';
const GQL_PICKUP = 'Pickup is available only at: 23 Buchanan Court, London, Ontario';
const gqlFees = H.parseFees([GQL_TERMS, 'Please see Terms and Conditions', GQL_PAYMENT, GQL_PICKUP]);
check('premium from termsAndConditions', gqlFees.premiumPct, 16);
check('handling from termsAndConditions', gqlFees.perItemFee, 1.5);
check('card fee from paymentInfo', gqlFees.cardPct, 2.4);
check('province from the pickup address', gqlFees.taxPct, 13);
truthy('nothing was defaulted', !/fallback/.test(gqlFees.premiumSource));

// The pickup address is the only province signal a catalog page has — without
// shippingAndPickupInfo this auction would fall back to the default rate.
check('"London, Ontario" resolves to ON', H.detectTax(GQL_PICKUP).province, 'ON');

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
truthy('the Condition value is given as the reason',
  c2.partsReasons.some((r) => /FOR PARTS ONLY/i.test(r)));

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

/*
 * Component-part accessories. These match brand and model perfectly and are an
 * order of magnitude cheaper than the thing they bolt onto, so text scoring
 * alone cannot separate them. Reported from the wild: a rear baffle matched
 * instead of an MSI B550M PRO-VDH motherboard.
 */
const mbLot = H.extractProduct('MSI B550M PRO-VDH WIFI MOTHERBOARD (AM4)', '');
for (const bad of [
  'Rear Baffle for MSI B550M PRO-VDH Motherboard',
  'I/O Shield for MSI B550M PRO-VDH WIFI',
  'Backplate Bracket for MSI B550M PRO-VDH',
  'Motherboard Standoffs and Screws Kit for MSI B550M PRO-VDH',
]) {
  check(`component accessory rejected: ${bad.slice(0, 40)}…`, H.relevance(bad, mbLot), 0);
}
truthy('the real motherboard still scores',
  H.relevance('MSI B550M PRO-VDH WIFI Micro-ATX LGA AM4 DDR4 Motherboard for AMD Ryzen', mbLot) > 0);

/*
 * "…for <this product>" must disqualify a listing on its own, with no accessory
 * noun required. Reported from the wild: a $47.84 TPM module matched an MSI
 * B550M PRO-VDH because the rule demanded a noun first and "Module" was not on
 * the noun list — a list that will never be complete.
 */
for (const bad of [
  'IFIXAI TPM 2.0 Module SPI 12PIN Module SLB9670 Replacement for MSI B550M PRO-VDH WiFi',
  'Upgrade for MSI B550M PRO-VDH WiFi Wireless Card',
  'Suitable for MSI B550M PRO-VDH SATA Ribbon',
  'Compatible with MSI B550M PRO-VDH Rear Panel',
]) {
  check(`"for <product>" rejected without a noun: ${bad.slice(0, 34)}…`, H.relevance(bad, mbLot), 0);
}

// ...but the verbs alone must not disqualify a genuine listing. "Designed for
// gaming" and "for AMD Ryzen" are features of the board, not signs of a part.
for (const good of [
  'MSI B550M PRO-VDH WiFi Motherboard Designed for Gaming and Content Creation',
  'MSI B550M PRO-VDH WIFI Micro-ATX Motherboard for AMD Ryzen 5000 Series',
  'MSI B550M PRO-VDH WiFi AM4 Motherboard, suitable for first-time builders',
]) {
  truthy(`genuine listing kept: ${good.slice(0, 34)}…`, H.relevance(good, mbLot) > 0);
}

// The price floor: a second, category-agnostic defence. Accessories are always
// dramatically cheaper than the item, so anything under 30% of the auctioneer's
// own stated retail is refused outright rather than reported as a bargain.
check('no floor without a stated retail', H.priceFloor(mbLot), 0);
mbLot.statedRetail = 124;
check('floor is 30% of the stated retail', H.priceFloor(mbLot), 37.2, 0.01);
truthy('a $15 baffle is below the floor', 15 < H.priceFloor(mbLot));
truthy('the real $119.99 board is above it', 119.99 > H.priceFloor(mbLot));

const earbudLot = H.extractProduct('Retail $328.00 | Sony WF-1000XM5 Earbuds', '');
earbudLot.statedRetail = 328;
truthy('the $26.99 Spigen case is below the floor too', 26.99 < H.priceFloor(earbudLot));
truthy('but a genuine $278 unit clears it', 278 > H.priceFloor(earbudLot));

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
/*
 * Affirmative answers raise the DAMAGED severity — deliberately weaker than
 * parts-only, because damaged goods still have value while scrap does not.
 */
truthy('"Is Item Damaged? Yes" is flagged damaged', H.assessCondition('Is Item Damaged? Yes').damaged);
truthy('"Missing Major Parts? Yes" is flagged damaged', H.assessCondition('Missing Major Parts? Yes').damaged);
truthy('"Is Item Functional? No" with corroboration is damaged',
  H.assessCondition('Condition: HEAVILY USED\nIs Item Damaged? Yes\nIs Item Functional? No').damaged);
truthy('"Condition: FOR PARTS ONLY" is parts-only',
  H.assessCondition('Condition: FOR PARTS ONLY\nIs Item Damaged? No').partsOnly);

/*
 * The N/A bug. "Is Item Functional? N/A" is the normal answer for anything that
 * isn't a powered device. A `/^(no|n|false|none)\b/` test matched the "n" of
 * "n/a" — the \b sits before the slash — so shampoo, toothpaste and drinking
 * glasses marked "Condition: EXCELLENT" were reported non-functional and flagged
 * parts-only. Measured on one catalog page: 54 of 100 lots were false positives.
 */
const NA_BLOCK = 'Condition: EXCELLENT\nIs Item Functional? N/A\nIs Item Damaged? No\nMissing Major Parts? No';
falsy('"Is Item Functional? N/A" is not parts-only', H.assessCondition(NA_BLOCK).partsOnly);
falsy('...nor damaged', H.assessCondition(NA_BLOCK).damaged);
check('...and raises no cautions at all', H.assessCondition(NA_BLOCK).cautions, []);
falsy('"Unable to Test" is not a fault either',
  H.assessCondition('Condition: GOOD\nIs Item Functional? Unable to Test').partsOnly);
falsy('"N/A" answers never imply damage',
  H.assessCondition('Condition: GOOD\nIs Item Damaged? N/A\nMissing Major Parts? N/A').damaged);

// A positive Condition downgrades a boolean flag to a caution: a short-count NEW
// item is not scrap, and a skull banner there teaches the user to ignore skulls.
const shortCount = H.assessCondition(
  'Condition: NEW (ADJUSTED QUANTITY)\nMissing Major Parts? Yes\nMissing Parts Desc: One piece missing');
falsy('short-count NEW item is not parts-only', shortCount.partsOnly);
falsy('...and not damaged', shortCount.damaged);
truthy('...but the missing piece is quoted as a caution',
  shortCount.cautions.some((c) => /One piece missing/i.test(c)));

// The auctioneer's own wording is surfaced verbatim — it is the most useful text
// on the page when something is wrong. Note their field name is misspelled.
const stained = H.assessCondition('Condition: FAIR\nIs Item Damaged? Yes\nDamage Desct: Fully stained');
truthy('damaged severity set', stained.damaged);
truthy('damage description quoted verbatim',
  stained.damageReasons.some((r) => /Fully stained/.test(r)));

/*
 * CR-separated field blocks. This auctioneer joins description fields with a
 * bare \r. parseFields split on /\r?\n/, so the whole block stayed one line, no
 * fields parsed, and the keyword scan saw the raw labels — "Is Item Damaged?"
 * contains "damaged" — flagging all 100 lots on the page as parts-only.
 */
const CR_BLOCK = 'Est. Retail Price: 67.00\rCondition: BRAND NEW - OPEN BOX\rModel: PH7G720000\r' +
  'In packaging? Yes\rIs Item Functional? Yes\rIs Item Damaged? No\rMissing Major Parts? No';
const crCond = H.assessCondition(CR_BLOCK);
falsy('CR-separated block is not parts-only', crCond.partsOnly);
check('CR-separated Condition parses', crCond.condition, 'BRAND NEW - OPEN BOX');
const crProd = H.extractProduct('ESTEE LAUDER DOUBLE WEAR FOUNDATION', CR_BLOCK);
falsy('CR-separated block does not leak field labels into the query',
  /condition|packaging|functional|damaged|retail/i.test(crProd.query));
check('CR-separated retail price parses',
  H.extractStatedRetail('ESTEE LAUDER DOUBLE WEAR FOUNDATION', CR_BLOCK, '').value, 67);

// Regression: lot 317094503. "Model: A-Series" is junk, and trusting it turned
// the query into "MSI A-Series", which then matched an Intel LGA1851 board
// because "aseries" is a substring of "Core Ultra Series 2".
const msi = H.extractProduct('MSI B550M PRO-VDH WIFI MOTHERBOARD (AM4)',
  'Est. Retail Price: 124.00\rCondition: EXCELLENT\rModel: A-Series\rIs Item Damaged? No');
check('junk "Model:" value is rejected in favour of the title', msi.model, 'B550M');
truthy('query is built from the real model', /B550M/.test(msi.query));
falsy('query does not contain the junk model', /A-Series/i.test(msi.query));
falsy('"A-Series" is not accepted as a model at all', H.looksLikeModel('A-Series'));
truthy('a real model code is accepted', H.looksLikeModel('B550M'));

// Boundary-aware model matching — the actual mis-match that was reported.
falsy('"aseries" does not match inside "Core Ultra Series 2"',
  H.modelMatches('MSI PRO Z890-S WiFi White ProSeries Motherboard (Core Ultra Series 2)', 'A-Series'));
falsy('the wrong board scores zero for this lot',
  H.relevance('MSI PRO Z890-S WiFi White ProSeries Motherboard (Support Core Ultra Series 2)', msi) > 0);
truthy('the right board still scores',
  H.relevance('MSI B550M PRO-VDH WiFi AM4 Micro-ATX Motherboard', msi) > 0);
// Hyphen-insensitive matching must survive: retailers write it both ways.
truthy('WF-1000XM5 matches a hyphenated title', H.modelMatches('Sony WF-1000XM5 Earbuds', 'WF-1000XM5'));
truthy('WF-1000XM5 matches an unhyphenated title', H.modelMatches('Sony WF1000XM5 Earbuds', 'WF-1000XM5'));
falsy('but not mid-token', H.modelMatches('Sony XWF1000XM5Z', 'WF-1000XM5'));

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
console.log('\n11. Lot detail page: URLs, notices, chips and dates');
// ===========================================================================

// -- ids out of URLs --------------------------------------------------------
check('lot id from a lot path', H.parseLotId('/lot/317094503/msi-b550m-pro-vdh-wifi'), 317094503);
check('lot id survives a query string', H.parseLotId('/lot/316725406/sony?ref=lot-list'), 316725406);
check('a catalog path has no lot id', H.parseLotId('/catalog/764522/some-sale'), null);
check('no path, no id', H.parseLotId(null), null);

check('auction id from a catalog href', H.parseAuctionId('/catalog/764522/canadas-largest-auction'), 764522);
check('auction id from an auction href', H.parseAuctionId('https://x.hibid.com/auction/766625/sale'), 766625);
check('a lot href has no auction id', H.parseAuctionId('/lot/317094503/thing'), null);
check('no href, no auction id', H.parseAuctionId(undefined), null);

// -- notices ---------------------------------------------------------------
/*
 * The heading and the body have to come apart cleanly, because the heading
 * becomes the link at the bottom of the page and the body becomes what the link
 * opens. HiBid emits the heading with a trailing colon inside an <h2>, so the
 * concatenated textContent always starts "Bidding Notice: ...".
 */
const bn = H.splitNotice('Bidding Notice:\n\nALL ITEMS ARE SOLD AS-IS. No returns.');
check('notice heading', bn.title, 'Bidding Notice');
check('notice body', bn.body, 'ALL ITEMS ARE SOLD AS-IS. No returns.');

const an = H.splitNotice('Shipping / Pick Up: Saturday only.');
check('a heading may contain a slash', an.title, 'Shipping / Pick Up');

// A colon inside prose must not be mistaken for a heading separator.
const prose = H.splitNotice('Everything sold as is, where is: no exceptions at all whatsoever today');
check('a long prefix is prose, not a heading', prose.title, 'Notice');
check('nothing at all yields nothing', H.splitNotice('   '), null);

// -- condition tone --------------------------------------------------------
check('brand new is green', H.conditionTone('BRAND NEW'), 'ok');
check('excellent is green', H.conditionTone('EXCELLENT'), 'ok');
check('open box is amber', H.conditionTone('OPEN BOX'), 'warn');
check('damaged is red', H.conditionTone('DAMAGED - CRACKED SCREEN'), 'bad');
/*
 * The whole reason the test order is worst-first: auctioneers really do write
 * "BRAND NEW - FOR PARTS ONLY", and a new-first match painted that green.
 */
check('new-but-for-parts is red, not green', H.conditionTone('BRAND NEW - FOR PARTS ONLY'), 'bad');
check('an unrecognised word stays neutral', H.conditionTone('C-GRADE'), 'mute');
check('no condition stated is neutral', H.conditionTone(''), 'mute');

// -- condition chips -------------------------------------------------------
const CHIP_DESC = [
  'Est. Retail Price: 124.00',
  'Condition: EXCELLENT',
  'Model: A-Series',
  'In packaging? Yes',
  'Requires Assembly? N/A',
  'Is Item Functional? Unable to Test',
  'Is Item Damaged? No',
  'Missing Major Parts? No',
].join('\n');

const chips = H.conditionChips(CHIP_DESC);
const chipBy = (label) => chips.find((c) => c.label === label);
check('condition leads the chips', chips[0].label, 'Condition');
check('and carries its own tone', chips[0].tone, 'ok');
check('"Damaged? No" is reassuring, so green', chipBy('Damaged').tone, 'ok');
check('and reads as the answer given', chipBy('Damaged').value, 'No');
check('"Missing parts? No" is green', chipBy('Missing parts').tone, 'ok');
check('"In packaging? Yes" is green', chipBy('In packaging').tone, 'ok');
/*
 * "Unable to Test" is neither yes nor no. Colouring it green would claim the
 * auctioneer said the item works, which is the one thing they did not say.
 */
check('an untestable item is neutral, not green', chipBy('Functional').tone, 'mute');
check('and shows the auctioneer\'s own words', chipBy('Functional').value, 'Unable to Test');
check('"Requires Assembly? N/A" is neutral', chipBy('Assembly').tone, 'mute');
check('Model is not a chip — it is a fact', chipBy('Model'), undefined);

// A lot answering yes to the bad questions must go red.
const badChips = H.conditionChips('Condition: FAIR\nIs Item Damaged? Yes\nMissing Major Parts? Yes');
check('"Damaged? Yes" is red', badChips.find((c) => c.label === 'Damaged').tone, 'bad');
check('"Missing parts? Yes" is red', badChips.find((c) => c.label === 'Missing parts').tone, 'bad');
check('prose with no fields yields no chips', H.conditionChips('Tested working. Nice unit.').length, 0);
check('no description yields no chips', H.conditionChips(null).length, 0);

// -- information facts -----------------------------------------------------
const facts = H.infoFacts({
  lotNumber: '8590',
  category: [{ categoryName: 'Networking' }, { categoryName: 'Computers' }, { categoryName: 'Computers & Electronics' }],
  model: 'B550M',
  estimate: '',
  statedRetail: 124,
  quantity: 1,
  pictureCount: 11,
  bidCount: 0,
  shippingOffered: true,
});
const labels = facts.map((f) => f.label);
check('facts are ordered lot-first', labels[0], 'Lot #');
// GraphQL returns the category tree leaf-first; a breadcrumb reads the other way.
check('category reads root to leaf',
  facts.find((f) => f.label === 'Category').value, 'Computers & Electronics › Computers › Networking');
falsy('an empty estimate is not printed', labels.includes('Estimate'));
falsy('a quantity of 1 is not printed', labels.includes('Quantity'));
truthy('a quantity of 3 is printed', H.infoFacts({ quantity: 3 }).some((f) => f.label === 'Quantity'));
check('stated retail is formatted as money',
  facts.find((f) => f.label === 'Auctioneer states').value, '$124.00');
// A zero bid count is information ("nobody wants it yet"), not a blank.
check('zero bids is still printed', facts.find((f) => f.label === 'Bids so far').value, '0');
check('shipping reads as words', facts.find((f) => f.label === 'Shipping').value, 'Offered');
check('no shipping reads as pick-up only',
  H.infoFacts({ shippingOffered: false }).find((f) => f.label === 'Shipping').value, 'Pick-up only');
check('an unknown shipping status is omitted', H.infoFacts({}).length, 0);
// The DOM path has no category tree, only the panel's own breadcrumb string.
check('categoryText is the fallback',
  H.infoFacts({ categoryText: 'Computers - Networking' }).find((f) => f.label === 'Category').value,
  'Computers - Networking');

// -- timestamps ------------------------------------------------------------
/*
 * HiBid returns "2026-08-12T19:00:00" with no offset: that is already the
 * auction's local wall clock. new Date() would apply the viewer's timezone and
 * reprint a 7:00 PM close as 11:00 PM for anyone west of the auctioneer, which
 * is why this is string arithmetic and why it is worth a test.
 */
check('a close time keeps the stated wall clock', H.fmtDateTime('2026-08-12T19:00:00'), '12 Aug 2026, 7:00 pm');
check('morning is am', H.fmtDateTime('2026-08-05T04:05:00'), '5 Aug 2026, 4:05 am');
check('midnight is 12 am, not 0 am', H.fmtDateTime('2026-01-01T00:30:00'), '1 Jan 2026, 12:30 am');
check('noon is 12 pm, not 0 pm', H.fmtDateTime('2026-01-01T12:00:00'), '1 Jan 2026, 12:00 pm');
check('a date with no time is just the date', H.fmtDateTime('2026-07-28'), '28 Jul 2026');
check('nonsense is not a date', H.fmtDateTime('soon'), null);
check('no timestamp at all', H.fmtDateTime(null), null);
check('an impossible month is rejected', H.fmtDateTime('2026-13-01T10:00:00'), null);

// -- addresses -------------------------------------------------------------
check('a full auctioneer address',
  H.formatAddress({ address: '23 Buchanan Crt', city: 'London', state: 'ON', postalCode: 'N5Z 4P9' }),
  '23 Buchanan Crt, London, ON N5Z 4P9');
check('a city-only address', H.formatAddress({ city: 'London', state: 'ON' }), 'London, ON');
check('a street with nothing else', H.formatAddress({ address: '400 Jones Rd' }), '400 Jones Rd');
check('an empty record has no address', H.formatAddress({}), null);
check('no record at all', H.formatAddress(null), null);

// ===========================================================================
console.log(`\n${pass + fail} assertions: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
