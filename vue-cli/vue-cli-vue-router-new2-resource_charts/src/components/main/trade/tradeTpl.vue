<template>
  <div class="categories">
      
    <Echarts-v :marketSd="marketSelected"></Echarts-v>
  </div>
</template>
<script>
//引入局部组件模板
import e_charts from "../../common/e-chartsTpl";
export default {
    name: 'categoriesName',
    data:()=>{
        return {
            categoriesMsg:'这里是categoriesTpl局部组件模块 E-charts',
            marketSelected:'',
        }
    },
    components:{ // 自定义局部组件
        'Echarts-v':e_charts
    },
    created() {
        this.marketSelected=this.GetQueryString('name')?this.GetQueryString('name'):'wcg';
    },
    mounted(){
    },
    methods:{
        //获取请求参数
        GetQueryString(name){
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return null;
        }
    }
}
</script>

<style scoped>
.categories{width:100%;;}
</style>
