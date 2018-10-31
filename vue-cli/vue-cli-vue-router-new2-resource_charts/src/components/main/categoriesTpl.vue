<template>
  <div class="categories">
    <h5>{{categoriesMsg}}</h5>
    <Echarts-v :lineDataP="lineData"></Echarts-v>
  </div>
</template>
<script>
//引入局部组件模板
import e_charts from "../common/e-chartsTpl";
export default {
    name: 'categoriesName',
    data:()=>{
        return {
            categoriesMsg:'这里是categoriesTpl局部组件模块 E-charts',
            lineData:[],
        }
    },
    components:{ // 自定义局部组件
        'Echarts-v':e_charts
    },
    created() {
        // LineDataFun();
    },
    methods:{
        // LineDataFun(datas){
        //    this.$http.post("http://192.168.0.156:800/index.php?T="+times+'&&coin='+this.coinSelected).then((res) =>{
        //     // console.log(Object.prototype.toString.call(res.bodyText));
        //     var dataArr=res.bodyText.replace(/[[|\"|']/g,'').split(/\]/g);
        //     var categoryData=[];
        //     for(var r=0;r<dataArr.length-1;r++){
        //         var itime=dataArr[r].split(/\,/);
        //         var d = new Date(parseFloat(itime[0]) * 1000);
        //         itime[0]=
        //             d.getFullYear()+'-'+
        //             parseInt(d.getMonth()+1)+'-'+d.getDate()
        //             +'-'+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
        //         d=null;
        //         this.lineData.push(itime);
        //     };
        //     console.dir('pppp---'+this.lineData.length);//12
        //     },(response) => {
        //         // 响应错误回调;
        //         alert('请求错误')
        //     });
        // }
    }
}
</script>

<style scoped>
.categories{width:100%;;}
</style>
