<!--这里是banner部分-->
<template>
	<div class="bannerBox">
		<!-- banner -->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div  class="swiper-slide" v-for="item in bannerList">
					<!-- <router-link  tag="div" :to="{name:'bannerLink',params:{id:item.id}}" > -->
					<!-- <router-link  :to="{name:'bannerLink',params:{id:item.id}}" > -->
					<router-link  :to="item.href" >
						<img :src="item.imgUrl" alt="banner">
					    <h1>Banner {{item.id}}</h1>
					</router-link>
				</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>
			
			<!-- 如果需要导航按钮 -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
			
			<!-- 如果需要滚动条 -->
			<div class="swiper-scrollbar"></div>
		</div>
		<!-- banner子页面 -->
		<!-- <router-view/> -->
	</div>
</template>
<script>
// npm install  swiper
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"

//引入banner等局部组件模板
export default {
	name: 'bannerBox',
	props:['bannerList'],
	filters:{
		join(args){
			return args.join(',')
		}
	},
	// data:()=>{
	// 	return {
	// 	}
	// },
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
	.bannerBox,.swiper-slide{overflow:hidden;margin:10px 0 20px;}
	h1{position: absolute;top:50%;left:50%;margin:-10% 0 0 -15%;}
	img{width:100%;}
	aside{float:left;width:20%;background:khaki;}
	aside>a{display:block;}
	.asideRouter{float:right;width:80%;}
</style>
