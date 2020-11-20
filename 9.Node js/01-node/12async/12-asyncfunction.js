const fs=require('fs');
const promisify = require('uril').promisify
// async function rf(path,charset){
//     return new Promise((resolve,reject)=>{
//          fs.readFile(path,charset,(err,doc)=>{
//              resolve(doc);
//          })
//      })
//  }


const readFile = promisify(fs.readFile)

 async function run(){
    // let file1 =  await rf('./public/a.txt','utf8')
    // let file2 =  await rf('./public/b.txt','utf8')
    // let file3 =  await rf('./public/c.txt','utf8')
    let file1 =  await readFile('./public/a.txt','utf8')
    let file2 =  await readFile('./public/b.txt','utf8')
    let file3 =  await readFile('./public/c.txt','utf8')
    console.log(file1);
    console.log(file2);
    console.log(file3);
 }
 run()