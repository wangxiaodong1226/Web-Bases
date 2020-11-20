const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost:27017/p202008',{ useNewUrlParser: true , useUnifiedTopology: true })
.then(()=>{console.log("数据库连接成功")})
.catch(err=>{ console.log("数据库连接失败","err");})

//聚合查询
const authorSchema=new mongoose.Schema({
    name:String,
    sex:Number,
    age:Number
})



//02创建集合: 依据userSchema规则创建集合
const Author = mongoose.model('Author',authorSchema,'authors')//第三个参数 有默认值
const author=new Author({
    title:'zhangsan',
    sex:1,
    age:30
})


//03 创建集合实例：并传入真实数据文档(符合集合规则)


author.save()
.then(result=>{
    //result 是保存的成功后的数据库对象
    console.log('user 保存成功',result)
})
.catch(err=>{
    console.log('user 保存失败',err)
})

const postSchema=new mongoose.Schema({
    title:String,
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Author'
    },
    content:String
})
const Post = mongoose.model('Post',postSchema,'posts')
const post=new Post({
    title:'html',
    author:'5f377500ae238287e09d',
    content:'12544456ssf'
})
// post.save()
// .then(result=>{
//     //result 是保存的成功后的数据库对象
//     console.log('user 保存成功',result)
// })
// .catch(err=>{
//     console.log('user 保存失败',err)
// })

post.find()
.populate('author')
.then(result=>{
    //result 是保存的成功后的数据库对象
    console.log('user 保存成功',result)
})
.catch(err=>{
    console.log('user 保存失败',err)
})