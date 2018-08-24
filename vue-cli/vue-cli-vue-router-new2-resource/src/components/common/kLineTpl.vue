<template>
  <div class="categories">
    <!--图表内容区域，必须给 ECharts 容器本身指定高度。不然它会使用默认高度-->
    <div id="charts">
        <div id="main" :style="{width:'100%',height:'400%'}"></div>
    </div>
  </div>
</template>
<script>
  //在需要添加图标的组件中创建依赖的实例
  // var echarts = require('echarts'); 
  //  使用这种方式得到的是已经加载了所有图表和组件的 ECharts 包，因此体积会比较大。也可以只按需引入需要的模块。例如
  import echarts from 'echarts/lib/echarts' // 引入基本模板
  import chartUtil from '../../dataEcharts' //引入dataEcharts.js
//引入局部组件模板
export default {
    name: 'categoriesName',
    data:()=>{
            return {
                categoriesMsg:'这里是categoriesTpl局部组件模块'
            }
    },
    mounted () {
        //初始化 ECharts 实例，不能在created生命周期内初始化，因为那时候DOM还没有渲染，是找不到元素的
        this.initChart()
    },
    beforeDestroy () {
      //组件销毁前先销毁 ECharts 实例
      if (!this.chart) { return }
      this.chart.dispose()
    },
    methods: {
        initChart () {  //初始化 ECharts 实例函数
            // 基于准备好的dom，初始化echarts实例,移动端建议使用 svg模式
            this.chart = echarts.init(document.getElementById('main'), 'light', {renderer: 'svg'})//macarons主题
            this.chart.setOption(chartUtil.lineOption())
            // 基于准备好的dom，初始化echarts实例
            // this.chart2 = echarts.init(document.getElementById('active'),'macarons');
            // this.chart2.setOption(chartUtil.lineOption())
            //图标根据窗口大小自动缩放
            // window.addEventListener("resize",this.chart.resize);

        },
    },
}
</script>

<style scoped>
</style>
