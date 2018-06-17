<template>
  <div id="app">
    <h1>App.vue根组件</h1>
    <a href="/Home">Home</a>
    <router-link to="/">默认加载的组件--Home</router-link> 
    <router-link to="/Other">Other组件</router-link>
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


