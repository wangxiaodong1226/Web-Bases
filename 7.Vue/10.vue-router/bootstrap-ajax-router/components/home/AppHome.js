;(function(){
    const template=`
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

          <!--右边上半区域-->
          <!--<h1 class="page-header">Dashboard</h1>-->
          <slot name="dashboard"> </slot>
          <!--通过属性绑定的方式向子组件传递数据-->
          <dashboard :fruits="fruits" @delete_fruit="deleteFruit"></dashboard>
          <!--右边下半区域-->
          <h2 class="sub-header">Section title</h2>
          <home-list :empList="empList" :deleteEmp="deleteEmp"></home-list>
        </div>
    `
    window.AppHome = {
        template,
        data(){
            return{
                fruits:['香蕉','苹果','大鸭梨','草莓'],
                empList:[]
            }
        },
        created() {
            axios.get('http://127.0.0.1:5500/day68/02-bootstrapAjax-router/emp.json')
            .then( response => {
                // handle success
                console.log(response.data,this);
                this.empList = response.data
            })
            .catch( error => {
                // handle error
                console.log(error);
            })
            
        },
        components:{
            Dashboard,
            HomeList
        },
        methods: {
            deleteEmp(index){
                this.empList.splice(index,1);
            },
            deleteFruit(index){
                this.fruits.splice(index,1);
                //成功删除之后，发布消息，左侧组件来统计已经删除的总数量
                PubSub.publish('changeNum',1)//每次删除的是1条
            }
        },
    }
})()