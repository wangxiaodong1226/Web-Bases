const express=require('express')

const admin = express.Router()



admin.get('/',(req,res)=>{
    res.send('欢迎访问后台首页')
})

admin.get('/list',(req,res)=>{
    res.send('后台商品列表')
})
module.exports=admin