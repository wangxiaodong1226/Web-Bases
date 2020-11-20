//引入模块
const express=require('express')
//创建服务器端
const app = express()

//中间件 : 处理请求和响应
//多个中间件处理请求 (次序)
//中间件可以传递给下一个中间件处理 (是否放权)

//机制好处 
//有效处理复杂逻辑
//验证 : 登录

app.get('/add',(req,res)=>{
    console.log('aaaddd');
    //注意不是end
    res.send('user add')
})

app.post('/post',(req,res)=>{
    console.log('aaadddd');
    //注意不是end
    res.send('user add')
})
app.listen(3000)
console.log('Server is running !');