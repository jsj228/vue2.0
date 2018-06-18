<template>
  <div class="homeAside1">
    <!-- 在父路由组件模板中引用子路由child1和child2 -->
    <div class="HomeAside">
        <h1>这里是homeAside1组件模块</h1>
        <aside>
            <router-link to="/">child11</router-link>
            <router-link to="/homeAside1_Router2">child2</router-link>
            <router-link to="/homeAside1_Router3">child3</router-link>
        </aside>
      <router-view class ="child1111111Box"/>
      <router-view name="homeAside1" class="child222222Box"/>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import VueRouter from 'vue-router';//引入vue-router
import App from '../../../App'; //引入App根组件
// //homeAside1"
import homeAside1_RouterTpl1 from "./asideRouter1"
import homeAside1_RouterTpl2_1 from "./asideRouter2_1"
import homeAside1_RouterTpl2_2 from "./asideRouter2_2"
import homeAside1_RouterTpl3 from "./asideRouter3"
Vue.config.productionTip = false;
// 
Vue.use(VueRouter); //初始化路由
//配置路由
new VueRouter({
  mode:'history',
  routes:[
    // '/'是默认加载的home路由
	{   path: '/',
		name: 'homeAside1',
		// component: HomeTpl,
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
  ]
})


export default {
  name: 'Home',
  data:()=>{
    return {
      msg:'这里是Home组件模板'
      
    }
  },

}






</script>
<style scoped>
  .HomeAside{overflow:hidden;margin:20px 0;border:5px solid #fd0;padding:10px}
  aside{float:left;width:20%;background:khaki;}
  aside>a{display:block;}
  .asideRouter{float:right;width:80%;}
</style>
