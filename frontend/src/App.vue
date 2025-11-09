<script setup>
// ---------------------------------------------------------------------
// Este watcher inserta dinámicamente la etiqueta <link rel="canonical">
// según la ruta activa. Así Google entiende cuál es la versión principal.
// ---------------------------------------------------------------------
import { watch } from 'vue'
import { useRoute } from 'vue-router'

// Obtener la ruta actual desde el router
const route = useRoute()

// Observar cada cambio de ruta y actualizar el <head>
watch(
  () => route.fullPath,
  () => {
    const canonicalUrl =
      route.meta.canonical ||
      `https://marketing.appointme.today${route.fullPath}`

    // Buscar si ya existe una etiqueta <link rel="canonical">
    let link = document.querySelector("link[rel='canonical']")
    if (!link) {
      // Si no existe, crearla y agregarla al <head>
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }

    // Actualizar el valor del href con la URL canónica correcta
    link.setAttribute('href', canonicalUrl)
  },
  { immediate: true }
)
</script>

<template>
  <!-- Renderiza la vista según la ruta actual -->
  <router-view />
</template>

<style>
/* Estilos globales opcionales */
</style>
