function sum(a,b){
    return a+b;
}
let result = sum(1,2);
console.log(result);

function asyncSum(a,b){
    setInterval(() => {
        return a+b;
    }, 0);
}
let result2 = asyncSum(1,2);
console.log(result2);//undefined


//获取异步函数中返回值 回调函数