
// 使用 vue配合webpack写单页面应用时，要引入vue模块
//把html取出来当作模板，用数据渲染好，将我们的组件扔到页面里
//用extend方法创建全局组建,在实例创建前  // extend创建的是一个组件构造器
//创建outFileComponent组件 
var outFileComponent = Vue.extend({
    template:`<div>
                    <slot name="header"></slot>
                    <hr/>
                    <slot name="header"></slot>
                    <button @click="clickFun()">{{childData1}}组件</button>
                    <button>{{childData2}}组件</button>
                </div>`, //template就是组件的模板
    data: function() { //子组件内的数据必须是一个函数
        return {
            childData1: 'outFileComponent',
            childData2: 'outFileComponent',
        }
    },
    methods:{ 
    	clickFun(){  //定义事件名不能使用驼峰命名法
    		this.$emit('parent_event',this.childData1,this.childData2);
    	}
    }
});
Vue.component('outfile', outFileComponent);

