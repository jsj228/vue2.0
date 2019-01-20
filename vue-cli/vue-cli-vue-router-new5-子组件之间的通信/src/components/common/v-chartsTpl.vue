<template>
   <div class="v-chartsBox">
        <span class="btnBox">
            <select :style="{background:'url(/static/img/'+coinSelected+'.png)no-repeat 10px 20px'}" v-model="coinSelected" @change="getLineData(5,0)">
                <option  v-for="itime in coinList" :value="itime" v-text="itime"></option>
            </select>
            <button class="minBtn" v-for="(itime,index) in minBtnData" v-text="itime.BtnText" @click="getLineData(itime.value,index)" :class="itime.active"></button>
        </span>
        <ve-candle :data="chartData" :settings="chartSettings" :init-options="options"></ve-candle>
    </div>    
</template>
<script>
export default {
    data () { 
        this.options={
            renderer:'svg',
        }
        this.chartSettings = {
            // showDataZoom:true,//展示DataZoom控件
            // upColor:'#ff0',//上升color
            // downColor:'#e3493c',//下降color
            // MA: [1, 2, 3, 4],//移动平均线指标周期

            // showMA: true,//显示MA
            // showVol: true,//显示成交量
            labelMap: {  //设置指标的别名
                // MA5: 'MA5',
                '日K':'',
            },
            // legendName: {'日K':''},// 设置图表上方图例的别名
            showDataZoom: true,
            start:20,
            end: 100,
            // //digit:6,//设置数据类型为percent时保留的位数
            // dataType:'percent',// KMB、 percent、normal
            itemStyle:{//设置图表的样式
                borderWidth:0.1,
                borderColor:'#00f',
                borderColor0:'#0ff',
                // shadowBlur:{
                //     shadowColor: 'rgba(0, 0, 0, 0.5)',
                //     shadowBlur: 10
                // },
                 
            },
            emphasis:{
                barMaxWidth:10,
                itemStyle:{
                    large:true,//是否开启大数据量优化，在数据图形特别多而出现卡顿时候可以开启
                    largeThreshold:6000,//default 开启绘制优化的阈值。
                    progressive:50000,//default 渐进式渲染时每一帧绘制图形数量，设为 0 时不启用渐进式渲染，支持每个系列单独配置。
                    progressiveThreshold:10000,//default 启用渐进式渲染的图形数量阈值，在单个系列的图形数量超过该阈值时启用渐进式渲染
                    progressiveChunkMode:'mod',//default 取模分片，即每个片段中的点会遍布于整个数据，从而能够视觉上均匀得渲染。
                },
           }
           
        }
        // 设置数据
        return {
            minBtnData:[
                {
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
                },
            ],
            coinSelected:'eth',
            coinList:['eth','etc','doge','btc','wc'],
            chartData:{
                columns: ['日期', '开盘', '收盘', '最低', '最高', '交易量'],
                rows:[],
            }
        }
    },
    methods:{
        getLineData(times,index){
            // 设置minBtn的按钮css
            for (var n = 0; n < this.minBtnData.length; n++) {this.minBtnData[n].active="";}
            this.minBtnData[index].active = "bgRedActive";
            //获取k线数据
            this.$http.get("http://192.168.0.156:800/index.php?T="+times+'&&coin='+this.coinSelected).then((res) =>{
                var dataArr=res.bodyText.replace(/[[|\"|']/g,'').split(/\]/g);
                this.chartData.rows=[];
                for(var r=0;r<dataArr.length-1;r++){
                    var itime=dataArr[r].split(/\,/);
                    var d = new Date(parseFloat(itime[0]) * 1000);
                    itime[0]= index==5?d.getFullYear()+'-'+parseInt(d.getMonth()+1)+'-'+d.getDate():d.getDate()
                        +'/'+d.getHours()+':'+d.getMinutes();// +':'+d.getSeconds()
                    //  //拼接K线数据 ： columns: ['日期', 'open', 'close', 'lowest', 'highest', 'vol'],
                    this.chartData.rows.push([itime[1],itime[2],itime[5],itime[4],itime[3],itime[1]]);
                    // this.chartData.rows.push(itime);
                    // console.dir(itime)
                    d=null;
                }   
            },(response) => {  // 响应错误回调;
                alert('请求错误')
            });
        }
    },
    created: function() {
        this.getLineData(5,0)//this指向实例dom
    },
}
</script>
<style scoped>
    .v-chartsBox{position: relative;margin-top:30px;}
    .btnBox{position: absolute;top:0;z-index:2;display:flex;justify-content:center;align-items:center;width:100%;}
    .btnBox select{background-size:20px;background:#ff0}
    .minBtn{margin:0 2px;}
</style>
