<template>
  <div class="categories">
    <h5>{{categoriesMsg}}</h5>
    <!-- <kLine-v></kLine-v> -->
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
    components:{ // 自定义局部组件
        'kLine-v':kLineTpl
    },
    
}
</script>

<style scoped>
.categories{width:100%;;}
</style>
