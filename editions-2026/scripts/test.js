const fs = require('fs');
const path = require('path');

const DIST = path.join(__dirname, '..', 'dist');
const index = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

const refs = index.match(/(?:src|href)="([^"]+)"/g) || [];
const localRefs = refs
  .map(r => r.match(/"([^"]+)"/)[1])
  .filter(r => !r.startsWith('http') && !r.startsWith('mailto:') && !r.startsWith('#'));

let failures = 0;
for (const ref of localRefs) {
  const full = path.join(DIST, ref);
  if (!fs.existsSync(full)) {
    console.error('MISSING ASSET:', ref);
    failures++;
  }
}

if (failures === 0) {
  console.log('ALL ASSET CHECKS PASSED');
  process.exit(0);
} else {
  console.error(`${failures} missing asset(s)`);
  process.exit(1);
}