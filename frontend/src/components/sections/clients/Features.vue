<script setup>
import imagePlaceholder from '@/assets/phone.png'
import { ref, computed } from 'vue'

const features = [
  {
    subtitle: 'Descubre nuevos\nnegocios',
    desc:     'Explora servicios de belleza, salud, bienestar y más.\nTodo en un solo lugar',
    imageSrc: imagePlaceholder,
    imageAlt: 'AppointMe Placeholder'
  },
  {
    subtitle: 'Agenda 100% online',
    desc:     'Olvídate de las llamadas y mensajes sin respuesta.\n¡Elige la hora y confirma en segundos!',
    imageSrc: imagePlaceholder,
    imageAlt: 'AppointMe Placeholder'
  },
  {
    subtitle: 'Recibe notificaciones',
    desc:     'Confirma tu cita y recibe recordatorios automáticos.\nNunca más olvides una cita importante.',
    imageSrc: imagePlaceholder,
    imageAlt: 'AppointMe Placeholder'
  },
  {
    subtitle: 'Comparte tu experiencia',
    desc:     'Califica y deja reseñas de tus citas.\nAyuda a otros a encontrar los mejores servicios.',
    imageSrc: imagePlaceholder,
    imageAlt: 'AppointMe Placeholder'
  }
]

const subtitleWithBreaks = subtitle => subtitle.replace(/\n/g, '<br/>')
const descWithBreaks = desc => desc.replace(/\n/g, '<br/>')

const activeIndex = ref(0)
</script>

<template>
  <section class="py-16 px-4 md:px-8 mx-4 md:mx-8" id="features">
    <div class="flex flex-col items-center max-w-5xl mx-auto">
      <!-- Section Title -->
      <h2 class="text-3xl font-bold text-center mb-12 font-title text-primary">
        ¿Qué puedes hacer con AppointMe?
      </h2>

      <!-- Features List -->
      <div class="flex flex-wrap gap-8 justify-center w-full clients-features__list">
        <div
          v-for="(item, i) in features"
          :key="i"
          class="flex flex-row items-center justify-between gap-8 w-full mb-8 p-6 last:mb-0 hover:border-primary hover:border-2 transition-all duration-50 rounded-2xl shadow-md"
        >
          <!-- Text Content -->
          <div class="flex-1 min-w-[220px] md:min-w-[280px] text-left">
            <h3
              class="text-3xl font-semibold mb-4 text-indigo-700"
              v-html="subtitleWithBreaks(item.subtitle)"
            ></h3>
            <p class="text-text text-xl" v-html="descWithBreaks(item.desc)"></p>
          </div>

          <!-- Image Content -->
          <div class="flex-1 min-w-[180px] flex justify-center md:justify-end">
            <img
              :src="item.imageSrc"
              :alt="item.imageAlt"
              class="max-w-[320px] max-h-[320px]"
            />
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 900px) {
  .clients-features__list > div {
    flex-direction: column !important;
    gap: 1.5rem !important;
    align-items: center !important;
    text-align: center !important;
  }
  h2 {
    text-align: center !important;
    font-size: 1.25rem !important;
  }
  section {
    padding: 2.5rem 0.5rem !important;
    margin: 0 0.5rem !important;
  }
  img {
    max-width: 240px !important;
    max-height: 240px !important;
  }
}
</style>
