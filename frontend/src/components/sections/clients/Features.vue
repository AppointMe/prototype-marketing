<script setup>
import FeatureComponent from '@/components/common/FeatureComponent.vue'
import AvatarCircle from '@/components/common/AvatarCircle.vue'
import TestimonialCard from '@/components/common/TestimonialCard.vue'
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
  <section class="clients-features">
    <div class="clients-features__inner">
      <!-- FEATURES -->
      <h2 class="clients-features__title">
        ¿Qué puedes hacer con AppointMe?
      </h2>

      <div class="clients-features__list">
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
.clients-features {
  padding: 4rem 1rem;
  margin: 0 2rem;
}
.clients-features__inner {
  max-width: 1200px;
  margin: 0 auto;
}

/* FEATURES TITLE */
.clients-features__title {
  font-size: 2rem;
  font-weight: 600;
  text-align: left;
  margin-bottom: 2rem;
  position: relative;
}
.clients-features__title::after {
  content: '';
  display: block;
  width: 3rem;
  height: 0.25rem;
  background: var(--purple);
  margin-top: 0.5rem;
}

.clients-features__list {
  /* spacing handled by FeatureComponent margin-bottom */
}

/* DIVIDER */
.clients-features__divider {
  height: 1px;
  background: var(--gray-light);
  margin: 4rem 0;
}
</style>
