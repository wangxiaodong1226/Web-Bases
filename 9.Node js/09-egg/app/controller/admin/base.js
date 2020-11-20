const { Controller } = require('egg');

//基类控制器
class BaseController extends Controller {
  async success(url,msg){
      var msg=msg||'操作成功'
    await this.ctx.render('admin/common/success',{url,msg})

  }

  async fail(url,msg){
    var msg=msg||'操作失败'
  await this.ctx.render('admin/common/fail',{url,msg})

}
}
module.exports = BaseController;