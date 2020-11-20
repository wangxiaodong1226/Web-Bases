;(function(){
    const template = `
    <div class="col-sm-3 col-md-2 sidebar">
      <ul class="nav nav-sidebar">
        <li class="active">
          <a href="#">Overview 
            <span v-show="delNum">({{delNum}})</span>
          </a>
        </li>
        <li><a href="#">Reports</a></li>
        <li><a href="#">Analytics</a></li>
        <li><a href="#">Export</a></li>
      </ul>
      <ul class="nav nav-sidebar">
        <li><a href="">Nav item</a></li>
        <li><a href="">Nav item again</a></li>
        <li><a href="">One more nav</a></li>
        <li><a href="">Another nav item</a></li>
        <li><a href="">More navigation</a></li>
      </ul>
      <ul class="nav nav-sidebar">
        <li><a href="">Nav item again</a></li>
        <li><a href="">One more nav</a></li>
        <li><a href="">Another nav item</a></li>
      </ul>
    </div>
    `
    window.appLeft={
        template,//template:template
        data(){
          return{
            delNum:0//已经删除的总数量
          }
        },
        created(){
          //订阅消息
          PubSub.subscribe('changeNum',(event,data)=>{
            console.log(event);
            
            //统计已经删除的总数量
            this.delNum = this.delNum + data;
          })
        }
    }
})()