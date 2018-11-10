<template>
    <h1 class="tradeHeader">
        <h1><img :src="'/static/img/'+marketSelected+'.png'" style="width:20px;height:20px;vertical-align:middle"/>{{marketSelected}}</h1>
        
        <select  id="tradeMarket" v-model="marketSelected" @change="marketChange" >
            <option v-for="item in marketList" :value="item.name.replace(/(\_cny)/,'')">
                <span>
                    <b v-text="item.name.replace(/(\_cny)/,'')"></b><br>
                    <s v-text="parseFloat(item.volume)"></s>
                </span>
                <b  v-text="parseFloat(item.new_price)"></b>
                <span class="bgRed" v-text="parseFloat(item.change)"></span>
            </option>
        </select>
        
    </h1>
</template>
<script>
export default {
    name: 'tradeHeader',
    data:()=>{
        return {
            marketSelected:'wcg',
            marketList:[],
        }
    },
    created() {
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
        marketChange(){
            //子组件定义事件向父组件传值
            this.$emit('childMarket',this.marketSelected);
        }
    }
}
</script>

<style scoped>
.categories{width:100%;;}
</style>
