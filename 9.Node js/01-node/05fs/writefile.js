const fs=require('fs');

fs.writeFile('./demo1.txt','写入内容',err=>{
    if(err!=null){
        console.log(err);
        return;
    }
    console.log('write ok!');
    
})