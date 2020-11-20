const url = require('url')
// const queryString = require('querystring')

var controller1 = function(req,res){

    setInterval(() => {
        return res.end('api-ajax-result1')
    },2000);
    
}
//一堆业务
var controller2=function(req,res){

    setInterval(() => {
        return res.end('api-ajax-result2')
    },0);
    
}
//一堆业务
var controller3 = function(req,res){

    setInterval(() => {
        return res.end('api-ajax-result3')
    },3000);
    
}
var fetch1 = function(res,res){
    res.end('api-fetch-result1')
}
var fetchJson = function(req,res){
    let object={
        username:'wyd',age:18
    }
    res.end(JSON.stringify(object))
}

var users = function(req,res){
    let {method} = req;
    let {query} = url.parse(req.url,true)
    let postData=""
    switch (method) {
        case 'GET':
                let user_id =query.id;
                console.log(user_id);
                
                res.end(JSON.stringify({
                    username:'admin',age:18  //后台向前台请求传值要传字符串
                }))
            break;
        case 'POST':
                req.on('data',(thunk)=>{
                   postData+=thunk;
                })
                req.on('end',()=>{
                    // console.log(postData);
                    console.log(typeof postData);
                    //数据库增加
                    let result =JSON.parse(postData)
                    let username = result.username
                    let age = result.age
                    res.end(JSON.stringify({
                        ok:true,
                        msg:'增加数据成功'
                    }))
                })
            break;
        case 'PUT':
            let id =query.id;

            req.on('data',(thunk)=>{
                postData+=thunk;
             })
             req.on('end',()=>{
                 // console.log(postData);
                 console.log(typeof postData);
                 //数据库修改
                 let result =JSON.parse(postData)
                 let username = result.username
                 let age = result.age
                 res.end(JSON.stringify({
                     ok:true,
                     msg:'修改数据成功'
                 }))
             })
            break;
        case 'DELETE':
                let delete_id=query.id;
                res.end(JSON.stringify({
                    ok:true,
                    msg:'删除数据成功'
                }))
            break;
        default:
            res.end(JSON.stringify({
                ok:false,
                msg:'not found'
            }))
            break;
    }
      
 }



 var staff = function(req,res){
    let {method} = req;
    let {query} = url.parse(req.url,true)
    let postData=""
    switch (method) {
        case 'GET':
                let user_id =query.id;
                console.log(user_id);
                
                res.end(JSON.stringify({
                    username:'admin',age:18  //后台向前台请求传值要传字符串
                }))
            break;
        case 'POST':
                req.on('data',(thunk)=>{
                   postData+=thunk;
                })
                req.on('end',()=>{
                    // console.log(postData);
                    console.log(typeof postData);
                    //数据库增加
                    let result =JSON.parse(postData)
                    let username = result.username
                    let age = result.age
                    res.end(JSON.stringify({
                        ok:true,
                        msg:'增加数据成功'
                    }))
                })
            break;
        case 'PUT':
            let id =query.id;

            req.on('data',(thunk)=>{
                postData+=thunk;
             })
             req.on('end',()=>{
                 // console.log(postData);
                 console.log(typeof postData);
                 //数据库修改
                 let result =JSON.parse(postData)
                 let username = result.username
                 let age = result.age
                 res.end(JSON.stringify({
                     ok:true,
                     msg:'修改数据成功'
                 }))
             })
            break;
        case 'DELETE':
                let delete_id=query.id;
                res.end(JSON.stringify({
                    ok:true,
                    msg:'删除数据成功'
                }))
            break;
        default:
            res.end(JSON.stringify({
                ok:false,
                msg:'not found'
            }))
            break;
    }
      
 }
module.exports = {
    controller1,
    controller2,
    controller3,
    fetch1,
    fetchJson,
    users,
    staff
}