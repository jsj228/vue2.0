<template>
    <div id="product-list-two">
        <h2>02-computedData=={{computedStore}}</h2>
    </div>
</template>
<script>
export default {
    computed: {
        computedStore(){
            return this.$store.state.products;
        }
    },
}
</script>

<style scoped>

</style>
