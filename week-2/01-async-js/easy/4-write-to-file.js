const fs = require('fs').promises;

let data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum auctor massa, ut pulvinar velit interdum et. Mauris risus orci, aliquet semper sapien ac, molestie facilisis ligula. Donec dignissim ligula lacus. Maecenas porttitor, ipsum eu fringilla viverra, lorem mauris euismod lacus, in tincidunt sem quam ut leo. Ut eu congue. "

async function writeFileFnc() {
    await fs.writeFile('sample.txt', data, (err) => {
        if (err) throw err;
    })
  console.log(`data has been written`);
}
writeFileFnc();