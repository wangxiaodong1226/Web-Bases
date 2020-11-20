const http = require('http')
const url = require('url')
const querystring = require('querystring')
const template = require('art-template')
const path=require('path')

template.defaults.root=path.join(__dirname,'views')

require('./model/db.js')

//01导入用户集合
const User = require('./model/user')

//创建服务器
const app = http.createServer()


app.on('request',async (req,res)=>{
    let {pathname,query} = url.parse(req.url,true);
    let method = req.method
    if(method=='GET'){
        if (pathname == '/add') {
            let addHtml = template('add.art',{})
            res.end(addHtml)
        } else if (pathname == '/list') {
            //用户数据查询
             let users = await User.find()
            let listHtml = template('list.art',{
                users:users
            })
            
            res.end(listHtml)

        }
    }else if(method=='POST'){
        if (pathname == '/doadd') {
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
        
        }else if(pathname == '/doedit'){
            let formData=''
            req.on('data',(thunk)=>{
                formData+=thunk
            })
            req.on('end',async ()=>{
                //01获取更新数据
                // console.log(formData);username=lisi&password=8888888888&age=20&hobby=swimming&hobby=reading&hobby=filming
                // console.log(querystring.parse(formData));//[Object: null prototype]
                let userObj=querystring.parse(formData)
                //username: 'lisi',
                //   password: '8888888888',
                //   age: '20',
                //   hobby: [ 'swimming', 'reading', 'filming', 'playing' ] }
                

                //根据用户id
                let  _id=query._id

                //根据id更新数据更新数据库对应的数据
                await User.updateOne({_id:_id},userObj)
                res.writeHead(301,{
                    Location:'/list'
                })
                res.end()
            })
        }

    }
})




app.listen(3000)
console.log('Server is running!');