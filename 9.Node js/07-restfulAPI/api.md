## 接口文档

Base 地址: http://localhost:3000

版本: v1



### 用户创建

- 简单描述

  - 增加新用户接口

- 请求路径

  - /users

- 请求方式

  - POST

- 请求参数

  - | 参数名称   | 必选 | 类型            | 说明     |
    | ---------- | ---- | --------------- | -------- |
    | email      | 是   | string          | 邮箱     |
    | nickname   | 是   | string          | 用户昵称 |
    | password   | 是   | string          | 密码     |
    | role       | 否   | [admin,normal]  | 角色类型 |
    | createTime | 否   | string:Date.now | 创建日期 |
    |            |      |                 |          |

    

- 返回数据

  ```json
  {
  	status:0,
  	msg:'增加用户成功'
  }
  ```

  ```json
  {
  	status:-1,
  	msg:'增加用户失败'
  }
  ```

  



### 用户列表