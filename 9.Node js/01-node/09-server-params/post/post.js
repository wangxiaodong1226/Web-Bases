const http=require('http')
// const url=require('url')
const querystring=require('querystring')

//创建服务器
const app=http.createServer()

//当客户端请求的时候 接收请求,同时处理请求
app.on('request',(req,res)=>{
    let postData=''
    //通过事件监听参数传递数据
    req.on('data',(chunk)=>{
        postData+=chunk;
    })
    //监听参数数据传输完成
    req.on('end',()=>{
        console.log(postData);
        console.log(querystring.parse(postData));

        let postObj=querystring.parse(postData)
        console.log(postObj.username);
        console.log(postObj.password);





    })
})

app.listen(3000)
console.log('Server is running');