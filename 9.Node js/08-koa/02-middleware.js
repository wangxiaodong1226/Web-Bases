const Koa = require('koa')
const app = new Koa()


const accessMiddleware = async(ctx,next)=>{
    console.log('1----------------accessMiddleware');
    await next()
    console.log('1----------------accessMiddleware');
}
const logMiddleware = async(ctx,next)=>{
    console.log('2----------------logMiddleware');
    await next()
    const totaltime = ctx.response.get('totaltime')
    console.log('2----------------logMiddleware totaltime:'+totaltime);
}


const timeMiddleware = async(ctx,next)=>{
    const start = Date.now()
    await next()
    const totaltime = Date.now()-start
    ctx.response.set('totaltime',totaltime)
}
const businessMiddleware = async(ctx,next)=>{
    console.log('4----------------businessMiddleware');
   for (let i = 0; i < 10000; i++) {
      console.log(i);
   }
   ctx.body="bussiness logic"
}
app.use(accessMiddleware)
app.use(logMiddleware)
app.use(timeMiddleware)
app.use(businessMiddleware)

app.listen('3000',err=>{
    if(err){
        console.log(err);
    }
    console.log('server is running on 3000');
})