
;(function(){
    window.router = new VueRouter({
        //全局配置router-link标签生成的类名
        linkActiveClass:"active",
        routes:[
            {path:"/",component:AppHome},
            {
                path:"/news",
                component:News,
                children:[
                    {
                        path:"/news/sport",
                        component:Sport
                    },
                    {
                        // 简写方式，相当于/news/tech
                        // 注意前面/ ，如果有 / 就成根目录
                        path:"tech",
                        component:Tech
                    },
                    {
                        path:"",
                        redirect:"/news/sport"
                    }
                ]
            },
            {path:"/about",component:About},
        ]
    })
})()