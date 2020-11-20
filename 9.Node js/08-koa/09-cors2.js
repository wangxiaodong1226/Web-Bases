const Koa = require('koa')
const app = new Koa()
const Router = require('@koa/router')
const router = new Router()
const staticServer = require('koa-static')
const path = require('path')
const render = require('koa-art-template')
const koaBody = require('koa-body')
const fs =require('fs')

const cors = require('koa2-cors')

app.use(koaBody({multipart:true}))
app.use(cors())

const staticpath= path.join(__dirname,'public')
app.use(staticServer(staticpath))

//模板引擎使用中间件 约定模板引擎配置
render(app,{
    root:path.join(__dirname,'/views'),
    extname:'.html'
})

const cors2 =async(ctx,next)=>{
     ctx.body='cors2 success'
}

router.get('/cors2',cors2)



app.use(router.routes(),router.allowedMethods())

app.listen('3001',err=>{
    if(err){
        console.log(err);
    }
    console.log('server is running on 3001');
})