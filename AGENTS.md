# Repository instructions

This repository holds the harnessctl operator documentation: plain Markdown under `docs/`.

## Checks

Run the documentation spell check before you finish any change:

    node scripts/check-docs.mjs

It exits 0 when the prose is clean and 1 (printing `file:line: word`) when it is not.
`scripts/words.txt` is the vocabulary: it lists every word the corrected documentation
uses, so a correct correction passes and an invented or half-corrected word does not.

## Rules

- Change only what the request names; do not rewrite, restructure or reword unrelated prose.
- Keep the line count and the paragraph breaks of an edited file unchanged.
