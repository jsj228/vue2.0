<template>
  <div class="categories">
   <kLIne-v></kLIne-v>
    <!--图表内容区域，必须给 ECharts 容器本身指定高度。不然它会使用默认高度-->
  </div>
</template>
<script>
//引入局部组件模板
import kLIneTpl from "../common/klineTpl";//k线组件

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
    'kLIne-v':kLIneTpl,
  },
}
</script>

<style scoped>
</style>
