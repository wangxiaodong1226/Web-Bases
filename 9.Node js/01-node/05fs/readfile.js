const fs= require('fs');//模块名

fs.readFile('./demo.txt','utf8',(err,doc)=>{
    // console.log(err);
    // console.log(doc);

    if(err){
        console.log(err);
    }else{
        console.log(doc);
        
    }
    
})