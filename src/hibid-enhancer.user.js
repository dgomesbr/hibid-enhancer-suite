// ==UserScript==
// @name         HiBid Enhancer Suite
// @namespace    https://github.com/dgomesbr/hibid-enhancer-suite
// @version      0.7.0
// @description  Retail price lookup, fee-aware bid ceilings, and loud condition warnings on HiBid lot pages.
// @author       dgomesbr
// @license      MIT
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAANXUlEQVR42t1bW4wcx3U991ZN97x2yd2V+BJ3RYZEZIaBrIiIEz9gJ46B0CRiBAHI/MQIEAeIvygkhpLPxX4E+TCMmAoCGEiAIA6QDzFABAG0lYiAgcAPhbApw4bEWCZFa0lKXFLL5T5mpqenq24+unum+jEPUtwgYgOD7e2uul11qu69596qIpRci4vCS0tkAeCvz8rj6/daz9pea3fY2ayGYUdF3UADFrBxeU4rWkC5gkzyrqQckC3Lxrl3ygCAsrl3JttetoACw1fVqKZqpqanAl83Vpq6cen0P9GdfJ/ci4Z1/uy/yPT15c4XWmsru0yv3fE8f04r/5BWtXmGnqOkkSSxEBYAyT1JItwmz5NnQ5+ndewQWek3kvdwZcngudhotWc6143pXu1F3VVf1Wsz3u7bu2ZrL5/4O9ooAyEDwKlTos6dI/OXX5OPbdxd/tzW2s2Nudknj1arsye8SnVBc9xIMYOGp40p/DDkeQ6QSetM8i2VzKrIAL0oWG51735rZeOdN+aqT0zvayxcOP1NuvjiKVGnz5EpAHDqRVHnTpP5yld7J1dv/expG4XYu+9Xvux7/kIYWJgosGQhAIhB8YdteYd4VIPd2TCi46Ug5Z6hIE9AgJAFearKNc0Iwu7yL+69+Q0ND/M7nvrJF/+5ct4Fgdxp/9xXe5+/feNHC/Xa3JFdew8/Z7oGUS+MWKAIRMM6wWNGFQ8IQkYFxtUvgiEkMB572lcKy2tXzm52Vy//8uyx5T/6ZuXbsihMS2RV2vm/OCu/dvf25U9VvKmDe+YPPxe0OsaaiJhZEVHBVqRzh+I2xP8SSi8qe04lOjikXKlYGlKl/5yIQBxJJD0b2T3N3R9vhcHb68FK888+8feto1+n9xYXhRkAnv9HmVpfu3G8F4a064nDZ9qtwAgRgzkFGfHccn4Y3IMAm3xYqOQ3Qf38s3y5ieqXyCBiEoDXw455cvbwma4J6N2N5eMv/YlMAQAvLZFtr3VOrt39xebs3o+cCXuRCISFiO63E/9fQQARWQh3TST7dx45s9JZ3lwLt04uLZHlP39RZjc2buyZntn/TG2qtrsXRQbMSecJjwoIRExd2zNTtfru2foTz9xpvbfnlS/JLAe3gmdbrdWuP/XYyW7XCCjmHQMBjw4IIKhOFMm0/9jJ9XC1uxIGz+qtrbUnKn5zt99o7ul1OpaZGZI0NGPdZGBoJDZs4hofyRommxAaKbNgE9SX3LN8uVyLyusXnhOFJrT16tSeqlffvRastnWvs1ar1nccZA0RIisJ2yw24hEBgclqBWp4Mwfb0fotDk2gya/PW4BAoNyUyU2lD786WAIZgCq6Ot81gdYSRcxKzxgbv+Qc4o/aTCCADAClvBlrI9aWIIVRGQIC5diJSGIsZHwjbMrqaICjpCRDJuzEwwABg35agmhwHGP2p0yJAFeIMUWKqrn8Q/lGpAUim8QRjhzN/3cgCACb9FvDZXrITUdHgE3C1amGy70ZJIKtloABqDGNsDaO5ZsNKvD31qaAKZaxrSDIYLZbJABYyj7kvN5QDMAfH9f46GEFSfU2+fvTtwz+9XwPPGTK9fMgApz6gwqOfoQLMi6/afHSv8UytnUmUNYWseUcWUgASS0oGOglI//rRxTqVaBRQ+bvsaMKzQYhsuXWHQQYCzSahGeeZtRqhHqdMn+f/iij0RzI2E7v4PZVuyClBUliENhRD0tANwRUdQBoOnrdMHaRIOl/3LXu7sfDVEZuBoRhtuHb6R36bVSpDch7ARcEcYDhQWhLTqgbN1RiEABImtFwOjng5I4MysnIzZptAcH1AgC0yY2+qx8kuQaNuPJTqxT1MZe4lpq2jycIJV4AgIYa4gZd9zdBB7IAFHG/fxnbRJYGk3NgAywNb6CrwyOvwgzKgjCxDBrNGInLU3BiJgTBNcxcYgPyAkSytmGi0SuhzR9oBqTgWKDTlkE6Pk3CAqhWCUzjQciDrG3u46l1TwXIJI0vcVMuCLEtkdEg5mRQLnYQC2gNfPqzGrU69ekzBAjagtdfM7A9TASCO6C6r/9OZ10QMn51VPsVwCpuAKiYxWXE72XSGeCAqDXQ2RJ8/JMVHD+hS+syE753oYdGnWB6w0HoA+vyAHHtAMppo4zI7AqAzY5gsw1U2Fm5cdYIbBT3SGQMAA73SNvQags2twTai+m0tQDzgF4zA9oDNjZi4V5lhDpQPyyG5VQFqDg1Mho8RgU8Bfz+pzTC3mD9r7+4kXIKAXwdN24UAO63ROLR/8xvamhFOHSIwVzkEkTAgcOMk6c9mJ7g0g9GqENBBRQgrhssmTYyhNunxSoa+N1jGvdzEY0GgRhodwS/8xmNE8crQ+um9wcOMQ4c4n6Dv/tqhEaDit4h7Ty7bjBv6FwQZDILbm253Snq6mQ2IA3MGg3qT3ulRgAngIliO1Obokyf8jyhL18lTBC5FFWZ7xzXs1Edm/QqS5sZR9+JRs8oVnFZa4u2ywUhqwKjXN04I/gQr0y0hqz3eWAwkR1UQlk0yOVxQFnDJlGBMa5+tAqgGM5SMqLGZo1fmQpYO3DJ+cjSzQek9wYlTLBAQDAZE9wOFQADW20B83j5lPAFAGi1pB/fFOxa6gIT+QUmKMiCIDI6TiAAYQRc+GmEMCpxgzKQ42vgt5/RqOhBHiC/DNzXfYnp7Q9eN3HnFOGpX2IcOsCZuun9tWsWV35uYSLBDy8a+DWCyVtll+FmvIDLBikXCufD05IrjIBz/x1hs50kSG0238cSJ1N31IBP/moMQPkMoJgyp7kAjnd7XPhehM0NwR/+noeDC1xKhK5etfj3l0LsaFJMhDimz0Tl+QDkqXDZKKcg2HE0mICpejyCmoobFzjJJjerzqiXzqjB0ApJH4RGg/pA59UhvQ8joDlNqKVUWIYkVfJJUTtJvE7Ob8gVSfwr2xFik4SokQeIBgXoGcDzCN+/FEFEUK8OgiFCHCFe/KFBxSdEpjwIorJcZSYcRnk4fD+h7DBV+cBJFUcdXv1uVBoO1/yY/1sZ4ikkm3ZDhgfQcCZIEzJBbHdSxVGH/JY7QpIQcWbgsKRKJhjqp8ScDhRo46Sjh+1PqkASPlC28SrnuoetRfZnIydZYeN4gUw+oIQ2TtR4DDLBDzOp8tAWZCVbT5fRUPeTZe9GAdBfYnuApEoGJNqeVelSKuwuFkhJtrXvNiSXuk5p8BAL7iZVMEZGWfJlW5bmncE0qRscZQTdGL1WyXrD9G+tUmbAsp1IM04FGcmNP0TGQwfBVTEeFQ06REIpYC0A/uuawW/MZxdHmYCL7xjcC4CKStwQihRUKWC9A3z/5wbHDhZlXLpqsN6JkyvW5pIeDxkEcXau6HL3UwSBGDj7WoSdr0eF/QEbHUDx8Aa4buwfvhPhxdeiAlvcbDsyaPj+hA8KgkvxbWoDXC8wdFEhoaD3wuKeXq0HeT8a0gDBgMZuBEU3VipjG0DI5x21ncRN5dQhD4BI7gNjlqZYFdPmYjNB4didKg8KAtjJCTKgJbczjMawKHdtjdKsbFnefYw6iFPXJTKFpfltAMHJFpEmpa1E0RriLIoIJgBhzILkJCDkV6Dy9bcLBAKEFGAkXIPWVqNajaKwfR1qLt5lTyM68QiAIAQBQ8JecF3paqQrzZlOtLZ6zZp5shBmx/88kiCIcGRB7WDtWqM212GenrkZhVsr4ebWLfY9EojkidGwXZ6T7NkBRtd1KXLZd/J7lobWn2RHK0SU9qgdbN7q9dor9am5m+zPVi+pnXN+d+P989xQJICZqBMfNhBi8mO8mqZW+/3z9eac79erl/g/P0F3/cf23+q+f+PH3fXOCvlaiVh51ECwYkVXKqq11V5Zv3fzx43pvbeWvkJ3GYvCOw7Xzlf3Hphqv/M/L3BVkyiyeVX4kIMgYLLK13Tn9uUXds4tTO3a1zy/uCjMiwBePkKb1X37X4HvydbbV16o7KgqYdgP+0wAARZWhGCrzZpaeffKC1ypyvTswit/9ae02Se+iyK8RGQ//R+9z7fe/NGCv3PuSPPg4edsYCHdMIp3sDrH5iY8/PiwzwXm6/OoY3NWBAJT0Z72Kow77145G2ysXt735LHlrz1f+XZ6Wq5wcPK3Xu2dbL/9s6cRhWgeOvplr+4tmJbAhoElgZCACHRfZ/jGnv4sez4pGJm6ArIxodWqyr5P6HXC5Ts33vgGKw+PPf7UT77+fOV82tdC6JO++OwF+ViwcuNz3VvXNxrzB4/qxsyJiucvsE6yCGayI6+Y4DhsaZ37qNc/uCnxRmsmwPYA0+0uh8Hat+69d+2NqZn56R1z+y/87Rm6mB4PxrDliVQdjr8l0523wi/01t7dZdrtjq7V5pTyD+lKdZ5IzbkHmocddHaneXqfPwCd3nOS4S2V5RyszshKju/2v2PNqukF163pXu0FnVWt67Ud0/tuz+3yXl764gSHpx0UGEnB45fk8eBm8KwNN3bb1mbVdjrKBoGGiY/Pu2uW7rH3/tF447xL3heOxztlC+Wcd5nj9m43LMDM8CrVqOLVTMWbCvzK9MrMdPXS33xp9PH5/wWCj7gy6NMW2QAAAABJRU5ErkJggg==
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
    catalogBatchSize: 6,   // lots priced concurrently on a catalog page (5-10)
    catalogTidy: true,     // strip page/tile noise on catalog pages
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

  /** Bare 2-dp amount, no currency symbol: "3.04", "1,234.56". */
  const plain = (n) => (n == null || !isFinite(n)) ? '—'
    : n.toLocaleString('en-CA', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const pct = (n) => (n == null || !isFinite(n)) ? '—' : `${n.toFixed(1)}%`;

  /** First float in a string, tolerating $ , and whitespace. */
  function num(s) {
    if (s == null) return null;
    const m = String(s).replace(/,/g, '').match(/-?\d+(?:\.\d+)?/);
    return m ? parseFloat(m[0]) : null;
  }

  const txt = (el) => (el && el.textContent ? el.textContent.trim() : '');

  /**
   * Normalise typography before any regex touches the text.
   *
   * Auctioneers paste from Word: "A 16% Buyer’s Premium" uses U+2019, not an
   * ASCII apostrophe. Matching only `'` silently missed the premium and fell
   * back to the 18% default, which quietly changed every bid ceiling on the
   * page. Non-breaking spaces break `\s`-based patterns the same way.
   */
  function normalise(s) {
    return String(s == null ? '' : s)
      // Line endings first. Some auctioneers separate description fields with a
      // bare CR: "Est. Retail Price: 67.00\rCondition: ...\rModel: ...". Splitting
      // on /\r?\n/ then yields ONE line, no fields parse, and the keyword scan
      // sees the raw labels — which flags every lot in the sale as parts-only.
      // The DOM path hides this because innerText converts CR to a line break;
      // the GraphQL payload does not.
      .replace(/\r\n?/g, '\n')
      .replace(/[‘’ʼ′]/g, "'")
      .replace(/[“”]/g, '"')
      .replace(/[–—]/g, '-')
      .replace(/[   ]/g, ' ');
  }

  /**
   * Many auctioneers write the description as a block of structured fields:
   *
   *     Est. Retail Price: 251.00
   *     Condition: BRAND NEW - OPEN BOX
   *     Model: NT-USB+
   *     Is Item Functional? Yes
   *     Is Item Damaged? No
   *     Missing Major Parts? No
   *
   * Returns { fields, free } where `free` is the prose with those lines removed.
   * Scanning the raw block for keywords is a trap: the *label* "Is Item
   * Damaged?" contains "damaged" and "Missing Major Parts?" contains "parts",
   * so a lot answering "No" to both looked broken.
   */
  const FIELD_LINE_RE = /^[ \t]*([^:?\n]{2,60}?)[ \t]*([:?])[ \t]*(.*)$/;

  function parseFields(text) {
    const fields = {};
    const freeLines = [];
    for (const line of normalise(text).split(/\r?\n/)) {
      const m = line.match(FIELD_LINE_RE);
      if (m && m[1].trim()) {
        const key = m[1].trim().toLowerCase().replace(/\s+/g, ' ');
        const value = m[3].trim();
        // "Label?" with no answer is not a field, it is prose.
        if (m[2] === '?' && !value) { freeLines.push(line); continue; }
        fields[key] = value;
      } else if (line.trim()) {
        freeLines.push(line);
      }
    }
    return { fields, free: freeLines.join('\n').trim() };
  }

  /**
   * Yes/No answer of a structured field: true, false, or null when the
   * auctioneer did not actually answer.
   *
   * "N/A" is the common answer for anything that isn't a powered device, and it
   * MUST come out as null. A previous `/^(no|n|false|none)\b/` read the "n" of
   * "n/a" as "no" — the `\b` matches before the slash — so shampoo, toothpaste
   * and drinking glasses marked "Condition: EXCELLENT" were reported as
   * non-functional and flagged parts-only.
   */
  function yesNo(value) {
    if (value == null) return null;
    const v = String(value).trim().toLowerCase();
    if (!v) return null;
    if (/^(?:n\s*\/\s*a|n\.\s*a\.?|not\s*applicable|unknown|unspecified|unable|untested|not\s*tested|tbd|maybe|\?)/.test(v)) return null;
    if (/^(?:y|yes|true|1)$/.test(v) || /^yes\b/.test(v)) return true;
    if (/^(?:n|no|false|0|none)$/.test(v) || /^no\b/.test(v)) return false;
    return null;
  }

  /** First present field among several aliases. */
  function field(fields, ...names) {
    for (const n of names) {
      if (Object.prototype.hasOwnProperty.call(fields, n)) return fields[n];
    }
    return null;
  }

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
    // normalise() first: "A 16% Buyer’s Premium" (curly apostrophe) otherwise
    // failed every premium pattern and silently fell back to the 18% default.
    const all = normalise(sources.filter(Boolean).join('\n\n'));
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

    /*
     * Credit-card surcharge, in either word order. The terms write it as
     * "A 2.4% credit card processing fee", but the auction's paymentInfo field
     * writes the same charge as "Credit card (2.4% processing fee applies)" —
     * percentage after the noun, which the first pattern cannot see.
     */
    const cardPatterns = [
      /(\d{1,2}(?:\.\d+)?)\s*%\s*(?:credit\s*)?card/i,
      /(?:credit\s*)?card[^.\n]{0,40}?(\d{1,2}(?:\.\d+)?)\s*%/i,
    ];
    for (const re of cardPatterns) {
      const card = all.match(re);
      if (!card) continue;
      const v = parseFloat(card[1]);
      if (v > 0 && v <= 10) {
        out.cardPct = v;
        out.cardSource = `parsed: "${card[0].trim()}"`;
        break;
      }
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

  /**
   * Condition values that mean the item is only good for spares.
   * The `Condition:` field is the auctioneer's own summary and is the primary
   * signal — far more reliable than keyword-scanning prose.
   */
  const CONDITION_PARTS_RE = /\b(for\s*parts|parts\s*only|salvage|broken|not\s*working|non[\s-]*functional|defective|scrap|damaged\s*beyond)\b/i;

  /** Condition values that assert the item is fine. These downgrade flags below. */
  const CONDITION_GOOD_RE = /\b(brand\s*new|new|sealed|excellent|like\s*new|mint|open\s*box|good|very\s*good)\b/i;

  function assessCondition(lotText) {
    const { fields, free } = parseFields(lotText || '');

    const damagedFlag = yesNo(field(fields, 'is item damaged', 'item damaged', 'damaged'));
    const missingFlag = yesNo(field(fields, 'missing major parts', 'missing parts', 'missing any parts'));
    const functionalFlag = yesNo(field(fields, 'is item functional', 'item functional', 'functional', 'working'));
    const conditionText = field(fields, 'condition') || '';

    // The auctioneer's own free-text explanations, which are the most useful
    // thing on the page when something is wrong. Their field name is sometimes
    // misspelled ("Damage Desct"), so match loosely.
    const damageDesc = field(fields, 'damage desct', 'damage desc', 'damage description', 'damage details') || '';
    const missingDesc = field(fields, 'missing parts desc', 'missing parts description', 'missing desc') || '';
    const notes = [field(fields, 'notes'), field(fields, 'note')].filter(Boolean).join(' ');

    const goodCondition = CONDITION_GOOD_RE.test(conditionText) && !CONDITION_PARTS_RE.test(conditionText);

    // Keyword scan sees the Condition value, the auctioneer's descriptions and
    // remaining prose — never the field labels.
    const scan = [conditionText, damageDesc, missingDesc, notes, free].filter(Boolean).join('\n');

    /*
     * Three severities, because collapsing them misleads in both directions:
     *
     *   partsOnly — spares only. Retail comparison is suppressed entirely.
     *   damaged   — real damage or missing pieces, but still a usable item.
     *               Warn loudly; keep the ceiling, since it still has value.
     *   cautions  — open box, used, untested. Worth knowing, not alarming.
     */
    const parts = [];
    if (CONDITION_PARTS_RE.test(conditionText)) {
      parts.push(`Condition: ${conditionText.trim()}`);
    }
    for (const p of PARTS_PATTERNS) {
      if (p.re.test([damageDesc, missingDesc, notes, free].filter(Boolean).join('\n'))) parts.push(p.label);
    }

    const damage = [];
    if (damagedFlag === true) {
      damage.push(damageDesc
        ? `auctioneer reports damage: "${damageDesc.trim()}"`
        : 'structured field: Is Item Damaged? = Yes');
    }
    if (missingFlag === true) {
      damage.push(missingDesc
        ? `parts missing: "${missingDesc.trim()}"`
        : 'structured field: Missing Major Parts? = Yes');
    }
    // "Is Item Functional? No" is only meaningful alongside other evidence:
    // for anything unpowered the honest answer is N/A, and some auctioneers
    // still type "No". On its own it is not proof of a fault.
    if (functionalFlag === false && (damage.length || parts.length || !goodCondition)) {
      damage.push('structured field: Is Item Functional? = No');
    }

    const positive = CONDITION_GOOD_RE.test(conditionText) ||
      POSITIVE_RE.test([notes, free].join('\n')) || functionalFlag === true;

    let cautions = CAUTION_PATTERNS.filter((p) => p.re.test(scan)).map((p) => p.label);
    if (positive) cautions = cautions.filter((c) => !/untested|not tested|used/.test(c));
    if (conditionText && !goodCondition && !CONDITION_PARTS_RE.test(conditionText)) {
      cautions.unshift(`condition: ${conditionText.trim().toLowerCase()}`);
    }

    /*
     * A positive Condition downgrades the boolean flags to cautions. "NEW
     * (ADJUSTED QUANTITY)" with "Missing Major Parts? Yes / One piece missing"
     * is a short-count new item, not a broken one — a skull banner there teaches
     * the user to ignore skull banners.
     */
    const partsOnly = parts.length > 0;
    const damagedOnly = !partsOnly && damage.length > 0 && !goodCondition;
    if (damage.length && (goodCondition || partsOnly)) cautions = damage.concat(cautions);

    return {
      partsOnly,
      partsReasons: [...new Set(parts)],
      damaged: damagedOnly,
      damageReasons: damagedOnly ? [...new Set(damage)] : [],
      cautions: [...new Set(cautions)],
      positive,
      condition: conditionText,
      fields,
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
  const MODEL_RE = /^[A-Za-z]{1,6}-?\d{1,6}[A-Za-z0-9+-]*$/;

  /**
   * Hyphenated model codes with no digits at all: NT-USB+, XLR-M, SM-BH.
   * MODEL_RE requires a digit run, so these read as ordinary words and the
   * search query lost the token that actually identifies the product.
   */
  const MODEL_ALT_RE = /^[A-Za-z]{1,6}-[A-Za-z0-9+.]{2,12}$/;

  /** Capacity/spec tokens that materially move price: 32GB, 2TB, 1TB. */
  const CAPACITY_RE = /^\d+(?:\.\d+)?(?:gb|tb|mb)$/i;

  /**
   * Values auctioneers type into "Model:" that identify nothing. "A-Series" is
   * a real example: the lot was an MSI B550M PRO-VDH, and trusting that field
   * turned the search into "MSI A-Series".
   */
  const GENERIC_MODEL_RE = /^(?:n\/?a|none|null|nil|unknown|unspecified|various|assorted|misc(?:ellaneous)?|standard|generic|regular|default|see\s*(?:photos?|pictures?|description)|no\s*model|model|[a-z]\s*-?\s*series|series|multiple)$/i;

  /** Does this string look like a model code at all? */
  function looksLikeModel(s) {
    const t = String(s || '').trim();
    if (t.length < 2 || t.length > 24) return false;
    if (GENERIC_MODEL_RE.test(t)) return false;
    return /\d/.test(t) || MODEL_ALT_RE.test(t);
  }

  /** Lowercase alphanumeric runs: "MSI PRO Z890-S" -> ['msi','pro','z890','s']. */
  const compactTokens = (s) =>
    String(s == null ? '' : s).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim().split(' ').filter(Boolean);

  /**
   * Does `title` contain `model` as a whole token or run of tokens?
   *
   * A plain substring test on de-hyphenated text is not good enough: model
   * "A-Series" compacts to "aseries", which appears inside "Core Ultra Series 2"
   * ("ultr-aseries"), so an Intel LGA1851 board matched an AM4 lot. Matching a
   * contiguous run of WHOLE tokens keeps "WF-1000XM5" == "WF1000XM5" working
   * while refusing matches that start mid-word.
   */
  function modelMatches(title, model) {
    const target = String(model || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    if (!target) return false;
    const toks = compactTokens(title);
    for (let i = 0; i < toks.length; i++) {
      let acc = '';
      for (let j = i; j < toks.length; j++) {
        acc += toks[j];
        if (acc.length > target.length) break;
        if (acc === target) return true;
      }
    }
    return false;
  }

  /**
   * Turn a HiBid lead/description into (a) a human product name and
   * (b) a tight retail search query.
   *
   * Leads look like:
   *   "Retail $328.00 | Sony WF-1000XM5 The Best Truly Wireless ... , Black"
   *   "$650 CORSAIR Vengeance DDR5 32GB (2x16GB) 6000MHz"
   *
   * Descriptions are sometimes prose and sometimes a pure block of structured
   * fields with no product name in them at all:
   *
   *   Est. Retail Price: 251.00
   *   Condition: BRAND NEW - OPEN BOX
   *   Model: NT-USB+
   *
   * In that case the name has to come from the Lead, and `Model:` is a better
   * model token than anything guessable from the title.
   */
  function extractProduct(lead, description) {
    const leadText = normalise(lead || '').trim();
    const { fields, free } = parseFields(description || '');

    // Prose from the description, if there is any; otherwise fall back to the
    // Lead. Previously a structured-only description produced an empty name and
    // an empty search query, which left every retail link unpopulated.
    const descProse = free
      .split(/\n\s*\*{2,}/)[0]
      .replace(/\r/g, ' ')
      .replace(/\n+/g, ' ')
      .trim();

    const source = descProse.length > leadText.length ? descProse : (leadText || descProse);
    let s = source;

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

    // Last resort: never return an empty name just because the description was
    // all structured fields and the lead was missing.
    let fullName = named.replace(/\s*-\s*$/, '').trim();
    if (fullName.length < 3) fullName = leadText || normalise(description || '').split('\n')[0].trim();

    // --- build the search query --------------------------------------------
    // A trailing "+" is part of the model on plenty of products (NT-USB+,
    // Pixel 9 Pro+), so it survives token cleaning.
    const tokens = fullName.split(/[\s,;/]+/).filter(Boolean);
    const cleaned = tokens
      .map((t) => t.replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9+-]+$/g, ''))
      .filter((t) => t && !NOISE_WORDS.has(t.toLowerCase()) && !/^\$?[\d.,]+$/.test(t));

    const brand = cleaned[0] || '';

    /*
     * Model selection, in confidence order:
     *
     *   1. a "Model:" field that the title corroborates  — best of both
     *   2. a model token from the title itself           — the title is the
     *                                                      identity a buyer sees
     *   3. an uncorroborated, plausible "Model:" field   — better than nothing
     *
     * Trusting the field outright (as v0.3.0 did) is wrong: "Model: A-Series" on
     * an MSI B550M PRO-VDH lot turned the query into "MSI A-Series".
     */
    const statedModel = (field(fields, 'model', 'model #', 'model number', 'mpn') || '').trim();
    const titleModel = cleaned.find((t) => MODEL_RE.test(t) && !/^\d+$/.test(t)) ||
      cleaned.find((t) => MODEL_ALT_RE.test(t));

    const statedOk = looksLikeModel(statedModel);
    const model = (statedOk && modelMatches(fullName, statedModel) ? statedModel : null) ||
      titleModel ||
      (statedOk ? statedModel : null);

    // A distinct secondary model token, e.g. PRO-VDH alongside B550M.
    const model2 = cleaned.find((t) => t !== model &&
      t.toLowerCase() !== String(model || '').toLowerCase() &&
      t.toLowerCase() !== brand.toLowerCase() &&
      MODEL_ALT_RE.test(t) && !GENERIC_MODEL_RE.test(t)) || null;

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
      // A second model-ish token materially narrows the search for products
      // whose family name alone is ambiguous: "MSI B550M" matches a dozen
      // boards, "MSI B550M PRO-VDH" is the one in the lot.
      if (model2 && !parts.some((x) => x.toLowerCase() === model2.toLowerCase())) parts.push(model2);
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
      model2,
      tokens: cleaned.slice(0, 10),
    };
  }

  /** Retail price the auctioneer themselves embedded in the listing. */
  function extractStatedRetail(lead, description, estimateText) {
    const hay = normalise([lead, description].filter(Boolean).join('\n'));
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

  /*
   * Accessory head-nouns. The component-part entries (baffle, shield, backplate,
   * bracket, standoff…) matter as much as the phone-case ones: a "rear baffle for
   * MSI B550M PRO-VDH" matches the brand and the model perfectly and costs $15,
   * so it will happily pose as the retail price of a $120 motherboard.
   */
  const ACCESSORY_NOUN_RE = /\b(case|cover|sleeve|skin|pouch|protector|tips|eartips|cable|charger|adapter|mount|holder|stand|strap|band|bumper|shell|film|dock|lanyard|clip|baffle|shield|backplate|back\s*plate|faceplate|bracket|standoffs?|screws?|screw\s*kit|thermal\s*pad|riser|extender|gasket|grommet|spacer|shroud|bezel|decal|sticker|manual)\b/i;
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

    // The model is mandatory when known, and must match on token boundaries.
    if (product.model) {
      if (modelMatches(raw, product.model)) score += 5; else return 0;
    }
    // A second model-ish token (B550M PRO-VDH) is a strong confirmation but not
    // mandatory — retailers often word it differently.
    if (product.model2 && modelMatches(raw, product.model2)) score += 2;
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
  /*
   * Reject candidates far below the auctioneer's own stated retail.
   *
   * Accessories are the dominant source of wrong matches and they are always
   * dramatically cheaper than the thing they attach to: a $15 rear baffle for a
   * $120 motherboard, a $27 case for $328 earbuds. Both match brand and model
   * perfectly, so text scoring alone cannot separate them — but an order-of-
   * magnitude price gap can.
   *
   * Deliberately generous (30%) so a genuinely good find still passes, and only
   * applied when the auctioneer gave a figure to compare against. Failing here
   * yields "no retail price", never a wrong one.
   */
  const PRICE_FLOOR_RATIO = 0.30;

  function priceFloor(product) {
    const stated = product && product.statedRetail;
    return (stated && isFinite(stated) && stated > 0) ? stated * PRICE_FLOOR_RATIO : 0;
  }

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
        .filter((x) => (x.p.salePrice || x.p.regularPrice || 0) >= priceFloor(product))
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
        .filter((x) => x.price >= priceFloor(product))
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

  /**
   * In-flight lookups, keyed exactly like the cache.
   *
   * A catalog page routinely lists the same product several times — two
   * identical curling irons, three of the same headset. The 12h cache only helps
   * once a result has landed, so without this two tiles in the same batch each
   * fire their own pair of provider requests for an identical query.
   */
  const inflight = new Map();

  /** Run the enabled providers and return every quote we managed to get. */
  async function lookupRetail(product) {
    // The price floor is part of the identity of a result: the same query under
    // a different stated retail can legitimately filter differently.
    const cacheKey = `retail:${product.query.toLowerCase()}|f${Math.round(priceFloor(product))}`;
    const cached = Cache.get(cacheKey);
    if (cached) { log('cache hit', cacheKey); return cached; }
    if (inflight.has(cacheKey)) { log('joined in-flight', cacheKey); return inflight.get(cacheKey); }

    const promise = lookupRetailUncached(product, cacheKey);
    inflight.set(cacheKey, promise);
    try {
      return await promise;
    } finally {
      inflight.delete(cacheKey);
    }
  }

  async function lookupRetailUncached(product, cacheKey) {
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
    // Cheapest wins; on a tie prefer a plain "new" over "new (marketplace)",
    // since a first-party listing is the more defensible retail reference.
    return pool.reduce((a, b) => {
      if (b.price < a.price) return b;
      if (b.price > a.price) return a;
      return (b.condition === 'new' && a.condition !== 'new') ? b : a;
    });
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

    /* ---- Summary panel -------------------------------------------------
       Palette lifted from HiBid: brand blue #266296, near-black #212529,
       their orange #e65100. Money leaving your pocket is orange. */
    .${NS}-panel{--hes-blue:#266296;--hes-ink:#0d1b28;--hes-line:rgba(255,255,255,.13);
      --hes-dim:#9db4c9;--hes-orange:#ff9a3c;
      background:linear-gradient(160deg,#0d1b28 0%,#14283b 62%,#173352 100%);
      color:#eaf2f9;border-radius:10px;padding:16px 18px 14px;margin:0 0 12px;
      border-left:6px solid var(--hes-blue);
      box-shadow:0 3px 14px rgba(13,27,40,.28);
      font-family:Inter,system-ui,-apple-system,"Segoe UI",sans-serif;}
    .${NS}-panel-good{border-left-color:#2e9e5b;}
    .${NS}-panel-warn{border-left-color:var(--hes-orange);}
    .${NS}-panel-bad{border-left-color:#e53935;
      background:linear-gradient(160deg,#2a0f14 0%,#3b1419 60%,#4a1a1f 100%);}
    .${NS}-panel-neutral{border-left-color:var(--hes-blue);}

    .${NS}-panel-head{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin-bottom:2px;}
    .${NS}-verdict{font-size:12px;font-weight:800;letter-spacing:1.1px;text-transform:uppercase;
      color:#cfe2f2;}
    .${NS}-panel-good .${NS}-verdict{color:#7ee2a8;}
    .${NS}-panel-warn .${NS}-verdict{color:var(--hes-orange);}
    .${NS}-panel-bad .${NS}-verdict{color:#ff8a80;}
    .${NS}-panel-sub{font-size:12.5px;color:var(--hes-dim);}

    .${NS}-hero{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;margin:2px 0 12px;}
    .${NS}-hero-label{font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;
      color:var(--hes-dim);}
    .${NS}-hero-value{font-size:40px;line-height:1.05;font-weight:800;letter-spacing:-.5px;
      color:var(--hes-orange);font-variant-numeric:tabular-nums;}
    .${NS}-panel-bad .${NS}-hero-value{color:#ff7043;}

    .${NS}-sumtable{width:100%;border-collapse:collapse;font-size:13.5px;}
    .${NS}-sumtable th,.${NS}-sumtable td{padding:6px 10px 6px 0;text-align:left;vertical-align:baseline;
      border-bottom:1px solid var(--hes-line);}
    .${NS}-sumtable tr:last-child th,.${NS}-sumtable tr:last-child td{border-bottom:0;}
    .${NS}-sumtable th{font-weight:600;color:var(--hes-dim);white-space:nowrap;width:34%;}
    .${NS}-num{font-weight:700;font-variant-numeric:tabular-nums;white-space:nowrap;width:22%;color:#f4f9fd;}
    .${NS}-num-accent{color:var(--hes-orange);font-size:16px;font-weight:800;}
    .${NS}-tr-accent th{color:#e6f0f8;font-weight:800;text-transform:uppercase;letter-spacing:.6px;font-size:12px;}
    .${NS}-sumtable .${NS}-note{color:var(--hes-dim);font-size:12.5px;white-space:normal;}
    .${NS}-panel-notes{margin-top:10px;font-size:12.5px;color:var(--hes-dim);}
    .${NS}-panel .${NS}-links{margin-top:12px;}
    .${NS}-panel .${NS}-chip{background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.22);
      color:#dbe9f6;}
    .${NS}-panel .${NS}-chip:hover{background:rgba(255,255,255,.16);border-color:#fff;}
    .${NS}-panel code{background:rgba(255,255,255,.1);color:#e8f1f8;padding:0 4px;border-radius:3px;}
    .${NS}-panel strong{color:#fff;}

    /* Compact table reused inside the "Bid guidance" info row (light context). */
    .${NS}-mini{border-collapse:collapse;font-size:13px;margin:2px 0 4px;}
    .${NS}-mini th{text-align:left;font-weight:600;color:#4a5b6b;padding:3px 12px 3px 0;white-space:nowrap;}
    .${NS}-mini td{padding:3px 0;font-weight:700;font-variant-numeric:tabular-nums;color:#16283b;}
    .${NS}-mini .${NS}-mini-accent{color:#e65100;font-size:15px;}
    .${NS}-mini .${NS}-mini-note{font-weight:400;color:#6b7c8c;font-size:12px;padding-left:12px;}

    /* ---- Catalog tiles -------------------------------------------------- */
    .${NS}-final{color:#e65100;font-weight:800;white-space:nowrap;}
    .${NS}-final-est{border-bottom:1px dashed currentColor;cursor:help;opacity:.85;}
    /* 11px next to a truck icon was missed entirely in use: bigger, ringed, and
       with a background on the base class so an unresolved dot is still visible. */
    .${NS}-ind{display:inline-block;width:15px;height:15px;border-radius:50%;
      margin:0 6px 0 2px;vertical-align:-2px;cursor:help;flex:0 0 auto;background:#b0bec5;
      box-shadow:0 0 0 2px #fff,0 0 0 3px rgba(13,27,40,.30);}
    /* Pinned like the truck icon, on the positioned ancestor that is not clipped. */
    .${NS}-ind-abs{position:absolute;top:4px;right:1px;margin:0;z-index:3;}
    .${NS}-ind-abs.${NS}-ind-shift{right:26px;}
    .${NS}-ind-green{background:#2e9e5b;}
    .${NS}-ind-yellow{background:#f4c20d;}
    .${NS}-ind-orange{background:#f97316;}
    .${NS}-ind-red{background:#e53935;}
    .${NS}-ind-na{background:#b0bec5;}
    .${NS}-ind-parts{background:#4a1420;box-shadow:0 0 0 2px rgba(229,57,53,.55);}
    .${NS}-ind-pending{background:linear-gradient(45deg,#38bdf8,#a855f7);animation:${NS}-pulse 1.2s infinite;}

    /* ---- Catalog chrome -------------------------------------------------
       Hiding is done in CSS, not inline styles: Angular re-renders these nodes
       constantly and an inline style set before a re-render is simply lost (the
       share link reappeared exactly that way). A stylesheet rule cannot be
       re-rendered away, and it costs no per-tile DOM writes. */
    body.${NS}-tidy app-notice{display:none !important;}
    body.${NS}-tidy a.share-link{display:none !important;}
    body.${NS}-tidy app-lot-tile app-thumbnail,
    body.${NS}-tidy .lot-tile app-thumbnail{display:none !important;}
    /* Hiding the image alone leaves its reserved space behind: the thumbnail
       column is a fixed 150px and the tile body has min-height:296px, so the
       tile stayed 368px tall with a blank hole in it. Collapse the column and
       release the floor, which is the whole point of removing the photo. */
    body.${NS}-tidy app-lot-tile .lot-thumbnail-live-catalog,
    body.${NS}-tidy .lot-tile .lot-thumbnail-live-catalog{display:none !important;}
    body.${NS}-tidy app-lot-tile .lot-tile-content,
    body.${NS}-tidy .lot-tile .lot-tile-content{min-height:0 !important;height:auto !important;}
    body.${NS}-tidy app-lot-tile .watch-container,
    body.${NS}-tidy .lot-tile .watch-container{display:none !important;}

    .${NS}-hidden{display:none !important;}
    .${NS}-auction-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;}
    .${NS}-auction-actions .${NS}-moved-btn{margin:0;flex:0 1 auto;}
    .${NS}-footer{margin:28px 0 12px;padding:14px 16px;border-radius:10px;
      background:#f5f7f9;border:1px solid #dde4ea;font-family:Inter,system-ui,sans-serif;}
    .${NS}-foot-title{font-size:12px;font-weight:800;letter-spacing:.9px;text-transform:uppercase;
      color:#5b6f80;margin-bottom:6px;}
    .${NS}-foot-note{margin:4px 0;}
    .${NS}-foot-note>summary{cursor:pointer;color:#266296;font-weight:600;font-size:13.5px;}
    .${NS}-foot-note>summary:hover{text-decoration:underline;}
    .${NS}-foot-body{margin:6px 0 10px;font-size:13px;line-height:1.55;color:#31414f;
      white-space:pre-wrap;max-height:340px;overflow:auto;}

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

  /**
   * The summary panel: one dark card that answers "what do I bid, and what will
   * it really cost me", with the decision as the largest thing on screen.
   *
   * Palette is taken from HiBid itself (brand blue #266296, near-black #212529,
   * their existing orange #e65100) so it reads as part of the site rather than
   * a bolted-on widget. Money that leaves your pocket is orange; everything else
   * is blue-grey.
   */
  function summaryPanel({ tone, verdict, heroLabel, heroValue, heroNote, rows, notes, links }) {
    const table = el('table', { class: `${NS}-sumtable` }, [
      el('tbody', {}, rows.filter(Boolean).map((r) => el('tr', { class: r.accent ? `${NS}-tr-accent` : null }, [
        el('th', { text: r.label }),
        el('td', { class: `${NS}-num${r.accent ? ` ${NS}-num-accent` : ''}`, html: r.value }),
        el('td', { class: `${NS}-note`, html: r.note || '' }),
      ]))),
    ]);

    return el('div', { class: `${NS}-panel ${NS}-panel-${tone}` }, [
      el('div', { class: `${NS}-panel-head` }, [
        el('span', { class: `${NS}-verdict`, text: verdict }),
        heroNote ? el('span', { class: `${NS}-panel-sub`, html: heroNote }) : null,
      ]),
      el('div', { class: `${NS}-hero` }, [
        el('span', { class: `${NS}-hero-label`, text: heroLabel }),
        el('span', { class: `${NS}-hero-value`, text: heroValue }),
      ]),
      table,
      notes && notes.length
        ? el('div', { class: `${NS}-panel-notes`, html: notes.filter(Boolean).join('<br>') })
        : null,
      links || null,
    ]);
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
    } else if (cond.damaged) {
      /*
       * Damaged or incomplete, but not scrap. Red banner with the auctioneer's
       * own words, and deliberately distinct from parts-only: the item still
       * has value, so the ceiling stays -- it just must not be priced as new.
       */
      host.cond.appendChild(banner('danger', '⚠️ DAMAGED / INCOMPLETE — read before bidding', [
        el('p', { html: `The lot's own description reports: ` +
          `${cond.damageReasons.map((r) => `<em>${r}</em>`).join(', ')}.` +
          (cond.condition ? ` Condition: <strong>${cond.condition}</strong>.` : '') }),
        el('p', { html: 'The retail figure below is for a <strong>new</strong> unit, so treat the ' +
          'discount as optimistic and check the photos.' }),
      ]));
    } else if (cond.cautions.length) {
      host.cond.appendChild(banner('warn', '⚠️ Condition caveats in this lot’s description', [
        el('p', { html: `Flagged: ${cond.cautions.map((c) => `<em>${c}</em>`).join(', ')}.` +
          (cond.positive ? ' The description also claims it was tested / works.' : '') }),
      ]));
    }

    const cell = injectRetailRow(rows, product);
    const stated = extractStatedRetail(lead, description, estimateText);
    // Lets the providers reject candidates an order of magnitude too cheap.
    if (stated) product.statedRetail = stated.value;

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

    // ---- summary panel ---------------------------------------------------
    host.verdict.textContent = '';

    const links = el('div', { class: `${NS}-links` }, retailLinks(product, best, stated));
    const feeNote = [
      `${fees.premiumPct}% premium`,
      fees.cardPct ? `${fees.cardPct}% card` : null,
      fees.perItemFee ? `${money(fees.perItemFee)} handling` : null,
      `${fees.taxPct}% tax`,
    ].filter(Boolean).join(' &middot; ');

    const provisional = pending && !best && stated
      ? 'Provisional — using the auctioneer&rsquo;s unverified figure while live prices load.'
      : (pending ? 'Checking live retail prices&hellip;' : null);

    if (cond.partsOnly) {
      /*
       * No retail-derived ceiling for a parts-only lot: a working unit's price
       * is not a valid comparison for a broken one, and printing "GOOD DEAL"
       * under a parts-only warning is what gets someone to bid on junk. The
       * final cost is still shown, because that part is true either way.
       */
      if (nextCost) {
        host.verdict.appendChild(summaryPanel({
          tone: 'warn',
          verdict: 'Parts-only lot — no ceiling recommended',
          heroLabel: 'Final cost at next bid',
          heroValue: money(nextCost.total),
          heroNote: 'Value it as spares, not as a working unit.',
          rows: [
            { label: 'Next bid (hammer)', value: money(next) },
            { label: 'Fees & tax', value: `+ ${money(nextCost.total - next)}`, note: feeNote },
            { label: 'Final cost', value: money(nextCost.total), note: 'what you actually pay', accent: true },
          ],
          notes: ['No retail comparison is shown for a parts-only lot — decide what the spares are worth to you.'],
          links,
        }));
      }
    } else if (retail && nextCost && nextDisc != null) {
      const tone = nextDisc < CFG.warnBelowDiscountPct ? 'bad'
        : nextDisc >= CFG.targetDiscountPct ? 'good' : 'warn';
      const verdict = tone === 'bad' ? `Bad deal — only ${pct(nextDisc)} under retail`
        : tone === 'good' ? `Good deal — ${pct(nextDisc)} under retail`
        : `Marginal — ${pct(nextDisc)} under retail`;

      const overCeiling = maxBid != null && next > maxBid;

      // The hero is the decision. On a bad deal the decision is "stop", so the
      // final cost you are about to pay is the number that belongs in 40px.
      const hero = tone === 'bad'
        ? { label: 'Final cost at next bid', value: money(nextCost.total) }
        : { label: `Max bid for ${CFG.targetDiscountPct}% off`, value: money(maxBid) };

      host.verdict.appendChild(summaryPanel({
        tone,
        verdict,
        heroLabel: hero.label,
        heroValue: hero.value,
        heroNote: tone === 'bad'
          ? (maxBid != null
            ? `A brand-new one is <strong>${money(retail)}</strong>. Do not bid above <strong>${money(maxBid)}</strong>.`
            : `A brand-new one is <strong>${money(retail)}</strong>.`)
          : `Highest hammer whose final cost still lands ${CFG.targetDiscountPct}% under retail.`,
        rows: [
          { label: 'Retail (new)', value: money(retail), note: retailSource },
          { label: 'Next bid (hammer)', value: money(next),
            note: overCeiling ? '<strong>already past your ceiling</strong>' : 'current cost of entry' },
          { label: 'Fees & tax', value: `+ ${money(nextCost.total - next)}`, note: feeNote },
          { label: 'Final cost', value: money(nextCost.total),
            note: `${pct(nextDisc)} under retail`, accent: true },
          maxBid != null
            ? { label: `Max bid (${CFG.targetDiscountPct}% off)`, value: money(maxBid),
                note: overCeiling ? 'exceeded — stop bidding'
                  : `headroom ${money(Math.max(0, maxBid - next))}` }
            : null,
          warnBidFor(retail, fees, large, increments) != null
            ? { label: 'Walk away above', value: money(warnBidFor(retail, fees, large, increments)),
                note: `below this you keep at least ${CFG.warnBelowDiscountPct}% off` }
            : null,
        ],
        notes: [provisional, fees.notes.length ? fees.notes.join(' ') : null],
        links,
      }));
    } else if (!retail) {
      host.verdict.appendChild(summaryPanel({
        tone: 'neutral',
        verdict: pending ? 'Checking retail prices' : 'No retail price found',
        heroLabel: nextCost ? 'Final cost at next bid' : 'Final cost',
        heroValue: nextCost ? money(nextCost.total) : '—',
        heroNote: pending
          ? `Looking up <code>${product.query || product.name}</code>&hellip;`
          : `Could not price <em>${product.name}</em>. The fee maths below is still accurate.`,
        rows: [
          next != null ? { label: 'Next bid (hammer)', value: money(next) } : null,
          nextCost ? { label: 'Fees & tax', value: `+ ${money(nextCost.total - next)}`, note: feeNote } : null,
          nextCost ? { label: 'Final cost', value: money(nextCost.total),
            note: 'what you actually pay', accent: true } : null,
        ],
        notes: [
          pending ? null : 'No bid ceiling can be computed without a retail price — check the links yourself.',
          errors && errors.length ? `Lookup issues: ${errors.join('; ')}` : null,
        ],
        links,
      }));
    }

    return true;
  }

  /** Hammer price at which the deal stops clearing the red-warning floor. */
  function warnBidFor(retail, fees, large, increments) {
    const h = maxHammerFor(retail, CFG.warnBelowDiscountPct, fees, { large });
    return h != null ? floorToIncrement(h, increments) : null;
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

  /** Insert a "Bid guidance" row: the same numbers, compact, on a light row. */
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

    const line = (label, value, note, accent) => el('tr', {}, [
      el('th', { text: label }),
      el('td', { class: accent ? `${NS}-mini-accent` : null, html: value }),
      el('td', { class: `${NS}-mini-note`, html: note || '' }),
    ]);

    const feeNote = [
      `${d.fees.premiumPct}% BP`,
      d.fees.cardPct ? `${d.fees.cardPct}% card` : null,
      d.fees.perItemFee ? `${money(d.fees.perItemFee)} handling` : null,
      `${d.fees.taxPct}% tax`,
    ].filter(Boolean).join(' + ');

    if (d.cond.partsOnly) {
      td.appendChild(el('div', { class: `${NS}-over`, html:
        '<strong>💀 Parts-only lot — no ceiling recommended.</strong> Value it as spares.' }));
      if (d.nextCost) {
        td.appendChild(el('table', { class: `${NS}-mini` }, [el('tbody', {}, [
          line('Next bid', money(d.next)),
          line('Fees & tax', `+ ${money(d.nextCost.total - d.next)}`, feeNote),
          line('Final cost', money(d.nextCost.total), 'what you actually pay', true),
        ])]));
      }
      appendFeeProvenance(td, d);
      return;
    }

    const body = [];
    if (d.maxBid != null) {
      const over = d.next != null && d.next > d.maxBid;
      body.push(line(`Max bid (${CFG.targetDiscountPct}% off)`, money(d.maxBid),
        over ? '<strong>exceeded — stop bidding</strong>'
             : `headroom ${money(Math.max(0, d.maxBid - (d.next || 0)))}`, true));
      const warnBid = warnBidFor(d.retail, d.fees, d.large, d.increments);
      if (warnBid != null) {
        body.push(line('Walk away above', money(warnBid),
          `only ${CFG.warnBelowDiscountPct}% off beyond this`));
      }
    }
    if (d.nextCost) {
      body.push(line('Next bid', money(d.next), 'current cost of entry'));
      body.push(line('Fees & tax', `+ ${money(d.nextCost.total - d.next)}`, feeNote));
      body.push(line('Final cost', money(d.nextCost.total),
        d.nextDisc != null ? `${pct(d.nextDisc)} under retail` : 'what you actually pay',
        d.maxBid == null));
    }
    if (!body.length) {
      td.appendChild(el('div', { class: `${NS}-spin`, text: 'No retail price — cannot compute a ceiling.' }));
    } else {
      td.appendChild(el('table', { class: `${NS}-mini` }, [el('tbody', {}, body)]));
    }

    if (d.pending) {
      td.appendChild(el('div', {}, [
        el('span', { class: `${NS}-dot` }),
        el('span', { class: `${NS}-spin`, text:
          ' Provisional — based on the auctioneer’s stated retail. Verifying against live prices…' }),
      ]));
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
  // SECTION 16 — HiBid GraphQL (same-origin; public data needs no auth)
  // ===========================================================================

  /*
   * A catalog page renders 100 lot tiles that carry only a title and the current
   * bid. Everything needed to price a lot — the description with "Est. Retail
   * Price", "Condition" and "Model" — sits behind the same GraphQL endpoint the
   * app itself uses, so two POSTs replace 100 page fetches.
   *
   * Introspection is blocked; both operations below were derived from the app's
   * own requests and verified against a live catalog. Neither needs a token.
   */
  const GQL = {
    endpoint: () => `${location.origin}/graphql`,

    async post(operationName, query, variables) {
      const r = await http({
        method: 'POST',
        url: GQL.endpoint(),
        headers: { 'content-type': 'application/json', accept: 'application/json' },
        data: JSON.stringify({ operationName, query, variables }),
      });
      const body = JSON.parse(r.responseText);
      if (body.errors && body.errors.length) {
        throw new Error(`graphql: ${body.errors.map((e) => e.message).join('; ').slice(0, 200)}`);
      }
      return body.data;
    },

    /** Lots by event-item id. pageLength caps at 100 server-side. */
    async lots(ids) {
      const query = 'query HesLots($ids: [Int!], $pageNumber: Int!, $pageLength: Int!) {' +
        ' lotSearch(input: {eventItemIds: $ids, status: ALL}, pageNumber: $pageNumber, pageLength: $pageLength) {' +
        ' pagedResults { results { id lead description estimate lotNumber } } } }';
      const out = [];
      for (let i = 0; i < ids.length; i += 100) {
        const data = await GQL.post('HesLots', query, {
          ids: ids.slice(i, i + 100), pageNumber: 1, pageLength: 100,
        });
        const results = (((data || {}).lotSearch || {}).pagedResults || {}).results || [];
        out.push(...results);
      }
      return out;
    },

    /** The auction's fee text. A catalog page never renders it. */
    async auctionTerms(auctionId) {
      /*
       * Field names were found by asking for candidates and reading the
       * "Cannot query field X on type 'Auction'" errors, since introspection is
       * blocked. What each is actually worth, measured on auction 764522:
       *
       *   termsAndConditions     the real source — "A 16% Buyer's Premium",
       *                          "$1.50 handling fee per item", "2.4% credit card".
       *   paymentInfo            often repeats the card surcharge.
       *   shippingAndPickupInfo  carries the pickup address ("London, Ontario"),
       *                          the most reliable province signal for sales tax.
       *                          A catalog page shows no address at all.
       *   buyerPremium           frequently useless prose: "Please see Terms and
       *                          Conditions".
       *   buyerPremiumRate       a multiplier, and unreliable — reads 1.0 (0%) on
       *                          this auction while the terms say 16%. Used only
       *                          as a last resort, and only when plausible.
       */
      const query = 'query HesAuction($id: Int!) { auction(id: $id) {' +
        ' id termsAndConditions buyerPremium buyerPremiumRate paymentInfo' +
        ' shippingAndPickupInfo auctionNotice biddingNotice } }';
      const data = await GQL.post('HesAuction', query, { id: auctionId });
      const a = (data || {}).auction || {};
      return {
        text: [
          a.termsAndConditions, a.buyerPremium, a.paymentInfo,
          a.shippingAndPickupInfo, a.auctionNotice, a.biddingNotice,
        ].filter(Boolean).join('\n\n'),
        // 1.16 means 16%; 1.0 means "not populated".
        rate: (typeof a.buyerPremiumRate === 'number' &&
               a.buyerPremiumRate > 1.0 && a.buyerPremiumRate < 1.5)
          ? (a.buyerPremiumRate - 1) * 100
          : null,
      };
    },
  };

  // ===========================================================================
  // SECTION 17 — Catalog / lot-list page
  // ===========================================================================

  /**
   * Deal indicator colour from the ratio of final cost to the new price.
   * Under half price is the goal; at three-quarters of retail an auction lot is
   * not worth bidding on once fees and tax are counted.
   */
  function indicatorFor(ratio) {
    if (ratio == null || !isFinite(ratio)) return { cls: 'na', label: 'no retail price found' };
    if (ratio < 0.50) return { cls: 'green', label: 'great' };
    if (ratio < 0.65) return { cls: 'yellow', label: 'good' };
    if (ratio < 0.75) return { cls: 'orange', label: 'marginal' };
    return { cls: 'red', label: 'poor' };
  }

  const Catalog = {
    _done: null,

    auctionId() {
      const m = location.pathname.match(/\/(?:catalog|auction)\/(\d+)/i);
      return m ? Number(m[1]) : null;
    },

    /** One entry per rendered lot tile. */
    tiles() {
      return Array.from(document.querySelectorAll('app-lot-tile, .lot-tile')).map((node) => {
        const link = node.querySelector('a[href*="/lot/"]');
        const id = link ? Number((link.getAttribute('href').match(/\/lot\/(\d+)/) || [])[1]) : null;
        return {
          node,
          id,
          title: txt(node.querySelector('h2.lot-title, .lot-title')),
          amountEl: node.querySelector('.TileDisplayMinBid'),
          leadHost: node.querySelector('.live-catalog-lot-lead-container'),
          shipIcon: node.querySelector('i.shipping-indicator, i.fa-truck'),
        };
      }).filter((t) => t.id && t.node);
    },

    /**
     * "Bid 1.00 CAD" -> "Bid 1.00 (3.04) CAD", idempotently.
     *
     * Just the number in brackets: the currency and the "Bid" label are already
     * on the button, so repeating "Final $" three times per tile across 100 tiles
     * is noise. The bracketed figure reads as "and this is what it really costs".
     */
    setFinal(tile, cost, estimated) {
      const host = tile.amountEl;
      if (!host || !cost) return;

      let tag = host.querySelector(`.${NS}-final`);
      if (!tag) {
        /*
         * Rebuild the span once as "1.00 <span/> CAD". The original numbers are
         * preserved verbatim and the button's attributes and handlers are never
         * touched — this is a label, not the bid mechanism.
         */
        const m = txt(host).match(/^([\d,]+(?:\.\d+)?)\s*([A-Za-z]{3})?\s*$/);
        if (!m) return;
        host.textContent = '';
        host.appendChild(document.createTextNode(`${m[1]} `));
        tag = el('span', { class: `${NS}-final` });
        host.appendChild(tag);
        if (m[2]) host.appendChild(document.createTextNode(` ${m[2]}`));
      }
      tag.textContent = `(${plain(cost.total)})`;
      if (estimated) {
        tag.classList.add(`${NS}-final-est`);
        tag.title = 'Estimated: this auction’s terms could not be read, so the ' +
          `fallback ${CFG.fallbackPremiumPct}% premium was used instead of its real fees.`;
      }
    },

    /**
     * Coloured dot pinned beside the shipping icon.
     *
     * It has to be *positioned*, not merely inserted after the truck. The truck
     * is `position:absolute; top:4px; right:0`, so putting the dot after it in
     * DOM order drops it into normal flow below the title — measured at y=933,
     * inside a container that ends at y=930 and has `overflow:hidden`. The dot
     * was rendering correctly and being clipped out of sight every time.
     *
     * So it gets the truck's own treatment: absolute, attached to
     * `.lot-lead-heading` (the positioned ancestor), which sits outside the
     * overflow:hidden lead container and is therefore never clipped.
     */
    setIndicator(tile, info) {
      const anchor = tile.node.querySelector('.lot-lead-heading') || tile.leadHost || tile.node;
      if (!anchor) return;

      // Sit just left of the truck when there is one, otherwise take its place.
      const base = `${NS}-ind ${NS}-ind-abs` + (tile.shipIcon ? ` ${NS}-ind-shift` : '');

      let dot = tile.node.querySelector(`.${NS}-ind`);
      if (!dot) {
        dot = el('span', { class: base });
        anchor.appendChild(dot);
      }

      if (info.pending) {
        dot.className = `${base} ${NS}-ind-pending`;
        dot.title = 'HiBid Enhancer: checking retail price…';
        return;
      }
      if (info.partsOnly) {
        dot.className = `${base} ${NS}-ind-parts`;
        dot.title = '\u{1F480} Parts only — not priced against a working unit';
        return;
      }

      const ind = indicatorFor(info.ratio);
      dot.className = `${base} ${NS}-ind-${ind.cls}`;
      dot.title = info.ratio == null
        ? `No retail price found — final cost ${info.cost ? money(info.cost.total) : '—'}`
        : `${pct(info.disc)} off retail (${ind.label})` +
          `\nFinal cost ${money(info.cost.total)} vs ${money(info.retail)} new` +
          (info.source ? ` at ${info.source}` : '') +
          (info.damaged ? '\n⚠ lot reports damage — retail is for a new unit' : '') +
          (info.feesEstimated ? '\n⚠ fees estimated — this auction’s terms could not be read' : '');
    },

    async enhance() {
      const tiles = Catalog.tiles();
      if (!tiles.length) return false;

      /*
       * Angular re-renders constantly, and a re-render drops our injected nodes.
       * Keying on the tile set alone therefore leaves the page permanently bare
       * after the first re-render, so also require that our marks still exist.
       */
      const key = tiles.map((t) => t.id).join(',');
      const stillMarked = document.querySelector(`.${NS}-final, .${NS}-ind`);
      if (Catalog._done === key && stillMarked) return true;
      Catalog._done = key;

      Loader.show();
      try {
        Tidy.page();
        const auctionId = Catalog.auctionId();
        const ids = tiles.map((t) => t.id);

        // Fees and all 100 descriptions in parallel: two requests total.
        const [terms, lots] = await Promise.all([
          auctionId
            ? GQL.auctionTerms(auctionId).catch((e) => {
                warn('terms:', e.message); return { text: '', rate: null };
              })
            : Promise.resolve({ text: '', rate: null }),
          GQL.lots(ids).catch((e) => { warn('lots:', e.message); return []; }),
        ]);
        const termsText = terms.text || '';

        const fees = parseFees([termsText, (document.body.innerText || '').slice(0, 4000)]);
        /*
         * If the terms could not be fetched, every final price on the page comes
         * from the fallback premium. On a measured run that was $1.33 instead of
         * $3.04 - a 2.3x error - with nothing on screen to say so. Catalog tiles
         * have no room for the detail page's fee-provenance panel, so mark the
         * number as estimated rather than presenting a guess as fact.
         */
        /*
         * Only if the terms text yielded no premium do we fall back — and even
         * then buyerPremiumRate beats a blind default, because it is at least
         * this auction's own number rather than a global guess.
         */
        if (/fallback/.test(fees.premiumSource || '') && terms.rate != null) {
          fees.premiumPct = terms.rate;
          fees.premiumSource = `auction.buyerPremiumRate (${terms.rate}%)`;
          fees.notes = fees.notes.filter((n) => !/premium/i.test(n));
        }
        const feesEstimated = /fallback/.test(fees.premiumSource || '');
        if (feesEstimated) warn('auction terms unavailable - final prices use fallback fees');
        const byId = new Map(lots.map((l) => [l.id, l]));

        // ---- pass 1: final price on every tile, zero network per lot ------
        const work = [];
        const costByBucket = new Map();
        for (const tile of tiles) {
          const lot = byId.get(tile.id) || {};
          const lead = lot.lead || tile.title || '';
          const description = lot.description || '';
          const cond = assessCondition([lead, description].join('\n'));
          const large = isLargeItem(`${lead}\n${description}`);
          /*
           * Bucket by (bid, large-item): on a catalog page sorted by bid count,
           * dozens of lots sit at the same opening bid, and the fee stack is
           * identical for all of them. One allIn() per distinct bucket instead
           * of one per tile — on the measured page that is 100 tiles collapsing
           * to a handful of computations.
           */
          const next = num(txt(tile.amountEl));
          let cost = null;
          if (next != null) {
            const bucket = `${next}|${large ? 'L' : ''}`;
            if (!costByBucket.has(bucket)) costByBucket.set(bucket, allIn(next, fees, { large }));
            cost = costByBucket.get(bucket);
          }

          Tidy.tile(tile);
          Catalog.setFinal(tile, cost, feesEstimated);
          Catalog.setIndicator(tile, { pending: true });

          const product = extractProduct(lead, description);
          const stated = extractStatedRetail(lead, description, lot.estimate || '');
          if (stated) product.statedRetail = stated.value;
          work.push({ tile, product, stated, cond, cost, next, large });
        }

        // ---- pass 2: retail lookups, in small batches --------------------
        const size = Math.max(1, Math.min(20, CFG.catalogBatchSize || 6));
        let priced = 0;
        for (let i = 0; i < work.length; i += size) {
          if (Catalog._done !== key) return true;  // navigated away mid-sweep
          await Promise.all(work.slice(i, i + size).map(async (w) => {
            let best = null;
            if (!w.cond.partsOnly && w.product.query) {
              try {
                best = pickBest((await lookupRetail(w.product)).quotes);
              } catch (e) { /* fall back to the auctioneer's own figure */ }
            }
            const retail = best ? best.price : (w.stated ? w.stated.value : null);
            const ratio = (retail && w.cost) ? w.cost.total / retail : null;
            if (ratio != null) priced++;
            Catalog.setIndicator(w.tile, {
              ratio,
              disc: ratio == null ? null : (1 - ratio) * 100,
              cost: w.cost,
              retail,
              source: best ? best.provider : (w.stated ? 'auctioneer’s figure' : null),
              partsOnly: w.cond.partsOnly,
              damaged: w.cond.damaged,
              feesEstimated,
            });
          }));
          // Be a polite client between batches.
          if (i + size < work.length) await new Promise((r) => setTimeout(r, 350));
        }
        log(`catalog: ${priced}/${work.length} lots priced`);
        return true;
      } finally {
        Loader.hide();
      }
    },
  };


  // ===========================================================================
  // SECTION 18 — Catalog chrome: strip noise, surface what matters
  // ===========================================================================

  /*
   * A catalog page spends most of its vertical space on things you read once —
   * two notice blocks, a share link, a print link — and repeats per-lot furniture
   * 100 times: a thumbnail, a Watch control, the word "Lot" before every number.
   * None of that helps you compare 100 lots, and all of it pushes the numbers
   * that do below the fold.
   *
   * Everything here HIDES rather than removes. Angular owns these nodes and will
   * re-render them; deleting them fights change detection and can blank a tile.
   * Hiding is also reversible from the settings menu.
   */
  const Tidy = {
    /** Page-level chrome. Runs once per page, idempotent. */
    page() {
      if (!CFG.catalogTidy) return;

      // One class switch does all the static hiding; see the stylesheet.
      document.body.classList.add(`${NS}-tidy`);

      // These three genuinely need JS: moving nodes, copying notice text out
      // before it is hidden, and identifying the icon-only print control.
      Tidy.moveAuctionButtons();
      Tidy.demoteNotices();
      Tidy.hidePrint();
    },

    /**
     * Auction Details / Registered buttons belong next to the auction's status,
     * not floating in their own block.
     */
    moveAuctionButtons() {
      const badge = document.querySelector('.auction-lot-badge');
      if (!badge) return;
      const strip = Tidy.ensure(badge.parentElement, `${NS}-auction-actions`, 'div');
      if (!strip) return;

      document.querySelectorAll('a.auction-btn').forEach((btn) => {
        if (btn.closest(`.${NS}-auction-actions`)) return;      // already moved
        if (!txt(btn)) return;                                   // icon-only (print)
        btn.classList.add(`${NS}-moved-btn`);
        strip.appendChild(btn);
      });
    },

    /**
     * The Bidding and Auction notices are read once and then cost a screenful on
     * every visit. Collapse them to links at the foot of the page, keeping the
     * full text one click away — hiding information outright would be worse than
     * the clutter.
     */
    demoteNotices() {
      const notices = Array.from(document.querySelectorAll('app-notice'))
        .filter((n) => txt(n) && !n.dataset[`${NS}Demoted`]);
      if (!notices.length) return;

      const foot = Tidy.footer();
      if (!foot) return;

      for (const notice of notices) {
        const raw = txt(notice);
        const label = (raw.split('\n')[0] || 'Notice').replace(/:\s*$/, '').trim();
        const body = raw.slice(label.length).replace(/^:\s*/, '').trim();

        notice.dataset[`${NS}Demoted`] = '1';   // CSS hides it; this stops re-copying

        foot.appendChild(el('details', { class: `${NS}-foot-note` }, [
          el('summary', { text: label }),
          el('div', { class: `${NS}-foot-body`, text: body }),
        ]));
      }
    },

    /**
     * Share and Print are page furniture. Note the per-lot bid buttons also carry
     * the class "print", so matching on that class alone would remove the bid
     * button from all 100 tiles — target the auction-level controls only.
     */
    hidePrint() {
      document.querySelectorAll('a.auction-btn').forEach((n) => {
        if (n.classList.contains(`${NS}-moved-btn`)) return;
        const label = `${txt(n)} ${n.getAttribute('title') || ''} ${n.getAttribute('aria-label') || ''}`;
        if (!txt(n) || /print|share/i.test(label)) n.classList.add(`${NS}-hidden`);
      });
    },

    /** Per-tile furniture: thumbnail, Watch control, the redundant "Lot" word. */
    tile(tile) {
      if (!CFG.catalogTidy) return;

      /*
       * The thumbnail and Watch control are hidden by the stylesheet, which also
       * stops the images downloading: HiBid already sets loading="lazy" on 101 of
       * 104 images, and a lazy image inside a display:none subtree never enters
       * the viewport, so the fetch never fires. Measured: 0 lot images requested
       * after enhancement, against ~100 without it.
       */

      // "Lot 9712" -> "9712". Only the text needs JS.
      const numEl = tile.node.querySelector('.text-primary.fw-bold');
      if (numEl && !numEl.dataset[`${NS}Trimmed`]) {
        const m = txt(numEl).match(/^lot\s+(.+)$/i);
        if (m) {
          numEl.textContent = m[1];
          numEl.dataset[`${NS}Trimmed`] = '1';
        }
      }
    },

    /** A single footer container for demoted content, created on demand. */
    footer() {
      let foot = document.getElementById(`${NS}-footer`);
      if (foot) return foot;
      const anchor = document.querySelector('app-lot-tile, .lot-tile');
      const host = anchor ? (anchor.closest('.container, .row, main, body') || document.body) : document.body;
      foot = el('div', { id: `${NS}-footer`, class: `${NS}-footer` }, [
        el('div', { class: `${NS}-foot-title`, text: 'Auction notices' }),
      ]);
      host.appendChild(foot);
      return foot;
    },

    /** Get-or-create a child container with a marker class. */
    ensure(parent, cls, tag) {
      if (!parent) return null;
      let node = parent.querySelector(`.${cls}`);
      if (!node) {
        node = el(tag || 'div', { class: cls });
        parent.appendChild(node);
      }
      return node;
    },
  };

  // ===========================================================================
  // SECTION 14 — Page router + SPA navigation
  // ===========================================================================

  function pageKind() {
    const p = location.pathname;
    if (/^\/lot\//i.test(p)) return 'detail';
    if (/^\/(?:catalog|auction)\//i.test(p)) return 'catalog';
    if (/^\/lots\b/i.test(p) || /^\/search\b/i.test(p)) return 'search';
    return 'other';
  }

  const PAGES = {
    detail: enhanceDetail,
    catalog: () => Catalog.enhance(),
    // Search results reuse the same tile markup, so the catalog pass fits.
    search: () => Catalog.enhance(),
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
      const k = pageKind();
      if (k === 'detail' && !document.querySelector('app-information-panel')) return;
      if ((k === 'catalog' || k === 'search') && !document.querySelector('app-lot-tile, .lot-tile')) return;
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
      modelMatches, looksLikeModel, compactTokens, priceFloor, isAccessoryListing,
      Providers, pickBest, lookupRetail,
      setHttp: (fn) => { HTTP = fn || gmHttp; },
      setConfig: (patch) => { CFG = Object.assign({}, CFG, patch); },
    };
  }

  watch();
})();
