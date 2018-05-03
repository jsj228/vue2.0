<!-- 组件模板-->
<template>
  <header >
    <nav class="navBar">
      <ul>
        <li v-for="user in usersData" v-text="user"></li>   
      </ul>
   </nav>
  </header>
</template>

<!-- 组件逻辑-->
<script>
export default {
  name: 'header',  //name不是必须的
  data () {   //子组件的数据必须是一个函数返回一个对象
    return {
      usersData:['首页','关于我们']
    }
  }
}
</script>

<!-- 组件样式  scoped-css的局部作用域-->
<!--<style scoped> -->
<style>
  nav{background:"#f00";color:#fff;}
  h1{color:#f00;}
</style>
