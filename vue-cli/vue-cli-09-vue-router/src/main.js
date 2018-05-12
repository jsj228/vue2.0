// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' //引入vue模块
import App from './App' //引入App根组件
import router from './router/routerConfig' //引入路由的配置文件./router/routerConfig.js

Vue.config.productionTip = false

// // 实例化vue  --->导出路由：
new Vue({
  el: '#app',
  router,      //将路由挂载到html中
  components: { App },
  template: '<App/>' /*将组件挂载到html页面上*/
})


// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// });
// ①在main.js中引入路由模块
// ->②在router > routerConfig.js中引入相应的模块和路由
// ->③定义好要使用的组件
// ->④在router > routerConfig.js中引入并挂载到router中
// -> 在App.vue中使用 < router - view />
