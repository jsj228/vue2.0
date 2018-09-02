<template>
   <div class = "chart">
        <button>我是按钮</button>
        <div id='myChart' ref="myChart"></div>
  </div>
</template>
<script>
  import echarts from 'echarts/lib/echarts'
  import 'zrender/lib/svg/svg'
  import 'echarts/lib/chart/line'
  import 'echarts/lib/chart/candlestick'
  import chartUtil from '../../kLine'
  export default {
    name: 'echarts',
    data () {
        return {
        lineData:[],
        echartsOption: {
            title: {
                text: '上证指数',
                left: 0
            },
            tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
            },
            legend: {
                data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
            },
            grid: {
                left: '10%',
                right: '10%',
                bottom: '15%'
            },
            xAxis: {
                type: 'category',
                data: [],
                scale: true,
                boundaryGap: false,
                axisLine: { onZero: false },
                splitLine: { show: false },
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax'
            },
            yAxis: {
                scale: true,
                splitArea: {
                    show: true
                }
            },
            dataZoom: [
                    {
                        type: 'inside',
                        start: 30,
                        end: 70
                    },
                    {
                        show: true,
                        type: 'slider',
                        y: '90%',
                        start: 0,
                        end: 75
                    }
                    ],
                    series: [
                        {
                        name: '日K',
                        type: 'k',
                        data: [],
                        itemStyle: {
                        normal: {
                            color: '#ec0000',
                            color0: '#00da3c',
                            borderColor: '#8A0000',
                            borderColor0: '#008F28'
                        }
                        },
                        markPoint: {
                        label: {
                            normal: {
                                formatter: function (param) {return param != null ? Math.round(param.value) : ''}
                            }
                        },
                        data: [
                            {
                            name: 'highest value',
                            type: 'max',
                            valueDim: 'highest'
                            },
                            {
                            name: 'lowest value',
                            type: 'min',
                            valueDim: 'lowest'
                            },
                            {
                            name: 'average value on close',
                            type: 'average',
                            valueDim: 'close'
                            }
                        ],
                        tooltip: {formatter: function (param) {return param.name + '<br>' + (param.data.coord || '')}}
                    },
                    markLine: {
                        symbol: ['none', 'none'],
                        data: [
                            [
                                {
                                    name: 'from lowest to highest',
                                    type: 'min',
                                    valueDim: 'lowest',
                                    symbol: 'circle',
                                    symbolSize: 10,
                                    label: {
                                    normal: { show: false },
                                    emphasis: { show: false }
                                    }
                                },
                                {
                                    type: 'max',
                                    valueDim: 'highest',
                                    symbol: 'circle',
                                    symbolSize: 10,
                                    label: {
                                        normal: { show: false },
                                        emphasis: { show: false }
                                    }
                                }
                            ]
                        ]
                    }
                }
            ]
            }
        }
    },
    created () {
    },
    mounted () { 
        this.lineFun();
    },
    methods: {
        lineFun(){
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
                    this.echartsOption.xAxis.data.push(itime.splice(0, 1)[0])
                };
                this.echartsOption.series[0].data = this.lineData;
                console.dir('pppp---'+this.lineData.length);//12
                
                this.myChart = echarts.init(document.getElementById('myChart'))
                this.myChart.setOption(this.echartsOption);
                },(err) => { // 响应错误回调;
                    alert('请求错误')
            })
        }
    }
}
</script>
<style scoped>
#myChart{
  width: 70%;
  height: 500px;
  margin: 0 auto;
}
</style>
        
