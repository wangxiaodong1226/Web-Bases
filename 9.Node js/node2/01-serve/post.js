const http = require('http');
const app = http.createServer();
const url=require('url')

const querystring = require('querystring');


app.on('request',(req,res)=>{
    console.log('----');
    res.writeHead(200,{
        "content-type":"text/html;charset=utf-8"
    })
    let {method} = req;
    let {pathname} = url.parse(req.url,true)
    console.log(pathname);

    if(pathname=='/index'){
        if(method=='GET'){
            res.end('<h1>index page</h1>')
        }else if(method=='POST'){
            let postData ="";
            req.on('data',(trunk)=>{
                postData+=trunk;
            })
            req.on('end',()=>{
                // console.log('postData',postData);
                let result = querystring.parse(postData);
                console.log(typeof result);
                res.end(JSON.stringify(result));
            })
        }
      
    }else if(pathname=='/admin'){
        res.end('<h1>admin page</h1>')
    }else{
        res.end('404 page')

    }
})

app.listen(3000,()=>{
    console.log('server is running!');
})