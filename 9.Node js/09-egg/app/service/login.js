const {Service} = require('egg')

class LoginService extends Service {

  async dologin(username,password,codeA) {
    const {ctx} = this
    let codeB = ctx.session.codeB
    if(codeA.toLowerCase() == codeB.toLowerCase()){
      console.log('------dologin service');
      let result = await this.ctx.service.staff.find(username,password)
      let name = result.data.name
      // console.log(name);
       
      if(result.flag){
        // console.log(result.flag);
       ctx.session.userinfo = {name}
        return {
          flag:true,
          msg:'login success',
          data:result.data
        }
      }else{
          return {
            flag:false,
            msg:'登录失败 用户名或密码错误'
          }
      }
    }
    else{
      return{
        flag:false,
        msg:'验证码错误'
      }
    }

   
  }
}

module.exports = LoginService;