//引入模块
const express=require('express')
//创建服务器端
const app = express()
const fs = require('fs')

//错误处理
//bug 开发阶段
//未知错误

//express 提供了错误处理中间件
app.use((err,req,res,next)=>{
    
    res.status(500).send('服务器端发生了错误')
})

app.use('/admin',(req,res,next)=>{
    //模拟登录判断逻辑
   let isLogin =true
   if(isLogin){
       next()
   }else{
    res.send('您没有登录 没有权限访问后台管理页面')
   }
})

//Error
//注意:同步 和 异步错误处理方式问题
app.get('/index',(req,res,next)=>{
    //抛出错误
    throw new Error('程序发生未知错误')
    //场景 ： 有错误，用户无感知
    //错误处理中间件 只能处理同步代码的错误，需要手动触发(next)这个错误处理中间件
    // fs.readFile('./file.js',(err,doc)=>{
    //    console.log(err);
    //    console.log(doc);
    //     if(err!=null){
    //         next(err);
    //     }else{
    //         res.send(doc)
    //     }
    // })
    res.send('前台页面')

})

app.get('/admin',(req,res)=>{

    res.send('后台管理页面')

})

//get 和post 请求地址都没匹配
app.use((req,res,next)=>{
    //响应状态码要设置
    res.status(404).send('404当前访问页面不存在')
})

//错误中间件
app.use((err,req,res,next)=>{
    console.log(err.message);
    res.status(500).send('服务器端发生了错误')
 })
    
app.listen(3000)
console.log('Server is running !');