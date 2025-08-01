<script setup>
import { ref, onMounted } from 'vue'
import pb from "@/lib/pocketbase"

const test = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    test.value = await pb.collection('test').getFullList({ sort: '-created' })
  } catch (err) {
    error.value = err.message || String(err)
  } finally {
    loading.value = false
  }
})

</script>

<template>
  <div>
    <h1 class="text-text text-4xl font-heading">ClientsLanding</h1>
    <div v-if="loading">Cargando...</div>
    <div v-if="error" class="text-red-600">Error: {{ error }}</div>
    <ul v-if="!loading && !error">
      <li v-for="client in test" :key="client.id">{{ client.id }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>