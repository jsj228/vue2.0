<template>
  <div class="other">
  	<h1>这里是other</h1>
  		<ul>
  			<li v-for="li in position" v-text="li"></li>
  		</ul>
  </div>
</template>

<script>
export default {
  name: 'other',
  data () {
    return {
    	position:'这里是444444444'
    }
  }
}
</script>
	

<style scoped>

</style>
