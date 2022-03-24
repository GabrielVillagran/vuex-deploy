<template>
    <!-- Agregacion de contador -->
     <div class="sqr">
    <!-- numero aleatorio obtenido al cuadrado -->
      {{$store.state.counter}} <sup>2</sup> = {{$store.getters.sqr}}
    </div>
</template>

<script>
export default {
  name: 'sqr',
}
</script>