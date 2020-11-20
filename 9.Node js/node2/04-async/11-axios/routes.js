const controller = require('./controller.js')

var routes = {
    '/api-ajax1':controller.controller1,
    '/api-ajax2':controller.controller2,
    '/api-ajax3':controller.controller3,
    '/api-fetch1':controller.fetch1,
    '/api-fetchJson':controller.fetchJson,
    '/users':controller.users,
    '/staffs':controller.staff
}
module.exports = routes;



