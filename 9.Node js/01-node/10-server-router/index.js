const http = require('http')
const url = require('url')

//创建服务器
const app = http.createServer()

//当客户端请求的时候 接收请求,同时处理请求
app.on('request', (req, res) => {
    ///index?username=xioaming&age=19
    // console.log(req.url);
    console.log(url.parse(req.url).pathname);
    // console.log(url.parse(req.url));

    let {pathname} = url.parse(req.url);
    let method = req.method;
    // console.log(method);
    if (method == 'GET') {
        if (pathname == '/index' || pathname == '/') {
            res.writeHead(200, {
                'content-type': 'text/html;charset=utf-8'
            })
            res.end("欢迎访问首页")
        } else if (pathname == "/list") {
            res.writeHead(200, {
                'content-type': 'text/html;charset=utf-8'
            })
            res.end("商品列表")
        } else {
            res.writeHead(404, {
                'content-type': 'text/html;charset=utf-8'
            })
            res.end('您访问的页面不存在！')
        }
    } else if (method == 'POST') {
        if (pathname == '/index' || pathname == '/') {
            res.writeHead(200, {
                'content-type': 'text/html;charset=utf-8'
            })
            res.end("用户登录成功")
        } else {
            res.end('您访问的页面不存在！')
        }
    }



})

app.listen(3000)
console.log('Server is running');