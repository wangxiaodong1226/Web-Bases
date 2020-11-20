; (function () {
    const template = `<div class="jumbotron">
    <h1>{{id}}</h1>
    <h2>{{sportDetail.title}}</h2>
    <p>{{sportDetail.content}}.....</p>
</div>`
    window.SportDetail = {
        template,
        data() {//data只会初始化一次，后面点击之后不会进行重新赋值
            return {
                id: null,
                sportDetail:{}
            }
        },
        created() {
            this.getSportById();
        },
        methods: {
            getSportById() {
                // 1,获取路由地址中的id，减0把id从字符串转换为数字
                this.id = this.$route.params.id - 0
                // 2，获取所有体育新闻
                axios.get("http://127.0.0.1:5500/day63/02-bootstrapajaxRouter/db/sport.json").then(response => {
                    const sportArr = response.data;
                    // 3，通过id获取指定的数据
                    // find方法返回满足调价的一条数据

                   this.sportDetail =  sportArr.find(detail=>{
                        return detail.id === this.id
                    })
                    
                }).catch(err => {
                    alert(err.message)
                })
                
            }
        },
        watch: {
            $route: function () {
                // this.id = this.$route.params.id
                this.getSportById()
            }
        },
    }
})()