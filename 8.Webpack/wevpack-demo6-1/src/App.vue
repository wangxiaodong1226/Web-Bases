<template>
    <div>
        <h1>APP 根组件</h1>
        <h2>{{ msg }}</h2>
        <foo></foo>
    </div>
</template>
<script>
import Foo from './components/Foo.vue'
export default {
    components:{
        Foo//Foo:Foo
    },
    data(){
        return {
            msg:'hello webpack'
        }
    }


}
</script>
<style scoped>
    h1{
        color:red;
    }
</style>

