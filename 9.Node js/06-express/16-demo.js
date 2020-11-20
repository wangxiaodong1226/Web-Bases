const express=require('express')
const app = express()
const querystring = require('querystring')
const path = require('path')
 /* 
 模板引擎
 */
//art-template express-art-template

//模板引擎 配置 : 什么文件模板引擎渲染
app.engine('art',require('express-art-template'))
//模板存放的地址
app.set('views',path.join(__dirname,'views'))

//设置默认后缀
app.set('view engine','art')

app.get('/',(req,res)=>{
    res.render('index',{
        msg:'art-template msg'
    })
})



//post 请求参数 ，body-parser
app.post('/doadd',(req,res)=>{
    res.send('ok')
})
app.listen(3000)
console.log('Server is running !');