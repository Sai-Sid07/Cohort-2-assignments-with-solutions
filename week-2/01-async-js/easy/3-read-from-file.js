const fs = require('fs').promises;


async function readfileFnc() {
  const read = await fs.readFile('sample.txt', 'utf-8');
  console.log(read);
  console.log(`data has been read`);
}
readfileFnc();