
;(function(){
    const template = `<!--体育栏目-->
    <div>
        <ul>
            <li v-for="sport in sportArr" :key="sport.id">
                <!--
                    注意：to属性的值是JS表达式，需要使用v-bind方式绑定属性
                    + 前面不要少了单引号
                -->
                <router-link :to="'/news/sport/detail/' + sport.id">{{sport.title}}</router-link>
            </li>
            
        </ul>
        <!--详情-->
        <router-view></router-view>
    </div>  `
    window.Sport = {
        template,
        data(){
            return{
                sportArr:[]
            }
        },
        created() {
            this.getSportArr()
        },
        methods: {
            getSportArr(){
                axios.get("http://127.0.0.1:5500/day63/02-bootstrapajaxRouter/db/sport.json").then(response=>{
                    this.sportArr = response.data
                }).catch(err=>{
                    alert(err.message)
                })
            }
        },
    }
})()