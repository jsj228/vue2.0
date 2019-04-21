<template>
    <div id="product-list-two">
        <h2>03-computed:mapState 
         <br>{{storeMapState}} 使用 mapState 辅助函数帮助我们生成计算属性 
        <br>03-- countAlias===>{{countAlias}}
        <br>03-- funData===>{{funData}}
       <!-- <br> products===>{{products}} -->
        </h2>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed:mapState({
        // 箭头函数可使代码更简练
        storeMapState:state => state.products,
         // 传字符串参数 'count' 等同于 `state => state.count`
        countAlias: 'products',
         // 为了能够使用 `this` 获取局部状态，必须使用常规函数
        funData (state) {
            // + this.localCount;
            return state.products;
        }
    })
    // 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
    // computed:mapState(['products']),
}
</script>
<style>
</style>
