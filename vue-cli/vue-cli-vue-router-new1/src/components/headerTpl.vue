<template>
  <header class="Header">
     <nav class="max1200"> 
       <router-link to="/">Home</router-link>
       <router-link to="/Other">Other</router-link>
       <router-link to="/childNavBar">childNavBar</router-link>
    </nav> 
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg:"这里是Header模板"
    }
  }
}
</script>
<style>

header{background:#12a0ed;}
nav{width:100%;line-height:60px}
nav>a{display:inline-block;height:100%;color:#eee;padding:0 10px;transition:all 1s;}
a:hover,.router-link-exact-active{background:#d61324;color:#eee;}
/*每个页面都要引入header，所以将公用的css文件引入header组件中*/
 *{margin: 0;padding: 0;text-decoration: none;border: 0;outline: none;
 background: none;
 /* font: 16px 'Avenir','Helvetica','Arial','sans-serif'; */
 box-sizing: border-box;
 } 
/* .active {background: #e3493c;color: #eee;}
.bg {background: rgba(10, 2, 82, 0.8)}
.inlineBlcokM {display: inline-block;vertical-align: middle;}
.inlineBlcokT {display: inline-block;vertical-align: top;}
.inlineBlcokB {display: inline-block;vertical-align: bottom;}

.max1200 {max-width: 1200px;margin: 0 auto;} */
</style>



















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

</style>
