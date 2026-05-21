// Optimises villa photos from /Images into /public/images as WebP, driven by
// src/data/image-map.json. Run: npm run process-images
import { readFile, mkdir, readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SOURCE_DIR = join(ROOT, 'Images');
const OUTPUT_DIR = join(ROOT, 'public', 'images');
const MAX_WIDTH = 2400;
const QUALITY = 80;

const map = JSON.parse(await readFile(join(ROOT, 'src', 'data', 'image-map.json'), 'utf8'));

// Resolve a source name (e.g. "A-12") to an actual file in /Images (any extension/case).
let sourceFiles = [];
try {
  sourceFiles = await readdir(SOURCE_DIR);
} catch {
  console.error(`Source folder not found: ${SOURCE_DIR}`);
  process.exit(1);
}

function resolveSource(name) {
  if (!name) return null;
  const lower = name.toLowerCase();
  const match = sourceFiles.find((f) => {
    const base = f.replace(/\.[^.]+$/, '').toLowerCase();
    return base === lower;
  });
  return match ? join(SOURCE_DIR, match) : null;
}

async function convert(srcPath, outPath) {
  await mkdir(dirname(outPath), { recursive: true });
  await sharp(srcPath)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outPath);
  console.log(`  ✓ ${outPath.replace(ROOT + '/', '')}`);
}

let count = 0;
let missing = 0;

for (const [section, cfg] of Object.entries(map)) {
  if (section.startsWith('_')) continue;

  // Single-image sections (hero, divider)
  if (typeof cfg.source === 'string') {
    if (!cfg.source) continue;
    const src = resolveSource(cfg.source);
    if (!src) {
      console.warn(`  ! ${section}: source "${cfg.source}" not found in /Images`);
      missing++;
      continue;
    }
    const out =
      section === 'hero'
        ? join(OUTPUT_DIR, 'hero', 'cover.webp')
        : join(OUTPUT_DIR, section, `${section}.webp`);
    await convert(src, out);
    count++;
    continue;
  }

  // Gallery sections
  if (Array.isArray(cfg.sources)) {
    if (!cfg.sources.length) {
      console.log(`  – ${section}: no sources mapped yet, skipping`);
      continue;
    }
    let i = 1;
    for (const name of cfg.sources) {
      const src = resolveSource(name);
      if (!src) {
        console.warn(`  ! ${section}: source "${name}" not found in /Images`);
        missing++;
        continue;
      }
      await convert(src, join(OUTPUT_DIR, section, `${section}-${i}.webp`));
      i++;
      count++;
    }
  }
}

console.log(`\nDone. ${count} image(s) processed${missing ? `, ${missing} missing` : ''}.`);
