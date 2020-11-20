//验证全局对象
// console.log(global);

//验证方法
global.setTimeout(() => {
    console.log('task');
}, 2000);

setTimeout(() => {
    console.log('task');
}, 2000);

console.log('--------');
