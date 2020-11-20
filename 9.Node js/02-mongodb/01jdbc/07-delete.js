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

//异步函数方式 模拟
// async function insertUser() {
//     try {
//         let result = await User.create({name: 'hmm',age: 18,sex: 0, single: true  })
//         console.log('异步函数 增加用户操作 返回值');
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }

// }
// insertUser()

// User.findOneAndDelete({age:20})
// .then(result=>{
//     console.log(result);
// })
// .catch(err=>{
//     console.log(err);
// })

//批量删除
// User.deleteMany({age:20})
// .then(result=>{
//     console.log(result);
// })
// .catch(err=>{
//     console.log(err);
// })

//删除所有文档
User.deleteMany({})
.then(result=>{
    console.log(result);
})
.catch(err=>{
    console.log(err);
})


