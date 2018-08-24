<template>
  <div class="userRegister">
    <returnPage-v></returnPage-v>
    <hr>
    <h1>{{ loginMsg }}</h1>
  </div>
</template>
<script>
export default {
  name: 'userRegisterName',
  data () {
    return {
      loginMsg:"这里是用户注册模板userRegister....."
    }
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
userRegister{padding:100px 0 25px;background:#666;color:#fff}
h4{font-size:18px;color:#eee}
a{font-size:14px;color:ccc;}
</style>
