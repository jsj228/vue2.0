<template>
  <div class="shoppingCart">
    <h5>{{shoppingCart}}</h5>
    <h3>v-charts</h3>
    <v-Line></v-Line>
  </div>
</template>
<script>
//引入局部组件模板
import v_kLineTpl from "../../common/v-chartsTpl";

export default {
    name: 'shoppingCartTpl',
    data:()=>{
      return {
          shoppingCart:'这里是shoppingCartTpl局部组件模块'
      }
    },
    components:{ // 自定义局部组件
        'v-Line':v_kLineTpl
    },
}
    

</script>
<style scoped>
.shoppingCart{width:100%;border:5px dashed #ddd;
}</style>
