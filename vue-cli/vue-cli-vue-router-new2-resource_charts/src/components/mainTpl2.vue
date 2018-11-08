<!--最外部组件main -->
<template>
  <div class="main">
    <h1>{{mainMsg}}</h1>
    <transition name="slide-fade">
      <router-view/>
    </transition>
    <ul class="footerNavBar">
        <router-link class="minBtn bgRedActive" :to="{name:'Home',query:{marketData}}" v-text="fNav.home"></router-link>
        <router-link class="minBtn" :to="{name:'trade',query:{marketData}}" tag="li" v-text="fNav.trade"></router-link>
        <router-link class="minBtn" :to="{name:'c2c'}" tag="li" v-text="fNav.c2c"></router-link>
        <router-link class="minBtn" :to="{name:'friend'}" tag="li" v-text="fNav.friend"></router-link>
        <router-link class="minBtn" :to="{name:'Me'}" tag="li" v-text="fNav.me"></router-link>
    </ul>

  </div>
</template>
<script>
export default {
    name: 'mainName',
    data:()=>{
      return {
		  fNav:'',
          mainMsg:'',
          marketData:'',
          msg:'000',
      }
    },
     beforeCreate() {
         var  marketList='';
        setTimeout(() => {
            console.log(this.msg);
            var xmlhttp=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
            xmlhttp.onreadystatechange=function(){
                if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                    marketList=xmlhttp.responseText;
                }else{
                    console.log('mainTplEror')
                }
            }
            xmlhttp.open("GET","http://192.168.0.156:800/homeMarket.php",false);
            xmlhttp.send();
            this.marketData=marketList;
            // console.log('marketList----'+this.marketData);
        },300);
        
    },
    created(){// HTTP get -->/home.json
        this.$http.get('./static/data_json/main.json').then((res) =>{
			this.fNav=res.body.fNav;
            this.mainMsg=res.body.msg;
            console.log('marketList----'+this.marketData);
        },(response) => {// 响应错误回调
            alert('nav数据请求错误')
        },false);
       
    },
    mounted(){

   },
}
</script>
<style scoped>
*{margin:0;padding:0;list-style:none;box-sizing:border-box;}
.main{width:100%;min-height:500px;background:#fff;}
ul{display:flex;justify-content:space-around;align-items:center;position:fixed;bottom:0;left:0;background:#eee;width:100%;}
li{line-height:50px;}
.slide-fade-enter-active{transition:all 0.3s ease;}
.slide-fade-leave-active{transition:all 0.3s cubic-bezier(1.0,0.5,0.8,1);}
.slide-fade-enter-active,
.slide-fade-leave-active{transform:translateX(-430px);opacity:0;}
li.active{background:#e3493c;color:#eee;}
</style>
