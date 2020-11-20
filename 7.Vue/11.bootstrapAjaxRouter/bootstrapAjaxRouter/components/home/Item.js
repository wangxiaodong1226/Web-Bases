;(function(){
    const template = `<tr>
    <td>{{myEmp.id}}</td>
    <td>{{myEmp.name}}</td>
    <td>{{myEmp.salary}}</td>
    <td>
        <a href="#" @click.prevent="deleteItem">删除</a>
    </td>
    
  </tr>`
  window.Item = {
      template,
      props:{
        myEmp:{//指定属性名，数据类型，是否必须
              type:Object,
              required:true//指定父组件是否必须把这个数据传递过来
          },
          deleteEmp:Function,
          index:Number
      },
      methods: {
        deleteItem(){
            //要调用真正的删除方法
            this.deleteEmp(this.index)
        }
      },
  }
})()