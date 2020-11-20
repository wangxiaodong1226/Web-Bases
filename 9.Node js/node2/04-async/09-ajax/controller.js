var controller1 = function(req,res){

    setInterval(() => {
        return res.end('api-ajax-result1')
    },1000);
    
}
//一堆业务
var controller2=function(req,res){

  setInterval(() => {
      return res.end('api-ajax-result2')
  }, 500);
    
}
//一堆业务
var controller3 = function(req,res){

    setInterval(() => {
        return res.end('api-ajax-result3')
    },3000);
    
}
module.exports = {
    controller1,
    controller2,
    controller3
}