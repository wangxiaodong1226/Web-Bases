
const fs =require('fs');

function readFile1(){
    return new Promise((resolve,reject)=>{
    fs.readFile('./public/a.js','utf8',(err,doc)=>{
        if(err){
            reject(err)
        }else{
            resolve(doc)
        }
    })
})
}

function readFile2(){
    return new Promise((resolve,reject)=>{
    fs.readFile('./public/b.js','utf8',(err,doc)=>{
        if(err){
            reject(err)
        }else{
            resolve(doc)
        }
    })
})
}

function readFile3(){
    return new Promise((resolve,reject)=>{
    fs.readFile('./public/c.js','utf8',(err,doc)=>{
        if(err){
            reject(err)
        }else{
            resolve(doc)
        }
    })
})
}


readFile1().then(result=>{
    console.log(result.toString());
    return readFile2();
})
.then(result2=>{
    console.log(result2.toString());//获取上一个的返回值
    return readFile3();
})
.then(result3=>{
    console.log(result3.toString());//获取上一个的返回值
})
.catch((err)=>{
    console.log('err',err);
})



console.log('----------------------------------------------------------');
//封装一下
function readFile(filepath){
    return new Promise((resolve,reject)=>{
    fs.readFile(filepath,'utf8',(err,doc)=>{
        if(err){
            reject(err)
        }else{
            resolve(doc)
        }
    })
})
}

readFile('./public/a.js').then(result=>{
    console.log(result.toString());
    return readFile('./public/b.js');
})
.then(result2=>{
    console.log(result2.toString());//获取上一个的返回值
    return readFile3('./public/c.js');
})
.then(result3=>{
    console.log(result3.toString());//获取上一个的返回值
})
.catch((err)=>{
    console.log('err',err);
})