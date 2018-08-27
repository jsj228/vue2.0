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
            dataType:'percent',// KMB、 percent、normal
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
                // borderWidth:1,
                // borderColor:'#000',
                // borderColor0:'#0ff',
                // shadowBlur:{
                //     shadowColor: 'rgba(0, 0, 0, 0.5)',
                //     shadowBlur: 10
                // },
                large:true,//是否开启大数据量优化，在数据图形特别多而出现卡顿时候可以开启
                largeThreshold:6000,//default 开启绘制优化的阈值。
                progressive:50000,//default 渐进式渲染时每一帧绘制图形数量，设为 0 时不启用渐进式渲染，支持每个系列单独配置。
                progressiveThreshold:10000,//default 启用渐进式渲染的图形数量阈值，在单个系列的图形数量超过该阈值时启用渐进式渲染
                progressiveChunkMode:'mod',//default 取模分片，即每个片段中的点会遍布于整个数据，从而能够视觉上均匀得渲染。
            }
        }
        return {
            chartData:{
                columns: ['日期', 'open', 'close', 'lowest', 'highest', 'vol'],
                // rows:[],
               rows:[
                    { '日期': '2004-01-05', open: 10411.85, close: 10544.07, lowest: 10411.85, highest: 10575.92, vol: 221290000 },
                    { '日期': '2004-01-06', open: 10543.85, close: 10538.66, lowest: 10454.37, highest: 10584.07, vol: 191460000 },
                    { '日期': '2004-01-07', open: 10535.46, close: 10529.03, lowest: 10432.12, highest: 10587.55, vol: 225490000 },
                    { '日期': '2004-01-08', open: 10530.07, close: 10592.44, lowest: 10480.59, highest: 10651.99, vol: 237770000 },
                    { '日期': '2004-01-09', open: 10589.25, close: 10458.89, lowest: 10420.52, highest: 10603.48, vol: 223250000 },
                    { '日期': '2004-01-12', open: 10461.55, close: 10485.18, lowest: 10389.85, highest: 10543.03, vol: 197960000 },
                    { '日期': '2004-01-13', open: 10485.18, close: 10427.18, lowest: 10341.19, highest: 10539.25, vol: 197310000 },
                    { '日期': '2004-01-14', open: 10428.67, close: 10538.37, lowest: 10426.89, highest: 10573.85, vol: 186280000 },
                    { '日期': '2004-01-15', open: 10534.52, close: 10553.85, lowest: 10454.52, highest: 10639.03, vol: 260090000 },
                    { '日期': '2004-01-16', open: 10556.37, close: 10600.51, lowest: 10503.71, highest: 10666.88, vol: 254170000 },
                    { '日期': '2004-01-20', open: 10601.42, close: 10528.66, lowest: 10447.92, highest: 10676.96, vol: 224300000 },
                    { '日期': '2004-01-21', open: 10522.77, close: 10623.62, lowest: 10453.11, highest: 10665.72, vol: 214920000 },
                    { '日期': '2004-01-22', open: 10624.22, close: 10623.18, lowest: 10545.03, highest: 10717.41, vol: 219720000 },
                    { '日期': '2004-01-23', open: 10625.25, close: 10568.29, lowest: 10490.14, highest: 10691.77, vol: 234260000 },
                    { '日期': '2004-01-26', open: 10568.12, close: 10702.51, lowest: 10510.44, highest: 10725.18, vol: 186170000 },
                    { '日期': '2004-01-27', open: 10701.11, close: 10609.92, lowest: 10579.33, highest: 10748.81, vol: 206560000 },
                    { '日期': '2004-01-28', open: 10610.07, close: 10468.37, lowest: 10412.44, highest: 10703.25, vol: 247660000 },
                    { '日期': '2004-01-29', open: 10467.41, close: 10510.29, lowest: 10369.92, highest: 10611.56, vol: 273970000 },
                    { '日期': '2004-01-30', open: 10510.22, close: 10488.07, lowest: 10385.56, highest: 10551.03, vol: 208990000 },
                    { '日期': '2004-02-02', open: 10487.78, close: 10499.18, lowest: 10395.55, highest: 10614.44, vol: 224800000 },
                    { '日期': '2004-02-03', open: 10499.48, close: 10505.18, lowest: 10414.15, highest: 10571.48, vol: 183810000 },
                    { '日期': '2004-02-04', open: 10503.11, close: 10470.74, lowest: 10394.81, highest: 10567.85, vol: 227760000 },
                    { '日期': '2004-02-05', open: 10469.33, close: 10495.55, lowest: 10399.92, highest: 10566.37, vol: 187810000 },
                    { '日期': '2004-02-06', open: 10494.89, close: 10593.03, lowest: 10433.74, highest: 10634.81, vol: 182880000 },
                    { '日期': '2004-02-09', open: 10592.41, close: 10579.03, lowest: 10433.72, highest: 10634.81, vol: 160720000 },
                    { '日期': '2004-02-10', open: 10578.74, close: 10613.85, lowest: 10511.18, highest: 10667.03, vol: 160590000 },
                    { '日期': '2004-02-11', open: 10605.48, close: 10737.72, lowest: 10561.55, highest: 10779.41, vol: 277850000 },
                    { '日期': '2004-02-12', open: 10735.18, close: 10694.07, lowest: 10636.44, highest: 10775.03, vol: 197560000 },
                    { '日期': '2004-02-13', open: 10696.22, close: 10627.85, lowest: 10578.66, highest: 10755.47, vol: 208340000 },
                    { '日期': '2004-02-17', open: 10628.88, close: 10714.88, lowest: 10628.88, highest: 10762.07, vol: 169730000 },
                    { '日期': '2004-02-18', open: 10706.68, close: 10671.99, lowest: 10623.62, highest: 10764.36, vol: 164370000 },
                    { '日期': '2004-02-19', open: 10674.59, close: 10664.73, lowest: 10626.44, highest: 10794.95, vol: 219890000 },
                    { '日期': '2004-02-20', open: 10666.29, close: 10619.03, lowest: 10559.11, highest: 10722.77, vol: 220560000 },
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
                    console.log(Object.prototype.toString.call(res.bodyText));
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
                        this.chartData.rows.push(itime);
                    }
                    
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
