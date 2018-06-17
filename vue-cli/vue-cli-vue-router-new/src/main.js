// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' //引入vue模块
import Router from 'vue-router' //引入vue-router模块
import App from './App' //引入App根组件
Vue.config.productionTip = false
Vue.use(Router);


const UserSettingsNav = {
  template: `<div class="us__nav">
  <router-link to="/settings/child1">child1111</router-link>
  <br>
  <router-link to="/settings/child2">child222</router-link>
</div>`
};
const UserSettings = {
  template: `<div class="us">
              <h2>Parent Box</h2>
              <UserSettingsNav/>
              <router-view class ="us__content"/>
              <router-view name="helper" class="us__content us__content--helper"/>
            </div>`,
  components: { UserSettingsNav }
}
const childTPL1 = {
  template: `<div><h3>childTPL111 box</h3></div> `
}

const childTPL2 = {
  template: `<div> <h3>childTPL222  box</h3> </div>`
}
const childTPL2_siblings = {
  template: `<div>	<h3>childTPL2_siblings box</h3> </div>  `
}
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/settings',
      // You could also have named views at tho top
      component: UserSettings,
      children: [
        {
          path: 'child1',
          component: childTPL1
        }, {
          path: 'child2',
          components: {
            default: childTPL2,
            helper: childTPL2_siblings
          } 
         }
      ]
    }
  ]
});

router.push('/settings/child1');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
