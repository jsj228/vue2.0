<template>
  <div id="app">
   <!-- <h1 v-text="title"></h1>-->
    <header-tage></header-tage>      <!-- 使用公用组件header-tage-->
    <main-tage :mainData="mainList" @liClickChange='changeMainDiv($event)'></main-tage>     <!--使用局部组件main-tage-->
     <!-- 子组件，显示不同的 tab
      is 特性动态绑定子组件
      keep-alive 将切换出去的组件保留在内存中 -->
      <prince :is="currentTab" keep-alive></prince>
    <footer-tage></footer-tage>     <!--使用局部组件main-tage-->
  </div>
</template>

<script>
import main from './components/mainComponent' //组件Users来自哪里
// 引入子组件
import prince from './components/prince';
import rose from './components/rose';
import fox from './components/fox';
import other from './components/other';

export default {
  name: 'app',
  data(){
    return {
      mainList:[
        {id:'prince',name:'1111'},
        {id:'rose',name:'2222'},
        {id:'fox',name:'3333'},
        {id:'other',name:'4444'},
      ],
      currentTab: 'prince'
    }
  },
  components:{"main-tage":main,  //注册局部组件 
    prince,
    rose,
    fox,
    other,
 },
  methods:{
    changeMainDiv(app){  
      // console.log(app);
    this.currentTab = app; // id 为当前触发标签页的组件名
    }
  }
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
