<template>
    <h1 class="tradeHeader">
        <span>买入</span>
        <span>卖出</span>
    </h1>
    
</template>
<script>
export default {
    name: 'tradeHeader',
    data:()=>{
        return {
            categoriesMsg:'这里是tradeHeader局部组件模块',
            marketSelected:'',
            marketList:[],
        }
    },
    
    created() {
    },
    mounted(){
    },
    methods:{
    }
}
</script>

<style scoped>
.categories{width:100%;;}
</style>
