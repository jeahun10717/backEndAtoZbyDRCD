const fs = require('fs');

// * rename sync

try{
    fs.renameSync('./text.txt', './text-new.txt');
}catch(error){
    console.log(error);
}

// * sync, rename

fs.rename('./text-new.txt', './text.txt', (error)=>{
    console.log(error);
})

console.log('hello');

// * promise rename

fs.promises
    .rename('./text2.txt', './text-new/txt')
    .then(()=>console.log('Done!'))
    .catch(console.error)