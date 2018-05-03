<template>
  <div id="app">
   <!-- <h1 v-text="title"></h1>-->
    <header-tage></header-tage>     <!--使用公用组件header-tage-->
    <!--使用局部组件main-tage ；:mainData="mainList"使用这种方式将数据传递给mainData属性，并在main-tage子组件内使用props对象接受-->
    <main-tage :mainData="mainList"></main-tage>     
    <footer-tage></footer-tage>     <!--使用局部组件main-tage-->
  </div>
</template>

<script>
import main from './components/mainComponent' //组件main模板来自哪里
//Vue.component("main-tage",main)  //不可以再这里注册全局组件 


export default {
  name: 'app',
  data(){
    return {
        mainList:[
        {id:'prince',name:'1111',position:'这里是1111',show:false},
        {id:'rose',name:'2222',position:'这里是2222222222',show:false},
        {id:'fox',name:'3333',position:'这里是333333333',show:false},
        {id:'other',name:'4444',position:'这里是444444444',show:false},
      ],
    }
  },
  components:{"main-tage":main},  //注册局部组件 
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
