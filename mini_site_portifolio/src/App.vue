<template>
  <div class="min-h-screen bg-blue-300">
    <header class="bg-white shadow">
      <nav class="max-w-3xl mx-auto p-4 flex justify-between">
        <h1 class="text-xl font-bold text-600">Mini Site Portifólio</h1>
        <div class="flex gap-4">
          <router-link to="/" class="text-600 hover:underline">Home</router-link>
          <router-link to="/habilidades" class="text-600 hover:underline">Habilidades</router-link>
          <router-link to="/contato" class="text-600 hover:underline">Contato</router-link>
        </div>
      </nav>
    </header>
    <main class="max-w-3xl mx-auto p-4 mt-8">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


