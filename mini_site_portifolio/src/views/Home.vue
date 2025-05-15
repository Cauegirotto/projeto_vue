<template>
  <div>
    <h2 class="text-2xl font-bold mb-6 text-center">Bem-vindo ao Meu Portfólio</h2>
    <HomeIntroducao />
    <HomeHabilidades />
  </div>
</template>

<script>
import HomeIntroducao from '../components/HomeIntroducao.vue'
import HomeHabilidades from '../components/HomeHabilidades.vue'

export default {
  name: 'Home',
  components: {
    HomeIntroducao,
    HomeHabilidades
}
}
</script>