#!/usr/bin/env node
// Report every occurrence of a commonly confused word in docs/, so a writer can check it.
//
//   node scripts/confusables.mjs --only t1-      # only files whose name contains "t1-"
//
// It prints "file:line: word  |  sentence". It is a worklist, not a verdict: the same word
// is correct in one sentence and wrong in the next, so each line has to be read and judged.
// Occurences that are already right must be left exactly as they are.
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const docsDir = path.join(root, 'docs')

// every member of every pair is worth reporting
const WORDS = [
  'affect', 'effect', 'than', 'then', 'its', "it's", 'their', 'there', 'lose', 'loose',
  'whether', 'weather', 'ensure', 'insure', 'advice', 'advise', 'except', 'accept', 'quiet', 'quite',
  'further', 'farther', 'fewer', 'less', 'formerly', 'formally', 'led', 'lead', 'passed', 'past',
  'piece', 'peace', 'precedes', 'proceeds', 'raise', 'rise', 'role', 'roll', 'through', 'threw',
  'too', 'to', 'whose', "who's", 'chose', 'choose', 'everyday', 'every day', 'principal', 'principle',
  'compliment', 'complement', 'adapt', 'adopt', 'besides', 'beside', 'cite', 'site', 'imminent',
  'eminent', 'imply', 'infer', 'later', 'latter', 'ledger', 'stationary', 'stationery',
  'discreet', 'discrete',
]

const onlyIndex = process.argv.indexOf('--only')
const only = onlyIndex === -1 ? null : process.argv[onlyIndex + 1]

const escape = (w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const matcher = new RegExp('\\b(' + WORDS.map(escape).join('|') + ')\\b', 'gi')

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
