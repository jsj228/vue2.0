import Vue from 'vue';
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        products: [
            { name: '鼠标', price: 20 },
            { name: '键盘', price: 40 },
        ]
    },
    getters: { //添加getters --->计算属性  computed
        arrData: state => {
            return state.products;
        },
        dataLen: (state, getters) => {
            return getters.arrData.length;
        },
        getterFun: (state) => (price) => {
            console.log(state.products.find(product => product.price === price));
        }

    }
});
export default store;