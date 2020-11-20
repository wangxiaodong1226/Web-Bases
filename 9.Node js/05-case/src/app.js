const http = require('http')
const router = require('./route/index.js')
const template = require('art-template')
const path=require('path')
var serveStatic = require('serve-static')

template.defaults.root=path.join(__dirname,'views')
//参数就是静态服务文件夹地址
const serve = serveStatic(path.join(__dirname,'public'))

require('./model/db.js')

//创建服务器
const app = http.createServer()

app.on('request',async (req,res)=>{
    //开启路由:内部封装了请求方式和请求地址的判断
    // router(req, res, finalhandler(req, res))
    router(req, res,()=>{})
    //开启静态资源访问服务
    serve(req, res,()=>{})
})




app.listen(3000)
console.log('Server is running!');