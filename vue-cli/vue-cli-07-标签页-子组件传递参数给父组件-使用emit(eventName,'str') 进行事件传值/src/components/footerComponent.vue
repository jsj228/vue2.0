<template>
  <footer class="footer">
  	<h1 v-text="txt"></h1>
  </footer>
</template>

<script>
export default {
  name:"footerCode",
  data () {
    return {
    	txt:'footerText'
    }
  }
}
</script>

<style scoped>
	footer{background:#666;color:#eee;text-align:center;}
</style>
