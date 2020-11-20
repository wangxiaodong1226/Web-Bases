<template>
    <div id="app">
        <!--头部导航区域-->
        <app-navbar></app-navbar>

        <!--核心区域:分左右两边-->
        <div class="container-fluid">
        <div class="row">
            <!--左边菜单栏区域-->
            <app-left></app-left>

            <!--右边主页面区域: 分上下两个区域-->
            <app-home>
                <h1 slot="myTitle" class="page-header">{{title}}</h1>
            </app-home>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    template,
        components:{
            appNavbar,// ES6语法 相当于appNavbar:appNavbar
            appLeft,
            appHome,
          },
          data(){
              return{
                  title:'仪表盘'
              }
          }
}
</script>

<style lang="stylus">
    div{
        color:red;
    }
</style>