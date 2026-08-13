# Contributing

Bug reports, wrong-price reports and pull requests are all welcome.

**This project has no affiliation with HiBid**, with any auctioneer listing on
HiBid, or with any retailer whose prices it reads. It is an independent
userscript written to make one buying decision easier to make. See
[Not affiliated with HiBid](README.md#not-affiliated-with-hibid) for what that
means in practice, and read it before opening a pull request, because it rules
some ideas out.

---

## The most useful thing you can report

A wrong retail match. Everything else in the script is arithmetic that tests can
pin down. Matching an auction lot's free-text description to a product on a
retailer's site is the part that resists that, and every wrong match reported so
far has produced a rule that stops a whole class of them.

Include:

- **the lot URL**,
- **what it matched** (the product title and price shown on the Retail row),
- **what it should have matched**, if you know.

That is enough to turn into a test. `docs/retail-matching.md` lists the traps
already handled: a $15 phone case posing as a $600 phone, a rear cooling baffle
posing as a motherboard, a TPM module posing as the board it plugs into.

For anything else, say what the page showed and what you expected. A screenshot
of the lot page beats a description of it.

---

## Setting up

```bash
git clone https://github.com/dgomesbr/hibid-enhancer-suite.git
cd hibid-enhancer-suite
npm install --no-save linkedom    # supplies DOMParser to Node, for the provider tests
npm test
```

There is no build step. `src/hibid-enhancer.user.js` is the shipped artefact:
one file, one IIFE, no dependencies, no bundler. What you edit is what users run.

To test your edit in a browser, paste the file into a new Tampermonkey script, or
turn on *Allow access to file URLs* for the extension and install from a `file://`
URL so edits reload. Either way, disable the released copy first. Two live copies
fighting over the same DOM will waste an afternoon — this happened repeatedly
during development, and the symptom is your change appearing not to work at all.

## Tests

```bash
npm test          # all three suites; this is the gate
npm run check     # syntax only, fast
```

| Suite | Covers |
|---|---|
| `test/run-tests.mjs` | 307 assertions: fee parsing against real auction wordings, the money round-trip, tax by province, condition detection, every accessory trap |
| `test/run-provider-tests.mjs` | 33 assertions against captured Amazon.ca and Best Buy Canada responses in `test/fixtures/` |
| `test/run-cache-tests.mjs` | that a cached quote from an older ruleset is swept, and that settings survive the sweep |

No suite touches the network. That is deliberate — it keeps them fast and
deterministic — and it is also their limit: they cannot catch HiBid changing its
markup or a retailer changing its HTML. Before merging anything that touches a
selector or a provider, load a real lot page and check it by hand.
`RELEASING.md` has the list of what to look at.

**A fix needs a test that would have failed before it.** Nearly every regression
in this project's history was a case somebody thought was too obvious to assert:
`Is Item Damaged? No` firing the parts-only banner because a bare `/damaged/`
matched the field *label*; `Is Item Functional? N/A` read as "No" because the
pattern for "no" matched the "n" in "n/a", which produced 54 false warnings out of
100 lots.

When you refresh a fixture because a retailer changed their markup, do it in the
same commit as the parser fix. A stale fixture is a test that has quietly stopped
having teeth.

## Every change ships as a tagged release

Installed copies only update through `@updateURL`, and Tampermonkey only offers
an update when `@version` has increased. A merged fix with an unbumped version
reaches nobody, so there is no "just merge it" path. `npm test` fails if
`@version` and `package.json` disagree, precisely so a forgotten bump cannot
become a silent non-release.

Full process in **[RELEASING.md](RELEASING.md)**.

---

## Where things are

`src/hibid-enhancer.user.js` is numbered by section. The numbers are historical,
not an ordering, so read the names:

| Sections | What lives there |
|---|---|
| 1–3 | Settings, utilities, Canadian tax by province |
| 4–8 | Fee parser, condition detection, product extraction, bid increments, the money engine |
| 9 | Retail price providers (Amazon.ca, Best Buy Canada) |
| 10–12 | Styles, performance instrumentation, DOM helpers, rendering |
| 13 | Lot detail controller |
| 14–15 | Page router and SPA navigation, menu commands |
| 16 | HiBid's GraphQL endpoint |
| 17–18 | Catalog and lot-list pages, and the declutter pass |
| 19 | Current bids and watch list |

Sections 4–8 are pure functions over strings and numbers. They have no DOM
dependency and are where most of the test coverage lives, so put logic there
rather than in a renderer whenever you have the choice.

New page types register in the `PAGES` table in section 14. The fee engine,
product extraction and the providers are page-agnostic and reuse as-is.

## Rules the hard way

Each of these is here because breaking it cost real debugging time.

**Style through CSS classes, never inline styles.** HiBid is an Angular app that
re-renders freely and wipes inline styles off nodes it owns. A class survives;
`el.style.color = …` does not.

**Run page text through `normalise()` before matching anything.** Auctioneers join
description fields with a bare `\r`, and paste from Word, so the buyer's premium
arrives as `Buyer’s Premium` with a curly apostrophe. That one character broke
premium parsing and silently fell back to 18%: $1.33 became $3.04, a 2.3× error
shown to the user with no indication anything had gone wrong.

**Parse structured fields before scanning prose.** Descriptions carry
`Label: value` pairs, so a bare keyword search hits labels as often as values.

**Never hide a lazy-loaded image.** An image in a `display:none` subtree never
intersects the viewport, so it never loads, and un-hiding it later gets you an
empty box. Shrink it instead.

**Remember that `document.body` survives SPA navigation.** A body class scoped to
one page type has to be removed when leaving it, or catalog styling leaks onto
lot pages. Reported once as "no product images load".

**Watch the query string, not just the path.** HiBid paginates by changing
`?apage=`, so a navigation watcher comparing only `pathname` never fires.

**Bump `CACHE_EPOCH` when you change a matching rule.** Quotes are cached for 12
hours and survive a script update, so without a bump your fix reaches nobody until
the TTL expires. A $47.84 TPM module stayed on screen after the fix that should
have removed it.

**Handle no credentials, ever.** No reading `document.cookie`, no `Authorization`
header, no pulling a token out of a page. Tests assert all three. This is why the
current-bids page works from rendered DOM plus public data, and why it does not
show your own maximum bid even though the app has it: reaching it would mean
handling your login token. `docs/current-bids.md` explains the trade.

**Be a light guest on other people's servers.** Retailer lookups are batched,
deduped by in-flight promise, cached for 12 hours, and paced between batches.
Concurrency is capped and configurable. A change that makes the script hammer
Amazon.ca, Best Buy or HiBid harder is not going to be merged, however much
faster it makes a page feel.

## Docs

`README.md` is for someone deciding whether to install this. It stays
non-technical. Everything technical goes in `docs/`, with a row in the README's
table of contents so it can be found.

Docs go through the [avoid-ai-writing](https://github.com/conorbronsdon/avoid-ai-writing)
detector before merging. Write plainly, name the actual bug or measurement, and
skip the throat-clearing.

Screenshots live in `docs/`. Retaking one means disabling any installed copy of
the script first, or you will publish a picture of an older build.

## What is out of scope

- **Bidding.** The script reads and advises. It does not place, raise or retract
  a bid, and it will not grow the ability to. Every decision stays with the user.
- **Anything needing a secret.** No API keys, no accounts, no signup. Install and
  it works. Best Buy Canada's key-free endpoint and Amazon.ca's public HTML were
  chosen over better data sources for exactly this reason;
  `docs/PRICING-SOURCES.md` records what was evaluated and rejected.
- **Circumventing anything.** No defeating rate limits or bot protection, no
  automating account actions, no scraping beyond the pages you are already
  looking at. CamelCamelCamel is linked rather than read for this reason: it
  returns 403 to scripts, and that is an answer, not an obstacle.

## Licence

Contributions are accepted under the [MIT licence](LICENSE), the same as the rest
of the project.
