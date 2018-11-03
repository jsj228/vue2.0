<template>
  <div class="categories">
    <h5>{{categoriesMsg}}</h5>
    <Echarts-v :lineDataP="lineData"></Echarts-v>
  </div>
</template>
<script>
//引入局部组件模板
import e_charts from "../common/e-chartsTpl";
export default {
    name: 'categoriesName',
    data:()=>{
        return {
            categoriesMsg:'这里是categoriesTpl局部组件模块 E-charts',
            lineData:[],
        }
    },
    components:{ // 自定义局部组件
        'Echarts-v':e_charts
    },
    created() {
        // LineDataFun();
    },
    methods:{
      
    }
}
</script>

<style scoped>
.categories{width:100%;;}
</style>
