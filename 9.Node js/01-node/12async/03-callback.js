function getData(callback){
  const sum=callback('aaa');
  callback(sum)
}
const result=getData()(
    function(data){
        console.log('callback函数调用了');
        console.log(data);
    }
)

