<template>
  <div id="Home">
    <H1>Home</H1>
    <h1>{{ msg }}</h1>
    <!-- 跳转的路由需要在main.js进行依赖注入 -->
    <button  @click="goBack">跳转到Users路由下</button>
    <router-link :to="{ name: 'Users'}">跳转到Users路由下</router-link>
    <router-link to="/Other">跳转到Other路由下</router-link>

    <header-v></header-v>
    <Footer-v></Footer-v>
    
    </div>
</template>

<script>
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
      // console.log(this.$route);
      // console.log(this.$route.params);
      // 通过注入路由器，我们可以在任何组件内通过 this.$router 访问路由器，也可以通过 this.$route 访问当前路由：
      // console.log(this.$route.params.username);
      console.log(window.history.length); 
      // console.log(this.$router.push('/')); 
      // window.history.length > 1? 
        // this.$router.go(-1)   //退回一步  类似window.history.go(n) 
        // :this.$router.push('/');
        //②使用编程路由跳转到Footer路由下
        this.$router.push('Users')
        // this.$router.push({ path: 'Footer' }) 
        // this.$router.replace('Footer')

         
    }
  },
 
  components:{//注册局部组件
    "Footer-v":Footer,
    "header-v":Header,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
