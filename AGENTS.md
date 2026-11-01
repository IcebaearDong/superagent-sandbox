# Repository instructions

This repository holds the harnessctl operator documentation: plain Markdown under `docs/`.

## Checks

`scripts/confusables.mjs` lists every occurrence of a commonly confused word in the docs:

    node scripts/confusables.mjs --only t1-

It is a worklist, not a verdict: the same word is correct in one sentence and wrong in the
next, so each printed line must be read and judged on its own.

## Rules

- Change only what the request names; do not rewrite, restructure or reword unrelated prose.
- Keep the line count and the paragraph breaks of an edited file unchanged.
- Never rewrite a sentence to dodge a word: change the one wrong word and nothing else.
