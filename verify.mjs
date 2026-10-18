#!/usr/bin/env node
import { readFileSync, existsSync } from 'node:fs'
import { execFileSync } from 'node:child_process'

// In the workspace the checker sources are two levels up; in the standalone
// GitHub repo they are absent, so regeneration is opt-in and never required by CI.
if (process.env.CHECK_BUILD === '1' && existsSync('../../checkers')) {
  execFileSync(process.execPath, ['build.mjs'], { stdio: 'inherit' })
  execFileSync('git', ['diff', '--exit-code', '--', 'package.json', 'cordis.patch.yml', 'checkers.json'], { stdio: 'inherit' })
}

const pkg = JSON.parse(readFileSync('package.json', 'utf8'))
const rowsText = readFileSync('cordis.patch.yml', 'utf8')
const rows = JSON.parse(readFileSync('checkers.json', 'utf8'))
const rowCount = (rowsText.match(/- id:/g) ?? []).length
if (rows.length !== 53) throw new Error(`checkers.json: expected 53 rows, got ${rows.length}`)
if (rowCount !== 53) throw new Error(`cordis.patch.yml: expected 53 rows, got ${rowCount}`)
if (Object.keys(pkg.dependencies).length !== 53) throw new Error(`package.json: expected 53 deps, got ${Object.keys(pkg.dependencies).length}`)
if (pkg.dsh?.bundle?.patch !== './cordis.patch.yml') throw new Error('package.json: bundle patch missing')
const deps = new Map(Object.entries(pkg.dependencies))
for (const row of rows) {
  if (deps.get(row.name) !== row.version) throw new Error(`version mismatch for ${row.name}: ${deps.get(row.name)} != ${row.version}`)
  if (!rowsText.includes(`id: ${row.id}`) || !rowsText.includes(`name: ${row.name}`)) throw new Error(`patch row missing for ${row.name}`)
}
console.log(`suite OK: ${rowCount} rows, ${deps.size} dependencies`)
