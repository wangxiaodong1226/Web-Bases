const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/p202008',{ useNewUrlParser: true , useUnifiedTopology: true })
.then(()=>{console.log("数据库连接成功")})
.catch(err=>{ console.log("数据库连接失败","err");})

// module.exports = mongoose