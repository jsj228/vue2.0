<template>
	<div class="homeHeaderList">
		<header>
			<h2>{{heading}}<span style="float:right" class="more">更多</span></h2>
		</header>
		<div class="headerBox">
			<router-link v-for="item in quickData" :class="item.class" class="minBtn bgGreen" v-text="item.text" :to="{path:item.href}" tag="button"></router-link>
		</div>
	</div>
</template>
<script>
//引入banner等局部组件模板
export default {
	props:[    //使用props来接受父组件传过来的数据
		'heading',
		'quickData'
	],
	filters:{
		join(args){
			return args.join(',')
		}
	}
}
</script>
<style scoped>
    h2{text-align:left;padding:10px 0}
    .headerBox{display:flex;align-items:center;justify-content:left;flex-wrap:wrap;}
    .headerBox button{width:73px;font-size:14px;margin:5px 1px}
</style>
