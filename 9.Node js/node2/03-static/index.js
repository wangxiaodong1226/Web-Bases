const http = require('http');
const app = http.createServer();
const url=require('url')
const path = require('path')
const querystring = require('querystring');
const fs = require('fs');
const mime = require('mime');
app.on('request',(req,res)=>{
    // res.writeHead(200,{
    //     "content-type":"text/html;charset=utf-8"
    // })
    let {method} = req;
    let {pathname} = url.parse(req.url,true)
    console.log(pathname);


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