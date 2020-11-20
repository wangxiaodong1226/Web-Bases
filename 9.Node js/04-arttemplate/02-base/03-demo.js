
const template = require('art-template')
const path = require('path')
const templatepath=path.join(__dirname,'views','03-demo.art')


let html = template(templatepath,{
   users:[
      {name:'less'},
      {name:'jack'},
      {name:'jams'},
      {name:'will'}
   ]
})
console.log(html);