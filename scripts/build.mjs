import { cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDir = path.resolve(projectRoot, 'dist');
if (path.dirname(outputDir) !== projectRoot || path.basename(outputDir) !== 'dist') {
  throw new Error('Build output must be the dist directory inside this project.');
}
await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
for (const name of ['index.html', 'styles.css', 'app.js', 'assets', 'data', 'vendor']) {
  await cp(path.join(projectRoot, name), path.join(outputDir, name), { recursive: true });
}
console.log('Built static site in dist/');
