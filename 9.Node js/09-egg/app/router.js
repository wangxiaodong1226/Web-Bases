module.exports = app => {
    const {router,controller}=app
    //前台
    router.get('/', controller.client.index.welcome);
    //后台
    router.get('/admin', controller.admin.index.home);
   
    router.get('/admin/welcome', controller.admin.index.welcome);
   
   
    //登录
    router.get('/admin/login', controller.admin.login.login);
    router.post('/admin/dologin',controller.admin.login.dologin)
    router.get('/admin/verify',controller.admin.login.verify)

    //退出
    router.get('/admin/logout',controller.admin.login.logout)


    //staff
    router.get('/admin/staff/list',controller.admin.staff.list)
    router.get('/admin/staff/add',controller.admin.staff.add)
    router.get('/admin/staff/doadd',controller.admin.staff.doadd)

    //role
    router.get('/admin/role/add',controller.admin.role.add)
    router.post('/admin/role/doadd',controller.admin.role.doadd)
    router.get('/admin/role/list',controller.admin.role.list)

};
  
