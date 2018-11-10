<template>
  <div class="categories">
    <h5>{{categoriesMsg}}</h5>
    <!-- <Echarts-v :marketSd="marketSelected"></Echarts-v> -->
  </div>
</template>
<script>
//引入局部组件模板
import e_charts from "../../common/e-chartsTpl";
export default {
    name: 'categoriesName',
    data:()=>{
        return {
            categoriesMsg:'这里是c2c局部组件模块',
            marketSelected:'',
        }
    },
    components:{ // 自定义局部组件
        'Echarts-v':e_charts
    },
    created() {
        // this.marketSelected.name=this.GetQueryString('name');
        // this.marketSelected.isPage=this.GetQueryString('isPage');
        this.marketSelected=this.GetQueryString('name')?this.GetQueryString('name'):'wcg';
    },
    mounted(){
    },
    methods:{
        //获取请求参数
        GetQueryString(name){
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return null;
        }
    }
}
</script>

<style scoped>
.categories{width:100%;;}
</style>
