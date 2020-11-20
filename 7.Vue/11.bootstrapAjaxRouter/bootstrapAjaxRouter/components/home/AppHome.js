;(function(){
    const template = `<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

    <!--右边上半区域-->
    <!--<h1 class="page-header">Dashboard</h1>-->
    <!--定义插槽-->

    <slot name="myTitle"></slot>
    <!--
        @自定义事件名=事件监听函数
        在子组件出发delete_fruit事件来调用deltetFruit函数
    -->
    <dashboard :fruits="fruits" :name="cName" @delete_fruit="deltetFruit"></dashboard>
    <!--右边下半区域-->
    <h2 class="sub-header">Section title</h2>
    <home-list :empList="empList" :deleteEmp="deleteEmp"></home-list>
  </div>`
    window.appHome = {
        template,
        components:{
            dashboard,
            homeList
        },
        data:function(){
            return{
                fruits:['香蕉','苹果','大鸭梨','草莓'],
                cName:'zhangsan',
                empList:[]
            }
        },
        created() {
            axios.get('http://127.0.0.1:5500/day62/02-bootstrapajaxRouter/emp.json')
            .then( response => {
                // handle success
                console.log(response.data,this);
                this.empList = response.data;
            })
            .catch( error => {
                // handle error
                console.log(error.message);
            })
        },
        methods: {
            deleteEmp(index){
                this.empList.splice(index,1);
            },
            deltetFruit(index){
                this.fruits.splice(index,1);
                //删除之后，发布消息，左侧组件来统计已经删除的条数
                PubSub.publish('changeNum',1)//每次删除一条
            }
        },

    }
})()