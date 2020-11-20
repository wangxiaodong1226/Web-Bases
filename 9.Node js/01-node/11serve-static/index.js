const http=require('http');
const url=require('url');
const path=require('path');
const fs=require('fs')
const mime=require('mime')
const app=http.createServer();
app.on('request',(req,res)=>{
    //获取请求路径
    // console.log(url.parse(req.url));
    let pathname=url.parse(req.url).pathname;
    // console.log(pathname);

    //根据请求路径 获取服务器端真实路径(绝对路径)
    let filePath=path.join(__dirname,'public'+pathname)
    // console.log(filePath);
    //根据文件路径 不同文件类型 判断响应类型
    let type=mime.getType(filePath)
    console.log(type);
    fs.readFile(filePath,(err,doc)=>{
        if(err!=null){
            res.writeHead(404,{
                'content-type':'type;charset=utf8'
            })
            res.end('文件读取失败');
            return
        }
    res.writeHead(200,{
                    'content-type':'type;charset=utf8'
                })
        res.end(doc);
    })
})
app.listen(3000);
console.log('Server is running!');