import Vue from 'vue'  //引入vue模块
import Router from 'vue-router' //引入vue-router配置文件
Vue.use(Router) //定义路由vue-router模块   

import HelloWorld from '@/components/HelloWorld'  //引入firstRouter组件
import firstRouter from '@/components/firstRouterTpl'  //引入firstRouter组件

// 配置路由
const routes = [
  {
    path: '/', //当前路径
    // name: 'firstRouter', 
    // component: firstRouter,//使用firstRouter组件
    // component: HelloWorld,//使用helloWorld组件
    redirect:'/firstRouterTpl',
  }
];

export default new Router({  //定义路由并导出路由
  routes,
});
