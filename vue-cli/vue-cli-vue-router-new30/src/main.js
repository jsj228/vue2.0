// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App'; //引入App根组件
import router from './newRooters'; //引入newRooters.js

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //将路由挂载到html中
  components: { App },
  template: '<App/>'
})
