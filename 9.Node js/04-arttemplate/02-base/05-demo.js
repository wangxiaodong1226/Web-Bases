
const template = require('art-template')
const path = require('path')
const templatepath=path.join(__dirname,'views','05-demo.art')


let html = template(templatepath,{
  content:'content msg'
})
console.log(html);