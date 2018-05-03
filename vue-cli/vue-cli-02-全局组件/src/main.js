// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Users from './components/UsersComponent'  //① 全局组件模板Users来自哪里
Vue.component("users-tage", Users) //② 注册全局组件users-tage 并在 App.vue中引用

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', //index.html下的挂点
  template: '<App/>',
  components: { App }
})

//index.html --->main.js---->App.vue.js
