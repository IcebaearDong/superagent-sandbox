# harnessctl docs

The operator documentation for harnessctl, kept as plain Markdown under `docs/`.

Run the spell check with:

    node scripts/check-docs.mjs

It exits 1 and prints `file:line: word` for every word in the prose that is not in
`scripts/words.txt`, and exits 0 when the documentation is clean.
