<template>
  <div class="categories">
    <!--图表内容区域，必须给 ECharts 容器本身指定高度。不然它会使用默认高度-->
    <h5>{{categoriesMsg}}</h5>
    <kLine-v></kLine-v>
  </div>
</template>
<script>
//引入局部组件模板
import kLineTpl from "../common/e-chartsTpl";
export default {
    name: 'categoriesName',
    data:()=>{
        return {
            categoriesMsg:'这里是categoriesTpl局部组件模块'
        }
    },
    mounted () {
    },
    beforeDestroy () {
    },
    methods: {
    },
    components:{ // 自定义局部组件
    'kLIne-v':kLineTpl,
  },
}
</script>

<style scoped>
.categories{width:100%;border:5px dashed #ddd;
}
</style>
