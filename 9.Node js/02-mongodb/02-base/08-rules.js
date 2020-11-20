const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost:27017/p202008',{ useNewUrlParser: true , useUnifiedTopology: true })
.then(()=>{console.log("数据库连接成功")})
.catch(err=>{ console.log("数据库连接失败","err");})


//创建集合
//01制定集合规则
const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'请输入标题'], //必须的
        minlength:2,
        maxlength:6
    },
    totle:{
        type:Number,
        min:[10,'输入数字应大于10'],
        max:100
    },
    date:{
        type:Number,
        default:Date.now
    },
    category:{
        type:String,
        enum:{
            values:['html','css','js','mongodb','node'],
            message:'分类名称不在范围内'
        }
    },
    author:{
        type:String,
        required:true,
        validate:{
            validator:value=>{
                //自定义的复杂的校验逻辑
                let flag=value&&value.length>3
                return flag
            },
            message:'作者长度不符合规则'
        }
    }
})

//02创建集合: 依据userSchema规则创建集合
const Post = mongoose.model('Post',postSchema,'posts')//第三个参数 有默认值

//03 创建集合实例：并传入真实数据文档(符合集合规则)
const post=new Post({
    title:'篮球',
    totle:10,
    // date:Date.now(),
    category:'node',
    author:'呦呦图图'
})
//操作 存储文档到数据的集合
//调用集合实例的方法
//user.save()

//Promise
// console.log(user.save());
post.save()
.then(result=>{
    //result 是保存的成功后的数据库对象
    console.log('user 保存成功',result)
})
.catch(err=>{
    console.log('user 保存失败',err)
})