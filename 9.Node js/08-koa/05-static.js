const Koa = require('koa')
const app = new Koa()
const Router = require('@koa/router')
const router = new Router()
const staticServer = require('koa-static')
const path = require('path')

const staticpath= path.join(__dirname,'public')
app.use(staticServer(staticpath))


const index=(ctx,next)=>{
    ctx.status=200
    ctx.body="前台页面"
}
const admin=(ctx,next)=>{
    ctx.status=200
    // ctx.body="后台页面"
    ctx.response.redirect = "/login"
}
const login=(ctx,next)=>{
    ctx.status=200
    strHtml =" " 
    strHtml+=`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>`
    strHtml+=`<form action="/dologin" method="POST">
    username: <input type="username" name="username"> <br>
    password: <input type="password" name="password"> <br>
    <input type="submit" value="提交">
    </form>`
    strHtml+=`</body>
            </html>`

    ctx.body= strHtml
}
const api=(ctx,next)=>{
    ctx.status=200
    ctx.body= {msg:'api data'}
}
router.get('/index',index)
router.get('/admin',admin)
router.get('/api',api)
router.get('/login',login)

app.use(router.routes(),router.allowedMethods())

app.listen('3000',err=>{
    if(err){
        console.log(err);
    }
    console.log('server is running on 3000');
})