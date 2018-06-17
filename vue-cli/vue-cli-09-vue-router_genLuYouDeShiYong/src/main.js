import Vue from 'vue' //引入vue模块
import Router from 'vue-router' //引入vue-router模块
import App from './App' //引入App根组件
import Home from './components/Home';
import Users from './components/Users';
import Other from './components/Other';
import HelloWorld from './components/HelloWorld';

Vue.config.productionTip = false

Vue.use(Router);
// 配置路由
const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
  // 在main.js中配置跟路由可以在任何中地方使用
    { path: '/', name: 'home', component: Home },//默认加载的组件
    { path: '/Other', name: 'Other', component: Other }, //配置Other路由
    
    { path: '/HelloWorld', name: 'HelloWorld', component: HelloWorld },
    { path: '/Users', name: 'Users', component: Users }, //配置Users路由
  ]
})



new Vue({
  el: '#app',
  router,      //将路由挂载到html中
  template: '<App/>',/*将组件挂载到html页面上*/
  components: { App },
})

// // new Vue({
// //   el: '#app',
// //   router,
// //   render: h => h(App)
// // });

// // ①在main.js中引入路由模块
// // ->②在router > routerConfig.js中引入相应的模块和路由
// // ->③定义好要使用的组件
// // ->④在router > routerConfig.js中引入并挂载到router中
// // -> 在App.vue中使用 < router - view />
