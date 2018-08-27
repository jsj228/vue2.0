<template>
  <div class="me">
    
    <hr>
    <router-link :to="{name:'userLogin'}">userLogin</router-link>
    <br>
    <router-link :to="{name:'userRegister'}">userRegister</router-link>
    
    <!-- <userLogin-v>userLogin</userLogin-v> -->
    <h1>{{meMsg}}</h1>
    <hr>
  </div>
</template>
<script>
//引入局部组件模板
export default {
    name: 'mainName',
    data:()=>{
      return {
          meMsg:'这里是meTpl局部组件模块'
      }
    }
    
}
</script>

<style scoped>
.me{width:100%;background:#ff0}
</style>
