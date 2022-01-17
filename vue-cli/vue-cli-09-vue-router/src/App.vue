<template>
  <div id="app">
    <h1>App.vue根组件</h1>
    <router-link to="/">默认加载的组件--Home</router-link>   <br>
    <router-link to="/HelloWorld">HelloWorld</router-link>  <br>
    <hr>  
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


