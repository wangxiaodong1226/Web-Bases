//解决回调地狱  Promise
const fs =require('fs');
//Promise是构造函数
const p=new Promise((resolve,reject)=>{
    fs.readFile('./public/a.js','utf8',(err,doc)=>{
        if(err){
            reject(err)
        }else{
            resolve(doc)
        }
    })
})

// let result = p.then(result=>{
//     console.log(result.toString());
//     return 'bbb'
// })
// .catch((err)=>{
//     console.log('err',err);
// })

// console.log('result---',result);
//result--- Promise { <pending> }

//改写
//  p.then(result=>{
//     console.log(result.toString());
//     return 'bbb' //自动封装
// })
// .then(result2=>{
//     console.log(result2);
// })
// .catch((err)=>{
//     console.log('err',err);
// })


//纵向
p.then(result=>{
    console.log(result.toString());
    return new Promise((resolve,reject)=>{
        resolve('bbb')
    })
})
.then(result2=>{
    console.log(result2);//获取上一个的返回值
})
.catch((err)=>{
    console.log('err',err);
})