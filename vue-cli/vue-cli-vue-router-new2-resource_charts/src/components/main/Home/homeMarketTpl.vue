<template>
	<div class="homeHeaderList">
		<header>
			<h2>市场行情</h2>
		</header>
		<div class="marketBox">
            <p v-for="item in marketData" >
                <img :src="'/static/img/'+item.name.replace(/(\_cny)/,'')+'.png'">
                <span>
                   <b v-text="item.name.replace(/(\_cny)/,'')"></b><br>
                   <s v-text="parseFloat(item.volume)"></s>
                </span>
                <b  v-text="parseFloat(item.new_price)"></b>
                <span class="bgRed" v-text="parseFloat(item.change)"></span>
                <router-link :to="{path:'./trade?name='+item.name.replace(/(\_cny)/,'')}">去交易</router-link>
            </p>
		</div>
	</div>
</template>
<script>
//引入banner等局部组件模板
export default {
	name: 'homeMatketTpl',
    data(){
        return {
            marketData:[]
        }
    },
    created(){// HTTP get -->/home.json
        if(window.localStorage){
            this.$http.get('http://192.168.0.156:800/homeMarket.php').then((res) =>{
                this.marketData=JSON.parse(res.bodyText);
                window.localStorage.marketData=res.bodyText;
            },(response) => { // 响应错误回调
                alert('请求错误');
                return false;
            });
        }else{
            alert("浏览器不支持localstorage");
            return false;
        }
    },

}
</script>
<style scoped>
    img{width:26px;}
    img,span{vertical-align:middle;display: inline-block;}
    h2{text-align:left;padding:10px 0}
    s{font-size:12px;}
    a{width:73px;font-size:14px;margin:5px 1px}
</style>
