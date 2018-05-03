<template>
  <section class="main">
    <H1>MAIN</H1>
  	<ul> 
      <!--【7】使用数据-->  <!--<1>、绑定click事件-->  
     <li v-for="(li,key) in mainData" @click="toggleLi(li.id)">
       <b  v-text="li.name"></b>
     </li> 
    </ul>

  </section>
</template>


<script>
export default {
  name:'mainCode',
  // props:['mainData'],
  props:{         //【5】使用props来接受父组件App按照属性传值的方法传递的值
    mainData:{    //注意mainData 要与父组件App中:mainData="mainList"自定义的属性名相同
      type:Array,  //【6】 配置传入的数据
      required:true,    
      default(){    //如果前面两个属性没有被通过，要执行的操作
        alert('请传入一个Array')
      }
    }
  },
  data () {
    return {
    }
  },

 methods: {
    toggleLi: function(id) {    //<2>定义点击事件函数
    this.$emit('liClickChange',id);//<3>使用$emit自定义一个liClickChange事件 根据id来判断

    }
 }
 
}
</script>
<style scoped>
	.main{background:#fee;text-align:center;}
  .main>div.liDiv{background:#fff;padding:10px;}
  ul{
    display:flex;
    flex-wrap:wrap;
    width:100%;
    max-width:1000px;
    margin:0 auto;
  }

  li{flex-grow:1;
    /*flex-basis:200px;*/
    text-align:center;
    /*display:inline-block;*/
    list-style:none;
    padding:0 10px;
    cursor:pointer;
  }
</style>
