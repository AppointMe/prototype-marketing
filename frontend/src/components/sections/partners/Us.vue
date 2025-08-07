<script setup>
import pb from "@/lib/pocketbase"
import { ref, onMounted } from 'vue'

const teamMembers = ref([])
const pocketbaseUrl = import.meta.env.VITE_POCKETBASE_URL

onMounted(async () => {
  try {
    teamMembers.value = await pb.collection('team').getFullList({ sort: 'created' })
    // teamMember.name, teamMember.title, teamMember.picture
    console.log("Team members fetched successfully:", teamMembers.value)
  } catch (err) {
    console.error("Error fetching team members:", err)
  }
})
</script>

<template>
  <section class="my-16 py-8 px-4 max-w-7xl bg-white">
    <div class="container mx-auto px-4 text-center">
      <!-- Descripción -->
      <p class="text-gray-600 max-w-2xl mx-auto mb-12">
        AppointMe es una plataforma orientada a la transformación digital de pequeñas y medianas empresas, facilitando la gestión eficiente de citas, la visibilidad en línea y la comunicación directa con los clientes.
      </p>

      <!-- Título -->
      <h2 class="text-3xl md:text-4xl font-title font-bold text-gray-900 mb-4">Digitaliza tu tiempo</h2>
      <h3 class="text-xl md:text-2xl font-bold text-primary mb-8">conectá tu negocio</h3>

      <!-- Descripción -->
      <p class="text-gray-600 max-w-2xl mx-auto mb-12">
        Este emprendimiento surge como respuesta a la falta de organización digital y presencia web en este segmento empresarial,
        ofreciendo una propuesta innovadora, accesible y adaptable a las necesidades reales del mercado.
      </p>

      <!-- Carrusel de miembros del equipo -->
      <div class="overflow-x-auto scrollbar-hide">
        <div class="flex gap-6 lg:gap-12 px-2 min-w-max">
          <div
              v-for="member in teamMembers"
              :key="member.id"
              class="flex-shrink-0 w-60 bg-white rounded-3xl shadow-lg p-6 text-center"
          >
            <img
                :src="`${pocketbaseUrl}/api/files/team/${member.id}/${member.picture}`"
                :alt="member.name"
                class="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h4 class="text-lg font-semibold text-gray-900">{{ member.name }}</h4>
            <p class="text-sm text-gray-500">{{ member.title }}</p>
            <!-- Estrellas -->
            <div class="flex justify-center mt-2">
              <template v-for="i in 5" :key="i">
                <svg
                    class="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                  <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1
                    1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388
                    2.46a1 1 0 00-.364 1.118l1.287
                    3.966c.3.922-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0
                    00-1.176 0l-3.388 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1
                    1 0 00-.364-1.118l-3.388-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1
                    1 0 00.95-.69l1.287-3.967z"
                  />
                </svg>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
.scrollbar-hide {
  overflow-x: auto;
}
</style>