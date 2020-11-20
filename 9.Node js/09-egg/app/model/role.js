
module.exports = (app)=>{
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    //staff
    const RoleSchema = new Schema({
       role_name:{type:String,required:true},
       role_desc:{type:String,default:''},
       time_create:{type:String,default:''}
       

    })

    return mongoose.model('Role',RoleSchema,'roles')


}


