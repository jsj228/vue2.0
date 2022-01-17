<template>
    <div id="product-list-two">
        <h2>Product List Two   </h2>
        
        {{$store.state.products}}<br>
        {{$store.getters.saleProducts}}
        <ul>
            <li v-for="product in products">
                <span class="name">{{ product.name }}</span>
                <span class="price">${{ product.price }}</span>
              
            </li>
        </ul>
        {{products2}}<br>
        {{products3}}<br>
        {{products4}}<br>
    </div>
</template>
<script>

import {mapState} from 'vuex'
//  count:state=>state.count
export default {
    // props: ['products'],
    created() {
        console.log('000',);
    },
    data () {
        return {
            //使用getters.saleProducts中的方法
            products: this.$store.getters.saleProducts
        }
    },
    computed: mapState({
        products2:state=>state.products,
        products3:state=>state.products,
        products4:state=>state.products
    }),
    computed:{
        // ...mapState({
        //     products3:state=>state.products,
        //     products4:state=>state.products
        // }),
        // ...mapState({
        //     indicatorPosition: state => state.PlayService.currentTime / state.PlayService.duration * 100,
        //     playing: state => state.PlayService.playing,
        //     song: state => state.PlayService.song
        // })
    }
   
}
</script>

<style scoped>
#product-list-two{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-two ul{
    padding: 0;
    list-style-type: none;
}
#product-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
</style>
