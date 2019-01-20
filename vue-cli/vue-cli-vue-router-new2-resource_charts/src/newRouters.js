// 将路由部分抽取出来，方便以后维护

import Vue from 'vue';//①引入vue核心模块
import VueRouter from 'vue-router';//引入vue-router模块

// 引入相应的组件页面模板
import mainTpl from "./components/mainTpl";
    import HomeTpl from "./components/main/Home/HomeTpl";
    import tradeTpl from "./components/main/trade/tradeTpl";
    import friendTpl from "./components/main/friend/friendTpl";
    import meTpl from "./components/main/me/meTpl";
    import c2cTpl from "./components/main/c2c/c2cTpl";
// 公用的模板组件
import otherTpl from "./components/otherTpl";
import userLoginTpl from './components/common/userLoginTpl';
import userRegisterTpl from './components/common/userRegisterTpl';
import page404Tpl from './components/common/page404Tpl';//404页面
// 一些子页面
import bannerLink from "./components/main/Home/bannerLink"
import buyTpl from "./components/main/trade/buyTpl"
import sellTpl from "./components/main/trade/sellTpl"

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
            	children: [ //主要导航路由
                    { path:'home',component:HomeTpl, name:'Home'},
                    { path:'trade',component:tradeTpl,name:'trade',
                        // children: [{ path: '/other', name: 'Other', component: otherTpl }],
                    },
                    { path:'friend',component:friendTpl,name:'friend'},
            		{path:'me',component:meTpl,name:'Me'},
                    {path:'c2c',component:c2cTpl,name:'c2c'},
                    { path: '/buyTpl', name: 'buy', component: buyTpl },
                    { path: '/sellTpl', name: 'sell', component: sellTpl }
            	],
        },
        //公用路由组件
        // { path: '/bannerLink',name: 'bannerLink', component:  bannerLink },
        // { path: '/other', name: 'Other', component: otherTpl },
        { path: '/userLogin', name: 'userLogin', component: userLoginTpl },
        { path: '/userRegister', name: 'userRegister', component: userRegisterTpl },
        { path: '*', component: page404Tpl},//这个是在中webpack.dev.conf没有配置historyApiFallback的情况下设有的
    ]
})
