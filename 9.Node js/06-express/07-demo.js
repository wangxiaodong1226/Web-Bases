//引入模块
const express=require('express')
//创建服务器端
const app = express()

//中间件 应用
//404 自定义

app.use('/admin',(req,res,next)=>{
    //模拟登录判断逻辑
   let isLogin =true
   if(isLogin){
       next()
   }else{
    res.send('您没有登录 没有权限访问后台管理页面')
   }
})

app.get('/index',(req,res)=>{

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

app.listen(3000)
console.log('Server is running !');