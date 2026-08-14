# Releasing

**Every feature or fix ships as a tagged, published release.** There is no
"just push to main" path, because installed copies only ever update through
`@updateURL`, and Tampermonkey only offers an update when the script's
`@version` has *increased*. A merged fix with an unbumped version reaches
nobody.

## Versioning

[Semver](https://semver.org/), and three numbers must always agree:

| Where | Example |
|---|---|
| `src/hibid-enhancer.user.js` → `// @version` | `0.4.0` |
| `package.json` → `"version"` | `0.12.1` |
| the git tag | `v0.12.1` |

`npm test` fails if the first two disagree: that check exists precisely so a
forgotten bump cannot become a silent non-release.

- **patch** (`0.2.0` → `0.2.1`): a fix to existing behaviour: a bad selector, a
  fee wording that failed to parse, a wrong price match.
- **minor** (`0.2.0` → `0.3.0`) — new capability: another page type, another
  price provider, a new banner.
- **major** — a change that breaks existing users' settings or expectations.

## Checklist

```bash
# 1. Make the change, with a test that would have caught the bug.
npm test                        # 96 + 29 assertions must pass
npm run check                   # syntax-only gate

# 2. If the icon changed:
npm run icon                    # regenerates assets/*.png + the @icon data URI
#    then paste assets/icon-datauri.txt into the @icon line.

# 3. Bump BOTH versions (they are asserted equal by npm test).
#    - src/hibid-enhancer.user.js  -> // @version
#    - package.json                -> "version"
npm test                        # re-run: proves the two agree

# 4. Commit, tag, push.
git add -A
git commit -m "<what changed and why>"
git tag -a v0.X.Y -m "v0.X.Y — <headline>"
git push origin main
git push origin v0.X.Y

# 5. Publish. Notes should say what changed and why it matters to a bidder.
gh release create v0.X.Y --title "v0.X.Y — <headline>" --notes-file notes.md

# 6. Verify the install URL anonymously — this is what users actually hit.
curl -sS -o /dev/null -w '%{http_code} %{size_download}\n' \
  https://raw.githubusercontent.com/dgomesbr/hibid-enhancer-suite/main/src/hibid-enhancer.user.js
```

`raw.githubusercontent.com` caches for ~5 minutes, so an install immediately
after a push may serve the previous copy. Re-check before reporting a release as
live.

## Verifying on a real page

The logic suites do not touch the network and cannot catch a HiBid markup change
or a retailer changing their HTML. Before releasing anything that touches
selectors or providers, load a real lot page with the script installed and
confirm:

- the **Retail (live)** row shows a plausible new price with the right product title,
- **BID UP TO** is present and the fee breakdown adds up,
- the pulse loader appears and then disappears,
- the browser console has no `[hes]` errors.

`test/fixtures/` holds trimmed real responses from Amazon.ca and Best Buy Canada.
When a retailer changes their markup, refresh the fixture in the same commit as
the parser fix so the suite keeps its teeth.

## Release history

| Version | Highlights |
|---|---|
| `v0.13.0` | Time left to bid on current-bids tiles, on one line with the bid count and status. Notes hidden, Unwatch kept. 283px → 260px per tile. |
| `v0.12.1` | Lots you were outbid on and shouldn't chase are faded to 50%. Lots you're winning above retail stay bright. |
| `v0.12.0` | Current-bids page: final price, deal dots and a raise / hold / let-go verdict per lot, with per-auction fees and no credential handling. |
| `v0.11.0` | Catalog no longer paces work that makes no requests, and stops forcing a layout to find a province it usually already knows. |
| `v0.10.0` | One consolidated lot-details card, decision first (BLUF), max bid in its own box, and six quietened labels in the bid strip. |
| `v0.9.0` | Bid numbers printed once; fees re-derived from the auction's own text on lot pages; stale cached quotes retired by a matching epoch. |
| `v0.8.1` | Lot photos restored at 96px (hiding them stopped them ever loading). Show more now grows its container and no longer navigates away. |
| `v0.8.0` | Lot detail page reordered around the decision; notices demoted; two new cards built from GraphQL. Accessory rejection no longer needs a noun. |
| `v0.7.1` | Fixed pagination never re-running (it is a query-string change) and the tidy stylesheet leaking onto lot pages. Auction header box restructured. |
| `v0.7.0` | Catalog decluttered: notices demoted to footer links, thumbnails/Watch removed, tiles 58% shorter. Fixed the deal dot being clipped out of sight. |
| `v0.6.0` | Catalog: bracketed final price `(3.04)`, fee memoisation by price bucket, deduped concurrent lookups, fee text from every GraphQL field, and a visible marker when fees had to be guessed. |
| `v0.5.1` | Reject component-part accessories (rear baffle, I/O shield, bracket) and anything under 30% of the auctioneer's stated retail. |
| `v0.5.0` | Catalog pages: final price on every bid button and a colour-coded deal dot per lot, driven by GraphQL and batched lookups. |
| `v0.4.0` | Condition accuracy: CR-separated field blocks, the "N/A" false positive, three-level severity, boundary-aware model matching. Measured 54/100 false parts-only down to 0. |
| `v0.3.0` | Fixed a false parts-only banner on structured descriptions, curly-apostrophe premium parsing, empty search queries, and `+` in model codes. Summary panel redesigned as a table in HiBid's palette. |
| `v0.2.0` | "H+" icon for the Tampermonkey dashboard; release process and version-consistency checks. |
| `v0.1.0` | Lot detail page: live Canadian retail pricing, fee-aware bid ceilings, bad-deal and parts-only banners, non-blocking rendering with pulse loader. |
