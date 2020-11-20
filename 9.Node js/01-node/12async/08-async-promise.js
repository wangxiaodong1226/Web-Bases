const fs=require('fs');
//a.txt->b.txt->c.txt
fs.readFile('./public/a.txt','utf8',(err,doc)=>{
    console.log(doc);
    fs.readFile('./public/b.txt','utf8',(err,doc)=>{
        console.log(doc);
    })
    fs.readFile('./public/c.txt','utf8',(err,doc)=>{
        console.log(doc);
    })
})
function rf(){
   return new Promise((resolve,reject)=>{
        fs.readFile('./public/a.txt','utf8',(err,doc)=>{
            resolve(doc);
        })
    })
}
rf().then((result)=>{
    console.log(result);
})