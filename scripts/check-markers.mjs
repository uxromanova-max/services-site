#!/usr/bin/env node
// Build guard: unresolved content markers must never reach production.
// Scans the built site (dist/) for "CHECK" or "TODO" in any text output.
// Fails when --strict is passed or the build is a production build; otherwise warns
// so previews can still be deployed with the markers visible.
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const MARKER = /CHECK|TODO/g;
const TEXT_FILES = /\.(html|xml|txt|json|webmanifest)$/;

const strict =
  process.argv.includes('--strict') ||
  process.env.VERCEL_ENV === 'production' ||
  process.env.BUILD_TARGET === 'production';

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else if (TEXT_FILES.test(entry.name)) yield path;
  }
}

const hits = [];
try {
  for await (const file of walk(DIST)) {
    const text = await readFile(file, 'utf8');
    for (const match of text.matchAll(MARKER)) {
      const start = Math.max(0, match.index - 60);
      const snippet = text.slice(start, match.index + 80).replace(/\s+/g, ' ').trim();
      hits.push({ file: relative(DIST, file), snippet });
    }
  }
} catch (err) {
  console.error(`check-markers: cannot read ${DIST}. Run the build first.`);
  process.exit(1);
}

if (hits.length === 0) {
  console.log('check-markers: no CHECK/TODO markers in the built site.');
  process.exit(0);
}

const label = strict ? 'ERROR' : 'WARNING';
console.log(`check-markers ${label}: ${hits.length} unresolved marker(s) in the built site:`);
for (const { file, snippet } of hits) console.log(`  ${file}: …${snippet}…`);

if (strict) {
  console.log('Resolve them in /content (or keep the page as draft) before a production deploy.');
  process.exit(1);
}
console.log('Preview build: allowed. A production build will fail until these are resolved.');
