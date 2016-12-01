'use strict';

const fs = require('fs');
const path = require('path');

// 1. Create a directory
// 2. Create N .js files with the content : console.log(n) inside of this directory.
// 3. Add all the files on index.js.
// 4. Run index.js

function cleanup (n) {
  if (fs.existsSync(n)) {
    if (fs.lstatSync(n).isFile()) {
      fs.unlinkSync(n);
    } else {
      fs.readdirSync(n).forEach(file => {
        fs.unlinkSync(path.join(n, file));
      });
      fs.rmdirSync(n);
    }
  }
}

function createFooDirectory () {
  let foo = path.join(__dirname, 'foo');
  cleanup(foo);
  fs.mkdirSync(foo);
}

function createIndex () {
  let index = path.join(__dirname, 'index.js');
  cleanup(index);
  fs.writeFileSync(index, `'use strict';`);
}

function createFiles (n) {
  for (let i = 0; i < n; i++) {
    const CONTENT = `'use strict';

function alecFoo () {
  return 1 + ${i};
}

module.exports = alecFoo;
`;
    fs.writeFileSync(path.join(__dirname, `foo/${i}.js`), CONTENT);
  }
}

function requireAll (n) {
  createIndex();
  const index = path.join(__dirname, 'index.js');
  for (let i = 0; i < n; i++) {
    let alec = `
const alec${i} = require('./foo/${i}.js');`;
    fs.appendFileSync(index, alec);
  }
}

if (process.argv.length === 3) {
  let foo = process.argv[2];
  if (!isNaN(Number(foo))) {
    createFooDirectory();
    createFiles(foo);
    requireAll(foo);
    console.log('Run: node bench');
  } else {
    console.log('Error: This is not a number.');
  }
} else {
  console.log('Usage: node alec-foo 100 (for 100 requires)');
  console.log('Usage: node alec-foo 1000 (for 1k requires)');
  console.log('Usage: node alec-foo 10000 (for 10k requires)');
}
