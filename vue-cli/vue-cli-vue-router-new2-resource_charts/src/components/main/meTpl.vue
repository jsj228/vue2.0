<template>
  <div class="me">
    
    <hr>
    <router-link :to="{name:'userLogin'}">userLogin</router-link>
    <br>
    <router-link :to="{name:'userRegister'}">userRegister</router-link>
    
    <!-- <userLogin-v>userLogin</userLogin-v> -->
    <h1>{{meMsg}}</h1>
    <hr>
    <br>
      <h1>e-charts绘制k线</h1>
      <div class="categories">
        <Echarts-v></Echarts-v>
    </div>
  </div>
</template>
<script>
//引入局部组件模板
import e_charts from "../common/e-chartsTpl2";
export default {
    name: 'mainName',
    data:()=>{
      return {
          meMsg:'这里是meTpl局部组件模块'
      }
    },
    components:{
      'Echarts-v':e_charts
    }
    
}
</script>

<style scoped>
.me{width:100%;}

/*k线*/

.categories{width:100%;;}
</style>
