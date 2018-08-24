<template>
  <div class="Home">
    <h1>{{msg}}</h1>
    <!-- banner -->
    <banner-v :slide="slides"></banner-v>
    <!-- 行业快讯 -->
    <announcement-v :announcement="announcement"></announcement-v>
    <!-- 新书上架 - 使用属性传数据给子组件；使用子组件中的onBookSelect自定义事件，并调用preview方法，$event参数接受子组件传过来的数据-->
    <booklist-v :books="lastesUpdated" heading="最近更新1" @onBookSelect="preview($event)"></booklist-v>
    <!-- 编辑推荐 使用属性传数据给子组件-->
    <booklist-v :books="recommended" heading="最近更新2" @onBookSelect="preview($event)"></booklist-v>
    <!-- slot进行插槽-默认情况下是不显示的 -->
    <!-- <slot-v @close="selected=undefined">
      <div slot="header" res="dialog">
        <b @click.prevent="$refs.sloting.close()"></b>
      </div>
      <div>
        <img :src="selected.imgsrc" >
        <h1>{{selected.titile}}</h1>
      </div>
    </slot-v>   -->
  </div>
</template>
<script>
//引入banner等局部组件模板
import bannerTpl from "./Home/bannerTPL";
import announcementTPL from "./Home/announcementTPL";
import bookListTpl from "./Home/bookListTpl";
// 引入slot组件
import slotTpl from "./Home/slotTpl";
export default {
  name: 'Home',
  data:()=>{
    return {
      msg:'这里是Home组件模板',
      announcement:'',
      slides:[],
      lastesUpdated:[],
      recommended:[],
      selected:undefined,
    }
  },
  methods:{
    preview(){
      this.selected=book;
      this.$refs.sloting.open();
    }
  },
  created(){// HTTP get -->/home.json
    this.$http.get('./static/data_json/home.json').then((res) =>{
      // console.log(res)
      // console.log(res.body);
      this.announcement=res.body.announcement;
      this.slides=res.body.slides;
      this.lastesUpdated=res.body.lastesUpdated;
      this.recommended=res.body.recommended;
    },(response) => {
        // 响应错误回调
    });
     
    
  },
  components:{ // 自定义局部组件
    'banner-v':bannerTpl,
    'announcement-v':announcementTPL,
    'booklist-v':bookListTpl,
    'slot-v':slotTpl, //注册slot-v组件
  },
  methods:{
    preview:(book)=>{
      console.log('123'+book)
    }
  }

}
</script>
<style>
  .Home{overflow:hidden;margin:20px 0;border:5px solid #fd0;padding:10px}
  aside{float:left;width:20%;background:khaki;}
  aside>a{display:block;}
  .asideRouter{float:right;width:80%;}
</style>
