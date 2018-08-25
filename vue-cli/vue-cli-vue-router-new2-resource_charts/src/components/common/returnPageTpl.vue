<template>
  <button id="returnPage" @click="returnPage">返回</button>
</template>
<script>
export default {
  name: 'returnPageName',
  data () {
    return {
      // loginMsg:"这里是用户登陆模板login..."
    }
  },
  methods:{
    returnPage:()=>{
      // this.$router.push('/home');
       console.log(window.history)
      // console.log(window.history.go('-1')); 
      //  window.history.length > 1? 
        // this.$router.go(-1)   //退回一步  类似window.history.go(n) 
        // :this.$router.push('/');  类似window.history.go(n) 
        //②使用编程路由跳转到Footer路由下
         console.log(window.history.length)
         console.log(this)
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
