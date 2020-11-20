/*
 * @Author: your name
 * @Date: 2020-05-22 23:32:36
 * @LastEditTime: 2020-10-31 16:04:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \buka\day65\代码\components\home\AppHome.js
 */
;(function(){
    const template=`
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

          <!--右边上半区域-->
          <h1 class="page-header">Dashboard</h1>
          <!--通过属性绑定的方式向子组件传递数据-->
          <dashboard :fruits="fruits" :name="cName"></dashboard>
          <!--右边下半区域-->
          <h2 class="sub-header">Section title</h2>
          <home-list></home-list>
        </div>
    `
    window.AppHome = {
        template,
        data(){
            return{
                fruits:['香蕉','苹果','大鸭梨','草莓'],
                cName:"zhangsan"
            }
        },
        components:{
            Dashboard,
            HomeList
        }
    }
})()