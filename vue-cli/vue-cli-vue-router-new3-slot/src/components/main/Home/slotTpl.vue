<template>
  <div class="dialog" :class="{'open':is_open}">
    <span @click="close">&times;</span>
    <header>
      <!-- 头部信息 ;① 使用slot进行插槽时使用name属性进行命名 ②在HomeTpl父组件中引用-->
      <slot name="header"></slot>
    </header>
    <section>
      <!-- 主体内容 -->
      <slot></slot>
    </section>
  </div>
</template>

<script>
export default {
  name: 'slotHome',
  data () {
    return {
      msg:"这里是slot模板",
      is_open:false,
    }
  },
  methods:{
    open(){//打开事件
      if(!this.is_open){
        this.$emit('slotOpen')
      }
      this.is_open=true;
    },
    close(){
      if(this.is_open){
        this.$emit('slotClose')
      }
      this.is_open=false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dialog{padding:10px;position: absolute;top:24px;left:24px;bottom:24px;right:24px;
;z-index:100;box-show:0 0 10px rbga(0,0,0,0.5);background:#eee;display:none;}
.dialog.open{display:block;}

</style>
