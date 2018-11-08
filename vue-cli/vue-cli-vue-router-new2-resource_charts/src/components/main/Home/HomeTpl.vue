<template>
<div class="Home">
    <!-- banner -->
    <banner-v :bannerList="bannerDate"></banner-v>
    <homeHeaderList :quickData="headerList" heading="快捷操作"></homeHeaderList>
    <!-- home接受数据 {{$route.query.marketData}} -->
    <p>homeMarket==={{$route.query.marketData}}</p>
    <!-- <homeMarket :marketData="$route.query.marketData"></homeMarket> -->

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
import headerListTpl from "./homeHeaderListTpl";
import bannerTpl from "./bannerTPL";
import homeMarketTpl from "./homeMarketTpl";

import announcementTPL from "./announcementTPL";
import bookListTpl from "./bookListTpl";
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
    components:{ // 自定义局部组件
        'homeHeaderList':headerListTpl,
        'homeMarket':homeMarketTpl,
        'banner-v':bannerTpl,
        'announcement-v':announcementTPL,
        'booklist-v':bookListTpl,
    },
   
    created(){
        // HTTP get -->/home.json
        this.$http.get('../static/data_json/home.json').then((res) =>{
            this.headerList=res.body.homeHeaderList;
            this.bannerDate=res.body.bannerDate;

            this.announcement=res.body.announcement;
            this.lastesUpdated=res.body.lastesUpdated;
            this.recommended=res.body.recommended;
            // console.log(res.body);
        },(response) => { // 响应错误回调
            alert('请求错误');
        });
        console.log(this.GetQueryString('marketData'))
    },
    mounted(){
    },
     methods:{
        //获取请求参数
        GetQueryString(name){
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return null;
        }
    },
   

}
</script>
<style>
.Home{overflow:hidden;}
aside{float:left;width:20%;background:khaki;}
aside>a{display:block;}
.asideRouter{float:right;width:80%;}
</style>
