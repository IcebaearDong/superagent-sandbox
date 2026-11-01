#!/usr/bin/env node
// Spell-check docs/**.md against scripts/words.txt.
// Prints one line per unknown word and exits 1 when it finds any, so the same command
// works as a pass/fail gate. It detects misspellings; it does not suggest corrections.
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const docsDir = path.join(root, 'docs')
const words = new Set(fs.readFileSync(path.join(root, 'scripts', 'words.txt'), 'utf8')
  .split('\n').map(w => w.trim()).filter(Boolean))

// words that are deliberately outside the vocabulary but legitimate: inline code,
// flags, paths and identifiers are skipped so the checker only judges prose.
const SKIP = /\`[^\`]*\`|<[^>]*>|\b[A-Za-z_][A-Za-z0-9_.\/-]*[\/][A-Za-z0-9_.\/-]*\b/g

let bad = 0
for (const file of fs.readdirSync(docsDir).filter(f => f.endsWith('.md')).sort()) {
  const lines = fs.readFileSync(path.join(docsDir, file), 'utf8').split('\n')
  lines.forEach((line, i) => {
    const cleaned = line.replace(SKIP, ' ').replace(/\b[A-Za-z]+\b(?=\()/g, ' ')
    for (const word of cleaned.toLowerCase().match(/[a-z][a-z']*/g) ?? []) {
      if (!words.has(word)) { console.log(`${file}:${i + 1}: ${word}`); bad++ }
    }
  })
}
if (bad) { console.log(`\n${bad} unknown word(s) found.`); process.exit(1) }
console.log('clean: no unknown words.')
