<template>
  <div class="bg-blue-300 p-6">
    <h2 class="text-2xl font-bold mb-6 text-center">Minhas Habilidades</h2>
    <HomeHabilidades/>
  </div>
</template>

<script>
import HomeHabilidades from '../components/HomeHabilidades.vue'

export default {
  name: 'Habilidades',
  components: {
    HomeHabilidades,
}
}
</script>