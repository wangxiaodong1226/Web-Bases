const accessMiddleware = (options,app)=>{
  return async(ctx,next)=>{
    console.log('accessMiddleware----');
    const pathname = ctx.request.path
    const userinfo = ctx.session.userinfo
    if(userinfo){
      await next()
    }else{
      //注意 死循环
      if(pathname=='/admin/login' ||pathname=='/admin/verify'||pathname=='/admin/dologin'){
        await next()
      }else{
        ctx.response.redirect('/admin/login')
      }
    }
  }
}

module.exports = accessMiddleware

