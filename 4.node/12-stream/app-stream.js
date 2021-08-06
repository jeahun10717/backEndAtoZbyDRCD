const fs = require('fs');

let chunkNum = 0;
const data = [];

fs.createReadStream('./file.txt', { // 파일을 읽을 stream 해서 가져올 때의 설정값
    highWaterMark: 64, // default : 64 kbytes, 받아올 파일을 끊어읽기할 단위
    encoding: 'utf-8', // 문자열 인코딩의 종류
}).on('data', (chunk)=>{ // 
    chunkNum++;
    console.log(chunk);
    // console.count('data')
}).on('end', (data)=>{
    console.log(`================number of chunk : ${chunkNum}====================`);
    console.log("################this is end of this file##############");
}).on('error', (error)=>{
    console.log(error);
})