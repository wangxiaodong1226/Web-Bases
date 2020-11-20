const fs = require('fs')
const path =require('path')
const mime =require('mime')
var staticServe = function(req,res,pathname){
    let filePath = path.join(__dirname,'public',pathname)
    const type = mime.getType(filePath);
    let {method} = req;
    if(method=='GET'){
        fs.readFile(filePath,(err,doc)=>{
            if(err){
                console.log(err);
                res.writeHead(404,{
                    "content-type":"text/html;charset=utf-8"  
                })
                res.end('page error')
            }else{
                res.writeHead(200,{
                    "content-type":type
                })
                res.end(doc);
            }
        })
        }    
}
module.exports = staticServe