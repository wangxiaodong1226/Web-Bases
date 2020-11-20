const Koa = require('koa')
const app = new Koa()
const Router = require('@koa/router')
const router = new Router()
const staticServer = require('koa-static')
const path = require('path')
const render = require('koa-art-template')
const koaBody = require('koa-body')
const fs =require('fs')

app.use(koaBody({multipart:true}))

const staticpath= path.join(__dirname,'public')
app.use(staticServer(staticpath))

//模板引擎使用中间件 约定模板引擎配置
render(app,{
    root:path.join(__dirname,'/views'),
    extname:'.html'
})


const index=(ctx,next)=>{
    ctx.status=200
    ctx.body="前台页面"
}
const admin=(ctx,next)=>{
    ctx.status=200
    ctx.body="后台页面"
    // ctx.response.redirect = "/login"
}
const login=(ctx,next)=>{
    ctx.render('login2')
}
const api=(ctx,next)=>{
    ctx.status=200
    ctx.body= {msg:'api data'}
}
const dologin=(ctx,next)=>{
    ctx.status=200
    // let result =ctx.request.body;
    // console.log(result);
    // ctx.body= {msg:'api data'}
    // let username=result.username
    // let password = result.password

    console.log(ctx.request.files);
    let avatar = ctx.request.files.avatar
    console.log(avatar);
    //来源地址
    let fromPath = avatar.path;

    let filename = avatar.name
    console.log(filename);
    let targetPath =path.join(__dirname,'upload',filename) 
    let readStream = fs.createReadStream(fromPath)
    let writeStream = fs.createWriteStream(targetPath)

    readStream.pipe(writeStream)
    ctx.body="upload"+filename+'-------success'
    // if(username=="admin"&&password=='123456'){
    //     ctx.response.redirect('/admin')
    // }else{
    //     ctx.body='login err'
    // }
}
router.get('/index',index)
router.get('/admin',admin)
router.get('/api',api)
router.get('/login',login)
router.post('/dologin',dologin)


app.use(router.routes(),router.allowedMethods())

app.listen('3000',err=>{
    if(err){
        console.log(err);
    }
    console.log('server is running on 3000');
})