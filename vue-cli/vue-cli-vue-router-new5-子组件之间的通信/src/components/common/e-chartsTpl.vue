<template>
   <div class = "chart">
    <p class="btnBox">
       <h2>传的币种{{marketSd}} | 选择的币种{{coinSelected}}</h2>
        <img :src="'/static/img/'+coinSelected+'.png'" style="width:20px;height:20px;vertical-align:middle"/>
        <select v-model="coinSelected" @change="lineFun(5,0)" v-if="coinList.length"> 
            <option  v-for="itime in coinList" :value="itime" v-text="itime"></option>
        </select>
        <button class="minBtn bgGreen" v-for="(itime,index) in minBtnData" v-text="itime.BtnText" @click="lineFun(itime.value,index)" :class="itime.active"></button>  
    </p>
    <div id='myChart'></div>
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
    props:[    //使用props来接受父组件传过来的数据
		'marketSd'
	],
	filters:{
		join(args){
			return args.join(',')
		}
    },
    
    data () {
        return {
            minBtnData:[{
                BtnText: "5分钟",
                value:5,
                active: 'bgRedActive'
                },{
                BtnText: "30分钟",
                value:30,
                active: ''
                },
                {
                BtnText: "6小时",
                value:360,
                active: ''
                },{
                BtnText: "日线",
                value:360*4,
                active: ''
            },],
            coinSelected:'wcg',
            // coinList:['eth','etc','doge','btc','wc','wcg'],

            colorList: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],//颜色
            labelFont:'bold 12px Sans-serif',
            echartsOption:{
                barMaxWidth:20,
                barMinHeight:2,
                large:true,
                progressive:10000,

                animation: true,
                color: this.colorList,
                // title: {
                //     left: 'center',
                //     text: '移动端 K线图'
                // },
                legend: {
                    top: 30,
                    data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
                },
                tooltip: {
                    triggerOn: 'none',
                    transitionDuration: 0,
                    confine: true,
                    bordeRadius: 4,
                    borderWidth: 1,
                    borderColor: '#333',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    textStyle: {
                        fontSize: 12,
                        color: '#333'
                    },
                    position: function (pos, params, el, elRect, size) {
                        var obj = {
                            top: 60
                        };
                        obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
                        return obj;
                    }
                },
                axisPointer: {
                    link: [{
                        xAxisIndex: [0, 1]
                    }]
                },
                grid: [{
                    left:10,
                    right:10,
                    top: 10,
                    height:300
                }, {
                    left:10,
                    right:10,
                    height: 30,
                    top: 330
                }],
                dataZoom: [{
                    type: 'slider',
                    xAxisIndex: [0, 1],
                    realtime: false,
                    start:30,
                    end:80,
                    bottom:60,
                    height:30,
                    handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '120%'
                }, {
                    type: 'inside',
                    xAxisIndex: [0, 1],
                    start: 40,
                    end: 70,
                    top:80,
                    height:60
                }],
                xAxis: [{
                    type: 'category',
                    data:[],
                    boundaryGap : false,
                    axisLine: { lineStyle: { color: '#777' } },
                   
                    min: 'dataMin',
                    max: 'dataMax',
                    axisPointer: {
                        show: true
                    }
                }, {
                    type: 'category',
                    gridIndex: 1,
                    data:[],
                    scale: true,
                    boundaryGap : false,
                    splitLine: {show: false},
                    axisLabel: {show: false},
                    axisTick: {show: false},
                    axisLine: { lineStyle: { color: '#777' } },
                    splitNumber: 20,
                    min: 'dataMin',
                    max: 'dataMax',
                    axisPointer: {
                        type: 'shadow',
                        label: {show: false},
                        triggerTooltip: true,
                        handle: {
                            show: true,
                            margin: 30,
                            color: '#B80C00'
                        }
                    }
                }],
                yAxis: [{
                    scale: true,
                    splitNumber: 2,
                    axisLine: { lineStyle: { color: '#777' } },
                    splitLine: { show: true },
                    axisTick: { show: false },
                    axisLabel: {
                        inside: true,
                        formatter: '{value}\n'
                    }
                }, {
                    scale: true,
                    gridIndex: 1,
                    splitNumber: 2,
                    axisLabel: {show: false},
                    axisLine: {show: false},
                    axisTick: {show: false},
                    splitLine: {show: false}
                }],
             
               
                series: [{
                    name: 'Volume',
                    data:[],
                    type: 'bar',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    itemStyle: {
                        normal: {
                            color: '#7fbe9e'
                        },
                        emphasis: {
                            color: '#140'
                        }
                    },
                   
                }, {
                    type: 'candlestick',
                    name: '日K',
                    data:[],
                    itemStyle: {
                        normal: {
                            color: '#ef232a',
                            color0: '#14b143',
                            borderColor: '#ef232a',
                            borderColor0: '#14b143'
                        },
                        emphasis: {
                            color: 'black',
                            color0: '#444',
                            borderColor: 'black',
                            borderColor0: '#444'
                        }
                    }
                } ,
                  {
                    name: 'MA5',
                    type: 'line',
                    data:[],
                    smooth:true,
                    showSymbol:false,
                    lineStyle: {
                        normal: {opacity: 0.3,color:'green',width:0.8}
                    }
                }, {
                    name: 'MA10',
                    type: 'line',
                    data:[],
                    smooth:true,
                    showSymbol: false,
                    lineStyle: {
                       normal: {opacity: 0.1,color:'blue',width:0.8}
                    }
                }, {
                    name: 'MA20',
                    type: 'line',
                    data:[],
                    smooth:true,
                    showSymbol: false,
                    lineStyle: {
                      normal: {opacity: 0.2,color:'#e3493c',width:0.8}
                    }
                }
                ]
            }
        }
    },
    created () {
      
    },
    mounted () { 
        // this.lineFun(5,0);
        this.lineFun(5,this.marketSd);
    },
    methods: {
        calculateMA(dayCount,data) {
            var result = [];
            for (var i = 0 ;i <data.length; i++) {
                if (i < dayCount) {
                    result.push('-');
                    continue;
                }
                var sum = 0;
                for (var r= 0; r< dayCount;r++) {
                    sum += parseFloat(data[i - r][1]);
                }
                // console.log(sum+'---',dayCount);
                // console.log(sum/dayCount);

                result.push((sum / dayCount).toFixed(2));
            }
            return result;
        },
        // 异步获取k线数据
        lineFun(times,index){
            for (var n = 0; n < this.minBtnData.length; n++) {this.minBtnData[n].active="";}
            console.log(times,index);
            // if(typeof index!='number'){  //判断是页面传过来的还是自己选择的
            if(typeof index!='number'){  //判断是页面传过来的还是自己选择的
                index=0;
                this.coinSelected=this.marketSd;
            }
       
            this.minBtnData[index].active = "bgRed";
            this.myChart = echarts.init(document.getElementById('myChart'))
            this.$http.get("http://192.168.0.156:800/index.php/lineKFun?T="+times+'&&coin='+this.coinSelected).then((res) =>{


                var dataArr=res.bodyText.replace(/[[|\"|']/g,'').split(/\]/g);
                //成交量
                this.echartsOption.series[0].data=[];
                //K线数据
                this.echartsOption.series[1].data=[];
                // x轴时间
                this.echartsOption.xAxis[0].data=[],
                this.echartsOption.xAxis[1].data=[];
                for(var r=0;r<dataArr.length-1;r++){
                    var itime=dataArr[r].split(/\,/);
                    //x轴时间 // +':'+d.getSeconds()
                    var d = new Date(parseFloat(itime[0]) * 1000);
                    itime[0]=(index==5?d.getFullYear()+'/'+parseInt(d.getMonth()+1)+'/'+d.getDate():d.getDate()+':'+d.getHours()+':'+d.getMinutes()).toString();
                    this.echartsOption.xAxis[0].data.push(itime[0]);
                    this.echartsOption.xAxis[1].data.push(itime[0]);
                    //成交量
                    this.echartsOption.series[0].data.push(itime[1]);
                    // console.dir(this.echartsOption.series[0].data);
                    // console.dir(this.echartsOption.series[0].data.length);
                    //K线数据
                    this.echartsOption.series[1].data.push([itime[2],itime[5],itime[4],itime[3],itime[1]]);
                    d=null;
                };


                this.echartsOption.series[2].data= this.calculateMA(5, this.echartsOption.series[1].data);
                this.echartsOption.series[3].data= this.calculateMA(10,this.echartsOption.series[1].data);
                this.echartsOption.series[4].data= this.calculateMA(20,this.echartsOption.series[1].data);
                this.myChart.setOption(this.echartsOption); 
                
                //子组件定义事件向父组件传值
                this.$emit('childMarket',this.coinSelected);

            })
            
        }
        
    },
    computed:{
        coinList(){ //计算属性获取币种市场
            if(window.localStorage.marketData){
                var marketData=JSON.parse(window.localStorage.marketData);
                for(var i=0,arr=[];i<marketData.length;i++){
                arr.push(marketData[i].name.replace(/(\_cny)/g,''));
                }
                return arr;
            }
        }
    }

}
</script>
<style scoped>
    #myChart{
    height: 420px;
    margin: 0 auto 60px;
    }
    #myChart,#myChart>div,canvas{width:100%!important;}
    select,:option{border:0;}
</style>
        
