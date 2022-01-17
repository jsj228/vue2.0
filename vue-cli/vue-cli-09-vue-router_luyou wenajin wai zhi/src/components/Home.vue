<template>
  <div id="Home">
    <H1>Home</H1>
    <h1>{{ msg }}</h1>
    <span  @click="goBack">返回</span>

    <!-- 使用组件 -->
    <users-v></users-v>
    <header-v></header-v>
    <footer-v></footer-v>
    </div>
</template>

<script>
// 引入组件模板
import Users from './Users';
import Header from './Header';
import Footer from './Footer';
export default {
   name: 'Home',
  data () {
    return {
      msg: '这里是Home组件'
    }
  },
  // computed: {
  //   username () {
  //     // 我们很快就会看到 `params` 是什么
  //     return this.$route.params.username
  //   }
  // },
  methods: {
    goBack () {
      console.log(this.$route);
      console.log(this.$route.params);
      // 通过注入路由器，我们可以在任何组件内通过 this.$router 访问路由器，也可以通过 this.$route 访问当前路由：
      // console.log(this.$route.params.username);
      window.history.length > 1? 
        this.$router.go(-1)   //返回上一层
        : this.$router.push('/')
    }
  },
 
  components:{//使用组件模板，注册局部组件
    "users-v":Users,
    "header-v":Header,
    "footer-v":Footer,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
