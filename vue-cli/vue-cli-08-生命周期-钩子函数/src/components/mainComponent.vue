<template>
  <section class="main">
    <H1>MAIN</H1>
  	<ul>
     <!-- <li v-for="(li,key) in mainData" @click="liClick(li.id)"> -->
     <li v-for="(li,key) in mainData" @click="toggleLi(li.id)">
       <b  v-text="li.name"></b>
       <!-- <div  v-text="li.position" v-show="li.show"></div> -->
     </li> 
    </ul>
      <!-- <prince :is="currentTab" keep-alive></prince> -->

  </section>
</template>


<script>
export default {
  name:'mainCode',
  // props:['mainData'],
  props:{
    mainData:{
      type:Array,
      required:true,
      default(){
        alert('请传入一个Array')
      }
    }
  },
  data () {
    return {
    }
  },

 methods: {

    toggleLi: function(id) {
    this.$emit('liClickChange',id);

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
