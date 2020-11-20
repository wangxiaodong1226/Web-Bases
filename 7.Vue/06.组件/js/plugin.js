(function () {
    const MyPlugin = {};
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或 property
        Vue.myGlobalMethod = function () {
            // 逻辑...
            alert("MyPlugin.myGlobalMethod被调用了");
        }

        // 2. 添加全局指令
        Vue.directive('my-directive', {
            bind(el, binding) {
                // 逻辑...
                el.innerHTML = "MyPlugin.my-directive指令被调用了" + binding.value
            }

        })
        // 3. 添加实例方法
        Vue.prototype.$myMethod = function (value) {
            // 逻辑..
            alert('vue 实例方法myMethod被调用了：' + value);
        }
    }
    window.MyPlugin = MyPlugin;
})()