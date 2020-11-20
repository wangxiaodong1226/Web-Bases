const express=require('express')
const app = express()
const querystring = require('querystring')

 /* 
 静态服务
 */
//参数 静态服务目录
//如果是请求的静态资源 则静态服务作为响应
//如果请求不是静态资源 则next()
//express.static('public')
 app.use(express.static('public'))


//post 请求参数 ，body-parser
app.post('/doadd',(req,res)=>{
    res.send('ok')
})
app.listen(3000)
console.log('Server is running !');