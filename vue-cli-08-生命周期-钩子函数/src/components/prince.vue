<template>
  <div class="prince">
  	<h1>这里是prince</h1>
  		<ul>
  			<li v-for="li in position" v-text="li"></li>
  		</ul>
  </div>
</template>

<script>
export default {
  name: 'prince',
  data () {
    return {
    	position:'这里是111111111'
    }
  }
}
</script>
	

<style scoped>

</style>
