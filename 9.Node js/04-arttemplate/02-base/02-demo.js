
const template = require('art-template')
const path = require('path')
const templatepath=path.join(__dirname,'views','02-demo.art')


let html = template(templatepath,{
   age:9
})
console.log(html);