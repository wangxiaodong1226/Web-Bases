const mongoose = require('../db.js');

console.log(mongoose);
//定义集合
const authorSchema=new mongoose.Schema({
    name:String,
    sex:Number,
    age:Number
})
const Author = mongoose.model('Author',authorSchema,'authors')

module.exports=Author