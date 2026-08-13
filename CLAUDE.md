# Working agreements for this repo

Instructions for anyone doing work here, human or agent. Two rules govern
everything else, and both exist because "merged" does not mean "delivered" on this
project.

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
edit, a test, a refactor with no user-visible change, or anything already asked for
directly in conversation. If it changes what a bidder sees on a HiBid page and
nobody has asked for it yet, it is a feature and it needs an issue first.

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
