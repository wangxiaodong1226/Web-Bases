//01 require 相对路径 ok
// require('./absolute.js')

//02 相对路径 不ok
// const fs= require('fs');//模块名

// fs.readFile('./absolute.js','utf8',(err,doc)=>{
//     // console.log(err);
//     // console.log(doc);

//     if(err){
//         console.log(err);
//     }else{
//         console.log(doc); 
//     }
// })

//03 绝对路径解决方案
console.log(__dirname);

const fs= require('fs');//模块名
const path=require('path');//模块名
var absPath=path.join(__dirname,'absolute.js');
// console.log(absPath);
fs.readFile(absPath,'utf8',(err,doc)=>{

    if(err){
        console.log(err);
    }else{
        console.log(doc); 
    }
})
