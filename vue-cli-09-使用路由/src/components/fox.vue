<template>
  <div class="fox">
  	<h1>这里是fox</h1>
  		<ul>
  			<li v-for="li in position" v-text="li"></li>
  		</ul>
  </div>
</template>

<script>
export default {
  name: 'fox',
  data () {
    return {
    	position:'这里是333333'
    }
  }
}
</script>
	

<style scoped>

</style>
