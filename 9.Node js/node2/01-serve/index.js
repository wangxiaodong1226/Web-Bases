const http = require('http');
const app = http.createServer();
const url=require('url')

app.on('request',(req,res)=>{
    // const url = req.url;
    // const method = req.method;
    // console.log(url);///admin?username=wyd
    // console.log(method);//GET

    //设置响应头
    // res.writeHead(200,{
    //     "content-type":"text/html;charset=utf-8"
    // })
    let {pathname,query} = url.parse(req.url,true)
    // console.log(url1);
    console.log(pathname);
    console.log(query);

    //自定义路由(method+pathname)
    // if(pathname=='/index'){
    //     res.end('<h1>index page</h1>')
    // }else if(pathname=='/admin'){
    //     res.end('<h1>admin page</h1>')
    // }else{
    //     res.end('404 page')

    // }
})

app.listen(3000,()=>{
    console.log('server is running!');
})