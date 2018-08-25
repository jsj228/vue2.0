<template>
  <div class="main">
    <h2>----mainTpl局部组件模块----</h2>
    <h1>{{mainMsg}}</h1>
    <transition name="slide-fade"><router-view/></transition>
    <ul class="footerNavBar">
      <router-link :to="{name:'Home'}" tag="li"> Home</router-link>
      <router-link :to="{name:'Categories'}" class="iconfont icon-jiaoyi" tag="li">Categories</router-link>
      <router-link :to="{name:'shoppingCart'}" tag="li">shoppingCart</router-link>
      <router-link :to="{name:'Me'}" tag="li">Me</router-link>
    </ul>
    <link rel="stylesheet" href="src/css/common.css">
  </div>
</template>
<script>
export default {
    name: 'mainName',
    data:()=>{
      return {
          mainMsg:'这里是mainTpl局部组件模块'
      }
    }
}
</script>
<style scoped>

.main{width:100%;}


.slide-fade-enter-active{transition:all 0.3s ease;}
.slide-fade-leave-active{transition:all 0.3s cubic-bezier(1.0,0.5,0.8,1);}
.slide-fade-enter-active,
.slide-fade-leave-active{transform:translateX(-430px);opacity:0;}
li.active{background:#e3493c;color:#eee;}
</style>
