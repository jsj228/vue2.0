<template>
  <div class="Home">
    <h1>这里是Home组件模块</h1>
    <hr>
    <banner-v></banner-v>
    <!-- 在父路由组件模板中引用子路由child1和child2 -->
    <!-- <homeAside1-v></homeAside1-v> -->
    <!-- <homeAside2-v></homeAside2-v> -->
    <!-- <homeAside-v></homeAside-v> -->
     <div class="HomeAside">
        <h1>这里是homeAside1组件模块</h1>
        <aside>
            <router-link to="/">child1111</router-link>
            <router-link to="/homeAside1_Router2">child222</router-link>
            <router-link to="/homeAside1_Router3">child333</router-link>
        </aside>
      <router-view class ="aaa1"/>
      <router-view name="homeAside1" class="aaa2"/>
    </div>
     <div class="HomeAside">
        <h1>这里是homeAside2组件模块</h1>
        <aside>
            <router-link to="/">child1111</router-link>
            <router-link to="/homeAside2_Router2">child222</router-link>
            <router-link to="/homeAside2_Router3">child333</router-link>
        </aside>
      <router-view class ="Aside2"/>
      <router-view name="homeAside2" class="Aside2"/>
    </div>
  </div>
</template>
<script>
//引入banner等局部组件模板
import bannerTpl from "./bannerTPL"
// import homeAsideTpl from "./homeAsideTpl"
import homeAside1_Tpl from "./homeAside1/homeAside1"
import homeAside2_Tpl from "./homeAside2/homeAside2"
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
    'homeAside2-v':homeAside2_Tpl,
    // 'homeAside-v':homeAsideTpl
  }
}
</script>
<style scoped>
  .HomeAside{overflow:hidden;margin:20px 0;border:5px solid #fd0;padding:10px}
  aside{float:left;width:20%;background:khaki;}
  aside>a{display:block;}
  .asideRouter{float:right;width:80%;}
</style>
