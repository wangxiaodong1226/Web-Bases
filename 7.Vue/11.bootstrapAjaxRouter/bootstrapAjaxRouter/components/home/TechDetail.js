;(function(){
    const template = `<div class="jumbotron">
    <h2>{{techDetail.title}}</h2>
    <p>{{techDetail.content}}.....</p>
</div>`
    window.TechDetail = {
        template,
        data(){
            return{
                id:null,
                techDetail:{}
            }
        },
        created() {
            this.getTechById();
        },
        methods: {
            getTechById(){
                this.id = this.$route.params.id - 0;
                axios.get("http://127.0.0.1:5500/day63/02-bootstrapajaxRouter/db/tech.json").then(response=>{
                    const techArr = response.data;
                    this.techDetail = techArr.find(detail=>{
                        return detail.id === this.id
                    })
                }).catch(err=>{
                    alert(err.message)
                })
            }
        },
        watch: {
            $route:function(){
                this.getTechById()
            }
        },
    }
})()