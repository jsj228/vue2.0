<template>
  <div id="app">  
      <!--v-bind:products="products" -->  
      <return-data1></return-data1>
      <computed-data2></computed-data2>
      <storeMapState3></storeMapState3>    
  </div>
</template>

<script>
import returnData1 from './components/01-returnData.vue';
import computedData2 from './components/02-computedData.vue';
import storeMapState3 from './components/03-storeMapState.vue';

export default {
    name: 'app',
    components: {
       returnData1,computedData2,storeMapState3
    },
    data () {
        return {
        }
    }
}
</script>

<style>
body{
    font-family: Ubuntu;
    color: #555;
}
</style>
