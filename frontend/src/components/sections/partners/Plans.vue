<script setup>

import pb from "@/lib/pocketbase"
import {ref, onMounted} from 'vue'

const plans = ref([])
const pocketbaseUrl = import.meta.env.VITE_POCKETBASE_URL

onMounted(async () => {
  try {
    plans.value = await pb.collection('partners_plans').getFullList({ sort: '-created' })
    // plan.title: string, plan.description: html
    console.log("Plans fetched successfully:", plans.value)
  } catch (err) {
    console.error("Error fetching plans:", err)
  }
})

</script>

<template>
  <section class="my-16 py-8 px-4 max-w-7xl bg-white">
    <div class="container mx-auto px-4">
      <!-- Título -->
      <div class="text-center mb-4">
        <h2 class="text-3xl md:text-4xl font-title font-bold text-gray-900">Nuestros planes</h2>
      </div>

      <!-- Lista de planes -->
      <div class="flex flex-col gap-12 max-w-7xl mx-auto">
        <div
            v-for="(plan, index) in plans"
            :key="plan.id"
            class="flex flex-row"
        >
          <!-- Texto -->
          <div
              class=" flex flex-col w-full rounded-2xl p-8 shadow-sm gap-2"
              :class="{
              'bg-violet-50': index === 0,
              'bg-green-50': index === 1,
              'bg-pink-50': index === 2
            }"
          >
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ plan.title }}</h3>
            <p
                class="text-gray-700 leading-relaxed mb-4"
                v-html="plan.description"
            ></p>
            <a
                href="#"
                class="text-primary font-semibold flex items-center gap-1 hover:underline"
            >
              Read more
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>