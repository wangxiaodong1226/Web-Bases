
// import Vue from 'vue/dist/vue.js'
import Vue from 'vue'
import App from './App.vue'

new Vue({
    el: "#app",
    // render:function(h){
    //     return h(App)
    // },

    render: h => h(App)

    // template:"<App></App>",
    // components:{
    //     App//App:APP
    // }
})