<template>
<div class="Home">
    <!-- banner -->
    <banner-v :bannerList="bannerDate"></banner-v>
    <homeHeaderList :quickData="headerList" heading="快捷操作"></homeHeaderList>
    <homeMarket></homeMarket>
   <!-- 行业快讯 -->
    <!-- <announcement-v :announcement="announcement"></announcement-v> -->
    <!-- 新书上架 - 使用属性传数据给子组件；使用子组件中的onBookSelect自定义事件，并调用preview方法，$event参数接受子组件传过来的数据-->
    <!-- <booklist-v :books="lastesUpdated" heading="最近更新1" @onBookSelect="preview($event)"></booklist-v> -->
    <!-- 编辑推荐 使用属性传数据给子组件-->
    <!-- <booklist-v :books="recommended" heading="最近更新2" @onBookSelect="preview($event)"></booklist-v> -->
</div>
</template>
<script>
//引入banner等局部组件模板
import headerListTpl from "./Home/homeHeaderListTpl";
import bannerTpl from "./Home/bannerTPL";
import homeMarketTpl from "./Home/homeMarketTpl";

import announcementTPL from "./Home/announcementTPL";
import bookListTpl from "./Home/bookListTpl";
export default {
name: 'Home',
data:()=>{
    return {
        announcement:'',
        headerList:[],
        bannerDate:[],
        lastesUpdated:[],
        recommended:[],
    }
},
created(){// HTTP get -->/home.json
    this.$http.get('./static/data_json/home.json').then((res) =>{
        this.headerList=res.body.homeHeaderList;
        this.bannerDate=res.body.bannerDate;

        this.announcement=res.body.announcement;
        this.lastesUpdated=res.body.lastesUpdated;
        this.recommended=res.body.recommended;
    },(err) => { // 响应错误回调
        console.error(`请求错误:${err}`);
    });
},
components:{ // 自定义局部组件
    'homeHeaderList':headerListTpl,
    'homeMarket':homeMarketTpl,
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
.Home{overflow:hidden;}
aside{float:left;width:20%;background:khaki;}
aside>a{display:block;}
.asideRouter{float:right;width:80%;}
</style>
