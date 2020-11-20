const { Controller } = require('egg');
class BaseController extends Controller {
  async welcome() {
      this.ctx.body="welcome 前台"
  }
}
module.exports = BaseController;