<template>
    <!-- Agregacion de contador -->
    <div class="counter">
      {{$store.state.counter}}
    </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>