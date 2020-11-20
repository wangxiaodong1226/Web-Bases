
const config = {};
config.keys = '123456';
//{app_root}/config/config.default.js 插件配置

//模板引擎
config.view = {
  defaultViewEngine: 'nunjucks',//默认模板引擎是啥
  mapping: {//映射关系
    '.html': 'nunjucks',//哪个插件
  },
};

//安全相关
config.security = {
  csrf: {
    queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
    bodyName: '_csrf' // 通过 body 传递 CSRF token 的默认字段为 _csrf
  },
}


config.mongoose = {
  client: {
    url: 'mongodb://127.0.0.1:27017/rbac202011',
    options: { useUnifiedTopology: true}
  },
};

//session
config.session = {
  key: 'EGG_SESS',
  maxAge: 24*3600*1000, // 1 天
  httpOnly: true,
  encrypt: true,
};


// 配置需要的中间件，数组顺序即为中间件的加载顺序
config.middleware=[ 'adminAuth' ],

//配置adminAuth
config.adminAuth= {
      enable: true,
      match: '/admin'
  }




module.exports = config



