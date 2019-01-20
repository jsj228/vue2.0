<template>
	<div class="homeHeaderList">
		<header>
			<h2>市场行情</h2>
		</header>
		<div class="marketBox">
               <!--  JSON.parse(marketData) 将json字符串转成json对象 -->
            <!-- <p v-for="item in marketList" > -->
            <p v-for="item in JSON.parse(marketData)" >
                <img :src="'/static/img/'+item.name.replace(/(\_cny)/,'')+'.png'">
                <span>
                    <b v-text="item.name.replace(/(\_cny)/,'')"></b><br>
                    <s v-text="parseFloat(item.volume)"></s>
                </span>
                <b v-text="parseFloat(item.new_price)"></b>
                <span class="bgRed" v-text="parseFloat(item.change)"></span>
                <router-link :to="{path:'./trade?name='+item.name.replace(/(\_cny)/,'&&isPage=true')}">去交易</router-link>
            </p>
		</div>
	</div>
</template>
<script>
//引入banner等局部组件模板
export default {
    name: 'homeMatketTpl',
    props:[    //使用props来接受父组件传过来的数据
            'heading',
            'marketData',
        ],
    filters:{
        join(args){
            return args.join(',')
        }
    },
    created(){
        console.log(this.marketData);
        this.marketData=this.marketData?JSON.parse(this.marketData):'';
    },
    beforeMount(){
        console.log(this.marketData);
        console.log(' beforeMount')
        
    },
    mounted(){
        console.log(this.marketData);
        console.log(' mounted')
        
    },
    beforeUpdate(){
        console.log(this.marketData);
        console.log(' beforeupdated')
        
    },
    updated(){
        console.log(this.marketData);
        console.log('updated')
        
    },
    beforeDestroy(){
        console.log(this.marketData);
        console.log('beforeDestroy')
    }

    // computed:{
    //     marketList(){
    //         return this.marketData?JSON.parse(this.marketData):'';
    //     }
    // }

}
</script>
<style scoped>
    img{width:26px;}
    img,span{vertical-align:middle;display: inline-block;}
    h2{text-align:left;padding:10px 0}
    s{font-size:12px;}
    a{width:73px;font-size:14px;margin:5px 1px}
</style>
