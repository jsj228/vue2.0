<template>
  <div class="categories">
    <h5>{{categoriesMsg}}</h5>
    <kLine-v :lineDataP="lineData"></kLine-v>
  </div>
</template>
<script>
//引入局部组件模板
import kLineTpl from "../common/e-chartsTpl";

export default {
    name: 'categoriesName',
    data:()=>{
        return {
            categoriesMsg:'这里是categoriesTpl局部组件模块',
            lineData:[],
        }
    },
    components:{ // 自定义局部组件
        'kLine-v':kLineTpl
    },
    created() {
        this.$http.post("http://192.168.42.124:800/index.php").then((res) =>{
            // console.log(Object.prototype.toString.call(res.bodyText));
            var dataArr=res.bodyText.replace(/[[|\"|']/g,'').split(/\]/g);
            var categoryData=[];
            for(var r=0;r<dataArr.length-1;r++){
                var itime=dataArr[r].split(/\,/);
                var d = new Date(parseFloat(itime[0]) * 1000);
                itime[0]=
                    d.getFullYear()+'-'+
                    parseInt(d.getMonth()+1)+'-'+d.getDate()
                    +'-'+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
                d=null;
                this.lineData.push(itime);
            };
            console.dir('pppp---'+this.lineData.length);//12
        },(response) => {
            // 响应错误回调;
            alert('请求错误')
        });
    },
    methods:{
        // LineDataFun(datas){
        //    console.log('123----'+datas) 
        // }
    }
}
</script>

<style scoped>
.categories{width:100%;;}
</style>
