# Working agreements for this repo

Instructions for anyone doing work here, human or agent. Three rules govern
everything else: file the issue first, ship every change as a release, and run
anything public through the slop check before it goes out.

## 1. A feature starts with an issue, and ends when the issue closes

**Open the issue before writing the code.** Not after, not alongside. The issue is
where the reasoning lives, and reasoning written after the fact is a justification
rather than a decision.

Use the feature request form's own questions as the body, because they are the ones
that decide whether the thing is worth building:

- **which HiBid page** it belongs on
- **who it is for** — what kind of bidder, and how they use the site
- **why they need it** — the decision they cannot make today, and what goes wrong
  without it
- what they do instead today, if anything

Then the reasoning proper: the approach, what was considered and rejected, and what
would make this the wrong call. Write it so somebody reading the issue in six
months can tell why the feature looks the way it does.

```bash
gh issue create --label enhancement \
  --title "[feature] final price on catalog tiles" \
  --body-file issue.md
```

Do not rely on `gh issue create -T` in a scripted run; template selection is an
interactive prefill and does not compose with a supplied body. Mirror the form's
headings in the body instead, so a filed-by-hand issue and a filed-by-agent issue
read the same.

**Report progress on the issue as the work happens.** Comment at points where
somebody following along would want to know something, not once per commit:

- the approach changed, or an assumption turned out to be wrong
- something was measured, in which case put the number in
- the feature is built but not yet released
- it is blocked, or turned out to be a bad idea

Reference the issue number in commit messages (`… (#12)`) so the timeline shows the
work without anyone narrating it.

**Close the issue only once the release is published**, not when the code merges.
On a userscript installed from `main`, a merged feature reaches nobody until
`@version` increases and a release exists (see rule 2). Closing on merge would mark
as done something no user can yet use. Close with a comment naming the version, so
the issue answers "which release do I need?" from its own last line:

```bash
gh issue close 12 --comment "Shipped in v0.13.0 — <what a user will now see>."
```

**What does not need an issue:** a bug fix (that has its own form), a typo, a doc
edit, a test, or a refactor with no user-visible change. If it changes what a bidder
sees on a HiBid page, it is a feature and it needs an issue first.

Being asked for it directly is not an exemption — it is the normal case. A request
made in chat is exactly the reasoning that would otherwise go unrecorded, so it is
the case the issue exists to capture. Write the issue, then build.

## 2. Every change ships as a tagged, published release

Bump `@version` in `src/hibid-enhancer.user.js` **and** `package.json`, tag, push
the tag, then `gh release create` with notes written for a bidder rather than a
developer. Do this without being asked.

Installed copies only update through `@updateURL`, and Tampermonkey only offers an
update when `@version` has increased, so a merged fix with an unbumped version
reaches nobody. `npm test` asserts the two versions agree, which turns a forgotten
bump into a failing suite instead of a silent non-release.

Docs-only and asset-only changes are the exception: nothing installable changed, so
no bump.

Full process in [RELEASING.md](RELEASING.md).

## 3. Anything public goes through the slop check

This repo is public, so the writing is part of the product. Issue bodies, issue
comments, release notes, PR titles and descriptions, commit messages, README and
docs all get checked before they go out — not only the docs.

```bash
npm run prose -- issue.md              # a file
npm run prose:docs                     # README, CLAUDE, CONTRIBUTING, RELEASING, docs/
git log -1 --pretty=%B | npm run prose -- -    # anything, via stdin
gh issue view 12 --json body -q .body | npm run prose -- -
```

Write the text into a file first and pass it to `--body-file` or `--notes-file`,
rather than typing it inline. That is what makes checking possible at all: text
already posted can be edited, but it has been read by then.

`tools/check-prose.mjs` wraps the
[avoid-ai-writing](https://github.com/conorbronsdon/avoid-ai-writing) detector. It
fails on the tells that mean the text reads as machine-written — Tier 1/2/3 vocabulary,
formulaic openers, invisible-character contamination, a score above 15, or any
classification other than `HUMAN_ONLY`. Em-dash and bold density, vocabulary
diversity and the other stylometric measures are reported and left to judgement,
because this project's docs lead paragraphs in bold deliberately.

Three things worth knowing before you trust it:

- **It is not part of `npm test`, on purpose.** The detector is an installed skill
  living outside the repo, and a gate that quietly passes when its engine is absent
  is worse than no gate. Missing detector exits 3 and says the text was *unchecked*
  rather than clean. Point `AVOID_AI_WRITING` at your copy if it is somewhere
  unusual; a pinned path that does not resolve is an error rather than a fallback.
- **A clean score is not the goal.** The detector catches vocabulary, not vagueness.
  It will pass a paragraph that says nothing. Name the actual bug, the actual number,
  the actual page.
- **It cannot tell a quotation from an assertion**, and blockquotes do not suppress a
  flag. Text that quotes slop as an example fails on the quoted words. Since this is
  run by hand and not in CI, that call is yours to make.

## Before you finish

```bash
npm test      # 307 + 33 assertions plus the cache sweep; this is the gate
npm run check # syntax only
```

The suites never touch the network, so they cannot catch HiBid changing its markup
or a retailer changing their HTML. Anything touching a selector or a provider gets
loaded on a real lot page by hand as well.

A fix needs a test that would have failed before it. The regressions in this
project's history were all cases somebody thought too obvious to assert.

## Everything else

[CONTRIBUTING.md](CONTRIBUTING.md) has the section map for the single-file
userscript, the rules learned the hard way (each with the incident that produced
it), and what is permanently out of scope: no bidding, no secrets, no credentials,
no making the script a heavier guest on anyone's servers.

Outward-facing and hard-to-reverse choices stay with the repo owner: repo
visibility, publishing anything containing real bid history, force-pushing,
rewriting a published release.
