const express=require('express')
const app = express()
const querystring = require('querystring')
var bodyParser = require('body-parser')




 /* 
 路由传参 
 */
//传统: /goods?id=23456
//    /goods/23456, req.params 获取参数对象
app.get('/goods/:id',(req,res)=>{
   res.send(req.params)
})
//多个参数
app.get('/user/:id/:name/:age',(req,res)=>{
    res.send(req.params)
 })

app.get('/add',(req,res)=>{
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
    </head>
    
    <body>
        <div class="container">
            <h2>添加用户</h2>
            <form action="/doadd" method="POST">
                <div class="form-group">
                    <label>用户名</label>
                    <input name="username" type="text" class="form-control" placeholder="请输入用户名">
                </div>
                <div class="form-group">
                    <label>用户密码</label>
                    <input name="password" type="password" class="form-control" placeholder="请输入密码">
                </div>
                <div class="form-group">
                    <label>用户年龄</label>
                    <input name="age" type="text" class="form-control" placeholder="请输入用户年龄">
                </div>
                <div class="form-group">
                    <label>用户爱好</label>
                    <div>
                        <label class="checkbox-inline">
                            <input type="checkbox" value="coding" name="hobby">敲代码
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" value="swimming" name="hobby">游泳
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" value="playing" name="hobby">游戏
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" value="reading" name="hobby">看书
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" value="filming" name="hobby">电影
                        </label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">添加用户</button>
                
            </form>
        </div>
    </body>
    
    </html>
    `)
})
//post 请求参数 ，body-parser
app.post('/doadd',(req,res)=>{
    res.send('ok')
})
app.listen(3000)
console.log('Server is running !');