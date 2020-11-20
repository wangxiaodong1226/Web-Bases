const http = require('http');
const app = http.createServer();
const url= require('url')
// const path = require('path')
// const querystring = require('querystring');
// const fs = require('fs');
// const mime = require('mime');

const routes = require('./routes.js')
const staticServe = require('./static.js')

app.on('request',(req,res)=>{
    // console.log('333');
    let {method} = req;
    let {pathname,query} = url.parse(req.url,true)
    // console.log(pathname);
    // console.log(query);
    var handleFun =  routes[pathname]
    
    if(handleFun){
        console.log(handleFun);
        handleFun(req,res)
    }else{
        // console.log('----------------');
        staticServe(req,res,pathname)
    }
       
})

app.listen('3000',()=>{
    console.log('server is running!');
})