#!/usr/bin/env node
// Spell-check docs/*.md against scripts/words.txt.
// Prints "file:line: word" for every word in the prose that the vocabulary does not
// have, exits 1 when it finds any, and exits 0 with "clean: no unknown words." otherwise.
// It detects misspellings; it never suggests or applies a correction.
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const docsDir = path.join(root, 'docs')
const words = new Set(fs.readFileSync(path.join(root, 'scripts', 'words.txt'), 'utf8')
  .split('\n').map(w => w.trim()).filter(Boolean))

// inline code and identifiers are not prose, so they are not judged
const SKIP = /`[^`]*`|<[^>]*>/g

let bad = 0
for (const file of fs.readdirSync(docsDir).filter(f => f.endsWith('.md')).sort()) {
  const lines = fs.readFileSync(path.join(docsDir, file), 'utf8').split('\n')
  lines.forEach((line, i) => {
    for (const word of line.replace(SKIP, ' ').toLowerCase().match(/[a-z][a-z']*/g) ?? []) {
      if (!words.has(word)) { console.log(file + ':' + (i + 1) + ': ' + word); bad++ }
    }
  })
}
if (bad) { console.log('\n' + bad + ' unknown word(s) found.'); process.exit(1) }
console.log('clean: no unknown words.')
