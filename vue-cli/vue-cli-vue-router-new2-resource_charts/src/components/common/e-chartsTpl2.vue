<template>
   <div class = "chart">
        <div id='myChart' ref="myChart"></div>
  </div>
</template>
<script>
  import echarts from 'echarts/lib/echarts'
  export default {
    name: 'echarts',
    data () {
        return {
        minBtnData:[{
            BtnText: "5分钟",
            value:5,
            active: 'bgRedActive'
            },{
            BtnText: "15分钟",
            value:15,
            active: ''
            },{
            BtnText: "30分钟",
            value:30,
            active: ''
            },
            {
            BtnText: "1小时",
            value:60,
            active: ''
            },{
            BtnText: "6小时",
            value:360,
            active: ''
            },{
            BtnText: "日线",
            value:360*4,
            active: ''
        },],
        coinSelected:'eth',
        coinList:['eth','etc','doge','btc','wc','wcg'],
        lineData:[],
        echartsOption: {
            barMaxWidth:20,
            barMinHeight:2,
            large:true,
            progressive:10000,
            // title: {
            //     text: '上证指数',
            //     left: 0
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
                type: 'candlestick',
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
                    label: {normal: { formatter: function (param) {return param != null ? Math.round(param.value) : ''}}},
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
                    tooltip: {
                         formatter: function (param) {return param.name + '<br>' + (param.data.coord || '')}
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
        this.lineFun(5,0);
    },
    methods: {
        lineFun(times,index){
            // this.lineData=[];
            for (var n = 0; n < this.minBtnData.length; n++) {this.minBtnData[n].active="";}
            this.minBtnData[index].active = "bgRedActive";
            this.myChart = echarts.init(document.getElementById('myChart'));
            this.$http.get("http://192.168.0.156:800/index.php?T="+times+'&&coin='+this.coinSelected).then((res) =>{
                var dataArr=res.bodyText.replace(/[[|\"|']/g,'').split(/\]/g);
                this.lineData=[];
                for(var r=0;r<dataArr.length-1;r++){
                    var itime=dataArr[r].split(/\,/);
                    var d = new Date(parseFloat(itime[0]) * 1000);
                    itime[0]=index==5?d.getFullYear()+'-'+parseInt(d.getMonth()+1)+'-'+d.getDate():d.getDate()
                        +'/'+d.getHours()+':'+d.getMinutes();// +':'+d.getSeconds()
                    
                    this.lineData.push([itime[2],itime[5],itime[4],itime[3]]);
                    d=null;
                   this.echartsOption.xAxis.data.push(itime.splice(0, 1)[0]);
                };
                this.echartsOption.series[0].data = this.lineData;
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
        
