<template>
    
   <div class = "chart">
      <h3>{{ msg }}</h3>
      <div id = "echarts" style = "height:200px"></div>
    </div>
</template>

<script>
  import echarts from 'echarts/lib/echarts'
  import 'zrender/lib/svg/svg'
  import 'echarts/lib/chart/line'
  import 'echarts/lib/chart/candlestick'
  import chartUtil from '../../kLine'

  export default {
    name: 'quotation',
    data () {
      return {
        chart: null,
        msg:"eCharts"
        
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
      this.chart = null
    },
    methods: {
      initChart () {
        // 基于准备好的dom，初始化echarts实例,移动端建议使用 svg模式
        this.chart = echarts.init(document.getElementById('echarts'), 'light', {renderer: 'svg'})
        this.chart.setOption(chartUtil.lineOption())
        //图标根据窗口大小自动缩放
        // window.addEventListener("resize", this.chart.resize);
      },
    },
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
