;(function(){
    const template = `<tr>
    <td>{{emp.id}}</td>
    <td>{{emp.name}}</td>
    <td>{{emp.salary}}</td>
    <td>
        <a href="#" @click.prevent="deleteItem">删除</a>
    </td>
    
  </tr>`
  window.Item = {
      template,
      props:{
          emp:{
              type:Object,//指定数据类型
              required:true//制定父组件是否必须把这个数据传输过来
          },
          deleteEmp:Function,
          index:Number
      },
      methods: {
        deleteItem(){
            this.deleteEmp(this.index)
        }
      },
  }
})()