<template>
  <div class="Home">
    <h2>Home组件</h2>
    <h1>{{msg}}</h1>
    <!-- banner -->
    <banner-v :bannerList="bannerDate"></banner-v>
    <!-- 行业快讯 -->
    <announcement-v :announcement="announcement"></announcement-v>
    <!-- 新书上架 - 使用属性传数据给子组件；使用子组件中的onBookSelect自定义事件，并调用preview方法，$event参数接受子组件传过来的数据-->
    <booklist-v :books="lastesUpdated" heading="最近更新1" @onBookSelect="preview($event)"></booklist-v>
    <!-- 编辑推荐 使用属性传数据给子组件-->
    <booklist-v :books="recommended" heading="最近更新2" @onBookSelect="preview($event)"></booklist-v>
  </div>
</template>
<script>
//引入banner等局部组件模板
import bannerTpl from "./Home/bannerTPL";
import announcementTPL from "./Home/announcementTPL";
import bookListTpl from "./Home/bookListTpl";
export default {
  name: 'Home',
  data:()=>{
    return {
      msg:'这里是Home组件模板',
      announcement:'',
      bannerDate:[],
      lastesUpdated:[],
			recommended:[]
    }
  },
  created(){// HTTP get -->/home.json
    this.$http.get('./static/data_json/home.json').then((res) =>{
      // console.log(res)
      // console.log(res.body);
      this.announcement=res.body.announcement;
      this.bannerDate=res.body.bannerDate;
      this.lastesUpdated=res.body.lastesUpdated;
      this.recommended=res.body.recommended;
    },(response) => {
        alert('vue_Error')
        // 响应错误回调
    });
  },
  components:{ // 自定义局部组件
    'banner-v':bannerTpl,
    'announcement-v':announcementTPL,
    'booklist-v':bookListTpl,
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
