<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <users-tage></users-tage>   <!--使用公用组件users-tage-->
  </div>
</template>

<script>
import Users from "./components/UsersComponent" //组件Users来自哪里
export default {
  name: 'app',
  data(){
    return {
      title:'这是我的第一个vue-Cli 脚手架项目',
    }
  },
  components:{"users-tage":Users},  // 注册局部组件users-tage 并在 App.vue中引用
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
