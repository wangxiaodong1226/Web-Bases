
const template = require('art-template')
const path = require('path')
var dateFormat = require('dateformat');


// const templatepath=path.join(__dirname,'views','05-demo.art')

//01 配置模板根目录
template.defaults.root=path.join(__dirname,'views')

//02 配置模板默认后缀
template.defaults.extname='.html'

//03 数据库：时间戳 页面显示 2020-08-19
 template.defaults.imports.dateFormat=dateFormat;

let html = template('06-demo',{
  content:'demo6 content',
  time:Date.now()
})
console.log(html);