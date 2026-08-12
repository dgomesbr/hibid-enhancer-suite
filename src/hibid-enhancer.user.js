// ==UserScript==
// @name         HiBid Enhancer Suite
// @namespace    https://github.com/dgomesbr/hibid-enhancer-suite
// @version      0.12.0
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

  /*
   * Bump when the matching rules change, to retire quotes chosen under the old
   * ones. Cached prices survive a script update, so after the accessory fixes a
   * lot still showed "$47.84 TPM module" from a pre-fix lookup — the fix was in
   * place and reached nobody until the cache aged out. Epoch 2 = post-accessory
   * rules (v0.8.0/0.8.1: "for <product>" without a noun, component-part nouns,
   * the 30%-of-stated-retail floor).
   */
  const CACHE_EPOCH = 2;

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
    catalogHideImages: false, // true = no lot photos at all (they then never load)
    bidsBatchSize: 8,      // lots priced concurrently on a bids page
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
    key: (k) => `${NS}:cache:${CACHE_EPOCH}:${k}`,
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

    /** Drop entries written under an older matching epoch. */
    sweepOldEpochs() {
      const keep = `${NS}:cache:${CACHE_EPOCH}:`;
      let n = 0;
      try {
        for (const k of GM_listValues()) {
          if (k.startsWith(`${NS}:cache:`) && !k.startsWith(keep)) { GM_deleteValue(k); n++; }
        }
      } catch (_) { /* storage unavailable */ }
      if (n) log(`retired ${n} cached quote(s) from an older matching epoch`);
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
  const ACCESSORY_NOUN_RE = /\b(case|cover|sleeve|skin|pouch|protector|tips|eartips|cable|charger|adapter|mount|holder|stand|strap|band|bumper|shell|film|dock|lanyard|clip|baffle|shield|backplate|back\s*plate|faceplate|bracket|standoffs?|screws?|screw\s*kit|thermal\s*pad|riser|extender|gasket|grommet|spacer|shroud|bezel|decal|sticker|manual|module|chip|header|jumper|ribbon|harness|insert)\b/i;
  const ACCESSORY_MARKER_RE = /\b(compatible\s+with|replacement\s+for|designed\s+for|made\s+for|for\s+use\s+with|fits\s+(?:the\s+)?[A-Z0-9])/i;
  /** "…for <this product>" — the marker verbs, without the noun requirement. */
  const FOR_PRODUCT_VERBS = 'compatible\\s+with|replacement\\s+(?:part\\s+)?for|designed\\s+for' +
    '|made\\s+for|for\\s+use\\s+with|fits|suitable\\s+for|upgrade\\s+for';
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

    /*
     * Signal 0, and the strongest: the listing says it is FOR this product.
     *
     * "IFIXAI TPM 2.0 Module SPI 12PIN ... Replacement for MSI B550M PRO-VDH" is
     * a $48 TPM chip, not a $120 motherboard, and it got through because this
     * function used to demand an accessory noun before it would even look at the
     * marker — and "Module" was not on the noun list. It never will be complete.
     * A listing that names this product as its target is an accessory whatever
     * noun it happens to use, so no noun is required here.
     *
     * The verbs alone would be too loose — "Designed for Gaming" is a motherboard
     * feature — so the verb must be followed, within a few words, by this
     * product's own brand or model.
     */
    const ident = [product.brand, product.model, product.model2]
      .filter(Boolean)
      .map((x) => escapeRe(x).replace(/[-\s]/g, '[-\\s]?'))
      .join('|');
    if (ident) {
      const forProduct = new RegExp(
        `\\b(?:${FOR_PRODUCT_VERBS})\\s+(?:the\\s+)?[^,;.]{0,40}?(?:${ident})`, 'i');
      if (forProduct.test(t)) return true;
    }

    const noun = ACCESSORY_NOUN_RE.exec(t);
    if (!noun) return false;

    // Signal 1 — a bare marker alongside an accessory noun.
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

  /**
   * The cache key for a product. The price floor is part of the identity of a
   * result: the same query under a different stated retail can legitimately
   * filter differently.
   */
  function retailCacheKey(product) {
    return `retail:${product.query.toLowerCase()}|f${Math.round(priceFloor(product))}`;
  }

  /**
   * The cached answer for a product, or null — without touching the network.
   *
   * Lets a caller find out whether a lookup is free before deciding how to
   * schedule it. The catalog sweep uses this to separate the lots it already
   * knows about from the ones it has to fetch, which is worth about six seconds
   * on a page whose quotes are all cached.
   */
  function cachedRetail(product) {
    if (!product || !product.query) return null;
    return Cache.get(retailCacheKey(product));
  }

  /** Run the enabled providers and return every quote we managed to get. */
  async function lookupRetail(product) {
    const cacheKey = retailCacheKey(product);
    const cached = Cache.get(cacheKey);
    /*
     * `cached: true` lets callers skip the politeness delay. A cache hit made no
     * request, so pacing it slows the page for nobody's benefit — the same
     * mistake that cost 6.6s of a warm catalog sweep.
     */
    if (cached) { log('cache hit', cacheKey); return Object.assign({}, cached, { cached: true }); }
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
    /* ---- The decision, and the numbers under it -------------------------
       One dark box for the max bid, then a light table for everything that
       justifies it, both inside the single lot-details card. The dark box is
       what makes the decision separable at a glance from its evidence. */
    .${NS}-banners{margin:10px 0 4px;}

    .${NS}-decision-wrap{--hes-blue:#266296;--hes-dim:#9db4c9;--hes-orange:#ff9a3c;
      font-family:Inter,system-ui,-apple-system,"Segoe UI",sans-serif;}
    /* Columns chosen to line up with the support table underneath, whose th is
       32% and whose figure column is 22%, minus this box's own padding. */
    .${NS}-decision{display:grid;grid-template-columns:minmax(96px,27%) minmax(96px,20%) 1fr;
      align-items:center;gap:0 12px;
      background:linear-gradient(160deg,#0d1b28 0%,#14283b 62%,#173352 100%);
      color:#eaf2f9;border-radius:9px;padding:9px 14px;margin:0 0 10px;
      border-left:6px solid var(--hes-blue);box-shadow:0 2px 10px rgba(13,27,40,.22);}
    /* One column on a phone, where three would be three words wide each. */
    @media (max-width:640px){
      .${NS}-decision{grid-template-columns:1fr;gap:2px;}
    }
    .${NS}-decision-good{border-left-color:#2e9e5b;}
    .${NS}-decision-warn{border-left-color:var(--hes-orange);}
    .${NS}-decision-bad{border-left-color:#e53935;
      background:linear-gradient(160deg,#2a0f14 0%,#3b1419 60%,#4a1a1f 100%);}
    .${NS}-decision-neutral{border-left-color:var(--hes-blue);}

    .${NS}-hero-label{font-size:11.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;
      color:var(--hes-dim);line-height:1.25;}
    .${NS}-hero-value{font-size:34px;line-height:1.05;font-weight:800;letter-spacing:-.5px;
      color:var(--hes-orange);font-variant-numeric:tabular-nums;white-space:nowrap;}
    .${NS}-decision-bad .${NS}-hero-value{color:#ff7043;}
    .${NS}-decision-why{display:flex;flex-direction:column;gap:1px;min-width:0;}
    .${NS}-verdict{font-size:12px;font-weight:800;letter-spacing:1.1px;text-transform:uppercase;
      color:#cfe2f2;}
    .${NS}-decision-good .${NS}-verdict{color:#7ee2a8;}
    .${NS}-decision-warn .${NS}-verdict{color:var(--hes-orange);}
    .${NS}-decision-bad .${NS}-verdict{color:#ff8a80;}
    .${NS}-panel-sub{font-size:12.5px;color:var(--hes-dim);}
    .${NS}-decision code{background:rgba(255,255,255,.1);color:#e8f1f8;padding:0 4px;border-radius:3px;}
    .${NS}-decision strong{color:#fff;}

    /* The supporting table is light: it belongs to the card, not to the dark box. */
    .${NS}-support{width:100%;border-collapse:collapse;font-size:13px;}
    .${NS}-support th,.${NS}-support td{padding:4px 10px 4px 0;text-align:left;
      vertical-align:baseline;border-bottom:1px solid #eef3f8;}
    .${NS}-support tr:last-child th,.${NS}-support tr:last-child td{border-bottom:0;}
    .${NS}-support th{font-weight:600;color:#6b7c8c;white-space:nowrap;width:32%;}
    .${NS}-num{font-weight:700;font-variant-numeric:tabular-nums;white-space:nowrap;
      width:22%;color:#16283b;}
    .${NS}-num-accent{color:#e65100;font-size:15px;font-weight:800;}
    .${NS}-tr-accent th{color:#16283b;font-weight:800;text-transform:uppercase;
      letter-spacing:.5px;font-size:11.5px;}
    .${NS}-support .${NS}-note{color:#7b8c9c;font-size:12px;white-space:normal;}
    .${NS}-panel-notes{margin-top:8px;font-size:12px;color:#6b7c8c;}
    .${NS}-decision-wrap .${NS}-links{margin:10px 0 2px;}
    /* A rule between the decision and the detail that supports it. Scoped to the
       non-empty case so a lot with no decision to show gets no stray line. */
    .${NS}-card-body > #${NS}-decision:not(:empty){
      padding-bottom:7px;margin-bottom:8px;border-bottom:1px solid #e5edf4;}

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
    /*
     * Lot photos: shown, but compact.
     *
     * They were hidden outright in v0.7.0, which had a consequence worth
     * recording: a lazy image inside a display:none subtree never enters the
     * viewport, so it never loads. Hiding the container did not merely hide the
     * photos, it guaranteed they could never appear. Now the column is kept and
     * shrunk from 150px to 96px, which keeps most of the density win while you
     * can still see what you are bidding on.
     *
     * Set catalogHideImages to true for the old no-photo behaviour.
     */
    body.${NS}-tidy app-lot-tile .lot-thumbnail-live-catalog,
    body.${NS}-tidy .lot-tile .lot-thumbnail-live-catalog{
      height:auto !important;min-height:0 !important;flex:0 0 auto;}
    body.${NS}-tidy app-lot-tile .img-thumbnail-container,
    body.${NS}-tidy .lot-tile .img-thumbnail-container{
      height:96px !important;min-height:0 !important;}
    body.${NS}-tidy app-lot-tile .img-thumbnail-container img,
    body.${NS}-tidy .lot-tile .img-thumbnail-container img{
      max-height:96px !important;width:auto !important;object-fit:contain;}

    /* Releasing the tile's 296px floor is what actually shortens it. */
    body.${NS}-tidy app-lot-tile .lot-tile-content,
    body.${NS}-tidy .lot-tile .lot-tile-content{min-height:0 !important;height:auto !important;}

    /* Opt-in: hide photos entirely (also stops them downloading). */
    body.${NS}-tidy.${NS}-noimg app-lot-tile app-thumbnail,
    body.${NS}-tidy.${NS}-noimg .lot-tile app-thumbnail,
    body.${NS}-tidy.${NS}-noimg app-lot-tile .lot-thumbnail-live-catalog,
    body.${NS}-tidy.${NS}-noimg .lot-tile .lot-thumbnail-live-catalog{display:none !important;}
    body.${NS}-tidy app-lot-tile .watch-container,
    body.${NS}-tidy .lot-tile .watch-container{display:none !important;}

    .${NS}-hidden{display:none !important;}

    /* ---- Auction header box --------------------------------------------- */
    body.${NS}-tidy .${NS}-head-img{display:none !important;}
    body.${NS}-tidy .${NS}-auction-head{align-items:flex-start;}
    body.${NS}-tidy .${NS}-auction-main{padding-right:20px;}

    /*
     * Equalise the right-hand stack. The controls are not siblings: app-auction-status
     * is a WRAPPER holding two badges inside .mb-3 divs, so styling the wrapper as
     * a single item produced the mismatch it was meant to fix (heights
     * 148/38/38/38/78/38, widths 247/168/168/168/114/247).
     *
     * Flatten every wrapper with display:contents so each real control becomes a
     * direct flex child of the column, then give the controls one uniform pill.
     */
    body.${NS}-tidy .${NS}-auction-side{display:flex;flex-direction:column;gap:6px;}
    body.${NS}-tidy .${NS}-auction-side app-auction-status,
    body.${NS}-tidy .${NS}-auction-side app-shipping-type,
    body.${NS}-tidy .${NS}-auction-side .${NS}-auction-actions,
    body.${NS}-tidy .${NS}-auction-side .mb-3{display:contents !important;}

    body.${NS}-tidy .${NS}-auction-side .auction-lot-badge,
    body.${NS}-tidy .${NS}-auction-side .shipping-type-badge,
    body.${NS}-tidy .${NS}-auction-side .auction-btn{
      display:flex !important;align-items:center;gap:9px;width:100% !important;
      box-sizing:border-box;min-height:40px;max-height:40px;margin:0 !important;
      padding:9px 12px;border-radius:8px;font-size:14px;line-height:1.2;
      justify-content:flex-start;text-align:left;white-space:nowrap;overflow:hidden;}

    body.${NS}-tidy .${NS}-auction-side .auction-lot-badge,
    body.${NS}-tidy .${NS}-auction-side .shipping-type-badge{
      background:#f2f5f8;border:1px solid #dde4ea;color:#31414f;}
    body.${NS}-tidy .${NS}-auction-side .auction-lot-badge.bid-open{
      background:#e7f5ec;border-color:#b8e2c8;color:#175c33;font-weight:700;}

    /* Clamp the blurb to three lines, click or button to expand. */
    body.${NS}-tidy .${NS}-clamp{display:-webkit-box;-webkit-line-clamp:3;
      -webkit-box-orient:vertical;overflow:hidden;}
    body.${NS}-tidy .${NS}-clamp.${NS}-expanded{display:block;-webkit-line-clamp:unset;overflow:visible;}
    body.${NS}-tidy .${NS}-more{background:none;border:0;padding:2px 0;margin-top:2px;
      color:#266296;font-weight:600;font-size:13px;cursor:pointer;font-family:inherit;}
    body.${NS}-tidy .${NS}-more:hover{text-decoration:underline;}

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

    /* ---- Light cards ---------------------------------------------------
       The dark summary panel above answers "what do I bid". Everything else
       on the page is reference material, so it gets the quiet light card:
       same HiBid blue, no gradient, no shadow to speak of. */
    .${NS}-card{--hes-blue:#266296;--hes-edge:#d8e2ec;--hes-quiet:#7b8c9c;
      border:1px solid var(--hes-edge);border-radius:10px;background:#fff;margin:0 0 14px;
      box-shadow:0 1px 3px rgba(13,27,40,.06);overflow:hidden;color:#212529;
      font-family:Inter,system-ui,-apple-system,"Segoe UI",sans-serif;}
    .${NS}-card-head{display:flex;align-items:center;justify-content:space-between;gap:8px 14px;
      flex-wrap:wrap;padding:8px 14px;border-bottom:1px solid #e5edf4;
      background:linear-gradient(90deg,#eff5fa 0%,#fbfdff 100%);}
    .${NS}-card-title{font-size:12px;font-weight:800;letter-spacing:.9px;text-transform:uppercase;
      color:#1d4a72;}
    .${NS}-card-sub{font-size:12px;color:#6b7c8c;overflow-wrap:anywhere;}
    .${NS}-card-body{padding:11px 14px 12px;}
    /* The one box that carries the decision, so it earns the brand edge. */
    .${NS}-card-lead{border-top:3px solid var(--hes-blue);margin-top:10px;}
    /* The condition banners live inside it now; theirs is the only margin needed. */
    .${NS}-card-body > #${NS}-cond:empty{display:none;}
    .${NS}-card-body > #${NS}-cond .${NS}-banner{margin:0 0 10px;}

    .${NS}-facts{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:9px 20px;}
    .${NS}-fact{min-width:0;}
    .${NS}-fact-k{display:block;font-size:10.5px;font-weight:700;letter-spacing:.7px;
      text-transform:uppercase;color:var(--hes-quiet,#7b8c9c);}
    .${NS}-fact-v{display:block;font-size:13.5px;font-weight:600;color:#16283b;overflow-wrap:anywhere;}
    .${NS}-fact-v a{color:#266296;}

    .${NS}-chips{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 10px;}
    .${NS}-tag{display:inline-flex;align-items:baseline;gap:5px;padding:2px 9px;border-radius:12px;
      font-size:11.5px;font-weight:700;border:1px solid transparent;white-space:nowrap;}
    .${NS}-tag i{font-style:normal;font-weight:600;opacity:.75;font-size:10.5px;
      text-transform:uppercase;letter-spacing:.5px;}
    .${NS}-tag-ok{background:#e6f6ec;border-color:#a9dcbd;color:#17552a;}
    .${NS}-tag-warn{background:#fff5e0;border-color:#f0d190;color:#7a4a00;}
    .${NS}-tag-bad{background:#fdecec;border-color:#f0b4b4;color:#8c1c1c;}
    .${NS}-tag-mute{background:#f1f5f9;border-color:#d5dee7;color:#42556a;}

    .${NS}-block{border-top:1px solid #eef3f8;margin-top:11px;padding-top:9px;}
    .${NS}-block-title{font-size:10.5px;font-weight:800;letter-spacing:.8px;text-transform:uppercase;
      color:#7b8c9c;margin-bottom:3px;}

    .${NS}-fold{margin-top:8px;}
    .${NS}-fold > summary{cursor:pointer;font-size:12.5px;font-weight:600;color:#266296;
      list-style:none;display:inline-flex;align-items:center;gap:6px;}
    .${NS}-fold > summary::-webkit-details-marker{display:none;}
    .${NS}-fold > summary::before{content:'▸';font-size:11px;transition:transform .15s;}
    .${NS}-fold[open] > summary::before{content:'▾';}
    .${NS}-fold-body{margin-top:6px;padding:9px 11px;background:#fafcfe;border-left:3px solid #cddceb;
      border-radius:0 6px 6px 0;font-size:13px;line-height:1.55;color:#33475b;
      white-space:pre-wrap;max-height:300px;overflow:auto;}

    /* Buttons for the auction / auctioneer box. Outline by default so the
       page keeps exactly one filled primary action: HiBid's own Bid button. */
    .${NS}-btns{display:flex;flex-wrap:wrap;gap:8px;margin-top:11px;}
    .${NS}-abtn{display:inline-flex;align-items:center;gap:6px;padding:6px 13px;border-radius:8px;
      font-size:12.5px;font-weight:600;text-decoration:none;cursor:pointer;
      border:1px solid #bcd0e2;color:#1d4a72;background:#fff;font-family:inherit;line-height:1.5;}
    .${NS}-abtn:hover{background:#266296;border-color:#266296;color:#fff;text-decoration:none;}
    .${NS}-abtn-primary{background:#266296;border-color:#266296;color:#fff;}
    .${NS}-abtn-primary:hover{background:#1b4a73;border-color:#1b4a73;}

    /* ---- Notices, demoted to the bottom of the page --------------------- */
    .${NS}-notices{margin:16px 0 10px;padding-top:10px;border-top:1px solid #e3ebf3;
      font-family:Inter,system-ui,-apple-system,"Segoe UI",sans-serif;}
    .${NS}-notices-hint{font-size:11px;font-weight:700;letter-spacing:.7px;text-transform:uppercase;
      color:#8b9aa8;margin-bottom:7px;}
    .${NS}-notice{margin:0 0 6px;}
    .${NS}-notice > summary{cursor:pointer;list-style:none;display:inline-flex;align-items:center;gap:6px;
      font-size:12.5px;font-weight:700;color:#8c1c1c;padding:3px 11px;border:1px solid #eccccc;
      border-radius:14px;background:#fdf6f6;}
    .${NS}-notice > summary::-webkit-details-marker{display:none;}
    .${NS}-notice > summary:hover{background:#fbecec;border-color:#c62828;}
    .${NS}-notice[open] > summary{background:#fbecec;border-color:#c62828;}
    .${NS}-notice-body{margin:7px 0 4px;padding:10px 12px;border-left:3px solid #c62828;
      background:#fffafa;font-size:13px;line-height:1.55;color:#4a3535;max-height:320px;overflow:auto;}
    .${NS}-notice-body p{margin:0 0 6px;}

    /* ---- Lot detail layout ---------------------------------------------
       Everything below is scoped to body.${NS}-detail, which is set only on a
       lot page and removed on navigation, so a stray rule can never leak into
       a catalog or search page.

       Nothing here moves an Angular node. The reordering is flex order on
       nodes Angular owns, and the blocks that move to the bottom box are
       hidden and rebuilt from their own hrefs. Angular's change detection sees
       the tree it rendered, unchanged. */
    body.${NS}-detail .lot-details-container > .row:first-child{flex-direction:column;flex-wrap:nowrap;}
    body.${NS}-detail .lot-details-container > .row:first-child > [class*="col-md-4"]{order:1;}
    body.${NS}-detail .lot-details-container > .row:first-child > [class*="col-md-8"]{order:2;padding-bottom:0!important;}
    body.${NS}-detail .lot-details-container > .row:first-child > [class*="col-md-"]{
      flex:0 0 auto;width:100%;max-width:100%;}
    /* Same rules keyed on content instead of position, so anything that ends up
       inserted ahead of the gallery row cannot quietly undo the reorder. Its own
       declaration because :has() is not everywhere yet. */
    body.${NS}-detail .lot-details-container > .row:has(app-lot-image-gallery){
      flex-direction:column;flex-wrap:nowrap;}
    body.${NS}-detail .lot-details-container > .row:has(app-lot-image-gallery) > [class*="col-md-4"]{order:1;}
    body.${NS}-detail .lot-details-container > .row:has(app-lot-image-gallery) > [class*="col-md-8"]{
      order:2;padding-bottom:0!important;}
    body.${NS}-detail .lot-details-container > .row:has(app-lot-image-gallery) > [class*="col-md-"]{
      flex:0 0 auto;width:100%;max-width:100%;}
    /* Full width would blow the gallery up to 1200px tall on a desktop. */
    body.${NS}-detail app-lot-image-gallery{display:block;max-width:900px;margin:0 auto;}

    /* The subpanel becomes one horizontal bid strip: watch, then price, then
       the Bid button pinned right. */
    body.${NS}-detail app-lot-details-subpanel{display:flex;flex-wrap:wrap;align-items:center;
      gap:8px 18px;background:#f4f9fc;border:1px solid #dbe6f0;border-radius:10px;
      padding:9px 14px;margin:0 0 14px;}
    body.${NS}-detail app-lot-details-subpanel > *{margin:0!important;}
    body.${NS}-detail app-lot-details-subpanel .lot-high-bid{font-size:16px;}
    body.${NS}-detail app-lot-details-subpanel app-lot-buttons{margin-left:auto!important;}
    body.${NS}-detail app-lot-details-subpanel .lot-bid-button{min-width:150px;}

    /* Hiding the relocated blocks is done twice on purpose. The class is set
       once per run; the selectors below keep them hidden through an Angular
       re-render that replaces the nodes and takes our class with them.
       :has() lives in its own rule so a browser without it loses only these
       two lines instead of the whole declaration block. */
    body.${NS}-detail .${NS}-relocated{display:none!important;}
    /* The auctioneer's own banner. See hideAuctionBanner for why this is a
       separate class and why JS has to decide when to apply it. */
    body.${NS}-detail .${NS}-hide-banner{display:none!important;}
    body.${NS}-detail .${NS}-hide-banner-host{padding-top:0!important;padding-bottom:0!important;
      min-height:0!important;}
    body.${NS}-detail app-lot-details-subpanel > app-share,
    body.${NS}-detail app-lot-details-subpanel > .lot-auction-date-container{display:none!important;}
    body.${NS}-detail app-lot-details-subpanel > div:has(> app-city-state-zip-link),
    body.${NS}-detail app-lot-details-subpanel > div:has(> app-auctioneer-info){display:none!important;}
    /* Only hide HiBid's Information accordion once our own card is actually on
       the page — otherwise the fallback still renders the retail row in it. */
    body.${NS}-detail.${NS}-card-live .panel-group > app-collapse-panel:has(app-information-panel){
      display:none!important;}
    /* Inside the card the retail cell's shopping links sit a few hundred pixels
       under an identical set in the summary panel. Suppressed here only; on the
       table fallback they are the only copy on the page. */
    body.${NS}-detail.${NS}-card-live #${NS}-retail-cell > .${NS}-links{display:none;}

    /* ---- Quietening the bid strip ---------------------------------------
       Every rule here is a stylesheet rule rather than an inline style, and
       every one is scoped to body.${NS}-detail. Angular re-renders this subtree
       on every bid update and every countdown tick; an inline style set before
       one of those is simply gone, which is how the share link kept coming back.
       A rule cannot be re-rendered away.

       Only the two text labels need JavaScript, because CSS cannot rewrite
       text — see relabelBidLine. */

    /* The filled or hollow star already says watching or not, and the control
       keeps its aria-label, so the word is redundant. */
    body.${NS}-detail .watch-container .watch-text,
    body.${NS}-detail .unwatch-container .watch-text{display:none;}

    /* Private notes are not part of deciding what to bid. */
    body.${NS}-detail app-watch-notes{display:none;}

    /* "Click Main Image for Fullscreen Mode" — the cursor already says so. */
    body.${NS}-detail .lot-details-images-tip{display:none;}

    /* "Your Max" and its amount wrapped onto two lines in the flex strip. */
    body.${NS}-detail .lot-bid-max-container dt{white-space:nowrap;}
    body.${NS}-detail .lot-bid-type-max{white-space:nowrap;}

    /* Shipping keeps the truck and loses the words — visually. The text is
       moved out of sight rather than removed from the accessibility tree, so a
       screen reader still announces "Shipping Available" where a sighted user
       sees only the icon. */
    body.${NS}-detail .shipping .lot-shipping-available,
    body.${NS}-detail .shipping-type-badge .shipping-type-text{
      position:absolute!important;width:1px;height:1px;margin:-1px;padding:0;
      overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0;}
    body.${NS}-detail .shipping i.fa-truck{font-size:15px;}

    /* "Max: 31.00 CAD" and its bracketed bid count on one line. The bid button's
       container shares the .lot-bid-container class, hence the :not(). */
    body.${NS}-detail app-lot-details-subpanel .lot-bid-container:not(.lot-tile-bid-container){
      display:inline;}
    body.${NS}-detail app-lot-details-subpanel app-bid-history-link{margin-left:3px;}
    body.${NS}-detail app-lot-details-subpanel a.lot-bid-history{white-space:nowrap;}

    /* Six stacked accordions cost ~330px of header before a word is read.
       Two columns and a smaller header get that back. */
    body.${NS}-detail .panel-group{display:grid;grid-template-columns:repeat(auto-fit,minmax(330px,1fr));
      gap:10px;align-items:start;}
    body.${NS}-detail app-collapse-panel{display:block;min-width:0;}
    body.${NS}-detail .collapse-container{border:1px solid #dde7f0;border-radius:9px;background:#fff;}
    body.${NS}-detail .collapse-header{padding:8px 12px;font-size:13px;font-weight:700;
      background:#f4f8fb;color:#1d4a72;line-height:1.3;}
    body.${NS}-detail .collapse-body{font-size:12.5px;}
    body.${NS}-detail .collapse-body th,body.${NS}-detail .collapse-body td{
      padding:3px 8px;font-size:12.5px;line-height:1.45;}
    /* Cap only the inner panel components. The collapse-body itself is what
       Angular animates, and clamping that fights the animation. */
    body.${NS}-detail .collapse-body > app-terms-conditions-panel,
    body.${NS}-detail .collapse-body > app-payment-info-panel,
    body.${NS}-detail .collapse-body > app-shipping-pickup-panel,
    body.${NS}-detail .collapse-body > app-bid-increments-panel,
    body.${NS}-detail .collapse-body > app-auction-info-panel{
      display:block;max-height:300px;overflow:auto;padding:2px 4px;}
  `);

  // ===========================================================================
  // SECTION 10A — Performance instrumentation
  // ===========================================================================

  /*
   * A userscript that runs at document-idle on someone else's Angular app is
   * very easy to make slow by accident, and impossible to tune by feel. Perf
   * records a duration per named span and keeps the last run on
   * `window.__hesPerf` so the numbers can be read from the console on a real
   * page instead of guessed at.
   *
   * The recording itself is two clock reads and an array push per span, so it
   * stays on in normal use; only the console summary is behind CFG.debug.
   */
  const Perf = {
    spans: [],
    counters: {},
    now: () => (typeof performance !== 'undefined' && performance.now
      ? performance.now() : Date.now()),

    reset() { Perf.spans = []; Perf.counters = {}; },

    /** Time a synchronous block. Returns whatever the block returns. */
    span(label, fn) {
      const t = Perf.now();
      try { return fn(); } finally { Perf.spans.push({ label, ms: +(Perf.now() - t).toFixed(2) }); }
    },

    /** Time a promise without changing its resolution value or rejection. */
    async spanAsync(label, promise) {
      const t = Perf.now();
      try { return await promise; } finally { Perf.spans.push({ label, ms: +(Perf.now() - t).toFixed(2) }); }
    },

    count(label, n = 1) { Perf.counters[label] = (Perf.counters[label] || 0) + n; },

    /** Cheap page-weight numbers, useful for judging a layout change. */
    layout() {
      if (typeof document === 'undefined' || !document.documentElement) return {};
      return {
        docHeightPx: document.documentElement.scrollHeight,
        domNodes: document.getElementsByTagName('*').length,
      };
    },

    report(tag) {
      const total = +Perf.spans.reduce((a, s) => a + s.ms, 0).toFixed(2);
      const out = { tag, total, spans: Perf.spans.slice(), counters: Object.assign({}, Perf.counters),
        layout: Perf.layout() };
      if (typeof window !== 'undefined') window.__hesPerf = out;
      if (CFG.debug) {
        log(`perf ${tag}: ${total}ms total`, out.layout);
        for (const s of out.spans) log(`  ${s.ms.toFixed(2)}ms  ${s.label}`);
        for (const [k, v] of Object.entries(out.counters)) log(`  x${v}  ${k}`);
      }
      return out;
    },
  };

  // ===========================================================================
  // SECTION 10B — Pure helpers for the redesigned lot detail page
  // ===========================================================================

  /** Event-item id from a lot URL path: /lot/317094503/slug -> 317094503. */
  function parseLotId(pathname) {
    const m = String(pathname == null ? '' : pathname).match(/\/lot\/(\d+)/i);
    return m ? Number(m[1]) : null;
  }

  /** Auction id from any /catalog/<id>/… or /auction/<id>/… URL. */
  function parseAuctionId(href) {
    const m = String(href == null ? '' : href).match(/\/(?:catalog|auction)\/(\d+)/i);
    return m ? Number(m[1]) : null;
  }

  /**
   * Split a notice into its heading and its prose.
   *
   * HiBid renders these as "Bidding Notice:" in an <h2> followed by the body,
   * so the concatenated text starts with the label. Demoting the notice to a
   * link at the bottom of the page needs the label for the link and the body
   * for what the link opens.
   */
  function splitNotice(text) {
    const t = normalise(text).replace(/ /g, ' ').trim();
    if (!t) return null;
    const m = t.match(/^([A-Za-z][A-Za-z /&'-]{2,40}?)\s*:\s*([\s\S]+)$/);
    if (m && m[2].trim()) return { title: m[1].trim(), body: m[2].trim() };
    return { title: 'Notice', body: t };
  }

  /**
   * A condition word turned into a traffic light.
   *
   * Checked worst-first on purpose: "BRAND NEW - FOR PARTS" has to come out
   * red, and a naive new-first test would call it green.
   */
  function conditionTone(text) {
    const t = normalise(text).toLowerCase();
    if (!t) return 'mute';
    if (/(?:\bparts\b|salvage|scrap|broken|\bdead\b|not\s*working|damaged|incomplete)/.test(t)) return 'bad';
    if (/(?:brand\s*new|new\s*in\s*box|\bnib\b|sealed|\bnew\b|excellent|like\s*new|\bmint\b)/.test(t)) return 'ok';
    if (/(?:open\s*box|refurb|\bused\b|\bfair\b|\bgood\b|\bscratch|\bdent|cosmetic)/.test(t)) return 'warn';
    return 'mute';
  }

  /*
   * The yes/no questions auctioneers answer in the description, and which
   * answer is the reassuring one. `want: true` means "Yes is good".
   */
  const CHIP_FIELDS = [
    { names: ['is item functional?', 'item functional?', 'is item functional', 'functional'],
      label: 'Functional', want: true },
    { names: ['is item damaged?', 'item damaged?', 'is item damaged', 'damaged'],
      label: 'Damaged', want: false },
    { names: ['missing major parts?', 'missing major parts', 'missing parts?', 'missing parts'],
      label: 'Missing parts', want: false },
    { names: ['in packaging?', 'in packaging'], label: 'In packaging', want: true },
    { names: ['requires assembly?', 'requires assembly'], label: 'Assembly', want: false },
  ];

  /**
   * Turn the description's structured block into colour-coded chips.
   *
   * Everything here is read from the parsed fields, never from the raw text:
   * the label "Is Item Damaged?" contains the word "damaged", so scanning the
   * block itself paints a perfectly good lot red.
   */
  function conditionChips(description) {
    const { fields } = parseFields(description || '');
    const chips = [];

    const condition = field(fields, 'condition');
    if (condition && condition.trim()) {
      chips.push({ label: 'Condition', value: condition.trim(), tone: conditionTone(condition) });
    }

    for (const spec of CHIP_FIELDS) {
      const raw = field(fields, ...spec.names);
      if (raw == null || !String(raw).trim()) continue;
      const yn = yesNo(raw);
      chips.push({
        label: spec.label,
        // "Unable to Test" is an answer worth showing verbatim; it is not a no.
        value: yn == null ? String(raw).trim() : (yn ? 'Yes' : 'No'),
        tone: yn == null ? 'mute' : (yn === spec.want ? 'ok' : 'bad'),
      });
    }
    return chips;
  }

  /**
   * The Information box as an ordered list of facts, blanks dropped.
   *
   * Pure, because the interesting part is the ordering and the "don't print a
   * row the auctioneer left empty" rule, and both are worth a test. Quantity
   * of 1 is deliberately omitted: every lot is 1 unless it says otherwise, so
   * printing it is a row of noise on every page.
   */
  function infoFacts(lot) {
    const l = lot || {};
    const cats = (l.category || []).map((c) => c && c.categoryName).filter(Boolean);
    // GraphQL returns the tree leaf-first; a breadcrumb reads root-first.
    const category = cats.length ? cats.slice().reverse().join(' › ') : (l.categoryText || null);

    return [
      { label: 'Lot #', value: l.lotNumber },
      { label: 'Category', value: category },
      { label: 'Model', value: l.model },
      { label: 'Estimate', value: l.estimate },
      { label: 'Auctioneer states', value: l.statedRetail != null ? money(l.statedRetail) : null },
      { label: 'Quantity', value: (l.quantity != null && Number(l.quantity) !== 1) ? String(l.quantity) : null },
      { label: 'Photos', value: l.pictureCount ? String(l.pictureCount) : null },
      { label: 'Bids so far', value: l.bidCount != null ? String(l.bidCount) : null },
      { label: 'Shipping', value: l.shippingOffered == null ? null
        : (l.shippingOffered ? 'Offered' : 'Pick-up only') },
    ].filter((f) => f.value != null && String(f.value).trim() !== '');
  }

  /**
   * Format one of HiBid's timestamps.
   *
   * The API returns "2026-08-12T19:00:00" with no offset: it is already the
   * auction's local wall clock. Feeding that to `new Date()` makes the browser
   * apply its own timezone and quietly reprints a 7:00 PM close as 11:00 PM
   * for anyone west of the auctioneer, so this stays string arithmetic.
   */
  function fmtDateTime(iso) {
    const m = String(iso == null ? '' : iso).match(/^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2}))?/);
    if (!m) return null;
    const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = MON[Number(m[2]) - 1];
    if (!month) return null;
    const day = `${Number(m[3])} ${month} ${m[1]}`;
    if (!m[4]) return day;
    const h24 = Number(m[5] == null ? NaN : m[4]);
    if (!isFinite(h24)) return day;
    const ampm = h24 >= 12 ? 'pm' : 'am';
    return `${day}, ${h24 % 12 || 12}:${m[5]} ${ampm}`;
  }

  /** "23 Buchanan Crt, London, ON N5Z 4P9" from whatever parts exist. */
  function formatAddress(a) {
    const x = a || {};
    const cityLine = [x.city, [x.state, x.postalCode].filter(Boolean).join(' ')]
      .filter((s) => s && String(s).trim()).join(', ');
    return [x.address, cityLine].filter((s) => s && String(s).trim()).join(', ') || null;
  }

  /**
   * "High Bid: 31.00 CAD" -> "Max: 31.00 CAD".
   *
   * Only the label changes; the amount and its currency are passed through
   * untouched, because this text is Angular's and it rewrites it on every live
   * bid update. Surrounding whitespace is dropped — HiBid pads the label with it
   * and the layout no longer depends on it.
   *
   * Returns null when there is nothing to do, which is what makes re-applying
   * this on every mutation safe rather than a loop: the output never matches the
   * input pattern, so the second pass is always a no-op.
   */
  function maxBidLabel(text) {
    const t = String(text == null ? '' : text);
    if (!t.trim()) return null;
    const m = t.match(/^\s*(?:high\s*bid|current\s*bid|winning\s*bid)\s*:\s*([\s\S]*?)\s*$/i);
    if (!m) return null;
    return `Max: ${m[1]}`;
  }

  /**
   * "13 Bids" -> "(13)", "1 Bid" -> "(1)".
   *
   * The count keeps its own element, so HiBid's bid-history handler survives —
   * this rewrites the anchor's text, never the anchor.
   */
  function bidCountLabel(text) {
    const t = String(text == null ? '' : text);
    const m = t.match(/(\d[\d,]*)\s*bids?\b/i);
    if (!m) return null;
    return `(${m[1]})`;
  }

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
        // Our own compact tables live inside this panel on the fallback path.
        // Scraping them turns "Max bid (50% off)" into an information field and,
        // worse, makes the label set depend on what we rendered last time.
        if (tr.closest(`.${NS}-mini, .${NS}-sumtable, .${NS}-card`)) return;
        const th = tr.querySelector('th');
        const td = tr.querySelector('td');
        if (!th || !td) return;
        map[txt(th).replace(/\s+/g, ' ').toLowerCase()] = { text: txt(td), tr, td };
      });
      return map;
    },

    /*
     * Collapse panels, read once per run.
     *
     * `panel()` used to walk every app-collapse-panel and lower-case its whole
     * textContent to match a heading. Terms and Conditions alone is a few KB,
     * and enhanceDetail asks for three different panels, so the page's entire
     * boilerplate was scanned and lower-cased three times per render. The
     * headings are in `.collapse-header`, which is a few words, so match on
     * that instead and cache the list for the duration of one run.
     */
    _panels: null,

    resetCache() { Detail._panels = null; },

    panels() {
      if (!Detail._panels) {
        Perf.count('panel scan');
        Detail._panels = Array.from(document.querySelectorAll('app-collapse-panel')).map((p) => {
          const head = p.querySelector('.collapse-header');
          return { node: p, head: txt(head || p).replace(/\s+/g, ' ').trim().toLowerCase() };
        });
      }
      return Detail._panels;
    },

    /** A collapse panel by its heading, e.g. "Terms and Conditions". */
    panel(headingStartsWith) {
      const want = String(headingStartsWith || '').toLowerCase();
      const hit = Detail.panels().find((e) => e.head.startsWith(want));
      return hit ? hit.node : null;
    },

    panelText(headingStartsWith) {
      const p = Detail.panel(headingStartsWith);
      return p ? txt(p) : null;
    },

    /** Event-item id, straight from the URL. */
    eventItemId() { return parseLotId(location.pathname); },

    /** The lot's own heading, without HiBid's "Lot # : 8590 - " prefix. */
    title() {
      const h = document.querySelector('app-lot-details .page-header h1, .page-header h1');
      return h ? txt(h).replace(/^lot\s*#?\s*:?\s*[\w-]+\s*-\s*/i, '').trim() : '';
    },

    /**
     * Blocks in the right-hand subpanel that our bottom box replaces.
     *
     * Returned as the direct children of the subpanel, so hiding them also
     * hides the anonymous Bootstrap wrapper Angular put around them and no
     * empty div is left behind in the bid strip.
     */
    relocatable() {
      const sub = document.querySelector('app-lot-details-subpanel');
      if (!sub) return [];
      const out = [];
      const add = (node) => {
        let n = node;
        while (n && n.parentElement && n.parentElement !== sub) n = n.parentElement;
        if (n && n.parentElement === sub && out.indexOf(n) < 0) out.push(n);
      };
      sub.querySelectorAll('app-city-state-zip-link, app-auctioneer-info, app-share').forEach(add);
      sub.querySelectorAll('.lot-auction-date-container').forEach(add);
      return out;
    },

    /**
     * URLs Angular already rendered.
     *
     * Read rather than reconstructed: the catalog and company paths carry ids
     * we would otherwise have to guess, and reading them means the bottom box
     * points at exactly what the original buttons pointed at.
     */
    pageLinks() {
      const href = (sel) => {
        const n = document.querySelector(sel);
        const v = n ? n.getAttribute('href') : null;
        return v || null;
      };
      // HiBid renders the auctioneer's e-mail address behind a tel: href, and
      // some auctioneers put a phone number there instead. Sort it out by
      // looking for an @ rather than trusting the scheme.
      const contact = Array.from(document.querySelectorAll('app-auctioneer-info a[href^="tel:"], app-auctioneer-info a[href^="mailto:"]'))
        .map((a) => (a.getAttribute('href') || '').replace(/^(?:tel|mailto):/i, '').trim())
        .filter(Boolean);
      return {
        catalog: href('a[href*="/catalog/"]'),
        company: href('app-company-page-link a, a[href*="/company/"]'),
        maps: href('app-city-state-zip-link a'),
        location: txt(document.querySelector('app-city-state-zip-link')) || null,
        dates: txt(document.querySelector('.lot-auction-date-range')) || null,
        auctioneer: txt(document.querySelector('app-company-page-link a')) || null,
        email: contact.find((v) => v.indexOf('@') >= 0) || null,
        phone: contact.find((v) => v.indexOf('@') < 0) || null,
      };
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
      /*
       * The consolidated card owns both regions when it exists, so the callers
       * that write condition banners and the decision need no idea which layout
       * they are in — they still get {cond, verdict} and still just append.
       */
      const card = document.getElementById(`${NS}-infocard`);
      if (card && card.isConnected) {
        const cond = card.querySelector(`#${NS}-cond`);
        const verdict = card.querySelector(`#${NS}-decision`);
        if (cond && verdict) return { root: card, cond, verdict };
      }

      // Fallback only: no card could be built, so the banners get their own
      // wrapper above the title, exactly as they did before consolidation.
      const anchor =
        document.querySelector('.lot-details-pager-swipe') ||
        document.querySelector('app-lot-details .page-header') ||
        document.querySelector('.page-header') ||
        document.querySelector('app-lot-details');
      if (!anchor) return null;

      let host = document.getElementById(`${NS}-banners`);
      if (!host) {
        host = el('div', { id: `${NS}-banners`, class: `${NS}-banners` }, [
          el('div', { id: `${NS}-cond` }),
          el('div', { id: `${NS}-verdict` }),
        ]);
        anchor.parentNode.insertBefore(host, anchor);
      }
      return {
        root: host,
        cond: host.querySelector(`#${NS}-cond`),
        verdict: host.querySelector(`#${NS}-verdict`),
      };
    },

    /** The box that holds the gallery and the bid strip. */
    lotContainer() {
      return document.querySelector('.lot-details-container') ||
             document.querySelector('app-lot-details .container') || null;
    },

    /** Last resort host for the bottom-of-page blocks. */
    pageFoot() {
      return document.querySelector('app-lot-details .container.lot-view') ||
             document.querySelector('app-lot-details > div') ||
             document.querySelector('app-lot-details') || null;
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
   * The decision, and the numbers that support it.
   *
   * Two visually separate things in one block, which is the whole point: the max
   * bid is a dark panel of its own, and the supporting table sits under it on the
   * light card. Previously these were one dark panel at the top of the page while
   * a second light card lower down repeated the same context — so the page said
   * the same thing twice and the reader had to check whether the two agreed.
   *
   * Palette is taken from HiBid itself (brand blue #266296, near-black #212529,
   * their existing orange #e65100) so it reads as part of the site rather than
   * a bolted-on widget. Money that leaves your pocket is orange.
   *
   * The signature is unchanged from the panel this replaces, so every caller and
   * every branch that decides what the hero number should be is untouched.
   */
  function summaryPanel({ tone, verdict, heroLabel, heroValue, heroNote, rows, notes, links }) {
    const table = el('table', { class: `${NS}-support` }, [
      el('tbody', {}, rows.filter(Boolean).map((r) => el('tr', { class: r.accent ? `${NS}-tr-accent` : null }, [
        el('th', { text: r.label }),
        el('td', { class: `${NS}-num${r.accent ? ` ${NS}-num-accent` : ''}`, html: r.value }),
        el('td', { class: `${NS}-note`, html: r.note || '' }),
      ]))),
    ]);

    /*
     * Three columns, in the same order and roughly the same widths as the table
     * below: label, figure, and why. Stacking the verdict under the figure left
     * two thirds of the box empty, which on a 1280px page is a lot of nothing
     * between the reader and the numbers.
     */
    return el('div', { class: `${NS}-decision-wrap` }, [
      el('div', { class: `${NS}-decision ${NS}-decision-${tone}` }, [
        el('span', { class: `${NS}-hero-label`, text: heroLabel }),
        el('span', { class: `${NS}-hero-value`, text: heroValue }),
        el('span', { class: `${NS}-decision-why` }, [
          el('span', { class: `${NS}-verdict`, text: verdict }),
          heroNote ? el('span', { class: `${NS}-panel-sub`, html: heroNote }) : null,
        ]),
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
  // SECTION 12A — Light-card building blocks
  // ===========================================================================

  function tagNode({ label, value, tone }) {
    return el('span', { class: `${NS}-tag ${NS}-tag-${tone || 'mute'}` }, [
      el('i', { text: label }),
      document.createTextNode(String(value)),
    ]);
  }

  /** Label-over-value cells in an auto-fitting grid. */
  function fillFacts(host, facts) {
    if (!host) return;
    host.textContent = '';
    for (const f of facts) {
      host.appendChild(el('div', { class: `${NS}-fact` }, [
        el('span', { class: `${NS}-fact-k`, text: f.label }),
        el('span', { class: `${NS}-fact-v`, text: String(f.value) }),
      ]));
    }
  }

  /** A collapsed disclosure. Long prose never gets to push the page around. */
  function fold(summaryText, bodyNode) {
    return el('details', { class: `${NS}-fold` }, [
      el('summary', { text: summaryText }),
      bodyNode,
    ]);
  }

  function abtn(label, opts = {}) {
    if (opts.onclick) {
      return el('button', {
        class: `${NS}-abtn${opts.primary ? ` ${NS}-abtn-primary` : ''}`,
        type: 'button', text: label, onclick: opts.onclick,
      });
    }
    if (!opts.href) return null;
    return el('a', {
      class: `${NS}-abtn${opts.primary ? ` ${NS}-abtn-primary` : ''}`,
      href: opts.href, text: label,
      target: opts.sameTab ? null : '_blank',
      rel: opts.sameTab ? null : 'noopener noreferrer',
    });
  }

  // ===========================================================================
  // SECTION 12B — The redesigned lot-detail blocks
  // ===========================================================================

  /*
   * Layout, applied by adding classes only.
   *
   * The reorder itself is CSS (see SECTION 10). This function exists to set the
   * body class the CSS is scoped to, and to mark the blocks that our bottom box
   * replaces. It never moves, replaces or removes a node Angular owns, so
   * Angular's change detection keeps working on exactly the tree it rendered.
   */
  function applyDetailLayout(hasCard) {
    if (!document.body) return;
    document.body.classList.add(`${NS}-detail`);
    document.body.classList.toggle(`${NS}-card-live`, !!hasCard);

    for (const node of Detail.relocatable()) node.classList.add(`${NS}-relocated`);

    hideAuctionBanner();

    if (hasCard) {
      const info = document.querySelector('app-information-panel');
      const panel = info && info.closest('app-collapse-panel');
      // Hidden, never removed: enhanceDetail still reads its table on every
      // run, and textContent works perfectly well on a display:none subtree.
      if (panel) panel.classList.add(`${NS}-relocated`);

      /*
       * The card carries the condition banners and the decision now, so the
       * standalone wrapper above the title is dead weight. It is one of ours, so
       * removing it is safe — and leaving it would mean two elements sharing the
       * id #hes-cond, which makes getElementById a coin toss.
       */
      const strays = document.getElementById(`${NS}-banners`);
      if (strays) strays.remove();
    }
  }

  /**
   * Hide the auctioneer's banner image at the very top of the page.
   *
   * On an auctioneer subdomain the header slot holds a promotional banner the
   * auctioneer uploaded — 172px tall on Encore, and there is no upper bound —
   * so the first screenful of a lot page is an advertisement for the sale you
   * are already looking at.
   *
   * The test is the rendered height, not the selector, because hibid.com's own
   * wordmark sits in exactly the same slot and must survive: a rule that
   * removed "the header image" would strip the site's identity on the main
   * domain to solve a problem that only exists on the subdomains.
   */
  function hideAuctionBanner() {
    const img = document.querySelector(
      'app-top-header .logo-container img, app-top-header .navbar-brand img, .top-header .navbar-brand img');
    if (!img) return;
    const height = img.getBoundingClientRect().height;
    // Already hidden by us: getBoundingClientRect is 0 and must not un-hide it.
    if (img.classList.contains(`${NS}-hide-banner`)) return;
    if (height <= 90) return;                       // a wordmark, not a banner
    img.classList.add(`${NS}-hide-banner`);
    const host = img.closest('.logo-container') || img.parentElement;
    if (host) host.classList.add(`${NS}-hide-banner-host`);
    Perf.count('auction banner hidden');
  }

  /**
   * Undo the detail-page layout when we navigate to a catalog or search page.
   *
   * The blocks are removed, not just unstyled. Angular reuses the outer page
   * container across routes, so the notices box appended at the bottom of a lot
   * page survived the route change and reappeared under the catalog's lot grid,
   * describing an auction the user had already left.
   */
  function clearDetailLayout() {
    if (!document.body) return;
    releaseChrome();
    document.body.classList.remove(`${NS}-detail`, `${NS}-card-live`);
    for (const id of [`${NS}-infocard`, `${NS}-auctionbox`, `${NS}-notices`, `${NS}-banners`]) {
      const n = document.getElementById(id);
      if (n) n.remove();
    }
  }

  /*
   * Two labels in the bid strip that a stylesheet cannot reach.
   *
   * Everything else on this page is quietened with a CSS rule (SECTION 10),
   * because a rule survives an Angular re-render and an inline style does not.
   * These two are text, and CSS cannot rewrite text, so they need JavaScript —
   * which means they need to survive the re-render some other way.
   *
   * That way is an observer on the subpanel plus strict idempotence: both
   * helpers return null when the text is already what we want, so re-applying
   * costs a regex and changes nothing. Our own writes therefore cannot feed the
   * observer a second time, and no re-entrancy flag is needed.
   *
   * The observer is scoped to the subpanel rather than the document because the
   * live bid, the countdown and the bid count all rewrite themselves there every
   * few seconds, and this has to win every one of those races.
   */
  let CHROME_OBS = null;

  function relabelBidLine() {
    let changed = 0;

    const high = document.querySelector('app-lot-details-subpanel .lot-high-bid');
    if (high) {
      const next = maxBidLabel(high.textContent);
      if (next != null && next !== high.textContent) { high.textContent = next; changed++; }
    }

    const count = document.querySelector('app-lot-details-subpanel a.lot-bid-history');
    if (count) {
      const next = bidCountLabel(count.textContent);
      if (next != null && next !== count.textContent) {
        count.textContent = next;
        // The visible text is now "(13)"; the accessible name must still say what
        // it is and what clicking it does.
        const n = next.replace(/[()]/g, '');
        count.setAttribute('aria-label', `${n} bid${n === '1' ? '' : 's'} — bid history`);
        count.setAttribute('title', 'Bid history');
        changed++;
      }
    }
    if (changed) Perf.count('bid line relabelled');
    return changed;
  }

  /** Apply the label rewrites and keep them applied. */
  function quietenChrome() {
    relabelBidLine();

    const sub = document.querySelector('app-lot-details-subpanel');
    if (!sub || typeof MutationObserver !== 'function') return;
    if (CHROME_OBS && CHROME_OBS.node === sub) return;   // already watching this one
    if (CHROME_OBS) CHROME_OBS.obs.disconnect();

    const obs = new MutationObserver(() => relabelBidLine());
    obs.observe(sub, { childList: true, subtree: true, characterData: true });
    CHROME_OBS = { node: sub, obs };
  }

  /** Stop watching when we leave the lot page. */
  function releaseChrome() {
    if (CHROME_OBS) { CHROME_OBS.obs.disconnect(); CHROME_OBS = null; }
  }

  /**
   * The Information box, rebuilt.
   *
   * Built as a stable skeleton with three replaceable regions, because the
   * retail and bid cells inside it are owned by renderQuotes and re-rendered on
   * a different clock: rebuilding the whole card when the GraphQL enrichment
   * lands would throw away a retail price that had already arrived.
   */
  function infoCard() {
    let root = document.getElementById(`${NS}-infocard`);
    if (root && root.isConnected) {
      /*
       * Reuse it only if it is the skeleton this version expects. A card left by
       * a different build of this script — two copies installed at once, or a
       * stale one surviving a re-render — is missing regions the fill step writes
       * into, and the result is a card that silently stops updating parts of
       * itself. Cheaper to check four ids than to debug that.
       */
      const complete = [`${NS}-info-facts`, `${NS}-info-chips`, `${NS}-info-desc`,
        `${NS}-retail-cell`, `${NS}-bid-cell`, `${NS}-bid-title`,
        `${NS}-cond`, `${NS}-decision`]
        .every((id) => root.querySelector(`#${id}`));
      if (complete) return root;
      Perf.count('info card rebuilt (unrecognised skeleton)');
      root.remove();
    }

    const host = Detail.lotContainer();
    if (!host) return null;

    root = el('div', { class: `${NS}-card ${NS}-card-lead`, id: `${NS}-infocard` }, [
      el('div', { class: `${NS}-card-head` }, [
        el('span', { class: `${NS}-card-title`, text: 'Lot details' }),
        el('span', { class: `${NS}-card-sub`, id: `${NS}-info-sub` }),
      ]),
      el('div', { class: `${NS}-card-body` }, [
        /*
         * Condition first, then the decision. A parts-only warning that appears
         * below the max bid has already lost its argument, and the decision has
         * to be the first number on the page — bottom line up front.
         */
        el('div', { id: `${NS}-cond` }),
        el('div', { id: `${NS}-decision` }),
        el('div', { class: `${NS}-chips`, id: `${NS}-info-chips`, style: 'display:none;' }),
        el('div', { class: `${NS}-facts`, id: `${NS}-info-facts` }),
        el('div', { class: `${NS}-block` }, [
          el('div', { class: `${NS}-block-title`, text: 'Retail (live)' }),
          el('div', { id: `${NS}-retail-cell`, class: `${NS}-pricecell` }),
        ]),
        el('div', { class: `${NS}-block` }, [
          // "Bid guidance" while the block still holds the numbers; relabelled by
          // injectBidRow to what is actually left once the decision block above
          // has them.
          el('div', { class: `${NS}-block-title`, id: `${NS}-bid-title`, text: 'Bid guidance' }),
          el('div', { id: `${NS}-bid-cell`, class: `${NS}-pricecell` }),
        ]),
        el('div', { id: `${NS}-info-desc` }),
      ]),
    ]);

    /*
     * First thing in the lot view, above HiBid's own title.
     *
     * It used to sit between the title and the gallery, with a separate dark
     * panel above the title. Now that the two are one box there is only one
     * sensible place for it: first, because it is the answer.
     *
     * Inserted as a sibling of the lot container rather than inside it — the
     * layout CSS keys the gallery/bid row off `.lot-details-container > .row:
     * first-child`, and making the card that first child silently stopped the
     * reorder and drew the bid strip on top of the gallery.
     */
    const outer = Detail.pageFoot();
    if (outer) {
      const anchor = outer.querySelector('.lot-details-pager-swipe') || outer.firstChild;
      outer.insertBefore(root, anchor);
    } else {
      host.insertBefore(root, host.firstChild);
    }
    return root;
  }

  /** Fill the card's replaceable regions. Safe to call repeatedly. */
  function renderInfoCard(model) {
    const root = infoCard();
    if (!root) return null;

    const sub = document.getElementById(`${NS}-info-sub`);
    if (sub) {
      sub.textContent = [model.eventName, model.auctioneer].filter(Boolean).join(' · ');
    }

    const chipHost = document.getElementById(`${NS}-info-chips`);
    if (chipHost) {
      chipHost.textContent = '';
      const chips = conditionChips(model.description);
      chipHost.style.display = chips.length ? '' : 'none';
      for (const c of chips) chipHost.appendChild(tagNode(c));
    }

    fillFacts(document.getElementById(`${NS}-info-facts`), infoFacts(model));

    const descHost = document.getElementById(`${NS}-info-desc`);
    if (descHost) {
      descHost.textContent = '';
      // The structured fields are already chips above, so the disclosure holds
      // only what the auctioneer actually wrote in prose.
      const parsed = parseFields(model.description || '');
      const prose = parsed.free || normalise(model.description || '').trim();
      if (prose) {
        descHost.appendChild(fold('Full description',
          el('div', { class: `${NS}-fold-body`, text: prose })));
      }
    }
    return root;
  }

  /**
   * Where, when, and who — below the photos, as the user reads them.
   *
   * Rebuilt from scraped hrefs rather than by re-parenting HiBid's own buttons.
   * Moving `app-share` would have been fewer lines, but it is an Angular
   * component with its own click handler and lifecycle, and a userscript that
   * re-parents those is a userscript that breaks on the next deploy.
   */
  function renderAuctionBox(links, auction) {
    const host = Detail.lotContainer();
    if (!host) return null;

    let root = document.getElementById(`${NS}-auctionbox`);
    if (!root || !root.isConnected) {
      root = el('div', { class: `${NS}-card`, id: `${NS}-auctionbox` }, [
        el('div', { class: `${NS}-card-head` }, [
          el('span', { class: `${NS}-card-title`, text: 'Auction & auctioneer' }),
          el('span', { class: `${NS}-card-sub`, id: `${NS}-auction-sub` }),
        ]),
        el('div', { class: `${NS}-card-body` }, [
          el('div', { class: `${NS}-facts`, id: `${NS}-auction-facts` }),
          el('div', { class: `${NS}-btns`, id: `${NS}-auction-btns` }),
          el('div', { id: `${NS}-auction-extra` }),
        ]),
      ]);
      // Immediately after the lot container — i.e. below the photos — and again
      // outside it, so the container keeps exactly the children Angular expects.
      const outer = Detail.pageFoot();
      if (outer && host.parentNode === outer) outer.insertBefore(root, host.nextSibling);
      else host.appendChild(root);
    }

    const a = auction || {};
    const auctioneer = a.auctioneer || {};
    const subNode = document.getElementById(`${NS}-auction-sub`);
    if (subNode) subNode.textContent = a.eventName || '';

    /*
     * Location is the page's own city/state/zip, not the auctioneer record's
     * address, and the two are genuinely different: OnDeals is registered at
     * L8B 1X6 while lot 316725406 is picked up at L8E 5P4. Labelling the
     * company's head office as "Location" would send someone to the wrong
     * postcode, so the auctioneer's address is a separate row and only appears
     * when it says something the location row does not.
     */
    const auctioneerAddress = formatAddress(auctioneer);
    const location = links.location || auctioneerAddress;
    const facts = [
      { label: 'Location', value: location },
      { label: 'Auctioneer', value: auctioneer.name || links.auctioneer },
      // "23 Buchanan Crt, London, ON N5Z 4P9" against a location of
      // "London, ON N5Z 4P9" is the same place with a street number, so the
      // test is containment rather than equality.
      { label: 'Auctioneer address',
        value: (auctioneerAddress && location && auctioneerAddress.indexOf(location) < 0)
          ? auctioneerAddress
          : (auctioneerAddress && !location ? auctioneerAddress : null) },
      { label: 'Bidding opens', value: fmtDateTime(a.bidOpenDateTime) },
      { label: 'Bidding closes', value: fmtDateTime(a.bidCloseDateTime) },
      // Only worth printing when GraphQL has not given us the exact times.
      { label: 'Date(s)', value: (a.bidOpenDateTime || a.bidCloseDateTime) ? null : links.dates },
      { label: 'E-mail', value: auctioneer.email || links.email },
      { label: 'Phone', value: auctioneer.phone && auctioneer.phone.indexOf('@') < 0
        ? auctioneer.phone : links.phone },
    ].filter((f) => f.value != null && String(f.value).trim() !== '');

    fillFacts(document.getElementById(`${NS}-auction-facts`), facts);

    const btnHost = document.getElementById(`${NS}-auction-btns`);
    if (btnHost) {
      btnHost.textContent = '';
      const email = auctioneer.email || links.email;
      const buttons = [
        abtn('📚 Full catalog', { href: links.catalog, primary: true, sameTab: true }),
        abtn('🏛 Auctioneer page', { href: links.company, sameTab: true }),
        abtn('📍 Map', { href: links.maps }),
        email ? abtn('✉ E-mail auctioneer', { href: `mailto:${email}` }) : null,
        abtn('🔗 Share lot', { onclick: shareLot }),
      ].filter(Boolean);
      for (const b of buttons) btnHost.appendChild(b);
    }

    const extra = document.getElementById(`${NS}-auction-extra`);
    if (extra) {
      extra.textContent = '';
      const folds = [
        ['Preview', a.previewDateInfo],
        ['Pick-up & checkout', a.checkoutDateInfo],
        ['Payment', a.paymentInfo],
      ].filter(([, v]) => v && String(v).trim());
      for (const [label, value] of folds) {
        extra.appendChild(fold(label, el('div', { class: `${NS}-fold-body`, text: normalise(value).trim() })));
      }
    }
    return root;
  }

  /**
   * Share without borrowing HiBid's component: the Web Share sheet where the
   * browser has one, the clipboard everywhere else. Both are best-effort — a
   * rejected share (the user dismissed the sheet) is not an error worth showing.
   */
  function shareLot(ev) {
    const btn = ev && ev.currentTarget;
    const flash = (msg) => {
      if (!btn) return;
      const was = btn.textContent;
      btn.textContent = msg;
      setTimeout(() => { btn.textContent = was; }, 1600);
    };
    const url = location.href;
    try {
      if (navigator.share) {
        navigator.share({ title: document.title, url }).catch(() => { /* dismissed */ });
        return;
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => flash('✓ Link copied'), () => flash('Copy failed'));
        return;
      }
      flash(url);
    } catch (e) { flash('Copy failed'); }
  }

  /**
   * Bidding / Auction notices, demoted to two links at the bottom.
   *
   * The original app-notice cards are hidden, never removed, and their body is
   * cloned rather than moved. The clone keeps the auctioneer's links clickable,
   * which a plain-text copy would not.
   *
   * `full` (from GraphQL) replaces the clone when it arrives, because the DOM
   * copy is truncated: HiBid renders roughly the first 400 characters followed
   * by a "Show More" anchor, and the rest of the text is simply not there.
   */
  function renderNoticeLinks(full) {
    const notices = Array.from(document.querySelectorAll('app-notice'))
      .filter((n) => txt(n));
    if (!notices.length) return null;

    const host = Detail.pageFoot();
    if (!host) return null;

    let root = document.getElementById(`${NS}-notices`);
    if (!root || !root.isConnected) {
      root = el('div', { class: `${NS}-notices`, id: `${NS}-notices` }, [
        el('div', { class: `${NS}-notices-hint`, text: 'Auctioneer notices' }),
      ]);
      host.appendChild(root);
    }

    // Rebuilt wholesale: it is a couple of nodes, and the alternative is
    // tracking which notice moved where across an Angular re-render.
    root.textContent = '';
    root.appendChild(el('div', { class: `${NS}-notices-hint`, text: 'Auctioneer notices' }));

    notices.forEach((notice, i) => {
      notice.classList.add(`${NS}-relocated`);
      const parsed = splitNotice(txt(notice)) || { title: 'Notice', body: '' };
      const title = txt(notice.querySelector('h1,h2,h3,h4')).replace(/:\s*$/, '') || parsed.title;

      const key = /bidding/i.test(title) ? 'bidding' : /auction/i.test(title) ? 'auction' : null;
      const fullText = key && full ? full[key] : null;

      let body;
      if (fullText) {
        body = el('div', { class: `${NS}-notice-body`, style: 'white-space:pre-wrap;',
          text: normalise(fullText).trim() });
      } else {
        // Clone the prose element so links survive; drop HiBid's "Show More"
        // anchor, whose click handler does not come along with the clone.
        const src = notice.querySelector('.card-header p') || notice.querySelector('p') || notice;
        const clone = src.cloneNode(true);
        clone.querySelectorAll('.notice-more, .notice-less').forEach((n) => n.remove());
        body = el('div', { class: `${NS}-notice-body` }, [clone]);
      }

      root.appendChild(el('details', { class: `${NS}-notice`, id: `${NS}-notice-${i}` }, [
        el('summary', { text: `⚠ ${title}` }),
        body,
      ]));
    });
    return root;
  }

  // ===========================================================================
  // SECTION 13 — Lot detail controller
  // ===========================================================================

  const State = { lastKey: null, running: false, gen: 0, staleKey: null, staleSince: 0 };

  /** How long enhanceDetail will wait for Angular to render the URL's lot. */
  const STALE_GRACE_MS = 4000;

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
   *   Pass 3 (asynchronous) — GraphQL enrichment of the information card and the
   *                           auction box. Independent of pass 2 and equally
   *                           optional: if it never lands, the DOM-derived
   *                           version stays on screen.
   */

  /*
   * parseFees runs some forty regexes over the auction's entire boilerplate.
   * That text is byte-identical for every lot in the sale and across every
   * re-render Angular triggers, so the answer is memoised behind a cheap
   * fingerprint (length plus the first 48 characters of each source) rather
   * than recomputed. Hashing the full text would cost as much as the parse.
   */
  /*
   * A handful of entries, not one. A lot page parses fees twice by design — once
   * from the DOM and once with the auction's own text appended — so a
   * single-slot cache would be evicted by the other caller on every run and
   * never hit at all.
   */
  const FEE_MEMO = new Map();
  const FEE_MEMO_MAX = 4;

  function feesFor(sources) {
    const key = sources.map((s) => `${(s || '').length}:${(s || '').slice(0, 48)}`).join('|');
    if (FEE_MEMO.has(key)) { Perf.count('fee memo hit'); return FEE_MEMO.get(key); }
    const value = Perf.span('parseFees', () => parseFees(sources));
    if (FEE_MEMO.size >= FEE_MEMO_MAX) FEE_MEMO.delete(FEE_MEMO.keys().next().value);
    FEE_MEMO.set(key, value);
    return value;
  }

  /**
   * Re-derive the fee stack from the auction's own text.
   *
   * The DOM is an unreliable source for fees. HiBid renders roughly the first 400
   * characters of a notice and then a "Show More" anchor, so anything stated
   * further in is simply absent from the page: Encore's 2.4% credit-card
   * surcharge sits about 600 characters into the auction notice and was invisible
   * to the parser, which quietly under-stated every final cost on the lot.
   *
   * Returns true when a number actually moved, so the caller only re-renders when
   * there is something to correct.
   */
  function correctFees(ctx, terms) {
    if (!terms || !terms.text) return false;

    // Copied before any mutation: feesFor hands out a memoised object that other
    // callers share, and the premium fallback below writes to it.
    const fresh = Object.assign({}, feesFor(ctx.feeSources.concat([terms.text])));
    fresh.notes = (fresh.notes || []).slice();

    /*
     * Same last-resort rule the catalog uses: buyerPremiumRate is this auction's
     * own number, so it beats a global default — but only when the text yielded
     * nothing, because the rate reads 1.0 (0%) on auctions whose terms clearly
     * say 16%.
     */
    if (/fallback/.test(fresh.premiumSource || '') && terms.rate != null) {
      fresh.premiumPct = terms.rate;
      fresh.premiumSource = `auction.buyerPremiumRate (${terms.rate}%)`;
      fresh.notes = fresh.notes.filter((n) => !/premium/i.test(n));
    }

    const before = ctx.fees || {};
    const moved = ['premiumPct', 'cardPct', 'perItemFee', 'largeItemFee', 'taxPct']
      .filter((k) => (before[k] || 0) !== (fresh[k] || 0));
    if (!moved.length) return false;

    // Say so in the provenance rather than silently changing the ceiling.
    fresh.notes.push(`Corrected from the auction’s own text after load (${moved.join(', ')}); ` +
      'the page itself truncates its notices.');
    ctx.fees = fresh;
    Perf.count('fee correction');
    log('fees corrected from GraphQL:', moved.join(', '));
    return true;
  }

  async function enhanceDetail() {
    Perf.reset();
    Detail.resetCache();

    /*
     * Clicking Next / Previous / First / Last in HiBid's lot pager is a router
     * navigation: the URL changes immediately, the lot content a beat later.
     * Enhancing inside that window pinned the previous lot's retail price and
     * bid ceiling onto the new lot — and because run() then recorded the new
     * path as done, the observer never came back to correct it.
     *
     * HiBid stamps the container with the lot id it actually rendered, so the
     * mismatch is directly observable. Returning false leaves State.lastKey
     * unset, which keeps the MutationObserver kicking until the DOM catches up.
     *
     * The guard only engages when that container exists, so a page or a site
     * variant that does not stamp an id behaves exactly as it did before rather
     * than losing the enhancement entirely.
     *
     * And it is bounded, because "wait until the DOM agrees" must never become
     * "never render at all". If some page renders a neighbouring lot's container,
     * or keeps two of them, refusing forever would be a worse bug than the one
     * this fixes. The race it guards closes in a few hundred milliseconds, so
     * after the grace period we render anyway and say so.
     */
    const wantId = Detail.eventItemId();
    const rendered = document.querySelector('[id^="lot-details-"]');
    if (wantId && rendered && rendered.id !== `lot-details-${wantId}`) {
      if (State.staleKey !== location.pathname) {
        State.staleKey = location.pathname;
        State.staleSince = Date.now();
      }
      if (Date.now() - State.staleSince < STALE_GRACE_MS) {
        Perf.count('detail: DOM still on the previous lot');
        log(`detail: URL is lot ${wantId} but the DOM still shows ${rendered.id}; waiting`);
        return false;
      }
      warn(`detail: DOM still shows ${rendered.id} for lot ${wantId} after ` +
        `${STALE_GRACE_MS}ms — rendering from it anyway`);
    }
    State.staleKey = null;

    const rows = Perf.span('infoRows', () => Detail.infoRows());
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

    // Kept on the context so pass 3 can re-parse with the auction's own text
    // appended instead of re-deriving the DOM half a second later.
    const feeSources = [termsText, payText, noticeText, locationText.slice(0, 4000)];
    const fees = feesFor(feeSources);
    const large = isLargeItem(`${lotText}\n${category}`);
    const increments = parseIncrements(Detail.panelText('Bid Increments'));

    // ---- condition (LOT-LEVEL ONLY — see assessCondition docs) ------------
    const cond = assessCondition(lotText);

    // ---- bids ------------------------------------------------------------
    const current = Detail.currentBid();
    const next = Detail.nextBid() ||
      (current != null ? current + (incrementAt(current, increments) || 1) : null);

    /*
     * The card's skeleton first, because it now contains the condition-banner and
     * decision regions that bannerHost() hands out. Only the skeleton: filling it
     * needs the stated retail and the product model, which are computed below.
     */
    const card = Perf.span('info card', () => infoCard());
    Perf.span('layout', () => applyDetailLayout(!!card));

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

    const stated = extractStatedRetail(lead, description, estimateText);
    // Lets the providers reject candidates an order of magnitude too cheap.
    if (stated) product.statedRetail = stated.value;

    // ---- the redesigned blocks, all from the DOM ---------------------------
    //
    // Order matters: the information card owns the retail and bid cells, so it
    // has to be on the page before injectRetailRow goes looking for them. When
    // it cannot be built (a markup change, a page we do not recognise) both
    // fall back to inserting rows in HiBid's own table, exactly as before.
    const links = Perf.span('page links', () => Detail.pageLinks());
    const infoModel = {
      lotNumber: rows['lot #'] ? rows['lot #'].text : null,
      categoryText: category,
      estimate: estimateText,
      description,
      model: product.model || null,
      statedRetail: stated ? stated.value : null,
      auctioneer: links.auctioneer,
      eventName: null,
    };

    Perf.span('info card fill', () => renderInfoCard(infoModel));
    Perf.span('auction box', () => renderAuctionBox(links, null));
    Perf.span('notices', () => renderNoticeLinks(null));
    Perf.span('chrome', () => quietenChrome());

    const cell = injectRetailRow(rows, product);

    const ctx = {
      gen: ++State.gen,
      rows, host, cell, product, fees, large, increments,
      cond, current, next, stated,
      links, infoModel, hasCard: !!card, feeSources,
    };

    // Provisional render from the auctioneer's own figure — instant, and useful
    // on its own. Replaced in place if a live quote arrives.
    Perf.span('renderQuotes (pass 1)', () =>
      renderQuotes(ctx, { quotes: [], errors: [], pending: CFG.autoLookup }));

    Perf.report('detail pass 1');

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

    // ---- PASS 3: GraphQL enrichment, also not awaited --------------------
    enrichDetail(ctx);

    return true;
  }

  /**
   * Fill in what the lot page does not put in the DOM.
   *
   * Adds the category tree, the picture and bid counts, the auctioneer's postal
   * address and e-mail, the exact open and close times, and the untruncated
   * notices. HiBid renders roughly the first 400 characters of a notice followed
   * by a "Show More" anchor and fetches the rest on demand, so the DOM copy is
   * genuinely incomplete — GraphQL is the only way to show the whole thing
   * without clicking.
   *
   * Fired without awaiting and guarded by the same generation counter as the
   * retail lookup: if this is slow, fails, or the user has already navigated on,
   * the DOM-derived card simply stays as it is.
   */
  /*
   * One in-flight GraphQL pair per lot, shared.
   *
   * enhanceDetail legitimately runs more than once for a single lot — the
   * initial kick and the first Angular re-render both land before State.lastKey
   * is set — and each run was firing its own pair of requests for byte-identical
   * answers. Memoising the promise rather than the result also means two runs
   * that overlap join the same request instead of racing.
   */
  const DETAIL_GQL = { id: null, promise: null };

  function detailData(id, catalogHref) {
    if (DETAIL_GQL.id === id && DETAIL_GQL.promise) {
      Perf.count('gql memo hit');
      return DETAIL_GQL.promise;
    }
    DETAIL_GQL.id = id;
    DETAIL_GQL.promise = (async () => {
      /*
       * The lot's auction id is in its GraphQL payload, but it is also already in
       * the page's own Catalog link. Reading it from there turns a chain of two
       * ~1.7s round trips into one, so the enrichment lands in half the time.
       */
      const known = parseAuctionId(catalogHref);
      /*
       * auctionTerms is a second query rather than more fields on auctionDetail
       * so the catalog and the lot page derive fees from one definition of "the
       * auction's fee text". It runs alongside the others, so the extra request
       * costs no extra wall-clock time.
       */
      const noTerms = { text: '', rate: null };
      const termsOf = (aid) => GQL.auctionTerms(aid)
        .catch((e) => { warn('auction terms:', (e && e.message) || e); return noTerms; });

      const lotP = GQL.lotDetail(id);
      const auctionP = known ? GQL.auctionDetail(known) : null;
      const termsP = known ? termsOf(known) : null;

      const lot = await Perf.spanAsync('gql lot', lotP);
      if (auctionP) {
        return {
          lot,
          auction: await Perf.spanAsync('gql auction (parallel)', auctionP),
          terms: await Perf.spanAsync('gql terms (parallel)', termsP),
        };
      }

      const chained = lot && lot.auction && lot.auction.id;
      if (!chained) return { lot, auction: null, terms: noTerms };
      const [auction, terms] = await Perf.spanAsync('gql auction + terms (chained)',
        Promise.all([GQL.auctionDetail(chained), termsOf(chained)]));
      return { lot, auction, terms };
    })();
    // A failure must not be cached as the answer for the rest of the visit.
    DETAIL_GQL.promise.catch(() => { if (DETAIL_GQL.id === id) DETAIL_GQL.promise = null; });
    return DETAIL_GQL.promise;
  }

  async function enrichDetail(ctx) {
    const id = Detail.eventItemId();
    if (!id) return;

    Loader.show();
    try {
      const { lot, auction, terms } = await detailData(id, ctx.links.catalog);
      if (ctx.gen !== State.gen) return;  // navigated on

      Perf.span('enriched render', () => {
        const lotState = (lot && lot.lotState) || {};
        renderInfoCard(Object.assign({}, ctx.infoModel, {
          lotNumber: (lot && lot.lotNumber) || ctx.infoModel.lotNumber,
          estimate: (lot && lot.estimate) || ctx.infoModel.estimate,
          description: (lot && lot.description) || ctx.infoModel.description,
          category: lot ? lot.category : null,
          quantity: lot ? lot.quantity : null,
          pictureCount: lot ? lot.pictureCount : null,
          shippingOffered: lot ? lot.shippingOffered : null,
          bidCount: lotState.bidCount != null ? lotState.bidCount : null,
          eventName: (auction && auction.eventName) ||
                     (lot && lot.auction && lot.auction.eventName) || null,
          auctioneer: (auction && auction.auctioneer && auction.auctioneer.name) ||
                      ctx.infoModel.auctioneer,
        }));
        renderAuctionBox(ctx.links, auction);
        if (auction) {
          renderNoticeLinks({ bidding: auction.biddingNotice, auction: auction.auctionNotice });
        }
      });

      /*
       * Fees last, because correcting them re-renders the money.
       *
       * This deliberately moves numbers after the page has settled. The
       * alternative is worse: leaving a final cost on screen that is knowably
       * wrong because the page truncated the sentence it was parsed from. The
       * correction is announced in the fee provenance, and it uses whatever
       * quotes renderQuotes last had, so a retail price already on screen is not
       * thrown away — and if the retail lookup lands afterwards it picks up the
       * corrected stack on its own.
       */
      if (correctFees(ctx, terms) && ctx.last) {
        Perf.span('fee correction re-render', () => renderQuotes(ctx, ctx.last));
      }

      Perf.report('detail + graphql');
    } catch (e) {
      // A missing field or a 500 must never cost the page its DOM-derived card.
      warn('lot enrichment failed:', (e && e.message) || e);
    } finally {
      Loader.hide();
    }
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

    // Remembered so a fee correction arriving later can redraw the same quotes
    // instead of discarding a retail price that has already landed.
    ctx.last = { quotes, errors, pending };

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
      hasCard: ctx.hasCard,
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

  /**
   * The "Bid guidance" block: the same numbers, compact, on a light background.
   *
   * Inside the information card the table is suppressed, because the summary
   * panel a few hundred pixels above prints the identical five rows — max bid,
   * walk away, next bid, fees & tax, final cost — and printing them twice on one
   * screen invites the reader to look for a difference that is not there. What
   * the panel does *not* carry is the fee provenance, so that is what stays.
   *
   * The condition is `d.nextCost`, not simply "is there a card": renderQuotes
   * draws no panel at all when there is no next-bid amount to cost out, and in
   * that case the table is the only place the ceiling appears.
   */
  function injectBidRow(rows, d) {
    const panelCovers = !!(d.hasCard && d.nextCost);

    const title = document.getElementById(`${NS}-bid-title`);
    if (title) title.textContent = panelCovers ? 'Fees' : 'Bid guidance';

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
      // The panel already says "Parts-only lot — no ceiling recommended", and a
      // black-and-red banner says it again at the top of the page.
      if (!panelCovers) {
        td.appendChild(el('div', { class: `${NS}-over`, html:
          '<strong>💀 Parts-only lot — no ceiling recommended.</strong> Value it as spares.' }));
        if (d.nextCost) {
          td.appendChild(el('table', { class: `${NS}-mini` }, [el('tbody', {}, [
            line('Next bid', money(d.next)),
            line('Fees & tax', `+ ${money(d.nextCost.total - d.next)}`, feeNote),
            line('Final cost', money(d.nextCost.total), 'what you actually pay', true),
          ])]));
        }
      }
      appendFeeProvenance(td, d);
      return;
    }

    if (panelCovers) {
      appendFeeProvenance(td, d);
      if (d.pending) td.appendChild(pendingNote());
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

    if (d.pending) td.appendChild(pendingNote());

    appendFeeProvenance(td, d);
  }

  /** The "these numbers are provisional" line, with the pulse dot. */
  function pendingNote() {
    return el('div', {}, [
      el('span', { class: `${NS}-dot` }),
      el('span', { class: `${NS}-spin`, text:
        ' Provisional — based on the auctioneer’s stated retail. Verifying against live prices…' }),
    ]);
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

    /*
     * One lot, with the fields a detail page does not put in the DOM.
     *
     * Every field below was verified against the live endpoint by sending it and
     * reading the error: introspection is blocked, but an unknown field is named
     * in the response ("Cannot query field 'x' on type 'Lot'"). `category` is a
     * leaf-first tree, and `bidAmount` is deliberately not used — on a lot with
     * no bids it came back as 123.45 while lotState.highBid was 0.
     */
    async lotDetail(id) {
      const query = 'query HesLotDetail($ids: [Int!], $pageNumber: Int!, $pageLength: Int!) {' +
        ' lotSearch(input: {eventItemIds: $ids, status: ALL}, pageNumber: $pageNumber, pageLength: $pageLength) {' +
        ' pagedResults { results { id lead description estimate lotNumber quantity pictureCount' +
        ' shippingOffered category { id categoryName } auction { id eventName }' +
        ' lotState { bidCount highBid minBid isClosed } } } } }';
      const data = await GQL.post('HesLotDetail', query, { ids: [id], pageNumber: 1, pageLength: 1 });
      const results = (((data || {}).lotSearch || {}).pagedResults || {}).results || [];
      return results[0] || null;
    },

    /** The auction behind a lot: where, when, who, and the untruncated notices. */
    async auctionDetail(auctionId) {
      const query = 'query HesAuctionDetail($id: Int!) {' +
        ' auction(id: $id) { id eventName bidOpenDateTime bidCloseDateTime' +
        ' biddingNotice auctionNotice previewDateInfo checkoutDateInfo paymentInfo' +
        ' currencyAbbreviation' +
        ' auctioneer { id name address city state postalCode email phone } } }';
      const data = await GQL.post('HesAuctionDetail', query, { id: auctionId });
      return (data || {}).auction || null;
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

      /*
       * On a bids page the discount is not the question — you have already bid.
       * The question is raise, hold, or let go, so the verdict drives the colour
       * there and the discount becomes supporting detail.
       */
      const ind = info.bidVerdict || indicatorFor(info.ratio);
      dot.className = `${base} ${NS}-ind-${ind.cls}`;
      const bidLine = info.bidVerdict
        ? `${info.bidStatus ? `${info.bidStatus.toUpperCase()} — ` : ''}${ind.label}` +
          `\n${ind.advice}` +
          (info.maxBid != null ? `\nYour ceiling: ${money(info.maxBid)}` : '') + '\n'
        : '';
      dot.title = bidLine + (info.ratio == null
        ? `No retail price found — final cost ${info.cost ? money(info.cost.total) : '—'}`
        : `${pct(info.disc)} off retail (${indicatorFor(info.ratio).label})` +
          `\nFinal cost ${money(info.cost.total)} vs ${money(info.retail)} new` +
          (info.source ? ` at ${info.source}` : '') +
          (info.damaged ? '\n⚠ lot reports damage — retail is for a new unit' : '') +
          (info.feesEstimated ? '\n⚠ fees estimated — this auction’s terms could not be read' : ''));
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

        /*
         * The page text is read only if the auction's own text did not name a
         * province, because reading it is expensive in a way that is easy to miss.
         *
         * `document.body.innerText` forces a full layout and text-extraction of
         * the render tree. On this 100-tile page that measured 9ms with layout
         * already clean and 593ms with it dirty — and Tidy.page() has just added
         * a body class, so it is always dirty here. It was the single longest
         * blocking task in the whole catalog sweep.
         *
         * auctionTerms already includes shippingAndPickupInfo, which carries the
         * pickup address, so the province is usually known without it and the
         * expensive read never happens. When it is genuinely needed the inputs
         * are exactly what they were before.
         */
        let fees = parseFees([termsText]);
        if (!fees.province) {
          Perf.count('catalog: paid for body.innerText to find a province');
          fees = parseFees([termsText, (document.body.innerText || '').slice(0, 4000)]);
        }
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
        /*
         * Deliberately not yielded.
         *
         * Breaking this loop up looks like the obvious way to stop it blocking,
         * and measurement said otherwise: yielding every 10 tiles turned one
         * long task into six of 262-427ms, because each yield lets the browser
         * run a full style and layout pass over all 100 tiles before the loop
         * resumes. The arithmetic here is 14ms of CPU for all 100 lots; the cost
         * is the layout the DOM writes provoke, and interleaving pays it
         * repeatedly instead of once.
         */
        for (let t = 0; t < tiles.length; t++) {
          const tile = tiles[t];
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

        // ---- pass 2: retail lookups --------------------------------------
        let priced = 0;
        const paint = (w, best) => {
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
        };

        /*
         * Phase A — everything that needs no network at all.
         *
         * A parts-only lot is never looked up, a lot with no usable query cannot
         * be, and a cached quote is already in hand. Those used to be fed through
         * the batch loop anyway, taking a slot in a batch of six and then waiting
         * out the 350ms politeness delay before the next batch — so a page whose
         * quotes were all cached spent about 6.6 seconds asleep and issued no
         * requests at all. Measured on a 100-lot page: 6.59s of the 6.6s sweep
         * was that sleep.
         *
         * Yields every 25 tiles so a hundred cache hits cannot become one long
         * task that janks the page while the user is trying to scroll.
         */
        const misses = [];
        let free = 0;
        for (let i = 0; i < work.length; i++) {
          if (Catalog._done !== key) return true;      // navigated away mid-sweep
          const w = work[i];
          if (w.cond.partsOnly || !w.product.query) { paint(w, null); free++; continue; }
          const hit = cachedRetail(w.product);
          if (hit) { paint(w, pickBest(hit.quotes)); free++; continue; }
          misses.push(w);
          if (i % 25 === 24) await new Promise((r) => setTimeout(r, 0));
        }

        // ---- Phase B: the ones that actually have to be fetched, paced ----
        const size = Math.max(1, Math.min(20, CFG.catalogBatchSize || 6));
        for (let i = 0; i < misses.length; i += size) {
          if (Catalog._done !== key) return true;
          await Promise.all(misses.slice(i, i + size).map(async (w) => {
            let best = null;
            try {
              best = pickBest((await lookupRetail(w.product)).quotes);
            } catch (e) { /* fall back to the auctioneer's own figure */ }
            paint(w, best);
          }));
          // Be a polite client between batches that actually hit the network.
          if (i + size < misses.length) await new Promise((r) => setTimeout(r, 350));
        }
        log(`catalog: ${priced}/${work.length} lots priced ` +
          `(${free} needed no network, ${misses.length} fetched)`);
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
      document.body.classList.toggle(`${NS}-noimg`, !!CFG.catalogHideImages);

      // These three genuinely need JS: moving nodes, copying notice text out
      // before it is hidden, and identifying the icon-only print control.
      Tidy.moveAuctionButtons();
      Tidy.demoteNotices();
      Tidy.hidePrint();
      Tidy.auctionHeader();
    },

    /**
     * The auction header box: a promo image column, a prose column and a stack
     * of mismatched controls, 331px tall before you reach a single lot.
     *
     * The image goes (there are no product photos on the page any more, so a
     * marketing banner is the only picture left and it earns nothing), the prose
     * column takes the freed width, the right-hand controls are equalised, and
     * the 686-character description is clamped to three lines with a toggle.
     */
    auctionHeader() {
      const badge = document.querySelector('.auction-lot-badge');
      const row = badge && badge.closest('.row');
      if (!row || row.dataset[`${NS}Head`]) return;
      row.dataset[`${NS}Head`] = '1';
      row.classList.add(`${NS}-auction-head`);

      const cols = Array.from(row.children);
      const sideCol = badge.closest('[class*="col"]');
      const imgCol = cols.find((c) => c !== sideCol && c.querySelector('app-thumbnail, img'));
      if (imgCol) imgCol.classList.add(`${NS}-head-img`);
      if (sideCol) sideCol.classList.add(`${NS}-auction-side`);
      const midCol = cols.find((c) => c !== imgCol && c !== sideCol);
      if (midCol) midCol.classList.add(`${NS}-auction-main`);

      Tidy.clampDescription(row);
    },

    /**
     * Clamp the auction blurb. HiBid ships an app-read-more component but it
     * renders fully expanded here (231px), so clamp its inner element and give
     * it an explicit toggle rather than leaving a wall of text above the lots.
     */
    clampDescription(row) {
      const desc = row.querySelector('.read-more-inner') ||
                   row.querySelector('app-read-more .text-pre-line');
      if (!desc || desc.dataset[`${NS}Clamped`]) return;
      desc.dataset[`${NS}Clamped`] = '1';
      desc.classList.add(`${NS}-clamp`);

      /*
       * Expanding the text is not enough on its own. HiBid's own wrappers
       * (.read-more-outer.expandable and the column around it) carry their own
       * height and overflow, so releasing only the inner element rendered the
       * extra text inside a still-clipped box — visibly cut off mid-sentence.
       *
       * The ancestors up to the row are therefore released too, and their
       * original inline values are remembered so collapsing restores them rather
       * than leaving the page permanently altered.
       */
      const chain = [];
      for (let n = desc.parentElement, i = 0; n && n !== row && i < 6; n = n.parentElement, i++) {
        chain.push(n);
      }

      const release = (on) => {
        for (const n of chain) {
          if (on) {
            if (!(`${NS}Saved` in n.dataset)) {
              n.dataset[`${NS}Saved`] = JSON.stringify({
                mh: n.style.maxHeight, h: n.style.height, ov: n.style.overflow,
              });
            }
            n.style.maxHeight = 'none';
            n.style.height = 'auto';
            n.style.overflow = 'visible';
          } else if (`${NS}Saved` in n.dataset) {
            let prev = {};
            try { prev = JSON.parse(n.dataset[`${NS}Saved`]); } catch (_) { prev = {}; }
            n.style.maxHeight = prev.mh || '';
            n.style.height = prev.h || '';
            n.style.overflow = prev.ov || '';
            delete n.dataset[`${NS}Saved`];
          }
        }
      };

      const toggle = el('button', {
        class: `${NS}-more`, type: 'button', text: 'Show more',
        onclick: (e) => {
          /*
           * stopPropagation as well as preventDefault: the description sits
           * inside HiBid's own clickable lot/auction link, and an ancestor click
           * handler routes the SPA elsewhere. preventDefault alone stops the
           * anchor's default but not a JS handler, so the page navigated away
           * instead of expanding.
           */
          e.preventDefault();
          e.stopPropagation();
          const open = desc.classList.toggle(`${NS}-expanded`);
          release(open);
          toggle.textContent = open ? 'Show less' : 'Show more';
        },
      });
      desc.insertAdjacentElement('afterend', toggle);
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
       * The Watch control is hidden by the stylesheet. Lot photos are kept but
       * shrunk to 96px — hiding them also stopped them ever loading, since a
       * lazy image inside a display:none subtree never enters the viewport.
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
  // SECTION 19 — Current bids / watch list
  // ===========================================================================

  /*
   * /account/currentbids reuses the catalog's app-lot-tile markup, so the final
   * price, the deal dot and the declutter all apply unchanged. Two things are
   * different and both matter:
   *
   *   1. It lists lots from SEVERAL auctions at once, grouped under
   *      app-watched-auction-header. Fees differ per auction, so a single
   *      auction id read from the URL — which is what the catalog does — would
   *      price half the page with the wrong premium. Each tile is mapped to the
   *      header above it and fees are fetched per distinct auction.
   *
   *   2. Each tile carries a bid status ("Outbid" / "Winning"). Combined with the
   *      ceiling that turns a flat list into a decision: raise, hold, or let go.
   *      This is the question the page exists to answer and today it answers
   *      only half of it — it tells you that you are losing, not whether losing
   *      is the right outcome.
   *
   * The user's own maximum bid is deliberately NOT used. It exists only in the
   * authenticated CurrentBidsSearch response, and reading it would mean getting
   * hold of a bearer token. Everything below works from the rendered DOM plus
   * the public lot/auction data, so no credential is ever touched.
   */

  const BID_STATUS_RE = /\b(outbid|winning|losing|won|lost|reserve not met)\b/i;

  /** What to do about a lot you have already bid on. */
  function bidVerdict({ status, nextCost, maxBid, retail }) {
    const outbid = /outbid|losing/i.test(status || '');
    const winning = /winning|won/i.test(status || '');

    if (maxBid == null || !nextCost) {
      return { cls: 'na', label: status || 'unknown', advice: 'no retail price — decide manually' };
    }
    const nextOver = nextCost.hammer > maxBid;

    if (winning) {
      return nextCost.total > (retail || Infinity)
        ? { cls: 'red', label: 'winning above retail', advice: 'you are winning at a price above retail — consider retracting if the house allows it' }
        : { cls: 'green', label: 'winning, good price', advice: 'hold; do not raise' };
    }
    if (outbid) {
      return nextOver
        ? { cls: 'red', label: 'let it go', advice: `the next bid is past your ${CFG.targetDiscountPct}%-off ceiling of ${money(maxBid)}` }
        : { cls: 'green', label: 'worth raising', advice: `still under your ceiling of ${money(maxBid)}` };
    }
    return nextOver
      ? { cls: 'orange', label: 'at your ceiling', advice: `next bid is past ${money(maxBid)}` }
      : { cls: 'green', label: 'under your ceiling', advice: `ceiling ${money(maxBid)}` };
  }

  const Bids = {
    _done: null,

    /** Bid/watch pages under /account. */
    isBidsPath() {
      return /^\/account\/(currentbids|watchlist|pastbids|pastwatchlist|watchauctionlist|toppicks)/i
        .test(location.pathname);
    },

    /**
     * Map each tile to its auction. Tiles appear under a header per auction, so
     * the nearest preceding header in document order owns the tile.
     */
    auctionMap(tiles) {
      const headers = Array.from(document.querySelectorAll('app-watched-auction-header'));
      const marks = headers.map((h) => {
        const link = h.querySelector('a[href*="/catalog/"], a[href*="/auction/"]');
        const m = link && link.getAttribute('href').match(/\/(?:catalog|auction)\/(\d+)/i);
        return { node: h, id: m ? Number(m[1]) : null };
      }).filter((x) => x.id);

      const byTile = new Map();
      for (const tile of tiles) {
        let owner = null;
        for (const mark of marks) {
          // compareDocumentPosition: 4 = mark precedes tile
          if (mark.node.compareDocumentPosition(tile.node) & 4) owner = mark.id;
        }
        byTile.set(tile.node, owner);
      }
      return byTile;
    },

    /** Fee stack per auction id, fetched once each. */
    async feesByAuction(ids) {
      const out = new Map();
      const pageText = (document.body.innerText || '').slice(0, 4000);
      for (const id of ids) {
        if (id == null) continue;
        let terms = { text: '', rate: null };
        try {
          terms = await GQL.auctionTerms(id);
        } catch (e) {
          warn(`terms for auction ${id}:`, e.message);
        }
        let fees = parseFees([terms.text]);
        if (!fees.province) fees = parseFees([terms.text, pageText]);
        if (/fallback/.test(fees.premiumSource || '') && terms.rate != null) {
          fees.premiumPct = terms.rate;
          fees.premiumSource = `auction.buyerPremiumRate (${terms.rate}%)`;
        }
        out.set(id, { fees, estimated: /fallback/.test(fees.premiumSource || '') });
      }
      return out;
    },

    async enhance() {
      const tiles = Catalog.tiles();
      if (!tiles.length) return false;

      const key = tiles.map((t) => t.id).join(',');
      const marked = document.querySelector(`.${NS}-final, .${NS}-ind`);
      if (Bids._done === key && marked) return true;
      Bids._done = key;

      Loader.show();
      try {
        Tidy.page();

        const byTile = Bids.auctionMap(tiles);
        const auctionIds = [...new Set([...byTile.values()].filter((v) => v != null))];

        const [feeMap, lots] = await Promise.all([
          Bids.feesByAuction(auctionIds),
          GQL.lots(tiles.map((t) => t.id)).catch((e) => { warn('lots:', e.message); return []; }),
        ]);
        const byId = new Map(lots.map((l) => [l.id, l]));

        // ---- pass 1: final price and status, no per-lot network -----------
        const work = [];
        const costCache = new Map();
        for (const tile of tiles) {
          const auctionId = byTile.get(tile.node);
          const entry = feeMap.get(auctionId);
          const fees = entry ? entry.fees : parseFees([]);
          const estimated = entry ? entry.estimated : true;

          const lot = byId.get(tile.id) || {};
          const lead = lot.lead || tile.title || '';
          const description = lot.description || '';
          const cond = assessCondition([lead, description].join('\n'));
          const large = isLargeItem(`${lead}\n${description}`);
          const next = num(txt(tile.amountEl));

          let cost = null;
          if (next != null) {
            const bucket = `${auctionId}|${next}|${large ? 'L' : ''}`;
            if (!costCache.has(bucket)) costCache.set(bucket, allIn(next, fees, { large }));
            cost = costCache.get(bucket);
          }

          Tidy.tile(tile);
          Catalog.setFinal(tile, cost, estimated);
          Catalog.setIndicator(tile, { pending: true });

          const status = (() => {
            const n = tile.node.querySelector('.bid-status');
            const t = n ? txt(n) : '';
            return BID_STATUS_RE.test(t) ? t : '';
          })();

          const product = extractProduct(lead, description);
          const stated = extractStatedRetail(lead, description, lot.estimate || '');
          if (stated) product.statedRetail = stated.value;

          work.push({ tile, product, stated, cond, cost, next, large, fees, estimated, status });
        }

        /*
         * Order the sweep by how much the answer matters.
         *
         * A cold bids page is network-bound and cannot be made fast: unlike a
         * catalog, its ~100 lots are ~100 distinct products, so it is ~200
         * retailer requests however they are arranged. Measured end to end: 124s.
         *
         * What can be fixed is WHICH answers arrive first. A lot you are being
         * outbid on may need action within minutes; one you are comfortably
         * winning does not. Sorting outbid-first means the decisions you might
         * act on resolve in the first seconds instead of after two minutes.
         */
        const priority = (w) => {
          if (/outbid|losing/i.test(w.status)) return 0;
          if (!w.status) return 1;
          return 2;                              // winning: nothing to decide yet
        };
        work.sort((a, b) => priority(a) - priority(b));

        // ---- pass 2: retail, then a verdict that knows your bid status -----
        const size = Math.max(1, Math.min(20, CFG.bidsBatchSize || CFG.catalogBatchSize || 8));
        for (let i = 0; i < work.length; i += size) {
          if (Bids._done !== key) return true;
          const batch = work.slice(i, i + size);
          const needsNetwork = [];

          await Promise.all(batch.map(async (w) => {
            let best = null;
            if (!w.cond.partsOnly && w.product.query) {
              try {
                const res = await lookupRetail(w.product);
                best = pickBest(res.quotes);
                if (!res.cached) needsNetwork.push(1);
              } catch (e) { /* fall back to the stated figure */ }
            }
            const retail = best ? best.price : (w.stated ? w.stated.value : null);
            const ratio = (retail && w.cost) ? w.cost.total / retail : null;
            const maxHammer = maxHammerFor(retail, CFG.targetDiscountPct, w.fees, { large: w.large });
            const maxBid = maxHammer != null ? floorToIncrement(maxHammer, []) : null;
            const verdict = bidVerdict({ status: w.status, nextCost: w.cost, maxBid, retail });

            Catalog.setIndicator(w.tile, {
              ratio,
              disc: ratio == null ? null : (1 - ratio) * 100,
              cost: w.cost,
              retail,
              source: best ? best.provider : (w.stated ? 'auctioneer’s figure' : null),
              partsOnly: w.cond.partsOnly,
              damaged: w.cond.damaged,
              feesEstimated: w.estimated,
              // Bid-specific: the decision, not just the discount.
              bidStatus: w.status,
              bidVerdict: verdict,
              maxBid,
            });
          }));

          // Only pace batches that actually went to a retailer.
          if (needsNetwork.length && i + size < work.length) {
            await new Promise((r) => setTimeout(r, 350));
          }
        }
        log(`bids: ${work.length} lots priced across ${auctionIds.length} auction(s)`);
        return true;
      } finally {
        Loader.hide();
      }
    },
  };

  // ===========================================================================
  // SECTION 14 — Page router + SPA navigation
  // ===========================================================================

  function pageKind() {
    const p = location.pathname;
    if (/^\/lot\//i.test(p)) return 'detail';
    if (Bids.isBidsPath()) return 'bids';
    if (/^\/(?:catalog|auction)\//i.test(p)) return 'catalog';
    if (/^\/lots\b/i.test(p) || /^\/search\b/i.test(p)) return 'search';
    return 'other';
  }

  const PAGES = {
    detail: enhanceDetail,
    catalog: () => Catalog.enhance(),
    // Same tile markup, but many auctions at once and a bid status per lot.
    bids: () => Bids.enhance(),
    // Search results reuse the same tile markup, so the catalog pass fits.
    search: () => Catalog.enhance(),
    other: async () => true,
  };

  /** Identity of the current view: pagination lives in the query string. */
  const pageUrl = () => location.pathname + location.search;

  async function run(reason) {
    const kind = pageKind();
    const key = `${kind}|${pageUrl()}`;

    /*
     * The tidy stylesheet is scoped to a body class, and the body survives SPA
     * navigation — so leaving a catalog page for a lot page would otherwise keep
     * hiding thumbnails there, which is exactly how "no product images load"
     * looked. Drop the class whenever the current view is not a lot list.
     */
    if (kind !== 'catalog' && kind !== 'search' && kind !== 'bids') {
      document.body.classList.remove(`${NS}-tidy`);
      document.body.classList.remove(`${NS}-noimg`);
    }
    if (State.running) return;
    State.running = true;
    // The detail layout is a body class; a catalog page must not inherit it.
    if (kind !== 'detail') clearDetailLayout();
    Detail.resetCache();
    Perf.count(`run:${kind}`);
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

  /**
   * Throw away everything rendered for the lot we are navigating away from.
   *
   * Without this the previous lot's summary panel — its retail price, its bid
   * ceiling — stays on screen against the new lot's photos until the next render
   * lands. Bumping the generation counter also strands any lookup still in
   * flight, so a late answer for the old lot cannot paint itself onto the new one.
   */
  function resetDetail() {
    State.gen++;
    // Emptied rather than removed: these two live inside the card on the normal
    // path and inside #hes-banners on the fallback, and removing the card below
    // takes the card's copies with it either way.
    for (const id of [`${NS}-cond`, `${NS}-decision`, `${NS}-verdict`]) {
      const n = document.getElementById(id);
      if (n) n.textContent = '';
    }
    for (const id of [`${NS}-infocard`, `${NS}-auctionbox`, `${NS}-notices`, `${NS}-banners`]) {
      const n = document.getElementById(id);
      if (n) n.remove();
    }
  }

  /** Angular swaps views without a page load; watch the URL and the DOM. */
  function watch() {
    /*
     * Identity of the current view includes the query string: HiBid's pager and
     * its catalog sorting both change it without touching the path, so a
     * path-only check sat there doing nothing while you clicked through a sale.
     */
    let lastUrl = pageUrl();
    let debounce = null;

    const kick = (reason) => {
      clearTimeout(debounce);
      debounce = setTimeout(() => run(reason), 400);
    };

    const navigated = (reason) => {
      if (pageUrl() === lastUrl) return;
      lastUrl = pageUrl();
      State.lastKey = null;
      Catalog._done = null;              // a new lot list is a new set of tiles
      Bids._done = null;
      if (pageKind() === 'detail') resetDetail();
      Perf.count(`navigation:${reason}`);
      kick(`navigation (${reason})`);
    };

    /*
     * Angular routes with history.pushState, which fires no event of its own.
     * Wrapping the two history methods turns a pager click into an immediate
     * signal instead of up to 500ms of polling lag; the interval below stays as
     * a backstop for anything that changes the URL by another route.
     */
    const hist = typeof history !== 'undefined' ? history : null;
    for (const name of ['pushState', 'replaceState']) {
      const original = hist && hist[name];
      if (typeof original !== 'function') continue;
      hist[name] = function patched() {
        const r = original.apply(this, arguments);
        try { navigated(name); } catch (e) { warn('navigation hook:', e); }
        return r;
      };
    }
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      window.addEventListener('popstate', () => navigated('popstate'));
      window.addEventListener('hashchange', () => navigated('hashchange'));
    }

    setInterval(() => navigated('poll'), 500);

    const obs = new MutationObserver(() => {
      Perf.count('mutation batches');
      // pageUrl(), not pathname: pagination is a query-string change.
      const key = `${pageKind()}|${pageUrl()}`;
      if (State.lastKey === key) return;                 // already done
      const k = pageKind();
      if (k === 'detail' && !document.querySelector('app-information-panel')) return;
      if ((k === 'catalog' || k === 'search' || k === 'bids') && !document.querySelector('app-lot-tile, .lot-tile')) return;
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
      assessCondition, isLargeItem, relevance, detectTax, bidVerdict,
      modelMatches, looksLikeModel, compactTokens, priceFloor, isAccessoryListing,
      Providers, pickBest, lookupRetail,
      parseLotId, parseAuctionId, splitNotice, conditionTone, conditionChips,
      infoFacts, fmtDateTime, formatAddress, Perf, correctFees,
      maxBidLabel, bidCountLabel, retailCacheKey, cachedRetail,
      setHttp: (fn) => { HTTP = fn || gmHttp; },
      setConfig: (patch) => { CFG = Object.assign({}, CFG, patch); },
    };
  }

  Cache.sweepOldEpochs();
  watch();
})();
