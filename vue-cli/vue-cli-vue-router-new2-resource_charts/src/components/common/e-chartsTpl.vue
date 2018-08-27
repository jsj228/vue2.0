<template>
    
   <div class = "chart">
      <h3>{{ msg }}</h3>
      <div id = "echarts" style = "height:300px"></div>
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
        getLineData(){
            // HTTP get -->/home.json
            this.$http.get('http://192.168.0.156:800/index.php').then((res) =>{
                    console.dir(Object.prototype.toString.call(res.bodyText));
                    var dataArr=res.bodyText.replace(/[[|\"|']/g,'').split(/\]/g);
                    for(var r=0;r<dataArr.length-1;r++){
                        var itime=dataArr[r].split(/\,/);
                        var d = new Date();
                        for(var i=0;i<itime.length;i++){
                            var d = new Date(parseFloat(itime[0]));
                            itime[0]=
                            d.getFullYear()+'-'+d.getMonth()+1+'-'+d.getDate()
                            // +'-'+d.getHours()+'-'+d.getMinutes()+'-'+d.getSeconds();
                        }
                        d=null;
                        console.dir(chartUtil.lineOption().data.push(itime));
                    }
                    
                },(response) => {
                    // 响应错误回调;
                    alert('请求错误')
            });
        },
        initChart () {
            // 基于准备好的dom，初始化echarts实例,移动端建议使用 svg模式
            this.chart = echarts.init(document.getElementById('echarts'), 'light', {renderer: 'svg'})
            this.chart.setOption(chartUtil.lineOption().option)
            //图标根据窗口大小自动缩放
            // window.addEventListener("resize", this.chart.resize);
        },
    },
    created: function() {
      this.getLineData()//this指向实例dom
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
