;(function(){
    const template = `
    <div class="col-sm-3 col-md-2 sidebar">
      <ul class="nav nav-sidebar">
        
          <router-link to="/" tag="li" exact>
            <a>首页</a>
          </router-link>
          <router-link to="/news" tag="li">
            <a>新闻管理</a>
          </router-link>
          <router-link to="/about" tag="li">
            <a>关于我们</a>
          </router-link>
        
        
        
      </ul>
      
    </div>`
    window.appLeft = {
        template,//template:template
        data(){
          return{
            delNum:0//已经删除的总数量
          }
        },
        created(){
          //订阅消息
          PubSub.subscribe('changeNum',(event,num)=>{
            //事件回调函数
            console.log(num);
            
            this.delNum = this.delNum + num;
          })
        }
    }
})()