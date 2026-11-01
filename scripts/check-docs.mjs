#!/usr/bin/env node
// Spell-check docs/*.md against scripts/words.txt.
//
//   node scripts/check-docs.mjs                 # every file under docs/
//   node scripts/check-docs.mjs --only guide-   # only files whose name contains "guide-"
//
// Prints "file:line: word" for every word in the prose that the vocabulary does not have,
// exits 1 when it finds any, and prints "clean: no unknown words." with exit 0 otherwise.
// It only detects; it never suggests or applies a correction.
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const docsDir = path.join(root, 'docs')
const words = new Set(fs.readFileSync(path.join(root, 'scripts', 'words.txt'), 'utf8')
  .split('\n').map(w => w.trim()).filter(Boolean))

const onlyIndex = process.argv.indexOf('--only')
const only = onlyIndex === -1 ? null : process.argv[onlyIndex + 1]

// inline code and angle-bracket placeholders are not prose, so they are not judged
const SKIP = /`[^`]*`|<[^>]*>/g

let bad = 0
let checked = 0
for (const file of fs.readdirSync(docsDir).filter(f => f.endsWith('.md')).sort()) {
  if (only && !file.includes(only)) continue
  checked++
  const lines = fs.readFileSync(path.join(docsDir, file), 'utf8').split('\n')
  lines.forEach((line, i) => {
    for (const word of line.replace(SKIP, ' ').toLowerCase().match(/[a-z][a-z']*/g) ?? []) {
      if (!words.has(word)) { console.log(file + ':' + (i + 1) + ': ' + word); bad++ }
    }
  })
}
if (bad) { console.log('\n' + bad + ' unknown word(s) found in ' + checked + ' file(s).'); process.exit(1) }
console.log('clean: no unknown words in ' + checked + ' file(s).')
