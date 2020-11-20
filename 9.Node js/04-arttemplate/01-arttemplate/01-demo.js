//三方模块： 注意： node环境下 服务器端渲染
//01 npm install art-template
//02 引入模块 const template = require('art-template')
//03 模板文件 template路径 约定模板 views  ,绝对路径,模板数据约定
//04 准备数据 datas
//05 模板渲染 let html = template('模板路径',datas)
//06 数据返回给客户端 res.end(html)


const template = require('art-template')
const path = require('path')
const templatepath=path.join(__dirname,'views','01-demo.art')

//注意 <h2>&#60;h5&#62;h5标题&#60;/h5&#62;</h2>
let html = template(templatepath,{
    name:'hello world',
    content:'<h5>h5标题</h5>'
})
console.log(html);