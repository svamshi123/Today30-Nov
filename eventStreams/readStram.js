const fs = require('fs');

const rstream = fs.createReadStream('input.txt',{highWaterMark:1000});

rstream.on('data',(chunk)=>{
    console.log(chunk.toString());
    console.log('------------------------------');
})

rstream.on('end',(chunk)=>{
    console.log('--------------END----------------');
})