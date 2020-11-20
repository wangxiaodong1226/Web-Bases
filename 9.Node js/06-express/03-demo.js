//引入模块
const express=require('express')
//创建服务器端
const app = express()

app.get('/add',(req,res,next)=>{
    req.name = 'less'
    // res.send('user add')
    //放权 到下一个中间件
    next()
})

//next()将请求控制权交给下一个中间件,知道遇到结束中间件
app.get('/add',(req,res,next)=>{
    req.age=18
    console.log(req.name);
    next()
    // res.send('ok')
})

app.get('/add',(req,res)=>{

    console.log(req.name+'-------'+req.age);
    res.send('ok')
})
app.listen(3000)
console.log('Server is running !');