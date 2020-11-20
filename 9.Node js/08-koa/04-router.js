const Koa = require('koa')
const app = new Koa()
const Router = require('@koa/router')
const router = new Router()


//定义中间件
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
    ctx.body="登录页面"
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