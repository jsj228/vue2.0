// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App'; //引入App根组件
import router from './newRouters'; //引入newRooters.js
import echarts from "echarts"; //给整个项目添加依赖包
import "./css/common.css" //引入公共css
import "./css/iconfont.css" //引入字体文件


// npm i vue - resource - D
import VueResource from "vue-resource";
Vue.use(VueResource);
Vue.http.options.emulateHTTP=true;//兼容老的浏览器IE6


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //将路由挂载到html中
  components: { App },
  template: '<App/>',
  http: {//配置http  
    // root : '/assets/',
    // root: './static',//指定资源根目录
    headers: {
      Authorization: '',
      "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  }
})
// 设置路由中默认加载home
router.push('/Home');

