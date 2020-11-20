const controller = require('./controller.js')
//配置式路由
var routes = {
    '/api-ajax1':controller.controller1,
    '/api-ajax2':controller.controller2,
    '/api-ajax3':controller.controller3
}
module.exports = routes;



