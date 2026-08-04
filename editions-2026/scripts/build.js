const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '..', 'public');
const DST = path.join(__dirname, '..', 'dist');

function copyRecursive(src, dst) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dst, { recursive: true });
    for (const item of fs.readdirSync(src)) {
      copyRecursive(path.join(src, item), path.join(dst, item));
    }
  } else {
    fs.mkdirSync(path.dirname(dst), { recursive: true });
    fs.copyFileSync(src, dst);
  }
}

if (fs.existsSync(DST)) {
  fs.rmSync(DST, { recursive: true });
}
copyRecursive(SRC, DST);

console.log('dist/ built from public/');