<template>
  <section class="bg-gray-200 p-4 rounded-lg mb-6">
    <h3 class="text-lg font-semibold mb-2">Formulário de Contato</h3>
    <form class="flex flex-col gap-3">
      <input type="text" placeholder="Seu Nome" class="border p-2 rounded" />
      <input type="email" placeholder="Seu E-mail" class="border p-2 rounded" />
      <textarea placeholder="Sua Mensagem" class="border p-2 rounded h-24"></textarea>
      <button type="submit" class="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Enviar</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'FormularioDeContato'
}
</script>