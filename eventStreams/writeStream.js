const fs = require('fs');

const wstream = fs.createWriteStream('message.txt');

wstream.write('Hello World!!');
wstream.write('Hello PSL!!');
console.log('Created');
