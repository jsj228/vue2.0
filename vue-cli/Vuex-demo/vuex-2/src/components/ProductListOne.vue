<template>
    <div id="product-list-one">
        <h2>Product List One 
            <button @click="minusPrice">减少价格</button>    
            <button @click="minusPriceAsync">异步减少价格</button>    
        </h2>
        {{products}}
        <ul>
            <!-- <li v-for="product in products">
                <span class="name">{{ product.name }}</span>
                <span class="price">${{ product.price }}</span>
            </li> -->
        </ul>
    </div>
</template>

<script>
 import { mapState, mapActions } from 'vuex';
export default {
    // props: ['products'],
    // data () {
    //     return {
    //          products : state => state.products.all
    //         // products:this.$store.modules.a.state.products //获取store中state的数据
    //     }
    // },

    computed: mapState({ products: state =>a.state.products}),
    methods: mapActions('cart', ['addProductToCart']),
    created () {this.$store.dispatch('products/getAllProducts')}
        
    
    
    // methods:{
    //     minusPrice() {
    //         // this.$store.modules.a.state.a.commit('minusPrice', 2); //提交`minusPrice,payload为2
    //     },
    //     minusPriceAsync() {
    //         // this.$store.state.a.dispatch('minusPriceAsync', 5); //分发actions中的minusPriceAsync这个异步函数
    //     }
    // }

}
</script>


























<style scoped>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>
