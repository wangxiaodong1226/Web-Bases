const { Controller } = require('egg');
const md5 = require('md5')


//引用对象 对象里内置了控制器对象
class LoginController extends Controller {
  //登录显示
  async login() {
    console.log('bbb');
      // this.ctx.body="login page"
      await this.ctx.render('admin/login');
  }
  //登录操作
  async dologin() {
    //01 获取 username password  codeA svg
    //02 password md5 加密 密文
    //codeA codeB
    //codeA==codeBok (
      //03 username + 密文 查询数据库
      //04 if(存在) (重定向后台首页) else(用户名密码错误)
    //) else {
      //提示验证码失败
    //}


    let staff =this.ctx.request.body;
    console.log(staff);
    let username=staff.username
    let password = md5(staff.password)
    let codeA = staff.code
  
  let result = await this.ctx.service.login.dologin(username,password,codeA)
  console.log('controller result',result);
    if(result.flag){
      // this.ctx.body = "login ok"
      this.ctx.response.redirect('/admin')
    }else{
      this.ctx.body = result.msg

    }
  
  // this.ctx.body = 'login ok'
  }
  //生成验证码
  async verify(){
    let result = this.ctx.service.tool.getCaptcha()
    // console.log(result);
    this.ctx.response.type="image/svg+xml"//响应特殊格式验证码
    this.ctx.body =  result
  }

  //退出
  logout(){
    this.ctx.session = null
    this.ctx.response.redirect('/admin/login')
  }


}
module.exports = LoginController;