export default  {
  state: {    //publick  dataStatus数据
    _products: [
      { name: '鼠标B', price: 20 },
      { name: '键盘B', price: 40 },
      { name: '耳机B', price: 60 },
      { name: '显示屏B', price: 80 }
    ]
  },
  // getters:{ //添加getters --->计算属性
  //   _saleProducts: (state) => {
  //     let saleProducts = state.products.map(product => {
  //       return {
  //         name: product.name,
  //         price: product.price / 2
  //       }
  //     })
  //     return saleProducts;
  //   }
  // },
  // mutations:{ //添加mutations---> methods   payload为自定义的参数    注意：不能包含异步操作
  //   _minusPrice(state, payload) {
  //     let newPrice = state.products.forEach(product => {
  //       product.price -= payload
  //     })
  //   }
  // },
  // actions:{ //添加actions   类似mutations，但是actions可以包含异步操作；
  //   _minusPriceAsync(context, payload) {
  //     setTimeout(() => {
  //       context.commit('minusPrice', payload); //context提交
  //     }, 2000)
  //   }
  // }
}