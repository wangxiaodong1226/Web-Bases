const { Controller } = require('egg');
class BaseController extends Controller {
  async home() {
    // await this.ctx.render('admin/home',{name})
    const userinfo = this.ctx.session.userinfo
    if(userinfo){
      const name = userinfo.name
      // this.ctx.body='welcome admin page'
     await this.ctx.render('admin/home',{name})
    }else{
      this.ctx.response.redirect('/admin/login')
    }




    // this.ctx.body = "welcome admin page"
    // const userinfo = this.ctx.session.userinfo
    // if(userinfo){
    //   const name = userinfo.name
    //   // this.ctx.body='welcome admin page'
    //  await this.ctx.render('admin/home',{name})
    // }else{
    //   this.ctx.response.redirect('/admin/login')
    // }
  }

  async welcome(){
    await this.ctx.render('admin/welcome')
  }
}
module.exports = BaseController;