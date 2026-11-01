# harnessctl docs

The operator documentation for harnessctl, kept as plain Markdown under `docs/`.

Run the documentation spell check with:

    node scripts/check-docs.mjs

It prints `file:line: word` for every word in the prose that `scripts/words.txt` does not
have and exits 1, or prints `clean: no unknown words.` and exits 0.
