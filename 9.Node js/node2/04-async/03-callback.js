//3什么是回调函数

function asyncSum(a,b,call){
    setInterval(() => {
        let sum =a+b;
        call(sum);
    }, 0);
}

function call(sum){
    console.log(sum);
}
 asyncSum(1,2,call)
