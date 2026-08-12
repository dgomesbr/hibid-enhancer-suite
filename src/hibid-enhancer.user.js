// ==UserScript==
// @name         HiBid Enhancer Suite
// @namespace    https://github.com/dgomesbr/hibid-enhancer-suite
// @version      0.2.0
// @description  Retail price lookup, fee-aware bid ceilings, and loud condition warnings on HiBid lot pages.
// @author       dgomesbr
// @license      MIT
// @icon         data:image/png;base64,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
// @homepageURL  https://github.com/dgomesbr/hibid-enhancer-suite
// @supportURL   https://github.com/dgomesbr/hibid-enhancer-suite/issues
// @downloadURL  https://raw.githubusercontent.com/dgomesbr/hibid-enhancer-suite/main/src/hibid-enhancer.user.js
// @updateURL    https://raw.githubusercontent.com/dgomesbr/hibid-enhancer-suite/main/src/hibid-enhancer.user.js
// @match        https://hibid.com/*
// @match        https://*.hibid.com/*
// @run-at       document-idle
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_openInTab
// @connect      bestbuy.ca
// @connect      www.bestbuy.ca
// @connect      amazon.ca
// @connect      www.amazon.ca
// @connect      api.keepa.com
// ==/UserScript==

/* eslint-env browser, greasemonkey */
/* global GM_xmlhttpRequest, GM_getValue, GM_setValue, GM_deleteValue, GM_listValues, GM_addStyle, GM_registerMenuCommand */

(function () {
  'use strict';

  // ===========================================================================
  // SECTION 1 — Settings
  // ===========================================================================

  const NS = 'hes';                 // storage / css prefix
  const CACHE_TTL_MS = 12 * 3600e3; // 12h — auction prices move, retail does not

  const DEFAULTS = {
    // A lot is a "good deal" when the all-in cost is at least this far under retail.
    targetDiscountPct: 50,
    // Below this discount the page gets a red warning box.
    warnBelowDiscountPct: 25,
    // Fallback buyer's premium when the auction's terms cannot be parsed.
    fallbackPremiumPct: 18,
    // Fallback sales tax when the province cannot be determined (ON HST).
    fallbackTaxPct: 13,
    // Providers
    useBestBuy: true,
    useAmazon: true,
    useKeepa: false,
    keepaKey: '',
    keepaDomain: 6,        // 6 = amazon.ca
    // Behaviour
    autoLookup: true,      // look up retail automatically on page load
    debug: false,
  };

  const Cfg = {
    load() {
      const raw = GM_getValue(`${NS}:cfg`, null);
      let parsed = {};
      if (raw) { try { parsed = JSON.parse(raw); } catch (_) { parsed = {}; } }
      return Object.assign({}, DEFAULTS, parsed);
    },
    save(next) {
      GM_setValue(`${NS}:cfg`, JSON.stringify(next));
      CFG = Object.assign({}, DEFAULTS, next);
    },
  };

  let CFG = Cfg.load();

  // ===========================================================================
  // SECTION 2 — Small utilities
  // ===========================================================================

  const log = (...a) => { if (CFG.debug) console.log(`[${NS}]`, ...a); };
  const warn = (...a) => console.warn(`[${NS}]`, ...a);

  const money = (n) =>
    (n == null || !isFinite(n)) ? '—' :
    n.toLocaleString('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 2 });

  const pct = (n) => (n == null || !isFinite(n)) ? '—' : `${n.toFixed(1)}%`;

  /** First float in a string, tolerating $ , and whitespace. */
  function num(s) {
    if (s == null) return null;
    const m = String(s).replace(/,/g, '').match(/-?\d+(?:\.\d+)?/);
    return m ? parseFloat(m[0]) : null;
  }

  const txt = (el) => (el && el.textContent ? el.textContent.trim() : '');

  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null) continue;
      if (k === 'class') node.className = v;
      else if (k === 'text') node.textContent = v;
      else if (k === 'html') node.innerHTML = v;
      else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v);
    }
    for (const c of [].concat(children)) {
      if (c == null) continue;
      node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    }
    return node;
  }

  // -- cache ------------------------------------------------------------------

  const Cache = {
    key: (k) => `${NS}:cache:${k}`,
    get(k) {
      const raw = GM_getValue(Cache.key(k), null);
      if (!raw) return null;
      try {
        const { at, val } = JSON.parse(raw);
        if (Date.now() - at > CACHE_TTL_MS) { GM_deleteValue(Cache.key(k)); return null; }
        return val;
      } catch (_) { return null; }
    },
    set(k, val) {
      try { GM_setValue(Cache.key(k), JSON.stringify({ at: Date.now(), val })); } catch (_) { /* quota */ }
    },
    clear() {
      let n = 0;
      for (const k of GM_listValues()) {
        if (k.startsWith(`${NS}:cache:`)) { GM_deleteValue(k); n++; }
      }
      return n;
    },
  };

  // -- http -------------------------------------------------------------------

  function gmHttp(opts) {
    return new Promise((resolve, reject) => {
      GM_xmlhttpRequest(Object.assign({
        method: 'GET',
        timeout: 20000,
        onload: (r) => (r.status >= 200 && r.status < 400)
          ? resolve(r)
          : reject(new Error(`HTTP ${r.status} for ${opts.url}`)),
        onerror: () => reject(new Error(`network error for ${opts.url}`)),
        ontimeout: () => reject(new Error(`timeout for ${opts.url}`)),
      }, opts));
    });
  }

  /** Indirection so tests can feed canned responses to the providers. */
  let HTTP = gmHttp;
  const http = (opts) => HTTP(opts);

  // ===========================================================================
  // SECTION 3 — Canadian sales tax by province
  // ===========================================================================

  const TAX_BY_PROVINCE = {
    ON: 13, NB: 15, NL: 15, NS: 15, PE: 15,
    QC: 14.975, BC: 12, MB: 12, SK: 11,
    AB: 5, NT: 5, NU: 5, YT: 5,
  };

  const PROVINCE_NAMES = {
    ontario: 'ON', quebec: 'QC', 'québec': 'QC', 'british columbia': 'BC',
    alberta: 'AB', manitoba: 'MB', saskatchewan: 'SK', 'nova scotia': 'NS',
    'new brunswick': 'NB', 'newfoundland and labrador': 'NL', 'newfoundland': 'NL',
    'prince edward island': 'PE', 'northwest territories': 'NT', nunavut: 'NU', yukon: 'YT',
  };

  /**
   * Sales tax rate for a lot. Province comes from the pickup/location line
   * ("Stoney Creek, ON L8E 5P4"); named provinces in the terms are a fallback.
   */
  function detectTax(pageText) {
    const abbr = pageText.match(/,\s*(ON|QC|BC|AB|MB|SK|NS|NB|NL|PE|NT|NU|YT)\b/);
    if (abbr && TAX_BY_PROVINCE[abbr[1]] != null) {
      return { pct: TAX_BY_PROVINCE[abbr[1]], province: abbr[1], source: 'lot location' };
    }
    const lower = pageText.toLowerCase();
    for (const [name, code] of Object.entries(PROVINCE_NAMES)) {
      if (lower.includes(name)) {
        return { pct: TAX_BY_PROVINCE[code], province: code, source: 'terms text' };
      }
    }
    // GST/HST wording without a province still tells us something.
    if (/\bhst\b/i.test(pageText)) {
      return { pct: CFG.fallbackTaxPct, province: null, source: 'HST mentioned, province unknown' };
    }
    return { pct: CFG.fallbackTaxPct, province: null, source: 'default' };
  }

  // ===========================================================================
  // SECTION 4 — Fee parser
  // ===========================================================================

  /**
   * Parse buyer's premium, per-item handling, large-item handling, card
   * surcharge and sales tax out of the auction's free-text terms.
   *
   * HiBid's structured `buyerPremiumRate` is unreliable (frequently reports 0%
   * even when the terms say 16%), so everything here is text-driven.
   */
  function parseFees(sources) {
    const all = sources.filter(Boolean).join('\n\n');
    const out = {
      premiumPct: null, premiumSource: null,
      perItemFee: 0, perItemSource: null,
      largeItemFee: 0, largeItemSource: null,
      cardPct: 0, cardSource: null,
      taxPct: null, taxSource: null, province: null,
      raw: all,
      notes: [],
    };

    // --- buyer's premium ----------------------------------------------------
    // "16% Buyers Premium plus HST", "15% BP + Handling", "Buyer Premium: 18%"
    const premiumPatterns = [
      /(\d{1,2}(?:\.\d+)?)\s*%\s*(?:buyer'?s?|buyers)\s*premium/i,
      /(?:buyer'?s?|buyers)\s*premium[^0-9%]{0,20}(\d{1,2}(?:\.\d+)?)\s*%/i,
      /(\d{1,2}(?:\.\d+)?)\s*%\s*\bB\.?P\.?\b/i,
      /\bB\.?P\.?\b[^0-9%]{0,12}(\d{1,2}(?:\.\d+)?)\s*%/i,
      /(\d{1,2}(?:\.\d+)?)\s*%\s*premium/i,
    ];
    for (const re of premiumPatterns) {
      const m = all.match(re);
      if (m) {
        const v = parseFloat(m[1]);
        if (v >= 0 && v <= 50) {
          out.premiumPct = v;
          out.premiumSource = `parsed: "${m[0].trim()}"`;
          break;
        }
      }
    }
    if (out.premiumPct == null) {
      out.premiumPct = CFG.fallbackPremiumPct;
      out.premiumSource = `fallback ${CFG.fallbackPremiumPct}% (terms did not state a premium)`;
      out.notes.push('Buyer’s premium could not be parsed — using your conservative fallback.');
    }

    // --- per-item handling --------------------------------------------------
    // "$1.5 Handling Fee per Item.", "$1.50 Item Handling Fee ($1.50 per item)"
    const perItem = [
      /\$\s*(\d+(?:\.\d+)?)\s*(?:item\s*)?handling\s*fee\s*(?:\(?\s*\$?\s*\d*\.?\d*\s*)?per\s*item/i,
      /\$\s*(\d+(?:\.\d+)?)\s*(?:per\s*item|\/\s*item)\s*handling/i,
      /handling\s*fee[^.\n]{0,30}\$\s*(\d+(?:\.\d+)?)\s*per\s*item/i,
      /\$\s*(\d+(?:\.\d+)?)\s*handling\s*fee\s*per\s*item/i,
    ];
    for (const re of perItem) {
      const m = all.match(re);
      if (m) { out.perItemFee = parseFloat(m[1]); out.perItemSource = `parsed: "${m[0].trim()}"`; break; }
    }

    // --- large-item / appliance handling ------------------------------------
    const largeItem = [
      /\$\s*(\d+(?:\.\d+)?)\s*handling\s*fee\s*per\s*large\s*item/i,
      /large\s*item[^.\n]{0,40}\$\s*(\d+(?:\.\d+)?)/i,
    ];
    for (const re of largeItem) {
      const m = all.match(re);
      if (m) { out.largeItemFee = parseFloat(m[1]); out.largeItemSource = `parsed: "${m[0].trim()}"`; break; }
    }

    // --- credit-card surcharge ---------------------------------------------
    const card = all.match(/(\d{1,2}(?:\.\d+)?)\s*%\s*(?:credit\s*)?card/i);
    if (card) {
      const v = parseFloat(card[1]);
      if (v > 0 && v <= 10) { out.cardPct = v; out.cardSource = `parsed: "${card[0].trim()}"`; }
    }

    // --- sales tax ----------------------------------------------------------
    const tax = detectTax(all);
    out.taxPct = tax.pct;
    out.province = tax.province;
    out.taxSource = tax.source === 'default'
      ? `default ${tax.pct}% (province not found)`
      : `${tax.pct}%${tax.province ? ` ${tax.province}` : ''} — ${tax.source}`;

    return out;
  }

  /** Does this lot attract the large-item/appliance handling fee? */
  const LARGE_ITEM_RE = /\b(refrigerator|fridge|freezer|washer|washing machine|dryer|dishwasher|stove|range hood|range|oven|cooktop|appliance|air conditioner|furnace|water heater|treadmill|mattress|sofa|couch|patio set)\b/i;

  function isLargeItem(lotText) {
    return LARGE_ITEM_RE.test(lotText || '');
  }

  // ===========================================================================
  // SECTION 5 — Condition detection (parts-only / damaged)
  // ===========================================================================

  /**
   * IMPORTANT: only ever run this against LOT-level text (lead, description,
   * structured Condition fields). Auction-wide boilerplate such as
   * "ALL ITEMS ARE SOLD AS-IS" appears on every lot in the sale, so scanning it
   * would slap a red banner on all of them and train the user to ignore it.
   */
  const PARTS_PATTERNS = [
    { re: /\bfor\s*parts\s*(?:only)?\b/i,        label: 'listed for parts only' },
    { re: /\bparts\s*(?:only|\/\s*repair)\b/i,   label: 'parts only' },
    { re: /\bnot\s*working\b/i,                  label: 'stated not working' },
    { re: /\bdoes\s*not\s*(?:work|turn on|power)/i, label: 'does not work / power on' },
    { re: /\bnon[\s-]*functional\b/i,            label: 'non-functional' },
    { re: /\bbroken\b/i,                         label: 'described as broken' },
    { re: /\bshattered\b/i,                      label: 'shattered' },
    { re: /\bcracked\b/i,                        label: 'cracked' },
    { re: /\bsalvage\b/i,                        label: 'salvage' },
    { re: /\bdefective\b/i,                      label: 'defective' },
    { re: /\bdamaged\b/i,                        label: 'damaged' },
    { re: /\bfor\s*repair\b/i,                   label: 'for repair' },
    { re: /\bas[\s-]*is[\s,]*no\s*returns?\b/i,  label: 'as-is, no returns' },
    { re: /\bincomplete\b/i,                     label: 'incomplete' },
    { re: /\bmissing\s*(?:parts|pieces|components)\b/i, label: 'missing parts' },
    { re: /\bis\s*item\s*damaged\?\s*:?\s*yes\b/i, label: 'structured field: Is Item Damaged? = Yes' },
    { re: /\bcondition\s*:?\s*(?:for\s*)?parts\b/i, label: 'structured field: Condition = Parts' },
    { re: /\bcondition\s*:?\s*damaged\b/i,       label: 'structured field: Condition = Damaged' },
  ];

  /** Softer signals: not proof of damage, but worth surfacing. */
  const CAUTION_PATTERNS = [
    { re: /\buntested\b/i,                    label: 'untested' },
    { re: /\bnot\s*tested\b/i,                label: 'not tested' },
    { re: /\bopen\s*box\b/i,                  label: 'open box' },
    { re: /\breturn(?:ed|s)\b/i,              label: 'customer return' },
    { re: /\bscratch(?:ed|es)?\b/i,           label: 'scratched' },
    { re: /\bdent(?:ed|s)?\b/i,               label: 'dented' },
    { re: /\brefurbish(?:ed)?\b/i,            label: 'refurbished' },
    { re: /\bused\b/i,                        label: 'used' },
  ];

  /** Explicit positives that should suppress soft cautions. */
  const POSITIVE_RE = /\b(tested\s*(?:and\s*)?working|works?\s*(?:great|well|fine|perfectly)|fully\s*functional|brand\s*new|sealed|new\s*in\s*box|nib\b)/i;

  function assessCondition(lotText) {
    const t = lotText || '';
    const parts = PARTS_PATTERNS.filter((p) => p.re.test(t)).map((p) => p.label);
    const positive = POSITIVE_RE.test(t);
    let cautions = CAUTION_PATTERNS.filter((p) => p.re.test(t)).map((p) => p.label);

    // "Notes: Tested Working." beats a bare "untested"/"used" mention.
    if (positive) cautions = cautions.filter((c) => !/untested|not tested|used/.test(c));

    return {
      partsOnly: parts.length > 0,
      partsReasons: [...new Set(parts)],
      cautions: [...new Set(cautions)],
      positive,
    };
  }

  // ===========================================================================
  // SECTION 6 — Product name extraction
  // ===========================================================================

  const NOISE_WORDS = new Set([
    'retail', 'new', 'brand', 'the', 'best', 'with', 'and', 'for', 'built',
    'in', 'a', 'of', 'to', 'up', 'included', 'includes', 'free', 'shipping',
    'lot', 'item', 'items', 'qty', 'x', 'pack', 'set', 'estimated', 'est',
    'price', 'msrp', 'value', 'approx', 'approximately', 'assorted', 'various',
  ]);

  /** Model-number-ish tokens: WF-1000XM5, B650, RTX4090, DDR5, 55A85K. */
  const MODEL_RE = /^[A-Za-z]{1,6}[-–]?\d{1,6}[A-Za-z0-9-]*$/;

  /** Capacity/spec tokens that materially move price: 32GB, 2TB, 1TB. */
  const CAPACITY_RE = /^\d+(?:\.\d+)?(?:gb|tb|mb)$/i;

  /**
   * Turn a HiBid lead/description into (a) a human product name and
   * (b) a tight retail search query.
   *
   * Leads look like:
   *   "Retail $328.00 | Sony WF-1000XM5 The Best Truly Wireless ... , Black"
   *   "$650 CORSAIR Vengeance DDR5 32GB (2x16GB) 6000MHz"
   */
  function extractProduct(lead, description) {
    const source = (description && description.length > (lead || '').length) ? description : (lead || '');
    let s = source;

    // Cut the auctioneer's trailing notes block.
    s = s.split(/\n\s*\*{2,}/)[0];
    s = s.split(/\n\s*Notes?\s*:/i)[0];
    s = s.split(/\bCondition\s*:/i)[0];
    s = s.split(/\bEst\.?\s*Retail\s*Price\s*:/i)[0];
    s = s.replace(/\r/g, ' ').replace(/\n+/g, ' ').trim();

    // Drop a leading "Retail $328.00 |" / "$650 |" segment.
    const segs = s.split('|').map((x) => x.trim()).filter(Boolean);
    let named = segs.length > 1
      ? (segs.find((x) => !/^(?:retail|msrp|est\.?|value)?\s*\$?\s*[\d,]+(?:\.\d+)?\s*$/i.test(x) &&
                          !/^retail\s*\$/i.test(x)) || segs[segs.length - 1])
      : s;

    named = named
      .replace(/^\s*(?:retail|msrp|est\.?\s*retail(?:\s*price)?|value)\s*[:\-]?\s*\$?\s*[\d,]+(?:\.\d+)?\s*/i, '')
      .replace(/^\s*\$\s*[\d,]+(?:\.\d+)?\s*/, '')
      .replace(/\s{2,}/g, ' ')
      .trim();

    // Trim marketing tail at the first comma that precedes only a colour word.
    const fullName = named.replace(/\s*[-–]\s*$/, '').trim();

    // --- build the search query --------------------------------------------
    const tokens = fullName.split(/[\s,;/]+/).filter(Boolean);
    const cleaned = tokens
      .map((t) => t.replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9-]+$/g, ''))
      .filter((t) => t && !NOISE_WORDS.has(t.toLowerCase()) && !/^\$?[\d.,]+$/.test(t));

    const brand = cleaned[0] || '';
    const model = cleaned.find((t) => MODEL_RE.test(t) && !/^\d+$/.test(t));

    // Query = brand + product line + model + capacity, in that order. Keeping
    // the capacity matters: a 32GB kit and a 16GB kit are not the same comp.
    let query;
    if (brand && model) {
      const parts = [brand];
      const second = cleaned[1];
      if (second && !/\d/.test(second) && second.toLowerCase() !== brand.toLowerCase()) {
        parts.push(second); // product line, e.g. "Vengeance"
      }
      if (model.toLowerCase() !== brand.toLowerCase() &&
          !parts.some((x) => x.toLowerCase() === model.toLowerCase())) {
        parts.push(model);
      }
      const cap = cleaned.find((t) => CAPACITY_RE.test(t));
      if (cap && !parts.some((x) => x.toLowerCase() === cap.toLowerCase())) parts.push(cap);
      query = parts.join(' ');
    } else {
      query = cleaned.slice(0, 5).join(' ');
    }

    return {
      name: fullName || source.slice(0, 140),
      query: query.trim(),
      brand,
      model: model || null,
      tokens: cleaned.slice(0, 10),
    };
  }

  /** Retail price the auctioneer themselves embedded in the listing. */
  function extractStatedRetail(lead, description, estimateText) {
    const hay = [lead, description].filter(Boolean).join('\n');
    const patterns = [
      /Est\.?\s*Retail\s*Price\s*:?\s*\$?\s*([\d,]+(?:\.\d{1,2})?)/i,
      /\bRetail\s*(?:Price)?\s*:?\s*\$\s*([\d,]+(?:\.\d{1,2})?)/i,
      /\bMSRP\s*:?\s*\$?\s*([\d,]+(?:\.\d{1,2})?)/i,
      /^\s*\$\s*([\d,]+(?:\.\d{1,2})?)\s*(?:\||\s)/,
    ];
    for (const re of patterns) {
      const m = hay.match(re);
      if (m) {
        const v = num(m[1]);
        if (v && v > 0) return { value: v, source: `stated in listing ("${m[0].trim()}")` };
      }
    }
    // Fall back to the top of the auctioneer's Estimate range.
    if (estimateText) {
      const nums = (estimateText.match(/[\d,]+(?:\.\d{1,2})?/g) || []).map(num).filter(Boolean);
      if (nums.length) {
        const hi = Math.max(...nums);
        if (hi > 0) return { value: hi, source: `auctioneer estimate high (${estimateText.trim()})` };
      }
    }
    return null;
  }

  // ===========================================================================
  // SECTION 7 — Bid increments
  // ===========================================================================

  /**
   * Parse the auction's bid-increment schedule so a recommended ceiling is an
   * amount you can actually enter.
   *   "0.00 - 99.00  1.00 CAD" / "99.01 - 198.00  2.00 CAD"
   */
  function parseIncrements(tableText) {
    if (!tableText) return [];
    const rows = [];
    const re = /([\d,]+(?:\.\d+)?)\s*[-–]\s*([\d,]+(?:\.\d+)?)\s*[\t ]+([\d,]+(?:\.\d+)?)/g;
    let m;
    while ((m = re.exec(tableText)) !== null) {
      const from = num(m[1]), to = num(m[2]), inc = num(m[3]);
      if (from != null && to != null && inc) rows.push({ from, to, inc });
    }
    return rows.sort((a, b) => a.from - b.from);
  }

  function incrementAt(amount, rows) {
    for (const r of rows) if (amount >= r.from && amount <= r.to) return r.inc;
    return rows.length ? rows[rows.length - 1].inc : null;
  }

  /** Largest valid bid <= amount, given the increment schedule. */
  function floorToIncrement(amount, rows) {
    if (!isFinite(amount) || amount <= 0) return 0;
    const inc = incrementAt(amount, rows);
    if (!inc) return Math.floor(amount);
    return Math.floor(amount / inc) * inc;
  }

  // ===========================================================================
  // SECTION 8 — The money engine
  // ===========================================================================

  /**
   * All-in, out-the-door cost of winning at `hammer`.
   *
   *   premium   = hammer x premium%
   *   card      = (hammer + premium) x card%
   *   handling  = per-item fee (+ large-item fee when applicable)
   *   tax       = (everything above) x tax%
   *
   * Tax is applied to the full invoice, which is how Ontario auctioneers bill it.
   */
  function allIn(hammer, fees, opts = {}) {
    const large = !!opts.large;
    const premium = hammer * (fees.premiumPct / 100);
    const card = (hammer + premium) * (fees.cardPct / 100);
    const handling = (fees.perItemFee || 0) + (large ? (fees.largeItemFee || 0) : 0);
    const preTax = hammer + premium + card + handling;
    const tax = preTax * (fees.taxPct / 100);
    return {
      hammer, premium, card, handling, preTax, tax,
      total: preTax + tax,
    };
  }

  /**
   * Inverse of allIn: the highest hammer price whose all-in cost still lands
   * `targetDiscountPct` under retail.
   *
   *   budget      = retail x (1 - target%)
   *   preTax      = budget / (1 + tax%)
   *   hammer      = (preTax - handling) / ((1 + premium%) x (1 + card%))
   */
  function maxHammerFor(retail, targetDiscountPct, fees, opts = {}) {
    if (!retail || !isFinite(retail)) return null;
    const large = !!opts.large;
    const budget = retail * (1 - targetDiscountPct / 100);
    const preTaxBudget = budget / (1 + fees.taxPct / 100);
    const handling = (fees.perItemFee || 0) + (large ? (fees.largeItemFee || 0) : 0);
    const factor = (1 + fees.premiumPct / 100) * (1 + fees.cardPct / 100);
    const hammer = (preTaxBudget - handling) / factor;
    return hammer > 0 ? hammer : 0;
  }

  /** How far under retail an all-in total sits, as a percentage. */
  function discountPct(total, retail) {
    if (!retail || !isFinite(retail) || !isFinite(total)) return null;
    return (1 - total / retail) * 100;
  }

  // ===========================================================================
  // SECTION 9 — Retail price providers
  // ===========================================================================

  const ACCESSORY_NOUN_RE = /\b(case|cover|sleeve|skin|pouch|protector|tips|eartips|cable|charger|adapter|mount|holder|stand|strap|band|bumper|shell|film|dock|lanyard|clip)\b/i;
  const ACCESSORY_MARKER_RE = /\b(compatible\s+with|replacement\s+for|designed\s+for|made\s+for|for\s+use\s+with|fits\s+(?:the\s+)?[A-Z0-9])/i;
  /** Retailer condition prefixes that sit in front of the real brand. */
  const TITLE_PREFIX_RE = /^\s*(?:\(?\s*(?:open\s*box|openbox|refurbished|refurb|renewed|used|pre[\s-]?owned)[^-|:]*\)?\s*[-–|:]\s*)+/i;
  const USED_RE = /\b(open box|openbox|refurbished|refurb|renewed|pre[\s-]?owned|used|for parts)\b/i;

  const escapeRe = (s) => String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  /**
   * Is this search result an ACCESSORY for the product rather than the product?
   *
   * The trap: "Silicone Case for Sony WF-1000XM5" matches the brand AND the
   * model perfectly, so token scoring alone ranks it as a great match — and a
   * $12 case posing as a $278 retail price makes every lot look like a terrible
   * deal (or produces an absurdly low max bid).
   *
   * The discriminator is word order. An accessory noun BEFORE the product
   * identity names the accessory ("Case for Sony WF-1000XM5"); the same noun
   * AFTER it is usually an included part ("Earbuds with Charging Case").
   */
  function isAccessoryListing(title, product) {
    const t = String(title || '');
    const noun = ACCESSORY_NOUN_RE.exec(t);
    if (!noun) return false;

    // Signal 1 — an explicit "for / designed for / compatible with" marker.
    // Catches "Spigen Rugged Armor Designed for Sony WF-1000XM5 Case", where
    // the accessory noun sits AFTER the model and so defeats word order alone.
    if (ACCESSORY_MARKER_RE.test(t)) return true;

    // Signal 2 — a different brand sells the accessory. A genuine listing leads
    // with the product's own brand (possibly behind an "Open Box -" prefix);
    // an accessory leads with the accessory maker's brand.
    const bare = t.replace(TITLE_PREFIX_RE, '').trim();
    if (product.brand) {
      const firstWord = (bare.match(/[A-Za-z0-9][A-Za-z0-9.&'-]*/) || [''])[0];
      if (firstWord && firstWord.toLowerCase() !== product.brand.toLowerCase()) return true;
    }

    // Signal 3 — word order: an accessory noun before the product identity
    // names the accessory; after it, it is usually an included part.
    let idRe = null;
    if (product.model) {
      idRe = new RegExp(escapeRe(product.model).replace(/[-\s]/g, '[-\\s]?'), 'i');
    } else if (product.brand) {
      idRe = new RegExp(`\\b${escapeRe(product.brand)}\\b`, 'i');
    }
    if (!idRe) return noun.index < 20;

    const id = idRe.exec(t);
    if (!id) return true; // accessory noun, and the product itself is absent
    return noun.index < id.index;
  }

  /** Token-overlap relevance so an accessory or a homonym cannot win. */
  function relevance(candidateTitle, product) {
    const raw = candidateTitle || '';
    const t = raw.toLowerCase();
    if (!t) return 0;

    // Accessories are disqualified outright, not merely penalised — a strong
    // brand+model match would otherwise outweigh any penalty.
    if (!ACCESSORY_NOUN_RE.test(product.name) && isAccessoryListing(raw, product)) return 0;

    let score = 0;

    if (product.model) {
      const loose = product.model.toLowerCase().replace(/[-\s]/g, '');
      const hay = t.replace(/[-\s]/g, '');
      if (hay.includes(loose)) score += 5; else return 0; // model is mandatory when known
    }
    if (product.brand && t.includes(product.brand.toLowerCase())) score += 2;

    const toks = product.tokens.map((x) => x.toLowerCase()).filter((x) => x.length > 2);
    const hits = toks.filter((x) => t.includes(x)).length;
    score += toks.length ? (hits / toks.length) * 3 : 0;

    return score;
  }

  /**
   * Pick a winner from scored candidates: strongest matches first, then the
   * cheapest NEW one among them.
   *
   * Taking the globally cheapest result is what lets a weak match — a wrong
   * variant, a bundle, a stray accessory — undercut the real product and wreck
   * the bid math, so only the top relevance band is eligible.
   */
  function chooseCandidate(scored, priceOf, isNewOf) {
    if (!scored || !scored.length) return null;
    const top = Math.max(...scored.map((x) => x.score));
    const band = scored.filter((x) => x.score >= top - 1.5);
    const news = band.filter(isNewOf);
    const pool = news.length ? news : band;
    return pool.reduce((a, b) => (priceOf(b) < priceOf(a) ? b : a));
  }

  const Providers = {

    /**
     * Best Buy Canada's storefront search endpoint. Undocumented but open —
     * no key, no auth, returns clean JSON. Our most reliable structured source
     * for a live Canadian price.
     */
    async bestBuy(product) {
      const url = `https://www.bestbuy.ca/api/v2/json/search?query=${encodeURIComponent(product.query)}&lang=en-CA&page=1&pageSize=24`;
      const r = await http({ url, headers: { Accept: 'application/json' } });
      const data = JSON.parse(r.responseText);
      const products = data.products || [];

      const scored = products.map((p) => {
        const name = p.name || '';
        let score = relevance(name, product);
        // A third-party seller is a weaker comp than Best Buy itself, but a NEW
        // marketplace unit is still a far better "brand new" price than an
        // open-box one — so condition and seller are scored separately.
        if (p.isMarketplace) score -= 1;
        if (USED_RE.test(name)) score -= 3;
        return { p, score, isNew: !USED_RE.test(name) };
      }).filter((x) => x.score > 0)
        .sort((a, b) => b.score - a.score);

      if (!scored.length) return null;

      const pick = chooseCandidate(
        scored,
        (x) => x.p.salePrice || x.p.regularPrice || Infinity,
        (x) => x.isNew,
      );
      if (!pick) return null;

      const price = pick.p.salePrice || pick.p.regularPrice;
      if (!price) return null;

      return {
        provider: 'Best Buy Canada',
        price,
        listPrice: pick.p.regularPrice || null,
        title: pick.p.name,
        condition: pick.isNew ? (pick.p.isMarketplace ? 'new (marketplace)' : 'new') : 'open box / refurb',
        seller: (pick.p.seller && pick.p.seller.name) || 'Best Buy',
        url: `https://www.bestbuy.ca${pick.p.productUrl}`,
        searchUrl: `https://www.bestbuy.ca/en-ca/search?search=${encodeURIComponent(product.query)}`,
      };
    },

    /**
     * Amazon.ca search results, parsed from HTML. There is no free official
     * Amazon price API (PA-API needs an approved affiliate account with
     * qualifying sales), so this reads the same page a human would — through
     * the user's own browser session, one request per lot, cached 12h.
     */
    async amazon(product) {
      const url = `https://www.amazon.ca/s?k=${encodeURIComponent(product.query)}`;
      const r = await http({
        url,
        headers: {
          Accept: 'text/html,application/xhtml+xml',
          'Accept-Language': 'en-CA,en;q=0.9',
        },
      });

      const doc = new DOMParser().parseFromString(r.responseText, 'text/html');
      if (/api-services-support@amazon|Enter the characters you see below/i.test(r.responseText) &&
          !doc.querySelector('[data-asin]')) {
        throw new Error('Amazon returned a bot check');
      }

      // Keyed by ASIN: search pages nest duplicate cards for the same product.
      const byAsin = new Map();

      doc.querySelectorAll('div[data-asin]').forEach((node) => {
        const asin = node.getAttribute('data-asin');
        if (!asin || asin.length !== 10) return;

        /*
         * Title. `h2` only holds the brand in Amazon's current layout ("Sony"),
         * and `innerText` does not exist on a DOMParser document, so the image
         * alt attribute is the only reliable full title. Fall back to joining
         * the title-recipe spans (their textContent runs together without it).
         */
        const img = node.querySelector('img.s-image');
        let title = img ? (img.getAttribute('alt') || '').trim() : '';
        if (!title) {
          const recipe = node.querySelector('[data-cy="title-recipe"], .s-title-instructions-style');
          if (recipe) {
            title = Array.from(recipe.querySelectorAll('span'))
              .map((s) => txt(s)).filter(Boolean).join(' ')
              .replace(/\s{2,}/g, ' ').trim();
          }
        }
        if (!title) title = txt(node.querySelector('h2'));
        if (!title) return;

        // Sponsored placements are ads, not the market price.
        const sponsored =
          !!node.querySelector('[data-component-type="sp-sponsored-result"]') ||
          /\bAdHolder\b/.test(String(node.className)) ||
          /^Sponsored\s*(Ad)?\b/i.test(title) ||
          Array.from(node.querySelectorAll('.puis-label-popover-default span, .s-label-popover-default span, .puis-sponsored-label-text'))
            .some((s) => /^sponsored$/i.test(txt(s)));

        title = title.replace(/^Sponsored\s*Ad\s*[–-]\s*/i, '').trim();

        // Price: the offscreen string is the full formatted price.
        let price = null;
        const off = node.querySelector('.a-price .a-offscreen');
        if (off) price = num(txt(off));
        if (price == null) {
          const whole = node.querySelector('.a-price-whole');
          const frac = node.querySelector('.a-price-fraction');
          if (whole) price = num(txt(whole) + '.' + (txt(frac) || '0'));
        }
        if (price == null || price <= 0) return;

        const rec = { asin, title, price, used: USED_RE.test(title), sponsored };
        const prev = byAsin.get(asin);
        // Prefer the organic card, then the cheaper price.
        if (!prev || (prev.sponsored && !sponsored) ||
            (prev.sponsored === sponsored && price < prev.price)) {
          byAsin.set(asin, rec);
        }
      });

      const results = Array.from(byAsin.values()).filter((x) => !x.sponsored);

      const scored = results
        .map((x) => ({ ...x, score: relevance(x.title, product) - (x.used ? 3 : 0) }))
        .filter((x) => x.score > 0)
        .sort((a, b) => b.score - a.score);

      if (!scored.length) return null;

      const pick = chooseCandidate(scored, (x) => x.price, (x) => !x.used);
      if (!pick) return null;

      return {
        provider: 'Amazon.ca',
        price: pick.price,
        listPrice: null,
        title: pick.title,
        condition: pick.used ? 'used / renewed' : 'new',
        asin: pick.asin,
        url: `https://www.amazon.ca/dp/${pick.asin}`,
        searchUrl: url,
        historyUrl: `https://ca.camelcamelcamel.com/product/${pick.asin}`,
      };
    },

    /**
     * Keepa — the data behind CamelCamelCamel-style history, with an official
     * API. Paid only (no free tier), so it is opt-in and needs a key.
     */
    async keepa(product) {
      if (!CFG.keepaKey) throw new Error('no Keepa key configured');
      const url = `https://api.keepa.com/search?key=${encodeURIComponent(CFG.keepaKey)}` +
                  `&domain=${CFG.keepaDomain}&type=product&term=${encodeURIComponent(product.query)}`;
      const r = await http({ url, headers: { Accept: 'application/json' } });
      const data = JSON.parse(r.responseText);
      const list = data.products || [];
      if (!list.length) return null;

      const scored = list
        .map((p) => ({ p, score: relevance(p.title || '', product) }))
        .filter((x) => x.score > 0)
        .sort((a, b) => b.score - a.score);
      if (!scored.length) return null;

      const p = scored[0].p;
      // Keepa prices are in cents; -1 means "no data".
      const cur = (p.stats && (p.stats.current || [])) || [];
      const cents = [cur[0], cur[1], cur[18]].find((v) => typeof v === 'number' && v > 0);
      if (!cents) return null;

      return {
        provider: 'Keepa (Amazon.ca)',
        price: cents / 100,
        listPrice: null,
        title: p.title,
        condition: 'new',
        asin: p.asin,
        url: `https://www.amazon.ca/dp/${p.asin}`,
        searchUrl: `https://www.amazon.ca/s?k=${encodeURIComponent(product.query)}`,
        historyUrl: `https://ca.camelcamelcamel.com/product/${p.asin}`,
      };
    },
  };

  /** Run the enabled providers and return every quote we managed to get. */
  async function lookupRetail(product) {
    const cacheKey = `retail:${product.query.toLowerCase()}`;
    const cached = Cache.get(cacheKey);
    if (cached) { log('cache hit', cacheKey); return cached; }

    const jobs = [];
    if (CFG.useBestBuy) jobs.push(['bestBuy', Providers.bestBuy(product)]);
    if (CFG.useAmazon) jobs.push(['amazon', Providers.amazon(product)]);
    if (CFG.useKeepa && CFG.keepaKey) jobs.push(['keepa', Providers.keepa(product)]);

    const settled = await Promise.all(jobs.map(async ([name, p]) => {
      try { return { name, value: await p }; }
      catch (e) { warn(`${name} failed:`, e.message); return { name, error: e.message }; }
    }));

    const quotes = settled.filter((s) => s.value).map((s) => s.value);
    const errors = settled.filter((s) => s.error).map((s) => `${s.name}: ${s.error}`);
    const result = { quotes, errors, at: Date.now() };

    if (quotes.length) Cache.set(cacheKey, result);
    return result;
  }

  const isNewQuote = (q) => /^new/.test(q.condition || '');

  /**
   * The quote bid guidance is based on: the cheapest BRAND NEW price. Used and
   * open-box quotes are only used when nothing new was found, because comparing
   * an auction lot against a used price understates how bad a deal it is.
   */
  function pickBest(quotes) {
    if (!quotes || !quotes.length) return null;
    const news = quotes.filter(isNewQuote);
    const pool = news.length ? news : quotes;
    return pool.reduce((a, b) => (b.price < a.price ? b : a));
  }

  // ===========================================================================
  // SECTION 10 — Styles
  // ===========================================================================

  GM_addStyle(`
    .${NS}-banner{border-radius:8px;padding:14px 16px;margin:0 0 12px;font-family:system-ui,-apple-system,"Segoe UI",sans-serif;
      font-size:14px;line-height:1.5;border-left:8px solid;box-shadow:0 2px 8px rgba(0,0,0,.12);}
    .${NS}-banner h3{margin:0 0 6px;font-size:17px;font-weight:800;letter-spacing:.2px;display:flex;align-items:center;gap:8px;}
    .${NS}-banner p{margin:4px 0;}
    .${NS}-banner a{text-decoration:underline;font-weight:600;}
    .${NS}-danger{background:#fdecec;border-color:#c62828;color:#7f1d1d;}
    .${NS}-danger h3{color:#b71c1c;}
    .${NS}-danger a{color:#b71c1c;}
    .${NS}-parts{background:#2b0000;border-color:#ff1744;color:#ffd9d9;}
    .${NS}-parts h3{color:#ff5252;font-size:19px;text-transform:uppercase;}
    .${NS}-parts a{color:#ff8a80;}
    .${NS}-good{background:#e8f5e9;border-color:#2e7d32;color:#1b5e20;}
    .${NS}-good h3{color:#1b5e20;}
    .${NS}-good a{color:#1b5e20;}
    .${NS}-warn{background:#fff8e1;border-color:#f9a825;color:#6d4c00;}
    .${NS}-warn h3{color:#e65100;}
    .${NS}-warn a{color:#e65100;}
    .${NS}-info{background:#e3f2fd;border-color:#1565c0;color:#0d47a1;}

    .${NS}-pricecell{font-family:system-ui,-apple-system,"Segoe UI",sans-serif;font-size:14px;line-height:1.55;}
    .${NS}-price{font-weight:800;font-size:16px;}
    .${NS}-sub{color:#555;font-size:12px;}
    .${NS}-links{margin-top:4px;display:flex;flex-wrap:wrap;gap:6px;}
    .${NS}-chip{display:inline-block;padding:2px 8px;border:1px solid #bbb;border-radius:12px;font-size:12px;
      text-decoration:none;color:#1565c0;background:#fff;white-space:nowrap;}
    .${NS}-chip:hover{background:#f0f6ff;border-color:#1565c0;text-decoration:none;}
    .${NS}-maxbid{font-weight:800;font-size:17px;color:#1b5e20;}
    .${NS}-over{color:#b71c1c;}
    .${NS}-badge{display:inline-block;padding:1px 7px;border-radius:10px;font-size:11px;font-weight:700;
      text-transform:uppercase;letter-spacing:.4px;vertical-align:middle;margin-left:6px;}
    .${NS}-badge-good{background:#2e7d32;color:#fff;}
    .${NS}-badge-warn{background:#f9a825;color:#3e2723;}
    .${NS}-badge-bad{background:#c62828;color:#fff;}
    .${NS}-badge-na{background:#78909c;color:#fff;}
    .${NS}-spin{color:#666;font-style:italic;}
    .${NS}-dot{display:inline-block;width:9px;height:9px;border-radius:50%;vertical-align:middle;
      background:linear-gradient(45deg,#38bdf8,#a855f7);animation:${NS}-pulse 1.2s infinite;}
    .${NS}-break{color:#555;font-size:12px;margin-top:4px;}
    .${NS}-break code{background:#f4f4f4;padding:0 3px;border-radius:3px;}
    .${NS}-btn{cursor:pointer;background:#1565c0;color:#fff;border:0;border-radius:5px;padding:4px 10px;font-size:12px;}
    .${NS}-btn:hover{background:#0d47a1;}

    /* Floating pulse loader. Purely decorative: fixed, non-interactive, and it
       never gates rendering — the page and every DOM-derived block are already
       in place while this is visible. */
    .${NS}-loader{
      position:fixed;top:25px;right:25px;
      width:20px;height:20px;border-radius:50%;
      background:linear-gradient(45deg,#38bdf8,#a855f7);
      animation:${NS}-pulse 1.2s infinite;
      z-index:2147483000;pointer-events:none;
    }
    @keyframes ${NS}-pulse{
      0%  {transform:scale(.85);opacity:.9; box-shadow:0 0 0 0    rgba(56,189,248,.65);}
      70% {transform:scale(1.1);opacity:1;  box-shadow:0 0 0 14px rgba(168,85,247,0);}
      100%{transform:scale(.85);opacity:.9; box-shadow:0 0 0 0    rgba(56,189,248,0);}
    }
    @media (prefers-reduced-motion:reduce){
      .${NS}-loader{animation-duration:2.4s;}
    }
  `);

  // ===========================================================================
  // SECTION 11 — DOM helpers for the lot detail page
  // ===========================================================================

  const Detail = {

    /** Label -> value cell from the "Information" panel table. */
    infoRows() {
      const panel = document.querySelector('app-information-panel');
      if (!panel) return {};
      const map = {};
      panel.querySelectorAll('tr').forEach((tr) => {
        const th = tr.querySelector('th');
        const td = tr.querySelector('td');
        if (!th || !td) return;
        map[txt(th).replace(/\s+/g, ' ').toLowerCase()] = { text: txt(td), tr, td };
      });
      return map;
    },

    /** A collapse panel by its heading, e.g. "Terms and Conditions". */
    panel(headingStartsWith) {
      const want = headingStartsWith.toLowerCase();
      return Array.from(document.querySelectorAll('app-collapse-panel'))
        .find((p) => txt(p).toLowerCase().replace(/\s+/g, ' ').trim().startsWith(want)) || null;
    },

    panelText(headingStartsWith) {
      const p = Detail.panel(headingStartsWith);
      return p ? txt(p) : null;
    },

    currentBid() {
      const node = document.querySelector('.lot-high-bid, .lot-bid-container');
      const v = node ? num(txt(node)) : null;
      return v;
    },

    /** The amount the site is asking for next — the real cost of entry. */
    nextBid() {
      const btn = Array.from(document.querySelectorAll('button, .btn'))
        .map((b) => txt(b))
        .find((t) => /^bid\s+[\d,]+(?:\.\d+)?/i.test(t));
      return btn ? num(btn.replace(/^bid/i, '')) : null;
    },

    lotNumber() {
      const rows = Detail.infoRows();
      return rows['lot #'] ? rows['lot #'].text : null;
    },

    /**
     * Where our injected blocks go: above the lot content.
     *
     * Two sub-hosts, because they update on different clocks. Condition banners
     * are known immediately from the DOM; the verdict banner arrives later with
     * the price lookup, and must be able to re-render without wiping the
     * parts-only warning above it.
     */
    bannerHost() {
      const anchor =
        document.querySelector('.lot-details-pager-swipe') ||
        document.querySelector('app-lot-details .page-header') ||
        document.querySelector('.page-header') ||
        document.querySelector('app-lot-details');
      if (!anchor) return null;

      let host = document.getElementById(`${NS}-banners`);
      if (!host) {
        host = el('div', { id: `${NS}-banners`, style: 'margin:10px 0 4px;' }, [
          el('div', { id: `${NS}-cond` }),
          el('div', { id: `${NS}-verdict` }),
        ]);
        anchor.parentNode.insertBefore(host, anchor);
      }
      return {
        root: host,
        cond: document.getElementById(`${NS}-cond`),
        verdict: document.getElementById(`${NS}-verdict`),
      };
    },
  };

  // ---------------------------------------------------------------------------
  // Pulse loader — floating, non-blocking progress indicator.
  // ---------------------------------------------------------------------------

  const Loader = {
    node: null,
    pending: 0,

    show() {
      this.pending++;
      // Reuse any node already in the DOM so repeated runs cannot leave a pile
      // of duplicate loaders sharing one id.
      if (!this.node || !this.node.isConnected) {
        this.node = document.getElementById(`${NS}-loader`);
      }
      if (!this.node) {
        this.node = el('div', {
          id: `${NS}-loader`,
          class: `${NS}-loader`,
          title: 'HiBid Enhancer — looking up retail price…',
          'aria-label': 'Looking up retail price',
          role: 'status',
        });
        document.body.appendChild(this.node);
      }
      this.node.style.display = 'block';
    },

    hide() {
      this.pending = Math.max(0, this.pending - 1);
      if (this.pending === 0 && this.node) this.node.style.display = 'none';
    },
  };

  // ===========================================================================
  // SECTION 12 — Rendering
  // ===========================================================================

  function banner(kind, title, bodyNodes) {
    return el('div', { class: `${NS}-banner ${NS}-${kind}` },
      [el('h3', { text: title })].concat(bodyNodes || []));
  }

  function chip(label, href) {
    return el('a', { class: `${NS}-chip`, href, target: '_blank', rel: 'noopener noreferrer', text: label });
  }

  /** Explain the fee stack so the number is auditable, not magic. */
  function feeBreakdown(fees, cost, opts) {
    const bits = [
      `hammer ${money(cost.hammer)}`,
      `+ ${fees.premiumPct}% BP ${money(cost.premium)}`,
    ];
    if (cost.card > 0) bits.push(`+ ${fees.cardPct}% card ${money(cost.card)}`);
    if (cost.handling > 0) {
      bits.push(`+ handling ${money(cost.handling)}${opts.large ? ' (incl. large-item)' : ''}`);
    }
    bits.push(`+ ${fees.taxPct}% tax ${money(cost.tax)}`);
    return el('div', { class: `${NS}-break`, html: `${bits.join(' ')} = <strong>${money(cost.total)}</strong>` });
  }

  // ===========================================================================
  // SECTION 13 — Lot detail controller
  // ===========================================================================

  const State = { lastKey: null, running: false, gen: 0 };

  /*
   * The detail page is enhanced in two passes so nothing ever waits on the
   * network:
   *
   *   Pass 1 (synchronous)  — everything derivable from the DOM alone: condition
   *                           banners, the fee stack, the all-in cost of the next
   *                           bid, and provisional guidance from the auctioneer's
   *                           own stated retail. Rendered immediately.
   *   Pass 2 (asynchronous) — the live retail lookup. Fired without awaiting, so
   *                           enhanceDetail returns straight away; the pulse
   *                           loader shows while it is in flight and the affected
   *                           blocks re-render in place when it lands.
   */
  async function enhanceDetail() {
    const rows = Detail.infoRows();
    if (!rows.description && !rows.lead) return false; // panel not rendered yet

    const lead = rows.lead ? rows.lead.text : '';
    const description = rows.description ? rows.description.text : '';
    const estimateText = rows.estimate ? rows.estimate.text : '';
    const category = rows['group - category'] ? rows['group - category'].text : '';

    const product = extractProduct(lead, description);
    const lotText = [lead, description].filter(Boolean).join('\n');

    // ---- fees ------------------------------------------------------------
    // Auction-wide text is fine for FEES (they apply to every lot).
    const termsText = Detail.panelText('Terms and Conditions');
    const payText = Detail.panelText('Payment Information');
    const noticeText = txt(document.querySelector('app-notice'));
    const locationText = txt(document.querySelector('app-lot-details')) || document.body.innerText;

    const fees = parseFees([termsText, payText, noticeText, locationText.slice(0, 4000)]);
    const large = isLargeItem(`${lotText}\n${category}`);
    const increments = parseIncrements(Detail.panelText('Bid Increments'));

    // ---- condition (LOT-LEVEL ONLY — see assessCondition docs) ------------
    const cond = assessCondition(lotText);

    // ---- bids ------------------------------------------------------------
    const current = Detail.currentBid();
    const next = Detail.nextBid() ||
      (current != null ? current + (incrementAt(current, increments) || 1) : null);

    const host = Detail.bannerHost();
    if (!host) return false;

    // ---- PASS 1: everything the DOM already knows -------------------------

    host.cond.textContent = '';

    if (cond.partsOnly) {
      host.cond.appendChild(banner('parts', '💀 ⚠️ THIS LISTING IS FOR PARTS ONLY — BEWARE 🔧💥', [
        el('p', { html: `The lot's own description flags it as <strong>broken / parts-only</strong>: ` +
          `${cond.partsReasons.map((r) => `<em>${r}</em>`).join(', ')}.` }),
        el('p', { html: 'Do <strong>not</strong> price this against a working retail unit. ' +
          'Assume no returns, no warranty, and that it may be missing components.' }),
      ]));
    } else if (cond.cautions.length) {
      host.cond.appendChild(banner('warn', '⚠️ Condition caveats in this lot’s description', [
        el('p', { html: `Flagged: ${cond.cautions.map((c) => `<em>${c}</em>`).join(', ')}.` +
          (cond.positive ? ' The description also claims it was tested / works.' : '') }),
      ]));
    }

    const cell = injectRetailRow(rows, product);
    const stated = extractStatedRetail(lead, description, estimateText);

    const ctx = {
      gen: ++State.gen,
      rows, host, cell, product, fees, large, increments,
      cond, current, next, stated,
    };

    // Provisional render from the auctioneer's own figure — instant, and useful
    // on its own. Replaced in place if a live quote arrives.
    renderQuotes(ctx, { quotes: [], errors: [], pending: CFG.autoLookup });

    // ---- PASS 2: the live lookup, deliberately not awaited ---------------
    if (CFG.autoLookup) {
      Loader.show();
      lookupRetail(product)
        .then((res) => renderQuotes(ctx, { quotes: res.quotes, errors: res.errors, pending: false }))
        .catch((e) => {
          warn('retail lookup failed:', e);
          renderQuotes(ctx, { quotes: [], errors: [String((e && e.message) || e)], pending: false });
        })
        .finally(() => Loader.hide());
    }

    return true;
  }

  /**
   * Render (or re-render) everything that depends on the retail quotes.
   *
   * Called twice per lot: once synchronously with no quotes, once when the
   * lookup resolves. Stale calls are dropped via the generation counter so a
   * slow lookup for a previous lot cannot overwrite the current one.
   */
  function renderQuotes(ctx, { quotes, errors, pending }) {
    if (ctx.gen !== State.gen) return; // user navigated on; this result is stale

    const { rows, host, cell, product, fees, large, increments, cond, next, stated } = ctx;

    const best = pickBest(quotes);
    const retail = best ? best.price : (stated ? stated.value : null);
    const retailSource = best
      ? `${best.provider}${best.condition === 'new' ? '' : ` (${best.condition})`}`
      : (stated ? 'the auctioneer’s own claim (unverified)' : null);

    renderRetailCell(cell, { product, quotes, errors, stated, best, pending });

    const maxHammer = maxHammerFor(retail, CFG.targetDiscountPct, fees, { large });
    const maxBid = maxHammer != null ? floorToIncrement(maxHammer, increments) : null;
    const nextCost = next != null ? allIn(next, fees, { large }) : null;
    const nextDisc = nextCost ? discountPct(nextCost.total, retail) : null;

    injectBidRow(rows, {
      product, fees, large, increments, retail, retailSource,
      current: ctx.current, next, maxHammer, maxBid, nextCost, nextDisc, cond, pending,
    });

    // ---- verdict banner --------------------------------------------------
    host.verdict.textContent = '';

    if (cond.partsOnly) {
      /*
       * No retail-derived verdict for a parts-only lot. A working unit's price
       * is not a valid comparison for a broken one, and printing "GOOD DEAL"
       * under a parts-only warning is exactly the contradiction that gets
       * someone to bid on junk. The all-in cost is still shown — that part is
       * factual regardless of condition.
       */
      if (nextCost) {
        host.verdict.appendChild(banner('warn', '🧾 What it would actually cost you', [
          el('p', { html: `Bidding <strong>${money(next)}</strong> costs <strong>${money(nextCost.total)}</strong> ` +
            `all-in after the ${fees.premiumPct}% premium${fees.perItemFee ? `, ${money(fees.perItemFee)} handling` : ''} and ${fees.taxPct}% tax.` }),
          el('p', { html: '<strong>No retail comparison and no recommended ceiling is shown</strong> for a ' +
            'parts-only lot — decide what the spares are worth to you.' }),
          feeBreakdown(fees, nextCost, { large }),
          el('div', { class: `${NS}-links` }, retailLinks(product, best, stated)),
        ]));
      }
    } else if (retail && nextCost) {
      const links = el('div', { class: `${NS}-links` }, retailLinks(product, best, stated));

      if (nextDisc == null) {
        /* nothing to say */
      } else if (nextDisc < CFG.warnBelowDiscountPct) {
        host.verdict.appendChild(banner('danger',
          `🚨 BAD DEAL — only ${pct(nextDisc)} under retail`, [
            el('p', { html:
              `Bidding <strong>${money(next)}</strong> costs <strong>${money(nextCost.total)}</strong> all-in ` +
              `(${fees.premiumPct}% buyer’s premium${fees.perItemFee ? ` + ${money(fees.perItemFee)} handling` : ''} + ${fees.taxPct}% tax).` }),
            el('p', { html:
              `A brand-new one is <strong>${money(retail)}</strong> at ${retailSource}. ` +
              `That is only <strong>${pct(nextDisc)}</strong> off — below your ${CFG.warnBelowDiscountPct}% floor.` }),
            el('p', { html: maxBid
              ? `To hit your ${CFG.targetDiscountPct}%-off target you must not bid above <strong>${money(maxBid)}</strong>. ` +
                `<strong>Stop bidding${next > maxBid ? ' — the current price is already past that' : ''}.</strong>`
              : '' }),
            feeBreakdown(fees, nextCost, { large }),
            links,
          ]));
      } else if (nextDisc >= CFG.targetDiscountPct) {
        host.verdict.appendChild(banner('good',
          `✅ GOOD DEAL — ${pct(nextDisc)} under retail all-in`, [
            el('p', { html:
              `Bid <strong>${money(next)}</strong> → <strong>${money(nextCost.total)}</strong> out the door, ` +
              `versus <strong>${money(retail)}</strong> new at ${retailSource}.` }),
            el('p', { html: maxBid
              ? `<span class="${NS}-maxbid">BID UP TO ${money(maxBid)}</span> and you still clear ${CFG.targetDiscountPct}% off. ` +
                `Headroom: <strong>${money(Math.max(0, maxBid - next))}</strong>.`
              : '' }),
            feeBreakdown(fees, nextCost, { large }),
            links,
          ]));
      } else {
        host.verdict.appendChild(banner('warn',
          `⚠️ Marginal — ${pct(nextDisc)} under retail all-in`, [
            el('p', { html:
              `Bidding ${money(next)} costs <strong>${money(nextCost.total)}</strong> all-in against ` +
              `<strong>${money(retail)}</strong> new at ${retailSource}. That clears your ` +
              `${CFG.warnBelowDiscountPct}% warning floor but misses your ${CFG.targetDiscountPct}% target.` }),
            el('p', { html: maxBid ? `Target ceiling: <strong>${money(maxBid)}</strong>.` : '' }),
            feeBreakdown(fees, nextCost, { large }),
            links,
          ]));
      }
    } else if (!retail && pending) {
      host.verdict.appendChild(banner('info', 'Checking retail prices…', [
        el('p', { html: `Looking up <code>${product.query}</code>. The fee breakdown below is already ` +
          'accurate; the retail comparison will fill in when the lookup returns.' }),
      ]));
    } else if (!retail) {
      host.verdict.appendChild(banner('info', 'ℹ️ No retail price found', [
        el('p', { html: `Could not establish a retail price for <em>${product.name}</em> ` +
          `(searched <code>${product.query}</code>). Bid guidance is unavailable — check manually.` }),
        el('div', { class: `${NS}-links` }, retailLinks(product, null, null)),
        errors.length ? el('div', { class: `${NS}-break`, text: `Provider errors: ${errors.join('; ')}` }) : null,
      ]));
    }

    return true;
  }

  function retailLinks(product, best, stated) {
    const q = encodeURIComponent(product.query);
    const links = [];
    if (best && best.url) links.push(chip(`🔗 ${best.provider} listing`, best.url));
    if (best && best.historyUrl) links.push(chip('📉 CamelCamelCamel history', best.historyUrl));
    links.push(chip('Amazon.ca search', `https://www.amazon.ca/s?k=${q}`));
    links.push(chip('Best Buy CA search', `https://www.bestbuy.ca/en-ca/search?search=${q}`));
    links.push(chip('CamelCamelCamel search', `https://ca.camelcamelcamel.com/search?sq=${q}`));
    links.push(chip('Google Shopping CA', `https://www.google.com/search?tbm=shop&gl=ca&hl=en&q=${q}`));
    return links;
  }

  /** Insert a "Retail (live)" row immediately after the Estimate row. */
  function injectRetailRow(rows, product) {
    const existing = document.getElementById(`${NS}-retail-cell`);
    if (existing) { existing.textContent = ''; return existing; }

    const anchorRow = (rows.estimate && rows.estimate.tr) ||
                      (rows.lead && rows.lead.tr) ||
                      (rows['lot #'] && rows['lot #'].tr);
    if (!anchorRow) return null;

    const th = el('th', { class: (anchorRow.querySelector('th') || {}).className || '', text: 'Retail (live)' });
    const td = el('td', {
      id: `${NS}-retail-cell`,
      class: `${(anchorRow.querySelector('td') || {}).className || ''} ${NS}-pricecell`,
    });
    const tr = el('tr', { class: `row ${NS}-row` }, [th, td]);
    anchorRow.parentNode.insertBefore(tr, anchorRow.nextSibling);
    return td;
  }

  function renderRetailCell(cell, { product, quotes, errors, stated, best, pending }) {
    if (!cell) return;
    cell.textContent = '';

    if (pending) {
      cell.appendChild(el('div', {}, [
        el('span', { class: `${NS}-dot` }),
        el('span', { class: `${NS}-spin`, text: ' Looking up the live retail price…' }),
      ]));
    }

    if (best) {
      const badge = isNewQuote(best)
        ? el('span', { class: `${NS}-badge ${NS}-badge-good`, text: best.condition })
        : el('span', { class: `${NS}-badge ${NS}-badge-warn`, text: best.condition });

      cell.appendChild(el('div', {}, [
        el('span', { class: `${NS}-price`, text: money(best.price) }),
        el('span', { class: `${NS}-sub`, text: ` at ${best.provider}` }),
        badge,
      ]));
      cell.appendChild(el('div', { class: `${NS}-sub`, text: best.title.slice(0, 120) }));
    } else if (stated) {
      cell.appendChild(el('div', {}, [
        el('span', { class: `${NS}-price`, text: money(stated.value) }),
        el('span', { class: `${NS}-sub`, text: ' — auctioneer’s own figure, not verified' }),
        el('span', { class: `${NS}-badge ${NS}-badge-na`, text: 'unverified' }),
      ]));
    } else if (!pending) {
      cell.appendChild(el('div', { class: `${NS}-spin`, text: 'No retail price found.' }));
    }

    // Other quotes, for cross-checking.
    const others = (quotes || []).filter((q) => q !== best);
    if (others.length) {
      cell.appendChild(el('div', { class: `${NS}-sub`, html: 'Also: ' +
        others.map((q) => `${q.provider} <strong>${money(q.price)}</strong> (${q.condition})`).join(' &middot; ') }));
    }
    if (stated && best) {
      cell.appendChild(el('div', { class: `${NS}-sub`, html:
        `Auctioneer states <strong>${money(stated.value)}</strong> — ${stated.source}.` }));

      // A live price wildly away from the auctioneer's own figure usually means
      // we matched the wrong thing (an accessory, a variant, a different item),
      // not that we found a bargain. Say so rather than quietly trusting it.
      const ratio = stated.value > 0 ? best.price / stated.value : null;
      if (ratio != null && (ratio < 0.35 || ratio > 3)) {
        cell.appendChild(el('div', { class: `${NS}-banner ${NS}-warn`, style: 'margin:6px 0 0;padding:8px 10px;' }, [
          el('strong', { text: '⚠️ Price sanity check' }),
          el('div', { html: `The matched price (${money(best.price)}) is ` +
            `${ratio < 1 ? `only ${(ratio * 100).toFixed(0)}% of` : `${ratio.toFixed(1)}× `} ` +
            `the auctioneer's stated ${money(stated.value)}. The match may be the wrong product — ` +
            `confirm with the links above before trusting the bid ceiling.` }),
        ]));
      }
    }

    cell.appendChild(el('div', { class: `${NS}-sub`, html:
      `Matched on <code>${product.query}</code>${product.model ? ` (model <code>${product.model}</code>)` : ''}` }));
    cell.appendChild(el('div', { class: `${NS}-links` }, retailLinks(product, best, stated)));

    if (errors && errors.length) {
      cell.appendChild(el('div', { class: `${NS}-break`, text: `Lookup issues: ${errors.join('; ')}` }));
    }
  }

  /** Insert a "Bid guidance" row with the fee-aware ceiling. */
  function injectBidRow(rows, d) {
    let td = document.getElementById(`${NS}-bid-cell`);
    if (!td) {
      const anchorRow = document.querySelector(`tr.${NS}-row`) ||
                        (rows.estimate && rows.estimate.tr);
      if (!anchorRow) return;
      const th = el('th', { class: (anchorRow.querySelector('th') || {}).className || '', text: 'Bid guidance' });
      td = el('td', {
        id: `${NS}-bid-cell`,
        class: `${(anchorRow.querySelector('td') || {}).className || ''} ${NS}-pricecell`,
      });
      const tr = el('tr', { class: `row ${NS}-row` }, [th, td]);
      anchorRow.parentNode.insertBefore(tr, anchorRow.nextSibling);
    }
    td.textContent = '';

    if (d.cond.partsOnly) {
      td.appendChild(el('div', { class: `${NS}-over`, html:
        '<strong>💀 Parts-only lot — no ceiling recommended.</strong> A working unit’s retail price is not a ' +
        'valid comparison. Value it as spares.' }));
      if (d.nextCost) {
        td.appendChild(el('div', { class: `${NS}-sub`, html:
          `Next bid <strong>${money(d.next)}</strong> → all-in <strong>${money(d.nextCost.total)}</strong>` }));
        td.appendChild(feeBreakdown(d.fees, d.nextCost, { large: d.large }));
      }
      appendFeeProvenance(td, d);
      return;
    }

    if (d.maxBid == null) {
      td.appendChild(el('div', { class: `${NS}-spin`, text: 'No retail price — cannot compute a ceiling.' }));
    } else {
      const over = d.next != null && d.next > d.maxBid;
      td.appendChild(el('div', {}, [
        el('span', {
          class: `${NS}-maxbid ${over ? `${NS}-over` : ''}`,
          text: `BID UP TO ${money(d.maxBid)}`,
        }),
        el('span', { class: `${NS}-sub`, text: ` for ${CFG.targetDiscountPct}% off retail all-in` }),
        over ? el('span', { class: `${NS}-badge ${NS}-badge-bad`, text: 'price is past it' }) : null,
      ]));

      const warnHammer = maxHammerFor(d.retail, CFG.warnBelowDiscountPct, d.fees, { large: d.large });
      const warnBid = warnHammer != null ? floorToIncrement(warnHammer, d.increments) : null;
      if (warnBid) {
        td.appendChild(el('div', { class: `${NS}-sub`, html:
          `Hard walk-away (only ${CFG.warnBelowDiscountPct}% off): <strong>${money(warnBid)}</strong>` }));
      }

      // Be explicit that a ceiling built on the auctioneer's own claim is
      // provisional, so the number is not mistaken for a verified one.
      if (d.pending) {
        td.appendChild(el('div', {}, [
          el('span', { class: `${NS}-dot` }),
          el('span', { class: `${NS}-spin`, text:
            ' Provisional — based on the auctioneer’s stated retail. Verifying against live prices…' }),
        ]));
      }
    }

    if (d.nextCost) {
      const badge = d.nextDisc == null ? null
        : d.nextDisc >= CFG.targetDiscountPct ? el('span', { class: `${NS}-badge ${NS}-badge-good`, text: `${pct(d.nextDisc)} off` })
        : d.nextDisc < CFG.warnBelowDiscountPct ? el('span', { class: `${NS}-badge ${NS}-badge-bad`, text: `${pct(d.nextDisc)} off` })
        : el('span', { class: `${NS}-badge ${NS}-badge-warn`, text: `${pct(d.nextDisc)} off` });

      td.appendChild(el('div', {}, [
        el('span', { class: `${NS}-sub`, html:
          `Next bid <strong>${money(d.next)}</strong> → all-in <strong>${money(d.nextCost.total)}</strong>` }),
        badge,
      ]));
      td.appendChild(feeBreakdown(d.fees, d.nextCost, { large: d.large }));
    }

    appendFeeProvenance(td, d);
  }

  /** Fee provenance — so a wrong number is traceable to the text it came from. */
  function appendFeeProvenance(td, d) {
    const prov = [
      `Premium: ${d.fees.premiumSource}`,
      d.fees.perItemSource ? `Per-item: ${d.fees.perItemSource}` : 'Per-item: none found',
      d.large && d.fees.largeItemFee ? `Large item: ${d.fees.largeItemSource}` : null,
      d.fees.cardSource ? `Card: ${d.fees.cardSource}` : null,
      `Tax: ${d.fees.taxSource}`,
    ].filter(Boolean);
    td.appendChild(el('details', {}, [
      el('summary', { class: `${NS}-sub`, text: 'How these fees were determined' }),
      el('div', { class: `${NS}-break`, html: prov.map((p) => `• ${p}`).join('<br>') }),
    ]));

    if (d.fees.notes.length) {
      td.appendChild(el('div', { class: `${NS}-break`, text: d.fees.notes.join(' ') }));
    }
  }

  // ===========================================================================
  // SECTION 14 — Page router + SPA navigation
  // ===========================================================================

  function pageKind() {
    const p = location.pathname;
    if (/^\/lot\//i.test(p)) return 'detail';
    if (/^\/lots\b/i.test(p) || /^\/search\b/i.test(p)) return 'search';
    if (/^\/auction\//i.test(p) || /^\/catalog\//i.test(p)) return 'listing';
    return 'other';
  }

  // Extension points for the remaining page types.
  const PAGES = {
    detail: enhanceDetail,
    search: async () => false,   // TODO: per-card badges on search results
    listing: async () => false,  // TODO: per-card badges on an auction catalog
    other: async () => true,
  };

  async function run(reason) {
    const kind = pageKind();
    const key = `${kind}|${location.pathname}`;
    if (State.running) return;
    State.running = true;
    try {
      const handler = PAGES[kind] || PAGES.other;
      const ok = await handler();
      if (ok) { State.lastKey = key; log(`enhanced ${kind} (${reason})`); }
      return ok;
    } catch (e) {
      warn('run failed:', e);
      return false;
    } finally {
      State.running = false;
    }
  }

  /** Angular swaps views without a page load; watch the URL and the DOM. */
  function watch() {
    let lastPath = location.pathname;
    let debounce = null;

    const kick = (reason) => {
      clearTimeout(debounce);
      debounce = setTimeout(() => run(reason), 400);
    };

    setInterval(() => {
      if (location.pathname !== lastPath) {
        lastPath = location.pathname;
        State.lastKey = null;
        kick('navigation');
      }
    }, 500);

    const obs = new MutationObserver(() => {
      const key = `${pageKind()}|${location.pathname}`;
      if (State.lastKey === key) return;                 // already done
      if (!document.querySelector('app-information-panel')) return;
      kick('dom');
    });
    obs.observe(document.body, { childList: true, subtree: true });

    kick('initial');
  }

  // ===========================================================================
  // SECTION 15 — Menu commands
  // ===========================================================================

  GM_registerMenuCommand('HiBid Enhancer: re-run on this page', () => {
    State.lastKey = null;
    Cache.clear();
    run('manual');
  });

  GM_registerMenuCommand('HiBid Enhancer: clear price cache', () => {
    const n = Cache.clear();
    alert(`Cleared ${n} cached price lookup(s).`);
  });

  GM_registerMenuCommand('HiBid Enhancer: settings', () => {
    const cur = Cfg.load();
    const ask = (label, key, parse = parseFloat) => {
      const v = prompt(`${label}\n(current: ${cur[key]})`, String(cur[key]));
      if (v == null) return;
      const p = parse(v);
      if (parse === parseFloat && !isFinite(p)) return;
      cur[key] = p;
    };
    ask('Target discount % under retail for a "good deal"', 'targetDiscountPct');
    ask('Show a RED warning when the discount is below this %', 'warnBelowDiscountPct');
    ask('Fallback buyer’s premium % when the terms cannot be parsed', 'fallbackPremiumPct');
    ask('Enable Amazon.ca lookups? (1 = yes, 0 = no)', 'useAmazon', (v) => v.trim() === '1');
    ask('Enable Best Buy Canada lookups? (1 = yes, 0 = no)', 'useBestBuy', (v) => v.trim() === '1');
    const k = prompt('Optional Keepa API key (paid; leave blank to skip).\n' +
      'Stored in Tampermonkey’s own storage on this machine only.', cur.keepaKey || '');
    if (k != null) { cur.keepaKey = k.trim(); cur.useKeepa = !!k.trim(); }
    Cfg.save(cur);
    Cache.clear();
    State.lastKey = null;
    run('settings changed');
  });

  // Exposed for the test harness in /test.
  if (typeof window !== 'undefined') {
    window.__hesInternals = {
      parseFees, parseIncrements, floorToIncrement, incrementAt,
      allIn, maxHammerFor, discountPct, extractProduct, extractStatedRetail,
      assessCondition, isLargeItem, relevance, detectTax,
      Providers, pickBest, lookupRetail,
      setHttp: (fn) => { HTTP = fn || gmHttp; },
      setConfig: (patch) => { CFG = Object.assign({}, CFG, patch); },
    };
  }

  watch();
})();
