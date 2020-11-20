const {Service} = require('egg')
//员工服务层
class RoleService extends Service {

  async add(role){


      let roleModel = new this.ctx.model.Role(role)
      let saveResult = await roleModel.save()
      console.log(saveResult);
      if(saveResult){
        return{
          flag:true,
          msg:'add role success',
          data:saveResult
        }
      }else{
        return{
          flag:true,
          msg:'add role fail'
        }
      }
  }
}
module.exports = RoleService;