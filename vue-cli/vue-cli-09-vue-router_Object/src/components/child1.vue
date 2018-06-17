<template>
  <div id="child1111">
    <!-- 默认显示的内容 -->
    <h1>{{ msg }} --------child1111</h1>

    <!-- <h2>child1111 路由 $route.params.page ---{{ $route.params.page }}</h2>
    <h2>child1111 路由 $route.params ---{{ $route.params}}</h2>
    <h2>child1111 路由 $route.path ---{{ $route.path}}</h2>
    <h2>child1111 路由 $route.query ---{{$route.query}}</h2>
    <h2>child1111 路由 $route.query.num ---{{ $route.query.num}}</h2>
    <p>child1111 路由 this.$route.query.num----{{this.$route.query.num}}</p>
    <h2>child1111 路由 this.$route.query.sort ---{{ this.$route.query.sort}}</h2> -->
  </div>
</template>

<script>

export default {
  name: 'child1111',
  data () {
    return {
      msg: '这里是child111组件9666666'
    }
  },
  // beforeRouteUpdate是在这里使用-->注意：使用这个调不到下一个路由中去
  // beforeRouteUpdate(to, from, next) {
    // console.log(to)  
    // react to route changes...
    // don't forget to call next()
  // },
  // watch是在这里使用
  watch: {
    '$route'(to, from) {
      // 对路由变化作出响应...
      console.log(to)//从child1组建路由
      console.log(from)//到child2组建路由
    }
  }
};

</script>



















<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
