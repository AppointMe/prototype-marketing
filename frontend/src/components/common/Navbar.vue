<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const secondButton = computed(() => {
  if (route.path === '/clients') {
    return { label: '¿Tienes un negocio?', href: '/partners' }
  } else if (route.path === '/partners') {
    return { label: '¿Eres un cliente?', href: '/clients' }
  }
  return null
})
</script>

<template>
  <header class="fixed top-0 left-0 w-full bg-white shadow z-50">
    <nav class="mx-4 my-2 px-4 py-3 flex justify-between items-center">
      <h1 class="text-4xl font-bold font-heading">
        <a href="#hero" class="flex items-center">
          <span class="text-indigo-700">Appoint</span><span class="text-pink-500">Me</span>
        </a>
      </h1>
      <ul class="flex flex-row justify-evenly w-1/2 gap-6 text-text text-lg font-bold">
        <li><a href="#features" class="hover:text-indigo-500">¿Qué ofrecemos?</a></li>
        <li><a href="#about" class="hover:text-indigo-500">¿Quiénes somos?</a></li>
        <li><a href="#plans" class="hover:text-indigo-500">Planes</a></li>
        <li><a href="#demo" class="hover:text-indigo-500">Demo</a></li>
      </ul>

      <div class="flex gap-4">
        <a
            v-if="secondButton"
            :href="secondButton.href"
            class="bg-white border border-indigo-500 text-indigo-500 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-50"
        >
          {{ secondButton.label }}
        </a>
        <a href="#contact" class="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
          Contáctanos
        </a>
      </div>

    </nav>
  </header>
</template>

<style scoped>

</style>