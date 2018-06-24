<template>
  <div class="Home">
    <h1>这里是Home组件模块</h1>
    <hr>
    <banner-v></banner-v>
    <!-- 在父路由组件模板中引用子路由child1和child2 -->
    <homeAside1-v></homeAside1-v>
  </div>
</template>
<script>
//引入banner等局部组件模板
import bannerTpl from "./bannerTPL"
import homeAside1_Tpl from "./homeAside1/homeAside1"
export default {
  name: 'Home',
  data:()=>{
    return {
      msg:'这里是Home组件模板'
    }
  },
  components:{
    'banner-v':bannerTpl,
    'homeAside1-v':homeAside1_Tpl,

  }
}
</script>
<style scoped>
  .HomeAside{overflow:hidden;margin:20px 0;border:5px solid #fd0;padding:10px}
  aside{float:left;width:20%;background:khaki;}
  aside>a{display:block;}
  .asideRouter{float:right;width:80%;}
</style>
