import Vue from 'vue' //引入vue模块
import Router from 'vue-router' //引入vue-router模块
import App from './App' //引入App根组件
import Other from './components/Other';

import Home from './components/Home';
import childTpl1 from './components/child1';
import childTpl2 from './components/child2';
Vue.config.productionTip = false

Vue.use(Router);
// 配置路由
const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { 
      path: '/Other',
      name: 'Other',
      component: Other

    }, //配置Footer路由
    {
      path: '/Home/:page', component: Home,
      children: [
        {
          // 当 /Home/:page/childTpl1 匹配成功，
          // childTpl1 会被渲染在 Home 的 <router-view> 中
          path: '',//默认加载的子路由
          component: childTpl1,
          name: "childTpl1111",
        },
        {
          // 当 /Home/:page/childTpl2 匹配成功
          // childTpl2 会被渲染在 Home 的 <router-view> 中
          path: '任意写',
          component: childTpl2, 
          name: "childTpl222",
        
        }
      ]
    }
  ],

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


