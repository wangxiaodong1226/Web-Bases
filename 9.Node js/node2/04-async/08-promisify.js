

const fs=require('fs');

/* async function rf(path,charset){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,charset,(err,doc)=>{
            if(err){
                reject(err)
            }else{
                resolve(doc)
            }
        })
    })
} */


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
