;(function(){
    const template = `<div class="row placeholders">
    <div class="col-xs-6 col-sm-3 placeholder" v-for="(fruit,index) in fruits" :key="index">
      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200"
        height="200" class="img-responsive" alt="Generic placeholder thumbnail">
      <h4>{{fruit}}</h4>
      <span class="text-muted">
      {{name}}
      <br>
      <a href="#" @click="deleteFruit(index)">删除</a>
      </span>
    </div>
    
  </div>`
  window.dashboard = {
      template,
      props:['fruits',"name"],
      methods: {
        deleteFruit(index){
          this.$emit('delete_fruit',index)
        }
      },
  }
})()