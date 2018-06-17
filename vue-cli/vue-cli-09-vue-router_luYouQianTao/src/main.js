import Vue from 'vue' //引入vue模块
import Router from 'vue-router' //引入vue-router模块
import App from './App' //引入App根组件
import Other from './components/Other';

import Home from './components/Home';
import child1 from './components/child1';
import child2 from './components/child2';
Vue.config.productionTip = false

Vue.use(Router);
// 配置路由
const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/Other', name: 'Other', component: Other }, //配置Footer路由
    {
      path: '/Home/:id', component: Home,
      children: [
        {
          // 当 /Home/:id/child1 匹配成功，
          // child1 会被渲染在 Home 的 <router-view> 中
          path: '',//默认加载的子路由
          component: child1
        },
        {
          // 当 /Home/:id/child2 匹配成功
          // child2 会被渲染在 Home 的 <router-view> 中
          path: 'posts',
          component: child2
        }
      ]
    }
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
