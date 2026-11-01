#!/usr/bin/env node
// Report every occurrence of a commonly confused word in docs/, so a writer can check it.
//
//   node scripts/confusables.mjs --only t1-      # only files whose name contains "t1-"
//
// It prints "file:line: word  |  sentence". This is a worklist, not a verdict: the same word
// is correct in one sentence and wrong in the next, so every printed line has to be read and
// judged on its own. Occurrences that are already correct must be left exactly as they are.
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const docsDir = path.join(root, 'docs')

const WORDS = ["affect","effect","than","then","its","their","there","lose","loose","whether","weather","ensure","insure","advice","advise","except","accept","quiet","quite","further","farther","fewer","less","formally","formerly","led","lead","passed","past","piece","peace","precedes","proceeds","raise","rise","role","roll","through","threw","whose","chose","choose","everyday","principle","principal","complement","compliment","adapt","adopt","besides","beside","cite","site","imminent","eminent","imply","infer","later","latter","stationary","stationery","your","you're","personal","personnel","elicit","illicit","apart","discreet","discrete"]
const PHRASES = ["it is","who is","every day","a part"]

const onlyIndex = process.argv.indexOf('--only')
const only = onlyIndex === -1 ? null : process.argv[onlyIndex + 1]

const escapeRe = (w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const parts = [...PHRASES.sort((a, b) => b.length - a.length), ...WORDS].map(escapeRe)
const matcher = new RegExp('\\b(' + parts.join('|') + ')\\b', 'gi')

let hits = 0, checked = 0
for (const file of fs.readdirSync(docsDir).filter(f => f.endsWith('.md')).sort()) {
  if (only && !file.includes(only)) continue
  checked++
  const lines = fs.readFileSync(path.join(docsDir, file), 'utf8').split('\n')
  lines.forEach((line, i) => {
    if (!line.trim() || line.startsWith('#')) return
    for (const m of line.matchAll(matcher)) {
      console.log(file + ':' + (i + 1) + ': ' + m[0] + '  |  ' + line.trim())
      hits++
    }
  })
}
console.log('\n' + hits + ' occurrence(s) in ' + checked + ' file(s).')
