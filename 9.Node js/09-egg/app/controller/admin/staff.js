const { Controller } = require('egg');


//引用对象 对象里内置了控制器对象
class StaffController extends Controller {
  //list
  async list(){
    const {ctx} = this
    // const userinfo = ctx.session.userinfo
    // console.log(userinfo);
    // if(userinfo){
      this.ctx.body='staff list'
    // }else{
      // this.ctx.response.redirect('/admin/login')
    // }
  }

  async add(){
    await this.ctx.render('admin/staff/add')
  }


  async doadd(){
    const {ctx}=this
    let staff = {
      username:'admin',
      password:ctx.service.tool.md5('123456'),
      name:'wyd'
    }

    // let staffModel = new this.ctx.model.Staff(staff)
    // await staffModel.save()

    let result = await this.service.staff.add(staff)
    if(result.flag){
      ctx.body={
        flag:false,
        msg:result.msg
      }
    }else{
      ctx.body={
        flag:false,
        msg:result.msg
      }
    }
  }
}
module.exports = StaffController;