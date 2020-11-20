const Koa = require('koa')
const app = new Koa()


app.use(ctx=>{
    console.log('hello koa');
    ctx.body="hello koa"
})
app.listen('3000',err=>{
    if(err){
        console.log(err);
    }
    console.log('server is running on 3000');
})