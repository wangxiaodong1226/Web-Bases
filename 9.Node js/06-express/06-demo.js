//引入模块
const express=require('express')
//创建服务器端
const app = express()

//中间件 应用
//网站维护
app.use((req,res,next)=>{
    res.send('hello 当前网站正在维护 时间：22:00-04:00')
})

app.get('/index',(req,res)=>{

    res.send('前台页面')

})

app.get('/admin',(req,res)=>{

    res.send('后台管理页面')

})

app.listen(3000)
console.log('Server is running !');