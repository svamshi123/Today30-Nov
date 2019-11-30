const fs = require('fs');
const zip = require('zlib');
const rstream = fs.createReadStream('input.txt',{highWaterMark:1000});

const wstream = fs.createWriteStream('output.zip');

rstream.pipe(zip.createGzip()).pipe(wstream);

console.log('streaming input.txt to output.txt');