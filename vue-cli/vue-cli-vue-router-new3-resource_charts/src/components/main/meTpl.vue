<template>
  <div class="me">
    <router-link :to="{name:'userLogin'}">去登陆</router-link>
    <router-link :to="{name:'userRegister'}">去注册</router-link>
    
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
