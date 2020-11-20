const http=require('http')

//创建服务器
const app=http.createServer()

//当客户端请求的时候 接收请求,同时处理请求
app.on('request',(req,res)=>{
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.headers);
    // console.log(req);

    // console.log(res);
    //响应类型
    res.writeHead(200,{
        'content-type':'text/html;charset=utf-8'
    })
    // //响应
    res.end('<h1>hello world你好</h1>')


    // res.writeHead(200,{
    //     'content-type':'application/json;charset=utf-8'
    // })
    //响应
    // res.end(JSON.stringify({a:'a'}))
})

app.listen(3000)
console.log('Server is running');