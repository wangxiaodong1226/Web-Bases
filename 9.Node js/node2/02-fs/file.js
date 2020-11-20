const fs = require('fs')
const path = require('path');

// fs.readFile('./a.js','utf8',(err,doc)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(doc);
//     }
// })

// fs.writeFile('./a.js','bbb',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('write file OK');
//     }
// })


console.log(__dirname);
console.log(path.join(__dirname,'a','b'));

let abs = path.join(__dirname,'a.js')
fs.readFile(abs,'utf8',(err,doc)=>{
    if(err){
        console.log(err);
    }else{
        console.log(doc);
    }
})
