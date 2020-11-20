/*
 * @Author: your name
 * @Date: 2020-05-22 23:32:36
 * @LastEditTime: 2020-10-31 16:04:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \buka\day65\代码\components\home\Dashboard.js
 */
;(function(){
    const template = `
    
          <div class="row placeholders">
            <div v-for='(fruit,index) in fruits' :key='index' class="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200"
                height="200" class="img-responsive" alt="Generic placeholder thumbnail">
              <h4>{{fruit}}</h4>
              <span class="text-muted">{{name}}</span>
            </div>
           
          </div>
    `
    window.Dashboard = {
        template,
        props:['fruits','name']
    }
})()