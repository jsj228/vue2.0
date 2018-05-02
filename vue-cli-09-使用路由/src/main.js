// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'  //引入vue核心模块
import App from './App'  //引入app跟组件
Vue.config.productionTip = false


import vueRouter from 'vue-router' //①引入路由模块
Vue.use(vueRouter) //②中间件---注明要使用路由
const router=new vueRouter({ //③配置路由模块
	routes:[
		{
			path:"/",//配置项目路由的根路径
			component:home //当找到项目的跟路由路径后，开始跳转到指定的页面
		}, 
		{path:"/helloworld",component:HelloWorld}
	]
})

// 分别引入要使用路由跳转的页面模块
import HelloWorld from './components/HelloWorld'  //1、引入headers组件

import headers from './components/headerComponent'  //1、引入headers组件
Vue.component("header-tage",headers) 				//2、注册公用headers组件，组件名为hearder-tage	

import footer from './components/footerComponent'   //①引入footer组件
Vue.component("footer-tage",footer) 				//②注册公用tooter组件，组件名为footer-tage;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

//index.html --->main.js---->App.vue
