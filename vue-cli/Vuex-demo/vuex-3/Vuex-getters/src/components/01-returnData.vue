<template>
    <div id="product-list-one">
        <h2>01---$store.getters[attr] {{datadStore}}</h2>
        <h2>01---$store.getters[attr] {{lenData}}</h2>
        <h2>01---computed：{{dataCount}}</h2>
    </div>
</template>
<script>
export default {
    // props: ['products'],
    data () {
        return {
            //通过属性访问
            datadStore : this.$store.getters.arrData, 
            lenData : this.$store.getters.dataLen, 
        }
    },
    computed: {
        dataCount () {
            //在组件中使用
            return this.$store.getters.dataLen;
        }
    },
    created() {
        //通过方法访问 // 而不会缓存结果
        // this.store.getters.getterFun('20');
        console.log(store);
    },
    mounted() {
    },
    methods: {
        // gettFun(){
        // }
    },
}
</script>



<style scoped>

</style>
