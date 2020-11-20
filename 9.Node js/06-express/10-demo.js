const express=require('express')
const app = express()

const admin = require('./route/admin')
const home = require('./route/home')

// const admin = express.Router()
// const home = express.Router()
//路由
//模块化抽离
//不同类别路由 对应 不同模块

//二级路由
app.use('/admin',admin)
app.use('/',home)

// admin.get('/home',(req,res)=>{
//     res.send('欢迎访问后台首页')
// })

// home.get('/index',(req,res,next)=>{
//     res.send('前台页面')
// })

// home.get('/list',(req,res,next)=>{
//     res.send('文章列表')
// })
//get 和post 请求地址都没匹配
app.use((req,res,next)=>{
    //响应状态码要设置
    res.status(404).send('404当前访问页面不存在')
})

//错误中间件 只负责程序出现错误
app.use((err,req,res,next)=>{
    console.log(err.message);
    res.status(500).send('服务器端发生了错误')
 })
    
app.listen(3000)
console.log('Server is running !');