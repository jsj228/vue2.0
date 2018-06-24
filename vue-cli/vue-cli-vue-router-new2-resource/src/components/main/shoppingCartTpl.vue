<template>
  <div class="shoppingCart">
    <h1>{{shoppingCart}}</h1>
    <hr>

  </div>
</template>
<script>
//引入局部组件模板
export default {
    name: 'shoppingCartTpl',
    data:()=>{
      return {
          shoppingCart:'这里是shoppingCartTpl局部组件模块'
      }
    }
}
</script>
<style scoped>
.shoppingCart{width:100%;height:300px;border:5px dashed #ddd;
display:flex;
align-items: center;
justify-content: center;}
</style>
