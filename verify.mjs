#!/usr/bin/env node
import { readFileSync, readdirSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
execFileSync(process.execPath, ['build.mjs'], { stdio: 'inherit' })
execFileSync('git', ['diff', '--exit-code', '--', 'package.json', 'cordis.patch.yml', 'checkers.json'], { stdio: 'inherit' })
const pkg = JSON.parse(readFileSync('package.json', 'utf8'))
const rows = (readFileSync('cordis.patch.yml', 'utf8').match(/- id:/g) ?? []).length
if (rows !== 53) throw new Error(`expected 53 rows, got ${rows}`)
if (Object.keys(pkg.dependencies).length !== 53) throw new Error(`expected 53 deps, got ${Object.keys(pkg.dependencies).length}`)
if (pkg.dsh?.bundle?.patch !== './cordis.patch.yml') throw new Error('bundle patch missing')
console.log(`suite OK: ${rows} rows, ${Object.keys(pkg.dependencies).length} dependencies`)
