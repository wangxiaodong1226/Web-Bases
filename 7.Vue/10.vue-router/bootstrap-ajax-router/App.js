;(function(){
    const template = `
    <div id="app">
        <!--头部导航区域-->
        <app-navbar></app-navbar>

        <!--核心区域:分左右两边-->
        <div class="container-fluid">
        <div class="row">

            <!--左边菜单栏区域-->
            <app-left></app-left>

            <!--右边主页面区域: 分上下两个区域
                <app-home>
                    <h1 class="page-header" slot="dashboard">{{title}}</h1>
                </app-home>
            -->
            <router-view>
                <h1 class="page-header" slot="dashboard">{{title}}</h1>
            </router-view>
        </div>
        </div>
    </div>`
    window.App = {
        template,
        components:{
            'app-navbar':AppNavbar,
            'app-left':appLeft,
            'app-home':AppHome
        },
        data(){
            return{
                title:'仪表盘'
            }
        }
    }
})()