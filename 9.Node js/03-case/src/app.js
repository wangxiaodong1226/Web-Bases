const http = require('http')
const url = require('url')
const querystring = require('querystring')
//数据库连接
require('./model/db.js')

//01导入用户集合
const User = require('./model/user')

const app = http.createServer()

//服务器对象进行事件监听
app.on('request', async (req, res) => {
    
    //路由处理-获取请求路径和请求方法
    // console.log(url.parse(req.url,true));
    let {pathname,query} = url.parse(req.url,true);
    // console.log(query.id);
    let method = req.method
    
    if (method == 'GET') {
        //显示增加页面
        if (pathname == '/add') {
            let addHtml = `<!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>
            
            <body>
                <div class="container">
                    <h2>添加用户</h2>
                    <form action="/doadd" method="POST">
                        <div class="form-group">
                            <label>用户名</label>
                            <input name="username" type="text" class="form-control" placeholder="请输入用户名">
                        </div>
                        <div class="form-group">
                            <label>用户密码</label>
                            <input name="password" type="password" class="form-control" placeholder="请输入密码">
                        </div>
                        <div class="form-group">
                            <label>用户年龄</label>
                            <input name="age" type="text" class="form-control" placeholder="请输入用户年龄">
                        </div>
                        <div class="form-group">
                            <label>用户爱好</label>
                            <div>
                                <label class="checkbox-inline">
                                    <input type="checkbox" value="coding" name="hobby">敲代码
                                </label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" value="swimming" name="hobby">游泳
                                </label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" value="playing" name="hobby">游戏
                                </label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" value="reading" name="hobby">看书
                                </label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" value="filming" name="hobby">电影
                                </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">添加用户</button>
                        
                    </form>
                </div>
            </body>
            
            </html>`
            res.end(addHtml)
        } else if (pathname == '/list') {
            //用户数据查询
            let users = await User.find()
            // console.log(users);

            //数据+模板拼接
            let listHtml = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>
            <body>
                <div class="container">
                    <h5>
                        <a href="/add">增加用户</a>
                    </h5>
                    <table class="table table-striped table-bordered">
                        <tr>
                            <td>用户名称</td>
                            <td>用户年龄</td>
                            <td>用户爱好</td>
                            <td>操作</td>
                        </tr>`
            users.forEach(item => {
                listHtml += `<tr>
                           <td>${item.username}</td>
                           <td>${item.age}</td>
                           <td>
                           `
                item.hobby.forEach(hobby => {
                    listHtml += ` <span>${hobby}</span>`
                })

                listHtml += ` </td>
                           <td>
                               <a href="/delete?id=${item._id}" class="btn btn-xs btn-danger">删除</a>
                                <a href="/edit?id=${item._id}" class="btn btn-xs btn-success">修改</a>
                            </td>
                        </tr>`
            })

            listHtml +=
                `</table>
                </div>
            </body>
            </html>`

            //数据结果返回
            res.end(listHtml)

        }else if(pathname=='/edit'){
            let hobbies=['codding','swimming','reading','filming','playing']
            // //获取用户id
            let _id=query.id
            // // console.log(_id);
            // //根据id查询数据user
            let user=await User.findOne({_id:_id})
            
            // //数据和模板拼接
            let editHtml=`<!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>
            
            <body>
                <div class="container">
                    <h2>修改用户</h2>
                    <form action="/doedit?_id=${user._id}" method="POST">
                        <div class="form-group">
                            <label>用户名</label>
                            <input value="${user.username}" name="username" type="text" class="form-control" placeholder="请输入用户名">
                        </div>
                        <div class="form-group">
                            <label>用户密码</label>
                            <input value="${user.password}" name="password" type="password" class="form-control" placeholder="请输入密码">
                        </div>
                        <div class="form-group">
                            <label>用户年龄</label>
                            <input value="${user.age}" name="age" type="text" class="form-control" placeholder="请输入用户年龄">
                        </div>
                        <div class="form-group">
                            <label>用户爱好</label>
                            <div>`

                            hobbies.forEach(item=>{
                                let isChecked = user.hobby.includes(item)
                                if(isChecked){
                                    editHtml+=`<label class="checkbox-inline">
                                    <input type="checkbox" value="${item}" name="hobby" checked>${item}
                                </label>`
                                }else{
                                    editHtml+=`<label class="checkbox-inline">
                                    <input type="checkbox" value="${item}" name="hobby">${item}
                                </label>`
                                }
                            })
                                editHtml+=`
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">修改用户</button>
                        
                    </form>
                </div>
            </body>
            
            </html>`
            // //返回完整数据
            res.end(editHtml)
        }else if(pathname=='/delete'){
            let userId = query.id
            console.log(userId)
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
        }
    } else if (method == 'POST') {
        if (pathname == '/doadd') {
            //增加操作
            let formData = '';

            req.on('data', (chunk) => {
                formData += chunk
            })

            req.on('end', async () => {
                //获取参数对象
                let userObj = querystring.parse(formData)
                // console.log(userObj);
                //数据增加到数据库
                await User.create(userObj)
                //重定向到用户列表地址
                res.writeHead(301, {
                    Location: '/list'
                })
                res.end()
            })
            // res.end("添加成功")
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