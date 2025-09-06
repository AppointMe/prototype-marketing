<script setup>
import FeatureComponent from '@/components/common/FeatureComponent.vue'
import imagePlaceholder from '@/assets/phone.png'
import { ref } from 'vue'

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

const activeIndex = ref(0)
</script>

<template>
  <section class="py-16 px-4 md:px-8 mx-4 md:mx-8" id="features">
    <div class="flex flex-col items-center max-w-5xl mx-auto">
      <!-- FEATURES -->
      <h2 class="text-3xl font-bold text-center mb-12 font-title text-primary">
        ¿Qué puedes hacer con AppointMe?
      </h2>
      <div class="flex flex-wrap gap-8 justify-center clients-features__list">
        <FeatureComponent
          v-for="(item, i) in features"
          :key="i"
          :subtitle="item.subtitle"
          :desc="item.desc"
          :imageSrc="item.imageSrc"
          :imageAlt="item.imageAlt"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 900px) {
  .clients-features__list {
    flex-direction: column !important;
    gap: 1.5rem !important;
    align-items: center !important;
  }
  h2 {
    text-align: center !important;
    font-size: 1.25rem !important;
  }
  h2::after {
    margin-left: auto !important;
    margin-right: auto !important;
  }
  section {
    padding: 2.5rem 0.5rem !important;
    margin: 0 0.5rem !important;
  }
}
</style>
