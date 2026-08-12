# Performance

What was measured, what turned out to be expensive, and the fixes that were
tried and reverted. Numbers throughout, because nearly every guess was wrong.

## Nothing waits on the network

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

![Pulse loader](screenshot-loader.png)

Concretely, on the reference lot with a deliberately slowed network:

| | Retail shown | Ceiling | Loader |
|---|---|---|---|
| **at 1.2s** | $328.00 — auctioneer's claim, `UNVERIFIED` | BID UP TO **$122.00** *(provisional)* | visible |
| **after lookup** | $278.00 at Amazon.ca, `NEW` | BID UP TO **$104.00** | hidden |

A generation counter drops stale results, so a slow lookup for a lot you have
already navigated away from can never overwrite the current one.

## SPA navigation

HiBid is an Angular app, so Next / Previous / First / Last in the lot pager is a
router navigation, not a page load. Two things went wrong there.

**The URL changes before the content does.** Enhancing in that window read the
*previous* lot's rows and pinned its retail price and bid ceiling onto the new
lot, and because the run then recorded the new path as done, the MutationObserver
never came back to correct it. The enhancement appeared to stop working for the
rest of the session.

HiBid stamps the container with the lot id it actually rendered
(`#lot-details-317094503`), so the mismatch is directly observable. When the URL
and that id disagree the run declines, leaves its "done" marker unset, and the
observer keeps kicking until the DOM catches up. The guard only engages when that
container exists, so a page that does not stamp an id behaves as before rather
than losing the enhancement entirely.

**`pushState` fires no event.** Navigation was detected only by a 500ms poll of
`location.pathname`, which missed anything that changed just the query string.
The two history methods are now wrapped, `popstate` and `hashchange` are handled,
and the poll remains as a backstop. On navigation the previous lot's panel, cards
and notices are cleared immediately and the generation counter is bumped, so a
late answer for the old lot cannot paint itself onto the new one.

Verified on lot 316725406: a `pushState` to another lot id clears the summary
panel, the info card and the auction box within 200ms; while the URL is ahead of
the DOM no card is built from the stale rows; returning to the real URL
re-renders the correct lot.

## Measuring it

A userscript running at `document-idle` inside someone else's Angular app is easy
to make slow by accident and impossible to tune by feel, so every stage of the
detail pass is timed. The last run is left on `window.__hesPerf`:

```js
__hesPerf
// { tag: 'detail + graphql', total: 7.8,
//   spans: [ {label:'infoRows', ms:0.1}, {label:'parseFees', ms:0.1}, … ],
//   counters: { 'panel scan': 1, 'gql memo hit': 1, 'mutation batches': 1 },
//   layout: { docHeightPx: 2385, domNodes: 743 } }
```

Recording is two clock reads and an array push per span, so it stays on; only the
console summary is behind the `debug` setting.

Measured on lot 317094503, 1280px viewport:

| Span | ms |
|---|---|
| `infoRows` | 0.1 |
| `parseFees` | 0.1 |
| `page links` | 0.2 |
| `info card` | 0.7 |
| `layout` | 1.8 |
| `auction box` | 0.3 |
| `notices` | 0.2 |
| `renderQuotes (pass 1)` | 1.5 |
| **synchronous total** | **~8ms** |
| `gql lot` / `gql auction` (detached) | 1,700–3,600 each |
| `enriched render` | 2.9 |

The synchronous pass is not where the time goes: the network is, and it is
already detached. Three things were still worth fixing, and all three came out of
these numbers:

**Panel text was scanned three times per render.** `Detail.panel()` walked every
`app-collapse-panel` and lower-cased its whole `textContent` to match a heading,
and `enhanceDetail` asks for three different panels. Terms and Conditions alone is
a few KB, so the entire auction boilerplate was scanned and lower-cased three
times. Headings live in `.collapse-header`, which is a few words, so it now
matches on that and caches the list for one run: the `panel scan` counter reads
`1` instead of `3`.

**The fee parser re-ran on identical text.** `parseFees` runs some forty regexes
over the whole boilerplate, which is byte-identical for every lot in a sale and
across every re-render. It is memoised on a cheap fingerprint — length plus the
first 48 characters of each source — rather than a full hash, which would cost
about as much as the parse.

**GraphQL was fetched twice per lot and serially.** `enhanceDetail` legitimately
runs more than once (the initial kick and the first Angular re-render both land
before the "done" marker is set), and each run fired its own pair of requests for
identical answers — visible as two `gql lot` spans of 1.7s and 2.8s in one report.
The promise is now memoised per lot id, so overlapping runs join one request; the
`gql memo hit` counter confirms it. And because the auction id is already in the
page's own Catalog link, the auction query no longer waits for the lot query:
`gql auction (parallel)` measured 0ms on hibid.com because it had already resolved
by the time the lot query returned. Worst case the enrichment went from
~3.4s of chained round trips to ~1.7s.

### Fees are re-derived from the auction's own text

The DOM is an unreliable source for fees. A notice is rendered as roughly its
first 400 characters followed by a *Show More* anchor, so anything stated further
in is not on the page at all. On auction 764522 the auction notice is 725
characters and the credit-card surcharge is mentioned at character 441 — inside
the part that is missing.

So pass 3 parses the fee stack a second time, with `GQL.auctionTerms` appended to
the same DOM sources: the identical helper the catalog uses, so both pages derive
fees from one definition of "the auction's fee text". It runs alongside the other
pass-3 queries, so the extra request costs no wall-clock time. Two things follow:

- If a number actually moves, the summary panel and the fee block re-render with
  whatever quotes were last on screen, so a retail price that has already landed
  is not thrown away, and the fee provenance gains a line naming what changed and
  why. If nothing moves, nothing re-renders.
- `buyerPremiumRate` is used as a last resort when the text yielded no premium at
  all. It is this auction's own number, so it beats the blind 18% fallback — but
  it is checked *after* the text, because it reads 1.0 (0%) on auctions whose
  terms plainly say 16%.

This deliberately moves money after the page has settled. The alternative is
leaving a final cost on screen that is knowably wrong because the page truncated
the sentence it was parsed from.

Honest scope: on **both** reference auctions the correction currently changes
nothing, because each states its card fee in the Terms and Conditions panel too,
and that panel is not truncated. Measured on auction 764522, a fee visible only in
the notice would have been worth $1.70 on a $100 hammer ($134.23 versus $135.92).
The correction is a safety net for auctions that state a fee in one place only,
plus the `buyerPremiumRate` improvement above, which does change the answer
whenever an auctioneer never writes the premium in prose.
