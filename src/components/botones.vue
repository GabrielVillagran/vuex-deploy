<template>
    <!-- botones para aumentar y reducir, se hace el llamado a los metodos creados con el @ -->
    <div class="buttons"> 
      <!-- para hacer llamado de la smutaciones hacemos usos de commit mientras que para las actions usaremos dispatch y para state state-->
      <button @click="$store.dispatch('bajaCont')">-</button>
      <button @click="$store.dispatch('subCont')">+</button>
    </div>
</template>

<script>
export default {
  name: 'buttons',
}
</script>