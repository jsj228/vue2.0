<template>
  <footer>
    <h1>{{ msg }}</h1>
    <h2>--------------</h2>
  </footer>
</template>

<script>
export default {
  name: 'footerHome',
  data () {
    return {
      msg:"这里是footer模板"
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{padding:100px 0 25px;background:#666;color:#fff}
h4{font-size:18px;color:#eee}
a{font-size:14px;color:ccc;}

</style>
