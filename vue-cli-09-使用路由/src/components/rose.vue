<template>
  <div class="rose">
  	<h1>这里是rose</h1>
  		<ul>
  			<li v-for="li in position" v-text="li"></li>
  		</ul>
  </div>
</template>

<script>
export default {
  name: 'rose',
  data () {
    return {
    	position:'这里是222222222222'
    }
  }
}
</script>
	

<style scoped>

</style>
