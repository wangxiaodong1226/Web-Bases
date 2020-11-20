;(function(){
    const template = `<!--科技栏目-->
    <div>
        <ul >
            <li v-for="tech in techArr" :key="tech.id">
                <span>{{tech.title}} </span>
                <button @click="pushTech(tech.id)" class="btn  btn-default btn-xs">查看(Push)</button>&nbsp;
                <button  @click="replaceTech(tech.id)" class="btn btn-default btn-xs">查看(replace)</button>
            </li>
            <button @click="$router.back()">后退</button>
            <button @click="$router.go(1)">前进</button>
        </ul>
        <!--详情-->
        <router-view></router-view>
    </div>`
    window.Tech = {
        template,
        data(){
            return{
                techArr:[]
            }
        },
        created() {
            this.getTechArr()
        },
        methods: {
            pushTech(id){
                // 在vue-router版本升级到3.1.0及以上之后，页面跳转路由在控制台中会报in promise的问题，在3.1.0版本里面新增功能：push和replace发那个发会返回一个promise，所以可能在控制台中见到未捕获的异常，在调用方法的时候用catch进行捕获
                this.$router.push(`/news/tech/detail/${id}`).catch(err=>{
                    console.log(err);
                    
                })
            },
            replaceTech(id){
                this.$router.replace(`/news/tech/detail/${id}`).catch(err=>{
                    console.log(err);
                    
                })
            },
            getTechArr(){
                axios.get("http://127.0.0.1:5500/day63/02-bootstrapajaxRouter/db/tech.json").then(response=>{
                    this.techArr = response.data
                }).catch(err=>{
                    alert(err.message)
                })
            }
        },
    }
})()