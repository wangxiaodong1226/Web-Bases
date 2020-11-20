//不知道什么时候启动服务等信息，建立钩子函数
const application=(app)=>{
    app.once('server',server=>{
        console.log('server is running');
    })
    app.on('error',error=>{
        console.log(error);
    })
    //请求
    app.on('request',ctx=>{
        console.log('request----');
    })
    //响应
    app.on('response',ctx=>{
        console.log('response----');
        const used = Date.now()-ctx.starttime;
        console.log('used---:'+used);
    })
}
module.exports=application