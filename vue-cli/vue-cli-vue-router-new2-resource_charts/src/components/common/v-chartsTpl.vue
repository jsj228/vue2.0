<template>
   <div class="v-chartsBox">
        <ve-candle :data="chartData" :settings="chartSettings" style="display:none"></ve-candle>
        <ve-candle :data="chartData" :settings="chartSettings" style="display:block"></ve-candle>
        <button  @click="clickFun">click-this</button>
    </div>    
</template>
<script>
export default {
    data () {
        this.chartSettings = {
            // showDataZoom:true,//展示DataZoom控件
            // upColor:'#ff0',//上升color
            // downColor:'#e3493c',//下降color
            MA: [1, 2, 3, 4],//移动平均线指标周期
            showMA: true,//显示MA
            // showVol: true,//显示成交量
            labelMap: {  //设置指标的别名
            MA5: '5Min' 
            },
            legendName: {'日K':'日线'},// 设置图表上方图例的别名
            showDataZoom: true,
            start:60,
            end: 100,
            //digit:6,//设置数据类型为percent时保留的位数
            // dataType:'normal',// KMB, percent
            itemStyle:{//设置图表的样式
                // color: { //设置阳线的渐变色
                //     type: 'linear',
                //     x: 0,
                //     y: 0,
                //     x2: 0,
                //     y2: 1,
                //     colorStops: [{
                //         offset: 0, color: 'red' // 0% 处的颜色
                //             }, {
                //                 offset: 1, color: 'blue' // 100% 处的颜色
                //             }],
                //     globalCoord: false // 缺省为 false
                // },
                // color0:{//设置阴线的渐变色
                //     type: 'linear',
                //     x: 0,
                //     y: 0,
                //     x2: 0,
                //     y2: 1,
                //     colorStops: [{
                //         offset: 0, color: '#fff' // 0% 处的颜色
                //     }, {
                //         offset: 1, color: '#000' // 100% 处的颜色
                //     }],
                //     globalCoord: false // 缺省为 false
                // }
                borderWidth:1,
                borderColor:'#000',
                borderColor0:'#0ff',
                shadowBlur:{
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                },
                large:true,//是否开启大数据量优化，在数据图形特别多而出现卡顿时候可以开启
                largeThreshold:600,//default 开启绘制优化的阈值。
                progressive:5000,//default 渐进式渲染时每一帧绘制图形数量，设为 0 时不启用渐进式渲染，支持每个系列单独配置。
                progressiveThreshold:10000,//default 启用渐进式渲染的图形数量阈值，在单个系列的图形数量超过该阈值时启用渐进式渲染
                progressiveChunkMode:'mod',//default 取模分片，即每个片段中的点会遍布于整个数据，从而能够视觉上均匀得渲染。
            }
        }
        return {
            chartData:{
                columns: ['日期', 'open', 'close', 'lowest', 'highest', 'vol'],
                // rows:[],
               rows:[
                        [1526696400,"5926.30776500","2.82000000","2.82000000","2.80700000","2.80700000"],
                        [1526696400,"5926.30776500","2.82000000","2.82000000","2.80700000","2.80700000"],
                        [1526696400,"1623.00643200","39.02900000","39.02900000","39.02900000","39.02900000"],
                        [1526696400,"1623.00643200","39.02900000","39.02900000","39.02900000","39.02900000"],
                        [1526696361,"1623.00643200","39.02900000","39.02900000","39.02900000","39.02900000"],
                        [1526696301,"2648.05229200","4.40600000","4.40600000","4.40600000","4.40600000"],
                        [1526696280,"440.67570800","85.27800000","85.27800000","85.27800000","85.27800000"],
                        [1526696206,"0.71700000","4560.00000000","4560.00000000","4560.00000000","4560.00000000"],
                        [1526696179,"183.00000000","2.80000000","2.80000000","2.80000000","2.80000000"],
                    ],
            }
        }
    },
    methods:{
        clickFun(){
            alert(this);
        },
        //获取k线数据
        getLineData(){
            // HTTP get -->/home.json
            this.$http.get('http://192.168.0.156:800/index.php').then((res) =>{
                    // console.dir(res.bodyText.split(/[\]|\[]/g));
                    // console.log(dataArr[0]=="");
                    var dataArr=res.bodyText.replace(/[(\[\])(|\'|\)"]/g,'');
                    console.dir(Object.prototype.toString.call(dataArr)); 
                    console.dir(dataArr);
                    console.log(dataArr);
                    // console.dir(dataArr.length);

                    // for(var i=0;i<dataArr.length;i++){
                    //      var d = new Date();
                         
                    //      d.setTime(parseFloat(dataArr[0][0])); 
                    //      var year = d.getFullYear(); 
                    //      var month = d.getMonth()+1; 
                    //      var date = d.getDate();
                    //     //  console.log(year+'年'+month+'/'+date);
                    //      d=null;
                    // }
                    // console.log(this.chartData.rows.join());
                },(response) => {
                    // 响应错误回调;
                    alert('请求错误')
            });
        }
    },
   
    // beforeCreate: function() {
    //   console.group('------beforeCreate创建前状态------');
    //   console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
    //   console.log("%c%s", "color:red","data   : " + this.$data); //undefined 
    //   console.log("%c%s", "color:red","message: " + this.message) 
    // },
    created: function() {
      this.getLineData()//this指向实例dom
    //   console.group('------created创建完毕状态------');
    //   console.log("%c%s", "color:red","el     : " + this.$el); //undefined
    //   console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化 
    //   console.log("%c%s", "color:red","message: " + this.message); //已被初始化
    },
    // beforeMount: function() {
    //   console.group('------beforeMount挂载前状态------');
    //   console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
    //   console.log(this.$el);
    //   console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化  
    //   console.log("%c%s", "color:red","message: " + this.message); //已被初始化  
    // },
    // mounted: function() {
    //   console.group('------mounted 挂载结束状态------');
    //   console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
    //   console.log(this.$el);    
    //   console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
    //   console.log("%c%s", "color:red","message: " + this.message); //已被初始化 
    // },
    // beforeUpdate: function () {
    //   console.group('beforeUpdate 更新前状态===============》');
    //   console.log("%c%s", "color:red","el     : " + this.$el);
    //   console.log(this.$el);   
    //   console.log("%c%s", "color:red","data   : " + this.$data); 
    //   console.log("%c%s", "color:red","message: " + this.message); 
    // },
    // updated: function () {
    //   console.group('updated 更新完成状态===============》');
    //   console.log("%c%s", "color:red","el     : " + this.$el);
    //   console.log(this.$el); 
    //   console.log("%c%s", "color:red","data   : " + this.$data); 
    //   console.log("%c%s", "color:red","message: " + this.message); 
    // },
    // beforeDestroy: function () {
    //   console.group('beforeDestroy 销毁前状态===============》');
    //   console.log("%c%s", "color:red","el     : " + this.$el);
    //   console.log(this.$el);    
    //   console.log("%c%s", "color:red","data   : " + this.$data); 
    //   console.log("%c%s", "color:red","message: " + this.message); 
    // },
    // destroyed: function () {
    //   console.group('destroyed 销毁完成状态===============》');
    //   console.log("%c%s", "color:red","el     : " + this.$el);
    //   console.log(this.$el);  
    //   console.log("%c%s", "color:red","data   : " + this.$data); 
    //   console.log("%c%s", "color:red","message: " + this.message)
    // }

}
</script>
<style>

</style>
