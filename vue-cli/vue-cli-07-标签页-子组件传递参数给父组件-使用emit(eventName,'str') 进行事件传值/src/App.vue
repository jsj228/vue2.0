<template>
  <div id="app">
    <!--3、使用公用组件header-tage-->
    <header-tage></header-tage> 
    <!--【3】使用局部组件main-tage 
      并使用“属性传值”的方式(:mainData="mainList"),
      将app为父组件的数据传递给子组件main--> 

    <!--<4>使用子组件main中自定义的事件,以及定义对应的函数-->
    <main-tage :mainData="mainList" @liClickChange='changeMainDiv($event)'></main-tage>
     <!-- 子组件，显示不同的 tab
      is 特性动态绑定子组件
      keep-alive 将切换出去的组件保留在内存中 -->
      <!--<5>自定义main的子组件放置的容器-->
      <!-- 使用keep-alive属性或是使用keep-alive包裹起来，都是为了保持激活组件的渲染-->
      <mainChilds :is="currentTab" keep-alive></mainChilds> 
    <footer-tage></footer-tage>     <!--③使用局部组件main-tage-->
  </div>
</template>

<script>
//【1】引入子组件main,prince，rose,fox,other
import main from './components/mainComponent'
  import prince from './components/prince';
  import rose from './components/rose';
  import fox from './components/fox';
  import other from './components/other';
export default {
  name: 'app',
  data(){ //【4】定义mainList数据
      return {
      mainList:{
        navBar:[  
			{id:'prince',name:'1111',class:'barActive'},
			{id:'rose',name:'2222',class:''},
			{id:'fox',name:'3333',class:''},
			{id:'other',name:'4444',class:''},],
			class:'barActive',
      },
      currentTab: 'prince' //设置开始打开的子组件
    }
  },
  components:{"main-tage":main,  //【2】注册局部组件,main
    prince,
    rose,
    fox,
    other,
 },
  methods:{
    changeMainDiv(e){  
      console.log(e);
    	this.currentTab = e; // id 为当前触发标签页的组件名
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
