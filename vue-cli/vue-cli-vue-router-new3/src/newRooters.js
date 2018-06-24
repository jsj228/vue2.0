// 将路由部分抽取出来，方便以后维护
import Vue from 'vue';
import VueRouter from 'vue-router';//引入vue-router
// 引入相应的组件页面模板
import HomeTpl from "./components/home/HomeTpl";
import otherTpl from "./components/otherTpl";
Vue.config.productionTip = false;
// 引入公共组件,并注册全局组件
import headerTpl from './components/common/headerTpl'
import footerTpl from './components/common/footerTpl'
Vue.component('header-v', headerTpl);
Vue.component('footer-v', footerTpl);

//homeAside1"
import homeAside1_RouterTpl1 from "./components/home/homeAside1/asideRouter1"
import homeAside1_RouterTpl2_1 from "./components/home/homeAside1/asideRouter2_1"
import homeAside1_RouterTpl2_2 from "./components/home/homeAside1/asideRouter2_2"
import homeAside1_RouterTpl3 from "./components/home/homeAside1/asideRouter3"
//homeAside2"
import homeAside2_RouterTpl1 from "./components/home/homeAside2/asideRouter1.1"
import homeAside2_RouterTpl2_1 from "./components/home/homeAside2/asideRouter2.1"
import homeAside2_RouterTpl2_2 from "./components/home/homeAside2/asideRouter2.2"
import homeAside2_RouterTpl3_1 from "./components/home/homeAside2/asideRouter3.1"


Vue.use(VueRouter); //初始化路由
//配置路由
export default new VueRouter({
    mode: 'history',
    routes: [
        // '/'是默认加载的home路由
        {
            path: '/',
            name: 'Home', 
            component: HomeTpl,
            	children: [
            		{path: '/',component:homeAside1_RouterTpl1},
            		{path: 'homeAside1_Router2',
            			components: {default: homeAside1_RouterTpl2_1,helper1: homeAside1_RouterTpl2_2}
            		},
            		{path: 'homeAside1_Router3',component: homeAside1_RouterTpl3},
            	],
        },
        { path: '/other', name: 'Other', component: otherTpl },
    ]
})
// router.push('/settings/child1');
