const http = require('http');
const app = http.createServer();
const url=require('url')
const path = require('path')
const querystring = require('querystring');
const fs = require('fs');
const mime = require('mime');
app.on('request',(req,res)=>{
   
    let {method} = req;
    let {pathname} = url.parse(req.url,true)
    // console.log(pathname);

    function controller1(req,res){
        return res.end('api-ajax-result1')
    }
    //一堆业务
    function controller2(req,res){
        return res.end('api-ajax-result2')
    }
    //一堆业务
    function controller3(req,res){
        return res.end('api-ajax-result3')
    }


    //接口路由 {method+pathname}
    //a.html /js/jquery.js
    // if(pathname=='/api-ajax'){
    //     return res.end('api-ajax-result1')//注意接口和静态服务冲突
    // }

    //api --controller
    if(pathname=='/api-ajax1'){
        return controller1(req,res);
    }else if(pathname=='/api-ajax2'){
        return controller2(req,res)
    }else if(pathname=='/api-ajax3'){
        return controller3(req,res)
    }

    console.log(pathname,'-----');
    //静态服务器
    let filePath = path.join(__dirname,'public',pathname)
    const type = mime.getType(filePath);
    if(method=='GET'){
           fs.readFile(filePath,(err,doc)=>{
               if(err){
                   console.log(err);
                   res.writeHead(404,{
                    "content-type":"text/html;charset=utf-8"  
                   })
                   res.end('page error')
               }else{
                res.writeHead(200,{
                    "content-type":type
                   })
                   res.end(doc);
               }
           })
    }    
    
})

app.listen(3000,()=>{
    console.log('server is running!');
})