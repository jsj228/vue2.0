<template>
  <div class="homePublicAside">
    <!-- 在父路由组件模板中引用子路由child1和child2 -->
    <div class="homePublicAside">
        <h1>这里是homeAside公用组件</h1>
        <aside>
            <!-- <router-link to="/">child1111</router-link>
            <router-link to="/homeAside2_Router2">child222</router-link>
            <router-link to="/homeAside2_Router3">child333</router-link> -->
        </aside>
      <!-- <router-view class ="child1"/>
      <router-view name="helper2" class="child2"/> -->
    </div>
  </div>
</template>
<script>
//引入banner等局部组件模板
// import bannerTpl from "./bannerTPL"
export default {
  name: 'Home',
  data:()=>{
    return {
      msg:'这里是homeAside公用组件'
      
    }
  },
//   components:{
//     'banner-v':bannerTpl,
//   }
}
</script>
<style scoped>
  .HomeAside{overflow:hidden;margin:20px 0;border:5px solid #fd0;padding:10px}
  aside{float:left;width:20%;background:khaki;}
  aside>a{display:block;}
  .asideRouter{float:right;width:80%;}
</style>
