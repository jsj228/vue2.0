<template>
    <div id="product-list-one">
        <h2>Product List One 
            <button @click="minusPrice">减少价格</button>    
            <button @click="minusPriceAsync">异步减少价格</button>    
        </h2>
        {{A_products}}
        <ul>
            <li v-for="(va,i) in A_products" :key="i">
                <span class="name">{{ va.name }}</span>
                <span class="price">${{ va.price }}</span>
            </li>
        </ul>
        {{B_products}}
        <ul>
            <li v-for="(va,i) in B_products" :key="i">
                <span class="name">{{ va.name }}</span>
                <span class="price">${{ va.price }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
 import { mapState, mapActions } from 'vuex';
export default {
    // props: ['products'],
    data () {
        onsole.log()
        return {
            B_products :this.$store.state.moduleB._products
        }
    },
    // computed:{
    //     A_products:function(){
    //         console.log(this.$store)
    //         return this.$store.state.moduleA.products;
    //     }
    // },
    computed:mapState({ 
        A_products:state=>state.moduleA.products,
    }),
    methods:{
        minusPrice() {
            console.log(this.$store)
            this.$store.commit('minusPrice', 2); //提交`minusPrice,payload为2
        },
        minusPriceAsync() {
            this.$store.dispatch('minusPriceAsync', 5); //分发actions中的minusPriceAsync这个异步函数
        }
    }

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
