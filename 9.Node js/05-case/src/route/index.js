var Router       = require('router')
var router = Router()
const template = require('art-template')
const url = require('url')
const querystring = require('querystring')
const path=require('path')

const User = require('../model/user')
//添加
router.get('/add',(req,res)=>{
    let addHtml = template('add.art',{})
    res.end(addHtml)  
})

//用户列表
router.get('/list',async (req,res)=>{
     //用户数据查询
     let users = await User.find()
     let listHtml = template('list.art',{
         users:users
     })
     res.end(listHtml)
})

//添加操作
router.post('/doadd',async (req,res)=>{
   //增加操作
   let formData = '';
   req.on('data', (chunk) => {
       formData += chunk
   })
   req.on('end', async () => {
       //获取参数对象
       let userObj = querystring.parse(formData)
       await User.create(userObj)
       //重定向到用户列表地址
       res.writeHead(301, {
           Location: '/list'
       })
       res.end()
   })
})

//修改页面
router.get('/edit',async (req,res)=>{
    let hobbies=['codding','swimming','reading','filming','playing']
    // //获取用户id
    let {query} = url.parse(req.url,true);
    let _id=query.id
    // // console.log(_id);
    // //根据id查询数据user
    let user=await User.findOne({_id:_id})
    
    // //数据和模板拼接
    console.log(user);
    let editHtml=template('edit.art',{
        user:user,
        hobbies:['coding','swimming','reading','filming','playing']
    })
    res.end(editHtml)
})

//修改操作
router.post('/doedit',async (req,res)=>{
    let formData=''
    req.on('data',(thunk)=>{
        formData+=thunk
    })
    let {query} = url.parse(req.url,true);
    req.on('end',async ()=>{
        
        let userObj=querystring.parse(formData)

        //根据用户id
        let  _id=query._id
        console.log(_id);
        //根据id更新数据更新数据库对应的数据
        await User.updateOne({_id:_id},userObj)
        
        res.writeHead(301,{
            Location:'/list'
        })
        res.end()
    })
})

//删除操作
router.get('/delete',async (req,res)=>{
    let {query} = url.parse(req.url,true);
    let userId = query.id
    try {
        let result = await User.findOneAndDelete({_id:userId})
        console.log(result);
    } catch (error) {
        console.log(error);
    }
    res.writeHead(301,{
        Location:'/list'
    })
    res.end()
})
module.exports=router