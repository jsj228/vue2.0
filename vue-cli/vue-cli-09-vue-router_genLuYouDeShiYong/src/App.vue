<template>
  <div id="app">
    <h1>App.vue根组件</h1>
    <!-- 超链接使用路由 -->
    <a href="/Home">Home</a>
    <a href="/Other">Other</a>
    <!-- 正常使用路由 -->
    <router-link to="/">默认加载的组件--Home</router-link> 
    <router-link to="/Other">Other</router-link>
    <!-- 路由显示区域 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style  scoped>
.router-link-active {
  color: red;
}
</style>


