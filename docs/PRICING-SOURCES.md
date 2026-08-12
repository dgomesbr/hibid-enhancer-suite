# Canadian retail pricing sources — what's actually available

Evaluated 2026-08-12 while building the lot-detail feature. The question was:
*is there a free API for Canadian retail prices (Amazon.ca / CamelCamelCamel /
any Canadian retailer) that a userscript can call?*

**Short answer: no free official Amazon.ca price API exists.** Two key-free
endpoints do work and are what the script uses.

## Verified results

| Source | Free API? | Verdict | Evidence |
|---|---|---|---|
| **Best Buy Canada** `bestbuy.ca/api/v2/json/search` | Yes — undocumented, no key, no auth | ✅ **Primary structured source.** Clean JSON with `salePrice`, `regularPrice`, `isMarketplace`, `seller`, `productUrl`. | `HTTP 200`, valid JSON returned for `?query=Sony%20WF-1000XM5&lang=en-CA` |
| **Amazon.ca search HTML** | No API, but the page is readable | ✅ **Primary price source.** Parsed with `DOMParser`; ASIN captured for history links. | `HTTP 200`, no bot check, 47 price nodes, correct `$278.00` for the test product |
| **Amazon Product Advertising API (PA-API 5)** | No | ❌ Requires an approved Associates account **with qualifying sales** before keys are issued. Not obtainable for a personal tool. | Documented Amazon requirement |
| **CamelCamelCamel** | No public API | ⚠️ **Link-only.** Cloudflare returns `403` to any programmatic request, including plain `curl`. Perfect as a deep link the user clicks. | `403` for both `/product/<ASIN>` and `/search?sq=` |
| **Keepa** | No free tier | 🔧 **Optional.** Official API with real Amazon.ca price history (the data behind CCC-style charts), subscription-only. Supported behind a user-supplied key, off by default. | keepa.com/#!api returned `403` to automated fetch; no free tier is offered |
| **Walmart Canada / Newegg CA** | No open API | ❌ Not pursued. | — |

## How the script combines them

1. **Amazon.ca** and **Best Buy Canada** are queried in parallel, results cached
   12h per query.
2. The cheapest **brand new** quote becomes the benchmark. A used/open-box quote
   is only used if nothing new was found anywhere, and is labelled as such.
3. The auctioneer's own `Retail $…` claim is always displayed alongside, so you
   can see when they are inflating it.
4. If the live price diverges from the auctioneer's figure by more than ~3× in
   either direction, a **price sanity check** warning appears — that pattern
   almost always means the wrong product was matched, not that a bargain exists.

### Real failure modes found in live data

- **Accessories that name the product.** `Spigen Rugged Armor Designed for Sony
  WF-1000XM5 Case` at **$26.99** and `SAHARA Venture Series Silicone Case for
  Sony WF-1000XM5` at **$52.00** both match brand and model perfectly. Rejected
  by three independent signals (see README).
- **Open-box posing as retail.** Best Buy's results for this product were
  *entirely* marketplace listings, the cheapest being a **$274.99 Open Box** unit.
  Treating that as "retail" understates how bad an auction bid is, so condition
  and seller are scored separately and new-vs-used is decided on the title.
- **Sponsored placements.** The first three Amazon.ca results were unrelated JBL
  ads. Dropped via `data-component-type="sp-sponsored-result"`, `AdHolder`, the
  sponsored label, and a `Sponsored Ad –` title prefix.
- **Titles that are only the brand.** Amazon's current markup puts just `Sony` in
  the result `<h2>`; the full title lives in the `img.s-image` `alt` attribute.
  `innerText` is unavailable on a `DOMParser` document, so the alt attribute is
  the only reliable source.
- **Homonyms.** Documented in the `hibid-deal-finder` skill: searching `RAM`
  returns Dodge Ram truck parts, `Kingston` returns Kingston Brass faucets. The
  model token is mandatory when one is detected.

## 1Password

The original request was to register for a pricing API and keep the token in
1Password via the CLI. That is **not applicable as specified**, for two reasons:

1. **No secret is needed.** Both price sources used by default are key-free, so
   the default install has nothing to store.
2. **A userscript cannot reach 1Password.** Tampermonkey code runs inside the
   browser page sandbox; it cannot shell out to `op`. Even with a vault entry, the
   script could not read it at runtime. (Separately, the `op` CLI is not currently
   installed on this machine — `op: command not found`.)

The only optional secret is a **Keepa** key, and Keepa has no free tier. If you
subscribe, the key goes in via the Tampermonkey **settings** menu command and is
held in Tampermonkey's own extension storage — never committed, and only ever
sent to `api.keepa.com`.

If you want it in 1Password as the source of truth anyway, the practical pattern
is manual: store it there, and paste it into the settings prompt once per browser
profile.
