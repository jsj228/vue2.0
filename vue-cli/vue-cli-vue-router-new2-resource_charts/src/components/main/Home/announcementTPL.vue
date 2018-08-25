<!--这里是行业快讯-->
<template>
	<div class="announcement">
		<!-- Home announcement-->
		<h2 v-text="announcement"></h2>
	</div>
</template>
<script>
//引入banner等局部组件模板
export default {
	name: 'announcementTPL',
	props:['announcement'],
	// filters:{
	// 	join(args){
	// 		return args.join(',')
	// 	}
	// }
	// data:()=>{
	// 	return {
	// 	}
	// },
}
</script>
<style scoped>
	.announcement{overflow:hidden;margin:20px 0;border:5px solid #fd0;min-height:50px;}
</style>
