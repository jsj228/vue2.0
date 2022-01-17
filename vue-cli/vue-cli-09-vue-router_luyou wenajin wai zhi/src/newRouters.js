   
import Vue from 'vue';//①引入vue核心模块
import VueRouter from 'vue-router';//引入vue-router模块
Vue.use(VueRouter);

import HelloWorld from './components/HelloWorld';
import Home from './components/Home';
// 配置路由
Vue.config.productionTip = false;
export default new VueRouter({
  // 修改默认激活的class
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },//默认加载的组件
    { path: '/HelloWorld', name: 'HelloWorld', component: HelloWorld },
  ]
})

// // ①引入路由模块
// // ->②引入相应的模块和路由
// // ->③定义好要使用的组件
// // ->④引入并挂载到router中
// // -> 在App.vue中使用 S< router - view />
