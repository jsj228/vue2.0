<template>
  <div class="bannerBox">
    <h1>{{bannerText}}</h1>
    <hr>

  </div>
</template>
<script>



//引入局部组件模板
export default {
    name: 'banner',
    data:()=>{
            return {
                bannerText:'这里是banner局部组件模块'
            }
    }
    
}

</script>

<style scoped>
.bannerBox{width:100%;height:300px;border:5px dashed #ddd;
display:flex;
align-items: center;
justify-content: center;}
</style>
