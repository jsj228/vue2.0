// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' 


Vue.config.productionTip = false
import headers from './components/headerComponent'  //①headers模板来自哪里
Vue.component("header-tage", headers)  //②使用headers模板，注册全局组件headers-tage

import footer from './components/footerComponent'   //Ⅰ，footer模板来自哪里
Vue.component("footer-tage", footer)  //Ⅱ使用footer模板，注册全局组件footer-tage

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

//index.html --->main.js---->App.vue.js
