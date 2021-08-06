const fs = require('fs');

const readStream = fs.createReadStream('./file.txt');
const writeStream = fs.createReadStream('./file4.txt');
const piping = readStream.pipe(writeStream);

piping.on('finish', ()=>{
    console.log('done');
})