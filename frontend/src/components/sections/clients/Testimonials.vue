<!-- src/components/sections/clients/Testimonials.vue -->
<template>
  <section class="clients-testimonials" id="testimonials">
    <div class="clients-testimonials__inner">
      <!-- Título -->
      <h2 class="text-3xl font-bold text-center mb-12 font-title text-primary">
        Testimonios
      </h2>
      <div class="clients-testimonials__underline"></div>


      <!-- SOLO el TestimonialCard activo -->
      <TestimonialCard
        :quote="current.quote"
        :author="current.author"
      />

      <!-- Fila de avatares -->
      <div class="clients-testimonials__avatars">
        <AvatarCircle
          v-for="(t, i) in testimonials"
          :key="i"
          :src="t.avatar"
          :alt="t.author"
          :active="i === activeIndex"
          @select="activeIndex = i"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import AvatarCircle    from '@/components/common/AvatarCircle.vue'
import TestimonialCard from '@/components/common/TestimonialCard.vue'
import imgp            from '@/assets/mujersonriendo.png'

const testimonials = [
  {
    quote:  'Reservar una cita en el salón nunca había sido tan fácil!',
    author: 'Laura Marroquín - cliente frecuente',
    avatar: imgp
  },
  {
    quote:  '¡Me encanta la interfaz, súper intuitiva!',
    author: 'Ana Pérez - amante de la belleza',
    avatar: imgp
  },
  {
    quote:  'Los recordatorios automáticos me salvan de olvidos constantes.',
    author: 'Carlos Méndez - usuario habitual',
    avatar: imgp
  },
  {
    quote:  'La variedad de servicios es impresionante, ¡todo en un solo lugar!',
    author: 'María López - nueva clienta',
    avatar: imgp
  },
  {
    quote:  'La atención al cliente es excepcional, siempre dispuestos a ayudar.',
    author: 'Pedro González - cliente satisfecho',
    avatar: imgp
  },
  {
    quote:  'La atención al cliente es excepcional, siempre dispuestos a ayudar.',
    author: 'Pedro González - cliente satisfecho',
    avatar: imgp
  }
]

const activeIndex = ref(0)

// Computed para el testimonio actual
const current = computed(() => testimonials[activeIndex.value])
</script>

<style scoped>
.clients-testimonials {
  padding: 4rem 1rem;
  margin: 0 2rem;
}
.clients-testimonials__inner {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

/* Título y línea */
.clients-testimonials__title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.clients-testimonials__underline {
  width: 4rem;
  height: 0.25rem;
  background: var(--purple);
  border-radius: 2px;
  margin: 0 auto 1.5rem;
}
.clients-testimonials__subtitle {
  font-style: italic;
  color: var(--text-gray);
  margin-bottom: 2rem;
}

/* Avatares */
.clients-testimonials__avatars {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Tamaños de avatar */
::v-deep(.clients-testimonials__avatars .avatar-circle) {
  width: 3rem;
  height: 3rem;
}
::v-deep(.clients-testimonials__avatars .avatar-circle--active) {
  width: 5rem;
  height: 5rem;
  border-width: 2px;
}
</style>
