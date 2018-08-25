<template>
  <div class="categories">
    <h1>{{categoriesMsg}}</h1>
    <hr>

  </div>
</template>
<script>



//引入局部组件模板
export default {
    name: 'categoriesName',
    data:()=>{
            return {
                categoriesMsg:'这里是categoriesTpl局部组件模块'
            }
    }
    
}

</script>

<style scoped>
.categories{width:100%;height:300px;border:5px dashed #ddd;
display:flex;
align-items: center;
justify-content: center;}
</style>
