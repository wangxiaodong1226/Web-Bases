const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost:27017/p202008', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("数据库连接成功")
    })
    .catch(err => {
        console.log("数据库连接失败", "err");
    })


//创建集合
//01制定集合规则
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    sex: Number,
    single: Boolean
})

//02创建集合: 依据userSchema规则创建集合
const User = mongoose.model('User', userSchema, 'users') //第三个参数 有默认值

//03 调用集合的静态方法：并传入真实数据文档(符合集合规则)

//返回值也是Promise对象
// User.create({name:'zs',age:18,sex:1,single:true})
// .then(result=>{
//     //result 是保存的成功后的数据库对象
//     console.log('user 保存成功',result)
// })
// .catch(err=>{
//     console.log('user 保存失败',err)
// })

//支持回调函数方式
User.create({
    name: 'zs',
    age: 18,
    sex: 1,
    single: true
}, (err, doc) => {
    //err null没有错误
    console.log(err);
    console.log(doc);
})

//异步函数方式
async function insertUser() {
    try {
        let result = await User.create({name: 'zs',age: 18,sex: 1, single: true  })
        console.log('异步函数 增加用户操作 返回值');
        console.log(result);
    } catch (error) {
        console.log(error);
    }

}
insertUser()