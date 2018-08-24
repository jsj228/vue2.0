<template>
	<div class="bannerBox">
		<!-- bannerChild -->
		<h1>bannerChild</h1>
	</div>
</template>
<script>
// npm install  swiper
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"

//引入banner等局部组件模板
export default {
	name: 'bannerBox',
	data:()=>{
		return {
			slides:[
				{id:1,imgUrl:'./fixtures/sliders/t1.svg'},
				{id:2,imgUrl:'./fixtures/sliders/t2.svg'}
			]
		}
	},
	mounted(){
		new Swiper ('.swiper-container', {
		direction: 'horizontal',//可设置水平(horizontal)或垂直(vertical)
		loop: true,
		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
		},
		// 如果需要前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		// 切换效果
		effect :'flip',
		// effect : 'coverflow',
		// slidesPerView: 3,
		// centeredSlides: true,
		// 自动循环
		autoplay:true//等同于以下设置
		/*autoplay: {
			delay: 3000,
			stopOnLastSlide: false,
			disableOnInteraction: true,
		},*/
		
		// 如果需要滚动条
		// scrollbar: {
		// 	el: '.swiper-scrollbar',
		// },
	})        
	}
}
</script>
<style scoped>
	.bannerBox,.swiper-slide{overflow:hidden;margin:20px 0;border:5px solid #fd0;min-height:500px;}
	aside{float:left;width:20%;background:khaki;}
	aside>a{display:block;}
	.asideRouter{float:right;width:80%;}
</style>
