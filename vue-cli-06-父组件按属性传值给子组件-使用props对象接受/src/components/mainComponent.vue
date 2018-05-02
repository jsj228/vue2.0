<template>
  <section class="main">
    <H1>MAIN</H1>
  	<ul>
     <li v-for="(li,key) in mainData" @click="li.show=!li.show">
       <b  v-text="li.name"></b>
       <div  v-text="li.position" v-show="li.show"></div>
     </li> 
    </ul>
  <!-- 子组件，显示不同的 tab
  is 特性动态绑定子组件
  keep-alive 将切换出去的组件保留在内存中 -->
  </section>
</template>


<script>
export default {
  name:'mainCode',
  //参考文档 https://cn.vuejs.org/v2/guide/components-props.html
  props:{   //在main-tage子组件内，使用props对象接受mainData数据
    mainData:{   //接受数据对象
      type:Array,//设置接受数据的类型 String/Number/Boolean/Function/Object/Array/Symbol  
      required:true,  //必须有值
      default(){  //以上有默认错误时,默认的提示
        alert('请传入一个Array')
      }
    }
  },
  data () {
    return {
    	// mainList:[
     //    {id:'prince',name:'1111',show:false},
     //    {id:'rose',name:'2222',position:'这里是2222222222',show:false},
     //    {id:'fox',name:'3333',position:'这里是333333333',show:false},
     //    {id:'other',name:'4444',position:'这里是444444444',show:false},
     //  ],
    }
  },
 methods: {

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
