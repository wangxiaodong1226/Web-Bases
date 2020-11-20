const fs=require('fs');

//包裹 异步API
const p=new Promise((resolve,reject)=>{
    fs.readFile('./public/a.txt','utf8',(err,doc)=>{
        if(err!=null){
            reject(err)
        }else{
            resolve(doc)
        }
    })
})
p.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
})