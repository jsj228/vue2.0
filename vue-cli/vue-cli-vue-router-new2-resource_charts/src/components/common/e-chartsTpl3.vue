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
        chartData:{
            columns: ['日期', 'open', 'close', 'lowest', 'highest', 'vol'],
        },
        lineData:[
            [1514014200,"60.00000000","200.00000000","200.00000000","195.00000000","195.00000000"],[1514014500,"50.00000000","195.00000000","201.00000000","195.00000000","201.00000000"]
        ],
        chart: null,
        msg:"eCharts",
        data0:this.splitData(),
        option :{
            // title: {
            //     // text: '上证指数',
            //     // left: 0
            // },
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
                top:'12%',
                left: '2%',
                right: '2%',
                bottom: '17%',
                //fontSize:8,
            },
            xAxis: {
                type: 'category',
                data: this.data0.categoryData,
                scale: true,
                boundaryGap : false,
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: '#0ff',
                        backrgound:'#000'
                    }
                },
                splitLine: {show: false},
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax',
                axisLabel: {
                    color: '#0f0',
                    fontSize: 8,
                },
            },
            yAxis: {
                inverse:false,
                offset:-2,
                scale: true,
                position: 'left',
                splitArea: {
                    show: true
                },
                axisLabel: {
                    color: '#f00',
                    fontSize: 8,
                    inside: true,
                },
                axisLine: {
                    lineStyle: {
                        color: '#e3493c',
                        },
                    },
                splitLine: {
                    lineStyle: {
                        color: '#00f',
                    },
                },
            },
            dataZoom: [
                {
                    type: 'inside',
                    start: 50,
                    end: 100
                },
                {
                    show: true,
                    type: 'slider',
                    y: '90%',
                    start: 50,
                    end: 100
                }
            ],
            series: [
                {
                    name: '日K',
                    type: 'candlestick',
                    data: this.data0.values,
                    itemStyle: {
                        normal: {
                            color: upColor,
                            color0: downColor,
                            borderColor: upBorderColor,
                            borderColor0: downBorderColor
                        }
                    },
                    markPoint: {
                        label: {
                            normal: {
                                formatter: function (param) {
                                    return param != null ? Math.round(param.value) : '';
                                }
                            }
                        },
                        // data: [],
                        tooltip: {
                            formatter: function (param) {
                                return param.name + '<br>' + (param.data.coord || '');
                            }
                        }
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
                                        normal: {show: false},
                                        emphasis: {show: false}
                                    }
                                },
                                {
                                    type: 'max',
                                    valueDim: 'highest',
                                    symbol: 'circle',
                                    symbolSize: 10,
                                    label: {
                                        normal: {show: false},
                                        emphasis: {show: false}
                                    }
                                }
                            ],
                            {
                                name: 'min line on close',
                                type: 'min',
                                valueDim: 'close'
                            },
                            {
                                name: 'max line on close',
                                type: 'max',
                                valueDim: 'close'
                            }
                        ]
                    }
                },
                {
                    name: 'MA5',
                    type: 'line',
                    data: this.calculateMA(5),
                    smooth: true,
                    lineStyle: {
                        normal: {opacity: 0.5}
                    }
                },
                {
                    name: 'MA10',
                    type: 'line',
                    data: this.calculateMA(10),
                    smooth: true,
                    lineStyle: {
                        normal: {opacity: 0.5}
                    }
                },
                {
                    name: 'MA20',
                    type: 'line',
                    data: this.calculateMA(20),
                    smooth: true,
                    lineStyle: {
                        normal: {opacity: 0.5}
                    }
                },
                {
                    name: 'MA30',
                    type: 'line',
                    data: this.calculateMA(30),
                    smooth: true,
                    lineStyle: {
                        normal: {opacity: 0.5}
                    }
                },

                ]
            }
      }
    },
 
    beforeDestroy () {
      //组件销毁前先销毁 ECharts 实例
      if (!this.chart) { return }
      this.chart.dispose()
      this.chart = null
    },
    methods: {
        splitData() {
            var categoryData = [];
            var values = []
            for (var i = 0; i <this.lineData.length; i++) {
                categoryData.push(this.lineData[i].splice(0, 1)[0]);
                values.push(this.lineData[i])
            }
            return {
                categoryData: categoryData,
                values: values
            };
        },
        calculateMA(dayCount) {
            var result = [];
            for (var i = 0, len = this.data0.values.length; i < len; i++) {
                if (i < dayCount) {
                    result.push('-');
                    continue;
                }
                var sum = 0;
                for (var j = 0; j < dayCount; j++) {
                    sum += this.data0.values[i - j][1];
                }
                result.push(sum / dayCount);
            }
            return result;
        },
        getLineData(){
            console.dir(chartUtil.lineOption().data);
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
                            +'-'+d.getHours()+'-'+d.getMinutes()+'-'+d.getSeconds();
                        }
                        d=null;
                        console.dir(itime);
                        console.dir('lineData'+this.lineData);
                        console.dir(this.lineData.push(itime));
                    }
                    console.dir(this.lineData);
                },(response) => {
                    // 响应错误回调;
                    alert('请求错误')
            });
        },
        initChart () {
            // 基于准备好的dom，初始化echarts实例,移动端建议使用 svg模式
            this.chart = echarts.init(document.getElementById('echarts'), 'light', {renderer: 'svg'})
            this.chart.setOption(this.option)
            this.getLineData()
            //图标根据窗口大小自动缩放
            // window.addEventListener("resize", this.chart.resize);
        },
    },
    mounted () {
      //初始化 ECharts 实例，不能在created生命周期内初始化，因为那时候DOM还没有渲染，是找不到元素的
      this.initChart();
    },
    created: function() {
      //this指向实例dom
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
