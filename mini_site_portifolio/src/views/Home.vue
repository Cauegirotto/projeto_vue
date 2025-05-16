<template>
  
  <div class="bg-blue-300 p-6 h-screen w-full">
    <h2 class="text-2xl font-bold mb-6 text-center ">Bem-vindo ao Meu Portifólio</h2>
    <HomeIntroducao />
  </div>
</template>

<script>
import HomeIntroducao from '../components/HomeIntroducao.vue'

export default {
  name: 'Home',
  components: {
    HomeIntroducao,
}
}
</script>