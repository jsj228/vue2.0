<template>
  <div id="Home">
    <H1>Home</H1>
    <h1>{{ msg }}</h1>
    <!-- <button  @click="goBack">跳转到Footer路由下</button> -->
    <!-- <router-link :to="{ name: 'Footer'}">跳转到Footer路由下</router-link> -->
    <!-- <router-link to="{path:}">跳转到Footer路由下</router-link> -->
  
    <h2>Home ---{{ $route.params.id }}</h2>
    <h2>Home ---{{ $route.params}}</h2>
    <!-- 路由嵌套的子视图容器 --> <router-view></router-view>
    
    <header-v></header-v>
    <footer-v></footer-v>
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
        // this.$router.push('Footer')
        // this.$router.push({ path: 'Footer' }) 
        // this.$router.replace('Footer')
        console.log(this.$route)
         
    }
  },
 
  components:{//注册局部组件
    "header-v":Header,
    "footer-v":Footer,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
