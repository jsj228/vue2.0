<template>
    <div id="product-list-one">
        <h2>return store  {{products}}</h2>
    </div>
</template>
<script>
export default {
    // props: ['products'],
    data () {
        return {
            products : this.$store.state.products //获取store中state的数据
        }
    }
}
</script>



<style scoped>

</style>
