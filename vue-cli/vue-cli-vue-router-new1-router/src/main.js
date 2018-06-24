// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';//引入vue-router
import App from './App'; //引入App根组件
// 引入相应的组件页面模板
import HomeTpl from "./components/home/HomeTpl";
import otherTpl from "./components/otherTpl";
Vue.config.productionTip = false;
// 引入公共组件,并声明全局组件
import headerTpl from './components/headerTpl'
import footerTpl from './components/footerTpl'
Vue.component('header-v', headerTpl);
Vue.component('footer-v', footerTpl);

//homeAside1"
import homeAside1_RouterTpl1 from "./components/home/homeAside1/asideRouter1"
import homeAside1_RouterTpl2_1 from "./components/home/homeAside1/asideRouter2_1"
import homeAside1_RouterTpl2_2 from "./components/home/homeAside1/asideRouter2_2"
import homeAside1_RouterTpl3 from "./components/home/homeAside1/asideRouter3"
//homeAside2"
import homeAside2_RouterTpl1 from "./components/home/homeAside2/asideRouter1.1"
import homeAside2_RouterTpl2_1 from "./components/home/homeAside2/asideRouter2.1"
import homeAside2_RouterTpl2_2 from "./components/home/homeAside2/asideRouter2.2"
import homeAside2_RouterTpl3_1 from "./components/home/homeAside2/asideRouter3.1"


Vue.use(VueRouter); //初始化路由
//配置路由
const router = new VueRouter({
  mode:'history',
  routes:[
    // '/'是默认加载的home路由
	{   path: '/',
		name: 'homeAside1',
		component: HomeTpl,
		children: [
			{
				path: '/',//设置子路由默认显示的
				component:homeAside1_RouterTpl1
			}, {
				path: 'homeAside1_Router2',
				components: {
					default: homeAside1_RouterTpl2_1,
					helper1: homeAside1_RouterTpl2_2
				}
			},
			{
				path: 'homeAside1_Router3',//设置子路由默认显示的
				component: homeAside1_RouterTpl3
			},
		],
	
	},
	{
		path: '/',
		name: 'homeAside2',
		component: HomeTpl,
			children: [
			  {
				  path: '/',//设置子路由默认显示的
				  component: homeAside2_RouterTpl1
			  }, {
				  path: 'homeAside2_Router2',
				  components: {
					  default: homeAside2_RouterTpl2_1,
					  helper2: homeAside2_RouterTpl2_2
				  }
			  },
			  {
				  path: 'homeAside2_Router3',//设置子路由默认显示的
				  component: homeAside2_RouterTpl3_1
			  },
		]
	},
	{ path: '/other', name: 'OtherComponent', component:otherTpl},
  ]
})
// router.push('/settings/child1');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //将路由挂载到html中
  components: { App },
  template: '<App/>'
})
