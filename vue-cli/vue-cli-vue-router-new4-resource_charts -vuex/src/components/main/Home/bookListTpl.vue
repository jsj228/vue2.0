<template>
	<div class="bookList">
		<!-- Home announcement-->
		<header>
			<h2>{{heading}}<span style="float:right" class="more">更多...</span></h2>
		</header>
		<dl>	
			<!-- 使用$emit自定义onBookSelect事件,并在父组件中；以及传值书的book数据,-->
			<dd v-for="book in books" @click="$emit('onBookSelect',book)">
				<p v-text="book.imgsrc"></p>
				<img :src="book.imgsrc" :alt="book.titile">
				<b v-text="book.titile"></b>
				<span v-for="author in book.authors" v-text="author"></span>
			</dd>
		</dl>
	</div>
</template>
<script>
//引入banner等局部组件模板
export default {
	name: 'bookListTpl',
	props:[    //使用props来接受父组件传过来的数据
		'heading',
		'books'
	],
	filters:{
		join(args){
			return args.join(',')
		}
	}
}
</script>
<style scoped>
	.bookList{overflow:hidden;margin:20px 0;border:5px solid #fd0;}
	h2{text-align:left;padding:0 30px}
	b{display:block;}
	dd{display: inline-block;margin:0;padding:0;width:45%;}
</style>
