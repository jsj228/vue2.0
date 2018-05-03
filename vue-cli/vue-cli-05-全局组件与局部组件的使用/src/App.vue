<template>
  <div id="app">
   <!-- <h1 v-text="title"></h1>-->
    <header-tage></header-tage>     <!--③使用全局组件header-tage-->
    <main-tage></main-tage>     <!--三、使用局部组件main-tage-->
    <footer-tage></footer-tage>     <!--Ⅲ使用全局组件footer-tage-->
  </div>
</template>

<script>
import main from './components/mainComponent' //一、main模板来自哪里
//Vue.component("main-tage",main)  //不可以再这里注册全局组件 
export default {
  name: 'app',
  data(){
    return {
      title:'这是vue-Cli 脚手架项目',
    }
  },
  components:{"main-tage":main},  //二、使用main模板,注册局部组件main-tage 
}
</script>

<style>
*{margin:0;padding:0;box-sizing:border-box;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
