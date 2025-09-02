<script setup>

import pb from "@/lib/pocketbase"
import {ref, onMounted} from 'vue'

const features = ref([])
const pocketbaseUrl = import.meta.env.VITE_POCKETBASE_URL

onMounted(async () => {
  try {
    features.value = await pb.collection('partners_features').getFullList({ sort: '-created' })
    // feature.title, feature.description, feature.icon
    console.log("Features fetched successfully:", features.value)
  } catch (err) {
    console.error("Error fetching features:", err)
  }
})

function getImageUrl(feature) {
  return `${pocketbaseUrl}/api/files/partners_features/${feature.id}/${feature.icon}`
}

</script>

<template>
  <section class="my-16 py-8 px-4 max-w-7xl bg-white" id="features">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 font-title text-primary">¿Qué ofrecemos?</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
            v-for="feature in features"
            :key="feature.id"
            class="bg-white p-6 rounded-2xl shadow-md text-center hover:border-primary hover:border-2 transition-all duration-300"
        >
          <div class="flex justify-center mb-4">
            <img :src="getImageUrl(feature)" alt="Icono" class="h-12 w-12 object-contain" />
          </div>
          <h3 class="text-lg font-semibold font-title mb-2 text-secondary">
            {{ feature.title }}
          </h3>
          <p class="text-sm font-body text-text" v-html="feature.description"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>