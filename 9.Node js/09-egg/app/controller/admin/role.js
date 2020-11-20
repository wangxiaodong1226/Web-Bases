// const { Controller } = require('egg');
const BaseController = require('./base.js')

//引用对象 对象里内置了控制器对象
class RoleController extends BaseController {
  
  async add(){
    await this.ctx.render('admin/role/add')
  }

  async doadd(){
    const {ctx}=this
    let body = ctx.request.body
    let {role_name,role_desc} = body
    let role ={role_name,role_desc}
    let result = await this.service.role.add(role)
    if(result.flag){
      // ctx.body={
      //   flag:true,
      //   msg:result.msg
      // }
      // await ctx.render('admin/common/success',{url:'/admin/role/list',msg:result.msg})
      await this.success('/admin/role/list',result.msg)
    }else{
      // ctx.body={
      //   flag:false,
      //   msg:result.msg
      // }
      // await ctx.render('admin/common/fail',{url:'/admin/role/add',msg:result.msg})
      await this.fail('/admin/role/add',result.msg)

    }
  }

  async list(){
    this.ctx.body='role list'
  }
}
module.exports = RoleController;