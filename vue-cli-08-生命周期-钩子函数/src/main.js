// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' 


Vue.config.productionTip = false;
import headers from './components/headerComponent';
Vue.component("header-tage",headers) ;
import footer from './components/footerComponent' ;
Vue.component("footer-tage",footer) ;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  beforeCreate: function () {
    console.log("%c%s","color:#00f",'beforeCreate 创建前状态===============》');
    console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
    console.log("%c%s", "color:red", "data   : " + this.$data); //undefined 
    console.log("%c%s", "color:red", "message: " + this.message)
  },
  created: function () {
    console.log("%c%s", "color:#00f",'created 创建完毕状态===============》');
    console.log("%c%s", "color:#f00", "el     : " + this.$el); //undefined
    console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化 
    console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
  },
  beforeMount: function () {
    console.log("%c%s","color:#00f",'beforeMount 挂载前---状态===============》');
    console.log("%c%s", "color:red", "el     : " + (this.$el)); //已被初始化
    console.log(this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化  
    console.log("%c%s", "color:red", "message: " + this.message); //已被初始化  
  },
  mounted: function () {//mounted为vue2.0中新的生命周期函数
    console.log("%c%s","color:#00f",'mounted 挂载结束后状态===============》');
    console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
    console.log(this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:red", "message: " + this.message); //已被初始化 
  },
  beforeUpdate: function () {
    console.log("%c%s","color:#00f",'beforeUpdate 更新前状态===============》');
    console.log("%c%s", "color:red", "el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
    console.log("%c%s", "color:red", "message: " + this.message);
  },
  updated: function () {
    console.log("%c%s","color:#00f",'updated 更新完成状态===============》');
    console.log("%c%s", "color:red", "el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
    console.log("%c%s", "color:red", "message: " + this.message);
  },
  beforeDestroy: function () {
    console.log("%c%s","color:#00f",'beforeDestroy 销毁前状态===============》');
    console.log("%c%s", "color:red", "el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
    console.log("%c%s", "color:red", "message: " + this.message);
  },
  destroyed: function () {
    console.log("%c%s", "color:#00f",'destroyed 销毁完成状态===============》');
    console.log("%c%s", "color:red", "el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
    console.log("%c%s", "color:red", "message: " + this.message)
  }
})

//index.html --->main.js---->App.vue.js
