<template>
  <div id="app">  
      <!-- v-bind:products="products"  使用vueX 就不需要进行属性传值了 -->
      <product-list-one></product-list-one>
      <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'

export default {
    name: 'app',
    components: {
        'product-list-one': ProductListOne,
        'product-list-two': ProductListTwo
    },
    data () {
        return {
            // products: [
            //     {name: '鼠标', price: 20},
            //     {name: '键盘', price: 40},
            //     {name: '耳机', price: 60},
            //     {name: '显示屏', price: 80}
            // ]
        }
    }
}




</script>












<style>
body{
    font-family: Ubuntu;
    color: #555;
}
</style>
