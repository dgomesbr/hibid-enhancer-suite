# Catalog and lot-list pages

One hundred lots per page, each with a real final price and a colour-coded
verdict — and what had to happen to make that fast enough to be useful.

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

## Decluttered tiles

A catalog page spends its vertical space on things you read once and repeats
per-lot furniture 100 times. Everything below is *hidden*, never deleted —
Angular owns these nodes and will re-render them, so removal fights change
detection and can blank a tile. Hiding is done in a stylesheet rather than inline
styles for the same reason: an inline style set before a re-render is simply lost.
Set `catalogTidy: false` to switch it all off.

| Removed | Why |
|---|---|
| Bidding Notice, Auction Notice | Read once, cost a screenful every visit. Both become links in a footer block with the full text one click away. |
| ~~Lot thumbnails~~ | **Kept, shrunk to 96 px.** Hiding them outright had a consequence worth recording: a lazy image inside a `display:none` subtree never enters the viewport, so it never loads — hiding the container did not merely hide the photos, it guaranteed they could never appear. Set `catalogHideImages: true` for the old behaviour. |
| Watch control | 100 copies of a control you use on one lot. |
| Share and Print | Page furniture. Note the per-lot bid buttons also carry the class `print`, so matching that class alone would have removed the bid button from all 100 tiles. |
| The word "Lot" before every number | `Lot 9712` → `9712`. |

Auction Details and Registered / Register to Bid move up beside the auction's
status badges, where they belong.

![Decluttered catalog tiles](screenshot-catalog-tiles.png)

Measured on the 100-lot page:

| | stock | v0.7.0 (no photos) | now |
|---|---|---|---|
| Tile height | 368 px | 155 px | **~200 px** |
| Photos | 150 px | none | **96 px, lazy** |

Releasing the tile's `min-height: 296px` floor is what actually shortens it — the
photo column alone was never the whole 213 px.

No separate lazy-loading patch is needed: HiBid already sets `loading="lazy"` on
101 of 104 images, so they load as you scroll. What *broke* loading was hiding
their container, since a lazy image that never enters the viewport never fetches.

## Auction header box

The header carried a marketing image, a 686-character blurb and a stack of
mismatched controls — 336 px before you reached a single lot.

![Auction header](screenshot-catalog-header.png)

- The promo image is hidden. With no product photos left on the page, a banner is
  the only picture on it and earns nothing.
- The blurb is clamped to three lines with a **Show more** toggle. HiBid ships an
  `app-read-more` component but it renders fully expanded here (231 px).
  Expanding releases the height and overflow of HiBid's own wrappers too, and
  restores their original inline values on collapse — releasing only the inner
  element left the extra text inside a still-clipped box, cut off mid-sentence.
- The right-hand controls are equalised to one uniform pill each, 247 × 40 px.

That last one needed care. The controls are not siblings: `app-auction-status` is
a *wrapper* holding two badges inside `.mb-3` divs, so styling the wrapper as a
single item produced exactly the mismatch it was meant to fix — heights
`148/38/38/38/78/38`, widths `247/168/168/168/114/247`. The fix is to flatten
every wrapper with `display: contents` so each real control becomes a direct flex
child of the column, then style the controls.

Header height drops from 336 px to 274 px, and the prose column takes the width
freed by the image.

## How it stays fast

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

## What the sweep actually spent its time on

Two things dominated, and neither was the arithmetic. Both were found by measuring
rather than reading, and a third fix was measured, tried, and thrown away.

**Pacing work that never touched the network — 6.59s of a 6.6s sweep.**

The politeness delay between batches exists to avoid hammering Amazon and Best Buy,
which is right. But every lot went through the same batch loop whether or not it
needed a request: a parts-only lot is never looked up, a lot with no usable query
cannot be, and a cached quote is already in hand. On a 100-lot page with every quote
cached, the sweep issued **zero** retail requests and still took 6.6 seconds, 6.59s
of which was `setTimeout` doing nothing.

The sweep now runs in two phases — everything free resolves immediately, then only
the lots that genuinely need fetching are batched and paced. Same page, same warm
cache:

| | before | after |
|---|---|---|
| Span of all 100 cache reads | 6,593ms | **17ms** |
| Pacing sleeps taken | 16 | **0** |
| Every dot resolved by | ~8.0s | **1.0–2.4s** |
| Retail requests issued | 0 | 0 |

A cold page is still network-bound and still paced exactly as before — that is what
the delay is for. What changed is that a page it cannot help no longer pays it.

**`document.body.innerText` — 593ms in one blocking task.**

The fee parser was given the page's text as a fallback source for the province,
which sets the tax rate. Reading `document.body.innerText` forces a full layout and
text extraction of the render tree:

| | |
|---|---|
| `document.body.innerText`, layout already clean | 9ms |
| `document.body.innerText`, layout dirty | **593ms** |
| `document.body.textContent` (forces no layout) | 2ms |

Layout is always dirty at that moment, because `Tidy.page()` has just added a body
class. This was the longest single blocking task in the sweep. The page text is now
read **only if the auction's own text did not name a province** — and since
`auctionTerms` already includes `shippingAndPickupInfo`, which carries the pickup
address, it usually does. When the fallback is genuinely needed the inputs are
identical to before.

**Yielding inside the tile loop — measured, and reverted.**

Breaking the 100-tile loop up looked like the obvious way to stop it blocking.
Measured, it made things worse: yielding every 10 tiles turned one long task into
**six of 262–427ms and raised total blocked time from ~1,533ms to 2,343ms**, because
each yield lets the browser run a full style and layout pass over all 100 tiles
before the loop resumes. The loop is deliberately left unyielded, with a comment
saying so, because it is the kind of change someone will try again.

For scale, the per-lot arithmetic in that loop is **14–16ms of CPU for all 100
lots** — `assessCondition` ~9ms, `extractProduct` ~7ms, `extractStatedRetail`
~1.3ms, `isLargeItem` and `allIn` ~0.15ms each. The cost was never the arithmetic;
it is the layout the DOM writes provoke.

Those figures are reproducible rather than anecdotal:

```bash
node tools/bench-catalog.mjs            # 100 real lots from auction 764522
node tools/bench-catalog.mjs 766625     # or any auction id
```

It pulls the lots once via GraphQL into a gitignored fixture, then runs offline
against the shipped `__hesInternals`, and also prints how much of the page is even
eligible for a lookup — on auction 764522, 3 lots are parts-only and never looked
up, and 100 lots reduce to 94 distinct cache keys, which is why deduplicating
queries further is not worth doing.

**Still open.** The longest remaining block is 537–846ms, in the tile loop's DOM
writes. Reducing it means auditing `Tidy.tile`, `setFinal` and `setIndicator` for
reads interleaved with writes, so the browser is not forced to re-layout mid-loop.
The measurement is noisy on a live page — 537ms and 846ms on two consecutive runs of
the same page — so that wants a controlled fixture before anyone tunes it.

Two **dead ends**, recorded so they are not re-investigated: the document-wide
`MutationObserver` fires only **3 times** on a catalog page, and injecting the
stylesheet costs **0ms** (an earlier 280ms reading was an artifact of the
measurement forcing a style recalc the browser would have done anyway).

## Known limitation

On a measured run over 100 lots, 47 resolved to a live retail price and 53 did
not. Two causes: generic goods with no model number produce a weak query that the
relevance gate correctly refuses rather than guessing, and Amazon.ca throttles
under a burst of ~100 lookups, leaving Best Buy Canada as the only source for
much of the page. A grey dot means "unknown", never "bad deal" — the final price
on the bid button is still exact, because it needs no lookup.
