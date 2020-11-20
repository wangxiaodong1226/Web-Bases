
module.exports = (app)=>{
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    //staff
    const StaffSchema = new Schema({
        username:{ type:String, required:true},
        password:{type:String,required:true},
        name:{type:String,required:true},
        no:{type:String,default:""},
        phone:{type:String,default:""},
        status:{type:Number,default:1},// 1正常 0 异常
        time_create:{type:String,default:''},
        time_last:{type:String,default:''},
        ip_last:{type:String,default:''},
        ip_super:{type:Number,default:''} //1 超级管理员 0 普通

    })

    return mongoose.model('Staff',StaffSchema,'staffs')


}


