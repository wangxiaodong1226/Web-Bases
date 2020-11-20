
//异步函数 异步终极解决方案
// async function fn(){
//     throw 'code err'
//     return 'aaaa'  //自动封装Promise
// }
// console.log(fn());//Promise {'aaaa}

// fn()
// .then(result=>{
//     console.log(result);
// })
// .catch(err=>{
//     console.log(err);
// })



// const fs= require('fs')
// async function rf(){
//     return new Promise((resolve,reject)=>{
//         fs.readFile('./public/a.js','utf8',(err,doc)=>{
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(doc)
//             }
//         })
//     })
// }

// rf()
// .then(result=>{
//     console.log(result.toString());
// })
// .catch(err=>{
//     console.log(err);
// })


//await  --then 同步代码
// const fs=require('fs');
// async function rf(){
//     let result = await new Promise((resolve,reject)=>{
//         fs.readFile('./public/a.js','utf8',(err,doc)=>{
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(doc)
//             }
//         })
//     })
//     console.log(result.toString());
// }
// rf()



//-------------------------------------------------------------
const fs=require('fs');

async function rf(path,charset){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,charset,(err,doc)=>{
            if(err){
                reject(err)
            }else{
                resolve(doc)
            }
        })
    })
}
//await is only valid in async function
 async function run(){
    let file1 = await rf('./public/a.js','utf8')
    let file2 = await rf('./public/b.js','utf8')
    let file3 = await rf('./public/c.js','utf8')
    console.log(file1);
    console.log(file2);
    console.log(file3);
}
run()
