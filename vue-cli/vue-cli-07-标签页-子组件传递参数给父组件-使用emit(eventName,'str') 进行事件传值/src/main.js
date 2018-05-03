// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'  //引入vue核心模块
import App from './App'  //引入app跟组件


Vue.config.productionTip = false
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
