import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    a: moduleA,
    // b: moduleB,
  },
});

var moduleA ={
  state:{    //publick  dataStatus数据
    products: [
      { name: '鼠标A', price: 20 },
      { name: '键盘A', price: 40 },
      { name: '耳机A', price: 60 },
      { name: '显示屏A', price: 80 }
    ]
  },
  getters:{ //添加getters --->计算属性  computed
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
  mutations:{ //添加mutations---> methods   payload为自定义的参数    注意：不能包含异步操作
    minusPrice(state, payload) {
      let newPrice = state.products.forEach(product => {
        product.price -= payload
      })
    }
  },
  actions:{ //添加actions   类似mutations，但是actions可以包含异步操作；
    minusPriceAsync(context, payload) {
      setTimeout(() => {
        context.commit('minusPrice', payload); //context提交
      }, 2000)
    }
  }
};
var moduleB = {
  state: {    //publick  dataStatus数据
    products: [
      { name: '鼠标B', price: 20 },
      { name: '键盘B', price: 40 },
      { name: '耳机B', price: 60 },
      { name: '显示屏B', price: 80 }
    ]
  },
  getters:{ //添加getters --->计算属性
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
  mutations:{ //添加mutations---> methods   payload为自定义的参数    注意：不能包含异步操作
    minusPrice(state, payload) {
      let newPrice = state.products.forEach(product => {
        product.price -= payload
      })
    }
  },
  actions:{ //添加actions   类似mutations，但是actions可以包含异步操作；
    minusPriceAsync(context, payload) {
      setTimeout(() => {
        context.commit('minusPrice', payload); //context提交
      }, 2000)
    }
  }
}


