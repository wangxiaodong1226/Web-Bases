const mongoose = require('mongoose');

//连接数据库
let connection=mongoose.connect('mongodb://localhost:27017/p202008',{ useNewUrlParser: true , useUnifiedTopology: true });
//Promise对象
console.log(connection);
connection
.then(()=>{
    console.log("数据库连接成功");
})
.catch(err=>{
    console.log("数据库连接失败","err");
})