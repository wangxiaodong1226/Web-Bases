const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost:27017/p202008',{ useNewUrlParser: true , useUnifiedTopology: true })
.then(()=>{console.log("数据库连接成功")})
.catch(err=>{ console.log("数据库连接失败","err");})


//创建集合
//01制定集合规则
const userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    sex:Number,
    single:Boolean
})

//02创建集合: 依据userSchema规则创建集合
const User = mongoose.model('User',userSchema,'users')//第三个参数 有默认值

