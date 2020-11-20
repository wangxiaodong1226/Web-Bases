//回调函数的主要问题 回调地狱
//需求:读取 a.js->b.js->c.js

//fs是异步的
const fs =require('fs');
fs.readFile('./public/a.js','utf8',(err,data)=>{
    console.log(data);
    fs.readFile('./public/b.js','utf8',(err,data)=>{
        console.log(data);
        fs.readFile('./public/c.js','utf8',(err,data)=>{
            console.log(data);
        })
    })
})