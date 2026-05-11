import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const photosDir = path.join(root, 'public', 'images', 'photography');
const dataFile = path.join(root, 'src', 'data', 'photos.js');
const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);

const titleFromFilename = (filename) => {
  const withoutExtension = filename.replace(/\.[^.]+$/, '');
  return withoutExtension
    .replace(/[()]/g, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

const formatPhoto = (photo) => {
  const entries = [
    `id: ${photo.id}`,
    `category: '${photo.category}'`,
    `title: '${photo.title.replace(/'/g, "\\'")}'`,
    `src: '${photo.src.replace(/'/g, "\\'")}'`,
  ];

  if (photo.year) entries.push(`year: '${String(photo.year).replace(/'/g, "\\'")}'`);
  if (photo.medium) entries.push(`medium: '${photo.medium.replace(/'/g, "\\'")}'`);
  if (photo.description) entries.push(`description: '${photo.description.replace(/'/g, "\\'")}'`);
  if (photo.alt) entries.push(`alt: '${photo.alt.replace(/'/g, "\\'")}'`);

  return `  { ${entries.join(', ')} }`;
};

const { photos } = await import(`${pathToFileURL(dataFile).href}?updated=${Date.now()}`);
const files = await readdir(photosDir, { withFileTypes: true });
const imageFiles = files
  .filter((file) => file.isFile() && imageExtensions.has(path.extname(file.name).toLowerCase()))
  .map((file) => file.name)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

const knownSources = new Set(photos.map((photo) => photo.src));
let nextId = Math.max(0, ...photos.map((photo) => photo.id)) + 1;
const addedPhotos = [];

for (const filename of imageFiles) {
  const src = `/images/photography/${filename}`;
  if (knownSources.has(src)) continue;

  addedPhotos.push({
    id: nextId,
    category: 'Abstract Macro',
    title: titleFromFilename(filename),
    src,
    year: '',
    medium: 'Photography',
    description: '',
    alt: titleFromFilename(filename),
  });
  nextId += 1;
}

if (addedPhotos.length === 0) {
  console.log('No new photography images found.');
  process.exit(0);
}

const nextPhotos = [...photos, ...addedPhotos];
const nextFile = `export const photos = [\n${nextPhotos.map(formatPhoto).join(',\n')},\n];\n`;

await readFile(dataFile, 'utf8');
await writeFile(dataFile, nextFile);

console.log(`Added ${addedPhotos.length} new photography entr${addedPhotos.length === 1 ? 'y' : 'ies'}:`);
for (const photo of addedPhotos) {
  console.log(`- ${photo.src}`);
}
