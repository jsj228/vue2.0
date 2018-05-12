<template>
  <div id="app">
    <h1>在App.vue中使用vue-router</h1>
    <!-- vue-router视图的外挂点不能脱离div#app的控制范围 -->
   <router-view/>
   <router-view/>
   <router-view/>
   <router-view/>
  </div> 
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


