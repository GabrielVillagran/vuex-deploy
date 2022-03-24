<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <counter/>
    <cuadrado/>
    <botones/>
  </div>
</template>

<script>
import counter from "../components/counter.vue";
import cuadrado from "../components/cuadrado.vue";
import botones from "../components/botones.vue";

export default {
  name: 'HomeView',
  components:{
    counter,
    cuadrado,
    botones
  }
}
</script>
// stilo de pagina
<style>
  .counter{
   font-size: 50px; 
  }
  div{
    margin-bottom: 10px solid black;
  }
  .buttons button{
    font-size: 25px;
    width: 90px;
    height: 55px;
    margin: 0 10px;
  }
  .sqr{
   font-size: 15px; 
  }
</style>