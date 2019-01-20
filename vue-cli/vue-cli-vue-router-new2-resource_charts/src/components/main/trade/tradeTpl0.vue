<template>
  <div class="categories">
    <h1>
        <span  @click="()=>{this.ifSellBuy=!this.ifSellBuy}" :class={active:ifSellBuy}>买入</span>
        <span  @click="()=>{this.ifSellBuy=!this.ifSellBuy}" :class={active:!ifSellBuy}>卖出</span>
    </h1>
   <tradeMarket-v :marketSd="marketSelected" @childMarket="getChildMarket"></tradeMarket-v>
   
    <buy-v v-if="ifSellBuy"></buy-v>
    <sell-v v-if="!ifSellBuy"></sell-v>
    
    <p>{{marketSelected}}</p>

    <!-- 子组件传过来的事件childMarket -->
    <Echarts-v :marketSd="marketSelected" @childMarket="getChildMarket"></Echarts-v>
  </div>
</template>
<script>
//引入局部组件模板
import e_charts from "../../common/e-chartsTpl";
import tradeMarketTpl from "./tradeMarket";
import buyTpl from "./buyTpl";
import sellTpl from "./sellTpl";

export default {
    name: 'categoriesName',
    data:()=>{
        return {
            categoriesMsg:'这里是categoriesTpl局部组件模块 E-charts',
            ifSellBuy:true,
            marketSelected:'wcg',
            marketList:[],
        }
    },
    components:{ // 自定义局部组件
        'Echarts-v':e_charts,
        'tradeMarket-v':tradeMarketTpl,
        'buy-v':buyTpl,
        'sell-v':sellTpl,
    },
    created() {
        this.marketSelected=this.GetQueryString('name')?this.GetQueryString('name'):'wcg';
        
        if(window.localStorage){
            this.marketList=JSON.parse(window.localStorage.marketData);
        }else{
            alert("浏览器不支持localstorage");
            return false;
        }
    },
    mounted(){
    },
    methods:{
        //获取请求参数
        GetQueryString(name){
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return null;
        },
        getChildMarket(childMarket){
            this.marketSelected = childMarket;
            console.log(msg)
        },
    }
}
</script>

<style scoped>
.categories{width:100%;;}
.active{border-bottom:2px solid #e3493c;}
</style>
