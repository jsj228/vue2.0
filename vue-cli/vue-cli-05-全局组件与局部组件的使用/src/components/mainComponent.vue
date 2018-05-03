<template>
  <section class="main">
  	<ul>
     <li v-for="(li,key) in mainList" @click="li.show=!li.show">
       <b  v-text="li.name"></b>
       <div v-text="li.position" class="liDiv" v-show="li.show"></div>
     </li> 
    </ul>

  </section>
</template>

<script>
export default {
  name:'mainCode',
  data () {
    return {
    	mainList:[
        {id:'prince',name:'1111',position:'这里是111111111',show:false},
        {id:'rose',name:'2222',position:'这里是2222222222',show:false},
        {id:'fox',name:'3333',position:'这里是333333333',show:false},
        {id:'other',name:'4444',position:'这里是444444444',show:false},
      ],
    }
  },
  methods:{
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
