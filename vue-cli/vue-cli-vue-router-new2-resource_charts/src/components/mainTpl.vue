<!--最外部组件main -->
<template>
  <div class="main">
    <h1>{{mainMsg}}</h1>
    <transition name="slide-fade">
      <router-view/>
    </transition>
    <ul class="footerNavBar">
        <router-link :to="{name:'Home'}" tag="li">Home</router-link>
        <router-link :to="{name:'Categories'}" tag="li">Categories</router-link>
        <router-link :to="{name:'shoppingCart'}" tag="li">shoppingCart</router-link>
        <router-link :to="{name:'Me'}" tag="li">Me</router-link>
    </ul>
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
*{margin:0;padding:0;list-style:none;box-sizing:border-box;}
.main{width:100%;border:2px dashed #ddd;}
ul{display:flex;justify-content:space-around;align-items:center;position:fixed;bottom:0;left:0;background:#eee;width:100%;}
li{line-height:50px;}
.slide-fade-enter-active{transition:all 0.3s ease;}
.slide-fade-leave-active{transition:all 0.3s cubic-bezier(1.0,0.5,0.8,1);}
.slide-fade-enter-active,
.slide-fade-leave-active{transform:translateX(-430px);opacity:0;}
li.active{background:#e3493c;color:#eee;}
</style>
