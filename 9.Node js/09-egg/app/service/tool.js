const {Service} = require('egg')
const md5 = require('md5')

var svgCaptcha = require('svg-captcha');
 

//工具 相关服务器
class ToolService extends Service {
  //加密
  md5(content){
    return md5(content)
  }

  getCaptcha(){
    var captcha = svgCaptcha.create();
    // console.log(captcha);
    // 存储captcha.text  ----就是codeB
    let codeB = captcha.text
    this.ctx.session.codeB = codeB
    return captcha.data

  }
}
module.exports = ToolService;