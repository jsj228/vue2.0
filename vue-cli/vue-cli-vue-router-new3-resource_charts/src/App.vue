<template>
  <div id="app">
    <header-v></header-v>
    {{ $route.meta.isCaches}}
    <keep-alive>
      <router-view v-if="$route.meta.isCaches"/>
    </keep-alive>
    <router-view v-if="!$route.meta.isCaches"/>
    <!-- <footer-v></footer-v> -->
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
  color: #2c3e50;
  padding:10px 10px 80px;
}
</style>
