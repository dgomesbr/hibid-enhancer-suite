/**
 * Gate for text that goes out in public: issue bodies and comments, release notes,
 * PR descriptions, commit messages, README and docs.
 *
 * Wraps the avoid-ai-writing detector (github.com/conorbronsdon/avoid-ai-writing),
 * which lives outside this repo as an installed skill. That is why this is NOT part
 * of `npm test`: a gate that silently passes when its engine is missing is worse
 * than no gate, and this repo has already been burned once by a suite that looked
 * green while a third of it never ran.
 *
 *   node tools/check-prose.mjs README.md CONTRIBUTING.md
 *   node tools/check-prose.mjs -            # read from stdin
 *   gh issue view 12 --json body -q .body | node tools/check-prose.mjs -
 *   node tools/check-prose.mjs --json docs/*.md
 *
 * Exit 0 clean or warnings only, 1 on a hard failure, 2 on bad usage,
 * 3 when the detector could not be found.
 *
 * Known limit: it cannot tell a quotation from an assertion, and blockquotes do not
 * suppress a flag (tested). Text that quotes AI slop as an example will fail on the
 * quoted words, which is the skill's own position — flag quoted material, let a human
 * judge it. Since this runs by hand rather than in CI, that judgement is yours.
 *
 * Override the detector location with AVOID_AI_WRITING=/path/to/skill.
 */

import { readFileSync, existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { homedir } from 'node:os';
import { join } from 'node:path';

const require = createRequire(import.meta.url);

/*
 * Soft categories are listed explicitly and everything else fails. That direction
 * matters: if the detector gains a category this file has never heard of, defaulting
 * it to fatal makes it loud, whereas defaulting it to advisory would hide it forever.
 *
 * What is soft, and why:
 *   - em-dash / formatting / bullet-np-list — house style. This project's docs lead
 *     paragraphs in bold on purpose, and the skill's own docs profile relaxes both.
 *   - tier1-clarity — Tier 1B wordiness, weight 3. "Use a more specific word than
 *     features" is a suggestion, not evidence of machine writing.
 *   - the stylometric measures — sentence uniformity, type/token ratio, punctuation
 *     distribution. Real signals in aggregate, too noisy on a 40-word issue comment
 *     to block on.
 */
const SOFT = new Set(['em-dash', 'formatting', 'bullet-np-list', 'tier1-clarity',
  'uniformity', 'low-ttr', 'cross-para-burstiness', 'fnword-trigram-entropy',
  'punct-distribution', 'smart-punct-signature']);
const SOFT_NOTE = 'style/density — judgement call, not a failure';
const SCORE_LIMIT = 15; // the detector's own "Minimal AI signals" band is score <= 15

/*
 * An explicit AVOID_AI_WRITING must win or fail — never fall through to a copy
 * somewhere else on the machine. Somebody who pins the path is pinning a version,
 * and quietly checking their text against a different one is the kind of wrong
 * answer that looks exactly like a right one.
 */
function findDetector() {
  const pinned = process.env.AVOID_AI_WRITING;
  if (pinned) {
    const tries = pinned.endsWith('.js') ? [pinned] : [join(pinned, 'detector', 'patterns.js'), pinned];
    const hit = tries.find((p) => existsSync(p) && p.endsWith('.js'));
    return { path: hit || null, pinned };
  }
  const hit = [
    join(homedir(), '.claude', 'skills', 'avoid-ai-writing', 'detector', 'patterns.js'),
    join(homedir(), '.config', 'claude', 'skills', 'avoid-ai-writing', 'detector', 'patterns.js'),
  ].find((p) => existsSync(p));
  return { path: hit || null, pinned: null };
}

const argv = process.argv.slice(2);
let json = false, context = 'technical';
const targets = [];
for (let i = 0; i < argv.length; i += 1) {
  const a = argv[i];
  if (a === '--json') json = true;
  else if (a === '--context') { context = argv[i + 1]; i += 1; }
  else if (a === '-') targets.push('-');
  else if (a.startsWith('--')) { console.error(`unknown flag: ${a}`); process.exit(2); }
  else targets.push(a);
}
if (!targets.length) {
  console.error('usage: check-prose.mjs <file…|-> [--json] [--context technical|general]');
  process.exit(2);
}

const { path: detectorPath, pinned } = findDetector();
if (!detectorPath) {
  if (pinned) {
    console.error(`SKIPPED: AVOID_AI_WRITING is set to "${pinned}" but no detector is there.`);
    console.error('  Expected either the skill directory or a path ending in patterns.js.');
    console.error('  Refusing to fall back to another copy, since you pinned this one.');
  } else {
    console.error('SKIPPED: the avoid-ai-writing detector was not found, so nothing was checked.');
    console.error('  Install it from https://github.com/conorbronsdon/avoid-ai-writing');
    console.error('  or point AVOID_AI_WRITING at your copy of the skill.');
  }
  console.error('  Treat this as unchecked, not as a pass.');
  process.exit(3);
}
const detector = require(detectorPath);
const analyze = detector.analyzeText || detector.analyze;
if (typeof analyze !== 'function') {
  console.error(`the detector at ${detectorPath} exposes no analyzeText()`);
  process.exit(3);
}

const readStdin = () => readFileSync(0, 'utf8');
const results = [];
let failed = 0;

for (const t of targets) {
  let text;
  try { text = t === '-' ? readStdin() : readFileSync(t, 'utf8'); }
  catch (e) { console.error(`could not read ${t}: ${e.message}`); process.exit(2); }

  const label = t === '-' ? '(stdin)' : t;
  const r = analyze(text, { contextMode: context });
  const issues = r.issues || [];
  const hard = issues.filter((i) => !SOFT.has(i.type));
  const soft = issues.filter((i) => SOFT.has(i.type));
  const overScore = (r.score ?? 0) > SCORE_LIMIT;
  const notHuman = r.document_classification && r.document_classification !== 'HUMAN_ONLY';
  const bad = hard.length > 0 || overScore || notHuman;
  if (bad) failed += 1;

  results.push({ file: label, ok: !bad, score: r.score, label: r.label,
    classification: r.document_classification, words: r.stats && r.stats.wordCount,
    hard, soft });

  if (json) continue;

  console.log(`${bad ? 'FAIL' : 'ok  '} ${label}  score ${r.score} (${r.label}), ` +
    `${r.document_classification}, ${r.stats ? r.stats.wordCount : '?'} words`);
  for (const i of hard) {
    console.log(`       ✗ ${i.type}: ${i.text}${i.suggestion ? ` → ${i.suggestion}` : ''}`);
  }
  if (overScore) console.log(`       ✗ score ${r.score} is above the ${SCORE_LIMIT} limit`);
  if (notHuman) console.log(`       ✗ classified ${r.document_classification}, not HUMAN_ONLY`);
  for (const i of soft) {
    console.log(`       · ${i.type}: ${i.text}  [${SOFT_NOTE}]`);
  }
}

if (json) { console.log(JSON.stringify(results, null, 2)); process.exit(failed ? 1 : 0); }

console.log(`\n${targets.length - failed}/${targets.length} clean` +
  (failed ? `. Rewrite the flagged text before it goes out.` : '.'));
process.exit(failed ? 1 : 0);
