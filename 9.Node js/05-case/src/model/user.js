//01 导入mongoose
const mongoose = require('mongoose');

//02 集合规则
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
     password:String,
    age:{
        type:Number,
        min:1,
        max:100
    },
    hobby:[String],
    date:{
        type:Date,
        default:Date.now()
    }
})

const User=mongoose.model('User',userSchema,'users')
module.exports=User