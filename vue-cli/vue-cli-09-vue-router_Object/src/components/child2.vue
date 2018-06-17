<template>
  <div id="child22">
    <h1>{{ msg }} --------child222</h1>
    <h2>name ---{{ $route.name}}</h2>
  </div>
</template>

<script>
export default {
  name: 'child22',
  data () {
    return {
      msg: '这里是child2222组件96'
    }
  }
}
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
