const { log } = require("console");

//执行顺序
console.log('aaaa');
console.log('bbbb');
console.log('cccc');

//阻塞
for (let i = 0; i < 1000; i++) {
  console.log(i); 
}

console.log('a');
//不阻塞
setInterval(() => {
    console.log('b');
}, 200);
setInterval(() => {
    console.log('c');
}, 0);
console.log('ddd');