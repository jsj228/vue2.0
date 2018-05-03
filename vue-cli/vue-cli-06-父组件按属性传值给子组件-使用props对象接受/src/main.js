// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' 


Vue.config.productionTip = false

import headers from './components/headerComponent' 
Vue.component("header-tage",headers) 

import footer from './components/footerComponent' 
Vue.component("footer-tage",footer) 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

//index.html --->main.js---->App.vue.js
