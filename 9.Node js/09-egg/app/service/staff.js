const {Service} = require('egg')
//员工服务层
class StaffService extends Service {

  async find(username,password){
    let staff = await this.ctx.model.Staff.findOne({username,password})
    console.log('result',staff);
    if(staff){
        return{
            flag:true,
            msg:'查询成功',
            data:staff
        }
    }else{
        return{
            flag:false,
            msg:'查询失败'
        }
    }

  }

  async find(username){
    let staff = await this.ctx.model.Staff.findOne({username})
    console.log('result',staff);
    if(staff){
        return{
            flag:true,
            msg:'查询成功',
            data:staff
        }
    }else{
        return{
            flag:false,
            msg:'查询失败'
        }
    }

  }
  async add(staff){
    //username password
    //username 是否存在
    //如果存在 提示增加失败 否则增加成功
    let {username,password}=staff
    let result1 = await this.find(username)
    if(result1.flag){
      return{
        flag:false,
        msg:'username已经存在 不能重复增加'
      }
    }else{
      let staffModel = new this.ctx.model.Staff(staff)
      let saveResult = await staffModel.save()
      console.log(saveResult);
    }
  }
}
module.exports = StaffService;