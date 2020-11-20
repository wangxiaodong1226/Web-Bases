const Koa = require('koa')
const app = new Koa()


const mainmiddleware = async(ctx,next)=>{
    // console.log(ctx.href);
    // console.log(ctx.url);
    // console.log(ctx.method);
    // console.log(ctx.ip);
    // console.log(ctx.path);
    // console.log(ctx.request.query);

    let {path} =ctx;
    if(path=='/index'){
        const {query}= ctx.request
        const {username} = query
        ctx.body=`welcome home ${username}`
    }else if(path=='/admin'){
        const {query} = ctx.request
        const {username,age,gender} = query
        var strHtml =" "
        strHtml += `<h1>username:${username}</h1>`
        strHtml += `<h1>age:${age}</h1>`
        strHtml += `<h1>gender:${gender}</h1>`
        ctx.body=strHtml

    }else if(path=='/api'){
        ctx.body="api page"
    }else{
        ctx.body="not found page"
    }
}
app.use(mainmiddleware)
app.listen('3000',err=>{
    if(err){
        console.log(err);
    }
    console.log('server is running on 3000');
})