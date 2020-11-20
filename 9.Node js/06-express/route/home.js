const express=require('express')

const home = express.Router()



home.get('/',(req,res,next)=>{
    res.send('前台页面')
})

home.get('/list',(req,res,next)=>{
    res.send('文章列表')
})

module.exports=home