function getSum(num1,num2,callback){
    setTimeout(()=>{
       callback(num1+num2)
    },2000);
    //return 默认返回值 
}
//返回值 异步
//参数 回调函数
const  result=getSum(1,2,function(){
    console.log(data);
});