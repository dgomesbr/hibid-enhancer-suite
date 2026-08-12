<img src="assets/icon-128.png" width="96" align="right" alt="HiBid Enhancer Suite icon">

# HiBid Enhancer Suite

A Tampermonkey userscript that turns a HiBid lot page into a decision.

It reads the lot's own description, finds what the item actually costs new in
Canada, parses the auction's fee schedule out of its terms, and tells you the
highest hammer price that still beats retail after **buyer's premium + handling
fees + HST**. It shouts at you when a lot is a bad deal, and shouts louder when
the lot is broken.

![Summary panel](docs/screenshot-summary.png)

![Injected pricing rows](docs/screenshot-info-rows.png)

When the price is too close to retail the same panel turns red and leads with
what you are about to pay instead of a ceiling:

![Bad deal panel](docs/screenshot-summary-bad.png)

## What it does on a lot detail page

| Feature | Detail |
|---|---|
| **Product identification** | Extracts the real product name from the lot description, stripping the `Retail $328.00 \|` prefix, the `****` separator and the auctioneer's `Notes:` block. Builds a tight search query (`Sony WF-1000XM5`), keeping capacity where it moves price (`CORSAIR Vengeance DDR5 32GB`). |
| **Live retail price** | A **Retail (live)** row is injected directly beneath the auctioneer's **Estimate** row, with the price, the matched product title, a condition badge, and deep links — including a CamelCamelCamel price-history link for the exact ASIN. |
| **Fee-aware bid ceiling** | A **Bid guidance** row shows `BID UP TO $X` — the highest hammer price whose all-in cost still clears your target discount — rounded down to a bid the site will actually accept. |
| **Summary panel** | One dark panel at the top of the page: the decision in 40px type, then a table of retail / next bid / fees & tax / **final cost** / max bid / walk-away. Styled from HiBid's own palette (brand blue `#266296`, near-black, their orange `#e65100`); money that leaves your pocket is orange. |
| **Red bad-deal panel** | If the next required bid lands less than 25% under retail the panel turns red and the hero number becomes the final cost you are about to pay, not a ceiling. |
| **Parts-only banner** | 💀 If the **lot's own** description says parts-only / broken / damaged / `Is Item Damaged? Yes`, a black-and-red banner goes above everything else, and **all retail comparison and bid advice is suppressed** — a working unit's price is not a valid comparison for a broken one. |
| **Fee provenance** | Every fee is shown with the exact sentence it was parsed from, so a wrong number is traceable instead of magic. |
| **Never blocks the page** | Two-pass rendering: everything derivable from the DOM appears instantly, the network lookup runs detached. A pulse loader in the top-right corner shows while it is in flight. |

### Nothing waits on the network

The lot page renders and stays interactive throughout. Enhancement happens in two
passes:

**Pass 1 — synchronous.** Condition banners, the parsed fee stack, the all-in cost
of the next bid, and provisional guidance from the auctioneer's own stated retail.
Rendered immediately from the DOM, no network involved.

**Pass 2 — detached.** The live retail lookup is fired *without* being awaited, so
the controller returns straight away. While it is in flight a 20px pulsing
gradient dot sits at `top: 25px; right: 25px`, and the provisional figures are
labelled *unverified* / *provisional*. When the quotes land, the retail row, bid
guidance and verdict banner re-render in place.

![Pulse loader](docs/screenshot-loader.png)

Concretely, on the reference lot with a deliberately slowed network:

| | Retail shown | Ceiling | Loader |
|---|---|---|---|
| **at 1.2s** | $328.00 — auctioneer's claim, `UNVERIFIED` | BID UP TO **$122.00** *(provisional)* | visible |
| **after lookup** | $278.00 at Amazon.ca, `NEW` | BID UP TO **$104.00** | hidden |

A generation counter drops stale results, so a slow lookup for a lot you have
already navigated away from can never overwrite the current one.

### Structured description fields

Many auctioneers write the description as a field block rather than prose:

```
Est. Retail Price: 251.00
Condition: BRAND NEW - OPEN BOX
Model: NT-USB+
Is Item Functional? Yes
Is Item Damaged? No
Missing Major Parts? No
```

These are parsed as fields, not scanned as text, and that distinction matters:
the *label* "Is Item Damaged?" contains the word "damaged" and "Missing Major
Parts?" contains "parts", so a keyword scan flags a brand-new item as broken.
Yes/No answers are read as answers — `Is Item Damaged? No` means not damaged —
and the keyword scan only ever runs on the `Condition:` value and the remaining
prose. `Model:` is also used as the search token, which is how `NT-USB+` (a model
code with no digits in it) survives into the query.

### The money

```
premium  = hammer × premium%
card     = (hammer + premium) × card%          (only if the terms mention one)
handling = per-item fee + large-item fee       (large-item only for appliances)
all-in   = (hammer + premium + card + handling) × (1 + tax%)

max hammer for a target discount d:
  budget  = retail × (1 − d)
  hammer  = (budget ÷ (1 + tax%) − handling) ÷ ((1 + premium%) × (1 + card%))
```

Worked through on the lot this was built against — Sony WF-1000XM5, retail
**C$278** on Amazon.ca, terms of *16% Buyer's Premium plus HST, $1.50 handling per
item*, Ontario 13% HST:

| Hammer | Premium | Handling | Tax | All-in | vs retail |
|---|---|---|---|---|---|
| $31.00 | $4.96 | $1.50 | $5.02 | **$42.33** | 84.8% under |
| $104.00 | $16.64 | $1.50 | $15.87 | **$138.01** | 50.4% under ← the ceiling |
| $157.00 | $25.12 | $1.50 | $23.92 | **$207.54** | 25.3% under ← walk away |

So the script reports **BID UP TO $104.00** for a 50%-off deal, with a hard
walk-away at **$156.00**.

Tax is applied to the whole invoice (hammer + premium + fees), which is how
Ontario auctioneers bill it.

## Retail price sources

There is **no free official API for Amazon.ca prices** — Amazon's Product
Advertising API requires an approved affiliate account with qualifying sales,
CamelCamelCamel publishes no API, and Keepa is subscription-only. See
[docs/PRICING-SOURCES.md](docs/PRICING-SOURCES.md) for the full evaluation.

What the script uses instead, in priority order:

1. **Amazon.ca** — the search page, parsed in the browser via
   `GM_xmlhttpRequest`. No key. Sponsored placements are dropped, accessories are
   rejected, and the ASIN is captured so the CamelCamelCamel history link is
   exact.
2. **Best Buy Canada** — `bestbuy.ca/api/v2/json/search`, an undocumented but
   open, key-free JSON endpoint. Used as an independent cross-check.
3. **The auctioneer's own figure** — the `Retail $…` in the title, an
   `Est. Retail Price:` field, or the top of the Estimate range. Shown as
   *unverified*, and used only when nothing live could be found.
4. **Keepa** *(optional, paid)* — CamelCamelCamel-grade history behind an
   official API. Off by default; add a key in the settings menu to enable.

The cheapest **brand new** quote wins. Used and open-box quotes never set the
benchmark while a new price exists, because comparing an auction lot to a used
price hides how bad the deal is.

**No API keys or secrets are required for the default setup.** Nothing needs to
go in 1Password — see the note in [docs/PRICING-SOURCES.md](docs/PRICING-SOURCES.md).

### Why accessory filtering matters

`Spigen Rugged Armor Designed for Sony WF-1000XM5 Case` matches the brand *and*
the model perfectly and costs **$26.99**. Left unfiltered it becomes "retail",
the lot reads as *61% over* retail, and the recommended ceiling collapses to
**$9.00** — the exact opposite of the truth. Three independent signals reject it:

1. an explicit `for` / `designed for` / `compatible with` / `replacement for` marker,
2. a leading brand that differs from the product's brand (behind any `Open Box -` prefix),
3. an accessory noun positioned *before* the product identity — `Case for Sony WF-1000XM5`
   is an accessory, while `Sony WF-1000XM5 Earbuds with Charging Case` is not.

A lot that genuinely *is* an accessory skips all three, so cases and cables still
get priced.

## Install

1. Install [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Edge, Firefox).
2. **[→ Click here to install the script](https://raw.githubusercontent.com/dgomesbr/hibid-enhancer-suite/main/src/hibid-enhancer.user.js)** —
   Tampermonkey intercepts the `.user.js` URL and shows its install page.
3. Open any HiBid lot page.

Pinned to the tagged release instead of `main`:
[v0.1.0](https://raw.githubusercontent.com/dgomesbr/hibid-enhancer-suite/v0.1.0/src/hibid-enhancer.user.js).
Installing from `main` is recommended — `@updateURL` points there, so
Tampermonkey picks up new versions automatically.

Tampermonkey will ask to allow cross-origin requests to `amazon.ca` and
`bestbuy.ca` the first time. Both are needed for price lookups; deny them and the
script falls back to the auctioneer's stated retail.

## Settings

Tampermonkey's menu on a HiBid page:

- **settings** — target discount (default 50%), red-warning threshold
  (default 25%), fallback buyer's premium (default 18%), per-provider toggles,
  optional Keepa key.
- **clear price cache** — lookups are cached 12h per query.
- **re-run on this page** — clears the cache and re-renders.

The Keepa key is stored in Tampermonkey's own storage on your machine. It is
never sent anywhere except `api.keepa.com`.

## Tests

```bash
node test/run-tests.mjs            # 126 assertions, no dependencies

npm install --no-save linkedom     # provides DOMParser for Node
node test/run-provider-tests.mjs   # 29 assertions against real captured responses
```

`test/fixtures/` holds trimmed but otherwise untouched real responses from
Amazon.ca and Best Buy Canada, so a markup change at either retailer surfaces as
a test failure rather than a silently wrong price.

The suites cover the fee parser against five real auction fee wordings, the
round-trip property that `allIn(maxHammerFor(retail, d)) == d% under retail`
across prices and targets, bid-increment rounding, province tax detection,
parts-only detection, and every accessory/homonym trap found while building this.

## Catalog / lot-list pages

On a catalog page (`/catalog/<id>`) every lot tile gets two additions:

| | |
|---|---|
| **Final price on the bid button** | `Bid 1.00 CAD` becomes `Bid 1.00 (3.04) CAD` — the real out-the-door cost of that bid under the auction's own fees. Just the bracketed number: the currency and the "Bid" label are already on the button. A dashed underline means the auction's terms could not be read and the figure uses the fallback premium. |
| **Deal dot after the shipping icon** | Colour-coded by final cost as a share of the new price. Hover for the discount. |

| Dot | Final cost vs new | Meaning |
|---|---|---|
| 🟢 green | under 50% | great |
| 🟡 yellow | 50–65% | good |
| 🟠 orange | 65–75% | marginal |
| 🔴 red | over 75% | poor once fees are counted |
| ⚫ dark red | — | parts-only lot, not priced against a working unit |
| ⚪ grey | — | no retail price found |

### Decluttered tiles

A catalog page spends its vertical space on things you read once and repeats
per-lot furniture 100 times. Everything below is *hidden*, never deleted —
Angular owns these nodes and will re-render them, so removal fights change
detection and can blank a tile. Hiding is done in a stylesheet rather than inline
styles for the same reason: an inline style set before a re-render is simply lost.
Set `catalogTidy: false` to switch it all off.

| Removed | Why |
|---|---|
| Bidding Notice, Auction Notice | Read once, cost a screenful every visit. Both become links in a footer block with the full text one click away. |
| Lot thumbnails | You are comparing prices, not photos. Also the largest network saving on the page. |
| Watch control | 100 copies of a control you use on one lot. |
| Share and Print | Page furniture. Note the per-lot bid buttons also carry the class `print`, so matching that class alone would have removed the bid button from all 100 tiles. |
| The word "Lot" before every number | `Lot 9712` → `9712`. |

Auction Details and Registered / Register to Bid move up beside the auction's
status badges, where they belong.

![Decluttered catalog tiles](docs/screenshot-catalog-tiles.png)

Measured on the 100-lot page:

| | before | after |
|---|---|---|
| Tile height | 368 px | **155 px** (−58%) |
| Page height | 10,516 px | **5,009 px** (−52%) |
| Lot images requested | ~100 | **0** |

Hiding the thumbnail alone was not enough: its column is a fixed 150 px and the
tile body has `min-height: 296px`, so the tile stayed 368 px tall with a blank
hole in it. The column is collapsed and the floor released as well.

The zero image requests are a consequence rather than a trick — HiBid already
sets `loading="lazy"` on 101 of 104 images, and a lazy image inside a
`display:none` subtree never enters the viewport, so the fetch never fires. No
separate lazy-loading patch is needed.

### Auction header box

The header carried a marketing image, a 686-character blurb and a stack of
mismatched controls — 336 px before you reached a single lot.

![Auction header](docs/screenshot-catalog-header.png)

- The promo image is hidden. With no product photos left on the page, a banner is
  the only picture on it and earns nothing.
- The blurb is clamped to three lines with a **Show more** toggle. HiBid ships an
  `app-read-more` component but it renders fully expanded here (231 px).
- The right-hand controls are equalised to one uniform pill each, 247 × 40 px.

That last one needed care. The controls are not siblings: `app-auction-status` is
a *wrapper* holding two badges inside `.mb-3` divs, so styling the wrapper as a
single item produced exactly the mismatch it was meant to fix — heights
`148/38/38/38/78/38`, widths `247/168/168/168/114/247`. The fix is to flatten
every wrapper with `display: contents` so each real control becomes a direct flex
child of the column, then style the controls.

Header height drops from 336 px to 274 px, and the prose column takes the width
freed by the image.

### How it stays fast

100 lots would be 100 page fetches scraped from the DOM. Instead the module uses
HiBid's own GraphQL endpoint — the same one the app calls — so the whole page
costs **two requests**:

- `lotSearch(eventItemIds: […])` — every lot's description in one POST, which is
  where `Est. Retail Price`, `Condition` and `Model` live. The tiles themselves
  carry only a title and a bid.
- `auction(id) { termsAndConditions buyerPremium }` — the fee text, which a
  catalog page never renders.

Neither needs authentication for public catalogs. Then:

1. **Pass 1** (no per-lot network) writes the final price onto all 100 tiles at
   once — typically under 4 seconds.
2. **Pass 2** looks up retail in batches of 6 (`catalogBatchSize`, 5–10) with a
   350 ms gap between batches, painting each dot as its batch lands. The pulse
   loader stays up until the sweep finishes.

Results are cached 12 h per query, so a second visit — or another page of the
same auction with overlapping products — paints almost instantly. Navigating
away mid-sweep abandons the remaining batches.

Three further savings, measured on that same 100-lot page:

| | |
|---|---|
| **Fees memoised by price bucket** | Lots at the same bid with the same large-item status have an identical fee stack. On a page sorted by bid count every lot opened at $1.00, so **100 fee computations collapsed to 1**. |
| **Concurrent duplicate lookups joined** | Catalogs list the same product repeatedly. The 12 h cache only helps once a result has landed, so two tiles in the same batch would each fire their own provider pair. **83 distinct queries covered 100 lots.** |
| **Two requests to HiBid, not 100** | Both GraphQL calls together, for the whole page. |

If the auction's terms cannot be read, every final price would silently come from
the fallback premium — on one run that was $1.33 instead of $3.04, a 2.3× error
with nothing on screen to say so. The bracketed figure now carries a dashed
underline and a tooltip in that case, and the deal dot's tooltip says so too.

### Known limitation

On a measured run over 100 lots, 47 resolved to a live retail price and 53 did
not. Two causes: generic goods with no model number produce a weak query that the
relevance gate correctly refuses rather than guessing, and Amazon.ca throttles
under a burst of ~100 lookups, leaving Best Buy Canada as the only source for
much of the page. A grey dot means "unknown", never "bad deal" — the final price
on the bid button is still exact, because it needs no lookup.

## Icon

The dashboard icon is an "H+" tile in the same gradient as the in-page loader.

![Icon at every size, light and dark](assets/icon-preview.png)

The glyphs are drawn as geometry, not `<text>`: the icon is displayed at 16px in
the Tampermonkey dashboard, where font availability and hinting make text
unreliable. It is embedded in `@icon` as a base64 PNG data URI, so it needs no
network, works offline, and survives a repo rename.

Regenerate after editing `assets/icon.svg`:

```bash
npm run icon      # writes assets/icon-*.png + assets/icon-datauri.txt
```

then paste `assets/icon-datauri.txt` into the `@icon` line.
`assets/icon.svg` is the readable source; `tools/make-icon.py` is the renderer,
and the two share the same coordinates.

## Releasing

**Every feature and fix ships as a tagged, published release** — installed copies
only update via `@updateURL`, and Tampermonkey only offers an update when
`@version` increases, so an unbumped version reaches nobody. `npm test` asserts
that `@version` and `package.json` agree, which turns a forgotten bump into a
test failure rather than a silent non-release.

Full checklist in **[RELEASING.md](RELEASING.md)**.

## Page support

| Page | Status |
|---|---|
| Lot detail (`/lot/…`) | ✅ implemented |
| Search / lots (`/lots`, `/search`) | 🔜 registered in the router, not implemented |
| Auction catalog (`/auction/…`) | 🔜 registered in the router, not implemented |

New page types plug into the `PAGES` registry near the bottom of the script; the
fee engine, product extraction and price providers are page-agnostic and reusable
as-is.

## Notes and limits

- **Auction prices move constantly.** The script reads the bid at render time.
  Re-check before bidding.
- **Fees are parsed from free text.** HiBid's structured `buyerPremiumRate` is
  unreliable (it frequently reports 0% when the terms say 16%), so everything is
  text-driven with a conservative 18% fallback. Always expand *How these fees
  were determined* on a lot you're about to bid real money on.
- **Auction-wide boilerplate is deliberately ignored** for condition. Most
  liquidation auctions say "ALL ITEMS SOLD AS-IS, NOT TESTED" on every lot; a
  banner that fires every time is a banner you stop reading. Only the lot's own
  description, lead, and structured condition fields can trigger the parts-only
  warning.
- **This script never bids.** It reads and advises. Bidding is yours.

## Licence

MIT
