<template>
    <div>
        <h1>我是 FOO 组件</h1>
        <h2>我是 FOO 组件 h2</h2>
    </div>
</template>
<script>

</script>
<style scoped>
/* 
    默认css样式会自动传递到父子组件中
    scoped 指定后，css样式只作用于当前组件
 */
    h2{
        color:blue;
    }
</style>