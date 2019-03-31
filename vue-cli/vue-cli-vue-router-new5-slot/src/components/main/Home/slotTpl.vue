<template>
  <div class="dialog">
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

    }
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dialog{padding:10px;position:fixed;top:24px;left:24px;bottom:24px;right:24px;
;z-index:100;box-show:0 0 10px rbga(0,0,0,0.5);background:#eee;}


</style>
