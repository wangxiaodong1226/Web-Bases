//引入模块
const express=require('express')
//创建服务器端
const app = express()

//中间件应用
//路由保护
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

app.listen(3000)
console.log('Server is running !');