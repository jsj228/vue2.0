<template>
  <div class="categories">
    <h1>
        <span  @click="()=>{this.ifSellBuy=!this.ifSellBuy}" :class={active:ifSellBuy}>买入</span>
        <span  @click="()=>{this.ifSellBuy=!this.ifSellBuy}" :class={active:!ifSellBuy}>卖出</span>
    </h1>
    <img :src="'/static/img/'+marketSelected+'.png'" style="width:10px;height:10px;vertical-align:middle"/>    
    <select  id="tradeMarket" v-model="marketSelected">
        <option v-for="item in marketList" :value="item.name.replace(/(\_cny)/,'')">
            <span>
                <b v-text="item.name.replace(/(\_cny)/,'')"></b><br>
                <s v-text="parseFloat(item.volume)"></s>
            </span>
            <b  v-text="parseFloat(item.new_price)"></b>
            <span class="bgRed" v-text="parseFloat(item.change)"></span>
        </option>
    </select>
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
import headerTpl from "./tradeHeader";
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
        'header-v':headerTpl,
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
