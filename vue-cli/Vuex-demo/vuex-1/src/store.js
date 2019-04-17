import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


const moduleA ={
  state: {    //①state  publick  dataStatus数据
    products: [
      { name: '鼠标A', price: 20 },
      { name: '键盘A', price: 40 },
      { name: '耳机A', price: 60 },
      { name: '显示屏A', price: 80 }
    ]
  },
  getters:{ //②添加getters --->类似计算属性  computed
    saleProducts: (state) => {
      let saleProducts = state.products.map(product => {
        return {
          name: product.name,
          price: product.price / 2
        }
      })
      return saleProducts;
    }
  },
  mutations: { //3、添加mutations---> 类似 methods写方法 参数:state指的是moduleA.state  payload为自定义的参数    注意：不能包含异步操作
    minusPrice(state, payload) {
      let newPrice = state.products.forEach(product => {
        product.price -= payload
      })
    }
  },
  actions:{ //4、添加actions 类似mutations，但是actions可以包含异步操作；
    //actions提交的是mutations而不是直接变更状态
    // actions中可以包含异步操作, mutations中绝对不允许出现异步
    // actions中的回调函数的第一个参数是context, 是一个与store实例具有相同属性和方法的对象
    minusPriceAsync(context, payload) {
      setTimeout(() => {
        context.commit('minusPrice', payload); //context提交 
      }, 2000)
    }
  }
};
export default new Vuex.Store(moduleA);



