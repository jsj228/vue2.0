/**
 * Created by sioxa on 2016/12/25 0025.
 */
 import Vue from 'vue'
 import Vuex from 'vuex'
 
 import moduleA from './moduleA'
 import moduleB from './moduleB'
 
 Vue.use(Vuex)
 
 export default new Vuex.Store({
   modules: {
    moduleA,
    moduleB
   }
 })
 
 