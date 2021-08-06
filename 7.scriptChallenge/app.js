const path = require('path');
const fs = require('fs').promises;

let fileList = [];
// fs.readdir('./test', 'utf8', function(err, data){
//     console.log(data);
// })

fs
.readdir(`./test`, 'utf-8')
.then((data)=>{
    fileList = data;
    return fileList;
})
.then((fileList)=>{
    fs.mkdir(`./test/video`).catch(console.error);
    fs.mkdir(`./test/capture`).catch(console.error);
    fs.mkdir(`./test/duplicated`).catch(console.error);
    return fileList;
})
.then((fileList)=>{
    for (let i = 0; i < fileList.length; i++) {
        if(fileList[i].includes('.mp4') || fileList[i].includes('.mov')){ 
            // 파일이 동영상 확장자일 때 video 에 저장
            fs.copyFile(`./test/${fileList[i]}`, `./test/video/${fileList[i]}`)// test/video 로 파일 복사
            .then(()=>{ // 파일복사가 성공적으로 이루어졌을 때 기존 파일 삭제
                fs.unlink(`./test/${fileList[i]}`).catch(console.error);
            })
            .catch(console.error);
            
        }
        if(fileList[i].includes('.png') || fileList[i].includes('.aae')){ 
            // 파일이 png, aae 확장자일 때 capture 에 저장
            fs.copyFile(`./test/${fileList[i]}`, `./test/capture/${fileList[i]}`)
            .then(()=>{
                fs.unlink(`./test/${fileList[i]}`).catch(console.error);
            })
            .catch(console.error);
        }
        if(fileList[i].includes('.jpg')){ 
            if(fileList[i].includes('_E')){
                fs.copyFile(`./test/${fileList[i]}`, `./test/duplicated/${fileList[i]}`)
                .then(()=>{
                    fs.unlink(`./test/${fileList[i]}`).catch(console.error);
                })
                .catch(console.error);
            }
        }
    }
})
.catch(console.error)
