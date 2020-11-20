//引入模块
const express=require('express')
//创建服务器端
const app = express()

//app.use(函数) get 和 post 都能处理
//中间件有顺序
//地址无关 因为没有第一个参数
app.use((req,res,next)=>{
    console.log('use middleware all');
    next()
})

//参数 第一个 地址  需要监听地址
app.get('/edit',(req,res,next)=>{
    console.log('use middleware edit');
    next()
})

//next()将请求控制权交给下一个中间件,知道遇到结束中间件
app.get('/add',(req,res,next)=>{
    req.age=18
    console.log(req.name);
    // res.send('ok')
    next()
})

app.get('/add',(req,res)=>{

    console.log(req.name+'-------'+req.age);
    res.send('ok')
})

app.get('/edit',(req,res)=>{
    res.send('ok edit')
})
app.listen(3000)
console.log('Server is running !');