<!-- 组件模板-->
<template>
  <div class="users"> <!-- class不是必须的-->
  <h1>userComponent h1</h1>
    <ul>
      <li v-for="user in usersData" v-text="user"></li>   
    </ul>
  </div>
</template>

<!-- 组件逻辑-->
<script>
export default {
  name: 'users',  //name不是必须的
  data () {   //子组件的数据必须是一个函数返回一个对象
    return {
      usersData:['jsj','jsj228']
    }
  }
}
</script>

<!-- 组件样式  scoped-css的局部作用域-->
<style scoped> 
  h1{color:#f00;}
</style>
