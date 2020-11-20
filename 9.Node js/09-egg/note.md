01 git 初始化: 源码管理
02 项目初始化 npm init
03 了解egg 为企业级框架和应用而生,插件,配置,约定,渐进式开发
04 安装依赖 egg, egg-bin
05 配置脚本 启动服务
06 添加配置 config.default.js config.keys = '秘钥
07 定义路由 router 注意 参数 app,地址 和 控制器controller
08 定义控制器 controller

09 应用监听 四个方法 app.js

10 使用模板引擎
    引入view插件:安装插件依赖
    启用插件
    配置插件
    定义模板 在view下
    控制器渲染模板: 请求路由 到控制器 并渲染
11 登录页面
   完善登录form 表单
   配置csrf安全:支持query 参数和body 隐藏域传值
   定义登录操作控制 并获取表单数据

12 staff添加默认账号
   添加egg-mongoose插件
   添加插件配置
   定义staff model 
   触发控制 添加staff模拟账号数据到数据库(注意数据库服务开启)
   验证登录操作



-------------------------------
01  md5加密 存储用户
    分层开发思想
02  登录验证
    登录操作逻辑
    登录实现
    登录控制层
    封装staff 服务层  find(username,password)
03  封装staff服务层
    增加用户服务层 find(username),add(staff) 去重(账户名不能重复)
    增加staff重构 调用staff service
04  封装tool服务层
    md5服务层
    重构登录控制器
05  验证码
    生成
    客户端显示 svg
    验证码对比 (codeA codeB)



----------------------------------------
01   session 验证码
      session配置
      session验证码存储
      登录逻辑重构:验证校验
02    session 登录状态保持
      登录后session设置userinfo
      home页面状态保持逻辑
03    登录授权中间件
04    退出登录

