<template>
  <div class="bg-blue-300 p-6">
    <h2 class="text-2xl font-bold mb-6 text-center">Entre em Contato</h2>
    <FormularioDeContato/>
    <RedesSociais/>
  </div>
</template>

<script>
import FormularioDeContato from '../components/FormularioDeContato.vue'
import RedesSociais from '../components/RedesSociais.vue'

export default {
  name: 'Contato',
  components: {
    FormularioDeContato,
    RedesSociais
}
}
</script>