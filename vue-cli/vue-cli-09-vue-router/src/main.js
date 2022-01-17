import Vue from 'vue' //引入vue模块
import App from './App' //引入App根组件

Vue.config.productionTip = false
import router from './newRouters'; //引入newRooters.js
// import "./css/common.css" //引入公共css
// import "./css/iconfont.css" //引入字体文件

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
// 设置路由中默认加载home
// router.push('/Home');

