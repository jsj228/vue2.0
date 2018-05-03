<template>
  <header>
     <nav>
      <ul>
        <li v-for="nav in navData" v-text="nav"></li>   
      </ul>
     </nav>
  </header>
</template>
<!-- 组件模板-->

<!-- 组件逻辑-->
<script>
export default {
	name:'headerCode',
	data () {   //子组件的数据必须是一个函数返回一个对象
		return {
		navData:['首页','header组件','header组件','header组件']
		}
	},

}
</script>

<!-- 组件样式  scoped-css的局部作用域-->
<style scoped>
  header{background:#e3493c;color:#fff;}
  header>nav>ul{width:100%;max-width:1000px;
    line-height:30px;display:flex;
    flex-wrap:wrap;
  }
  header>nav>ul>li:first-child{border-left:0px;}
  header>nav>ul>li{
    /*display:inline-block;*/
    list-style:none;
    flex-grow:1;
     flex-basis:90px;
    padding:5px 10px;
    border-left:1px solid #ccc;
    text-align: center;
    transition:all 1s;}
  header>nav>ul>li:hover{background:#fff;color:#e3493c;}
  h1{color:#f00;}
</style>
