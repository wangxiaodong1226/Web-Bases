function sum(num1,num2){
    return num1+num2;
}
//返回值 同步
const  result=sum(1,2);
console.log(result);

function getSum(num1,num2){
    setTimeout(()=>{
        return num1+num2;
    },2000);
    //return 默认返回值 
}
//返回值 异步
const  result=getSum(1,2);
console.log(result);