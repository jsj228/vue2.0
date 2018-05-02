<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <users-tage></users-tage>   <!--③使用全局组件users-tage-->
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      title:'这是我的第一个vue-Cli 脚手架项目',
    }
  }
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
