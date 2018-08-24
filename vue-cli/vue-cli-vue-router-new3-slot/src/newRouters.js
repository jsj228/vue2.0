// 将路由部分抽取出来，方便以后维护
import Vue from 'vue';
import VueRouter from 'vue-router';//引入vue-router



// 引入相应的组件页面模板
import mainTpl from "./components/main/mainTpl";
    import HomeTpl from "./components/main/HomeTpl";
    import categoriesTpl from "./components/main/categoriesTpl";
    import shoppingCartTpl from "./components/main/shoppingCartTpl";
    import meTpl from "./components/main/meTpl";
// 公用的模板组件
import otherTpl from "./components/otherTpl";
import userLoginTpl from './components/common/userLoginTpl';
import userRegisterTpl from './components/common/userRegisterTpl';
import page404Tpl from './components/common/page404Tpl';//404页面
// 一些子页面
import bannerLink from "./components/main/Home/bannerLink"

Vue.config.productionTip = false;
// 引入公共组件,并注册全局组件
import headerTpl from './components/common/headerTpl';
import footerTpl from './components/common/footerTpl';
import returnPageTpl from './components/common/returnPageTpl';
Vue.component('header-v', headerTpl);
Vue.component('footer-v', footerTpl);
Vue.component('returnPage-v', returnPageTpl);

Vue.use(VueRouter); //初始化路由
//配置路由
export default new VueRouter({
    // 修改默认激活的class
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        // '/'是默认加载的home路由
        {
            path: '/',
            name: 'main', 
            component:mainTpl,
            	children: [
                    { path:'home', component:HomeTpl, name:'Home',
                        children: [{ path: 'bannerLink', component: bannerLink, name:'bannerLink'}]
                    },
                    { path:'categories',component:categoriesTpl,name:'Categories'},
                    { path:'shoppingCart',component:shoppingCartTpl,name:'shoppingCart'},
            		{path:'me',component:meTpl,name:'Me'},
            	],
        },
        { path: '/other', name: 'Other', component: otherTpl },
        { path: '/userLogin', name: 'userLogin', component: userLoginTpl },
        { path: '/userRegister', name: 'userRegister', component: userRegisterTpl },
        { path: '*', component: page404Tpl},//这个是在中webpack.dev.conf没有配置historyApiFallback的情况下设有的
    ]
})
