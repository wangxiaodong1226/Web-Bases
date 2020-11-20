const http=require('http')
const url=require('url')

//创建服务器
const app=http.createServer()

//当客户端请求的时候 接收请求,同时处理请求
app.on('request',(req,res)=>{
    ///index?name=xiaoming&age=20
   console.log(req.url);

//    let urlResult=url.parse(req.url);//解析

   //name=xiaoming&age=20
//    console.log(url.parse(req.url).query);


// console.log(url.parse(req.url,true).query);
//{ name: 'xiaoming', age: '20' }
let {query}=url.parse(req.url,true);
console.log(query);
console.log(query.name);
console.log(query.age);
})

app.listen(3000)
console.log('Server is running');