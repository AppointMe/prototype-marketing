<script setup>
import pb from "@/lib/pocketbase"
import { ref, onMounted } from 'vue'
import demoImg from '@/assets/demo.png'

const ceo = ref({})
const pocketbaseUrl = import.meta.env.VITE_POCKETBASE_URL

onMounted(async () => {
  try {
    ceo.value = await pb.collection('team').getOne('aii83t2otn18y8k')
    // teamMember.name, teamMember.title, teamMember.picture
    console.log("CEO fetched successfully:", ceo.value)
  } catch (err) {
    console.error("Error fetching CEO:", err)
  }
})
</script>

<template>
  <section class="my-16 py-8 px-4 max-w-7xl bg-white" id="demo">
    <div class="container mx-auto px-4 text-center">
      <!-- Título -->
      <h2 class="text-2xl md:text-3xl font-bold text-center mb-12">
        ¿Quieres probar un demo?
      </h2>

      <!-- Contenido -->
      <div class="flex flex-row items-center justify-center gap-12 lg:gap-24">
        <!-- Texto -->
        <div class="lg:w-1/2 text-center lg:text-left">
          <h3 class="text-xl font-semibold mb-4">
            Se de los primeros clientes en probar nuestra solución
          </h3>
          <p class="text-gray-600 mb-6">
            Ponte en contacto con nosotros y agenda una demostración con nuestro equipo.
            Te demostraremos lo útil que es AppointMe, y como puede ayudar a tu negocio crecer.
          </p>

          <!-- Cita -->
          <blockquote class="border-l-4 border-pink-400 pl-4 italic text-pink-500 mb-6">
            "Donec rutrum, purus eget sollicitudin laoreet, sem magna condimentum arcu,
            eget ultrices quam nibh vel ante."
          </blockquote>

          <!-- Autor -->
          <div class="flex items-center gap-3">
            <img
                :src="`${pocketbaseUrl}/api/files/team/${ceo.id}/${ceo.picture}`"
                alt="Mark Albrand"
                class="w-10 h-10 rounded-full"
            />
            <div>
              <p class="font-semibold">Mark Albrand</p>
              <p class="text-sm text-gray-500">CEO</p>
            </div>
          </div>
        </div>

        <!-- Imagen -->
        <div class="lg:w-1/2">
          <img
              :src="demoImg"
              alt="Equipo presentando"
              class="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
