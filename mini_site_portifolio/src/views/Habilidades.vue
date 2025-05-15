<template>
  <div>
    <h2 class="text-2xl font-bold mb-6 text-center">Meus Projetos</h2>
    <ListaDeHabilidades/>
    <DestaqueHabilidades/>
  </div>
</template>

<script>
import ListaDeHabilidades from '../components/ListaDeHabilidades.vue'
import DestaqueHabilidades from '../components/DestaqueHabilidades.vue'

export default {
  name: 'Habilidades',
  components: {
    ListaDeHabilidades,
    DestaqueHabilidades
}
}
</script>