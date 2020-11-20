async function fn(){
    throw 'code error'
    return '123'
}
console.log(fn());

fn()
.then(result=>{
    console.log(result);
})
.catch(err=>{
    console.log(err);
})