console.log('a');

//阻塞
setTimeout(()=>{
    console.log('b');
},2000);   //异步函数

console.log('c');