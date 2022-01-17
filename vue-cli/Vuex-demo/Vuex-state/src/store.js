import Vue from 'vue';
import Vuex from "vuex";
Vue.use( Vuex );
const store = new Vuex.Store({
  state:{ 
    products: [
      {name: '鼠标', price: 20},
      {name: '键盘', price: 40},
    ]
  }
});
export default store;
