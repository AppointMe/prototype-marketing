<script setup>
import FaqItem from '@/components/common/FaqItem.vue'
import faqIllustration from '@/assets/trompeta.png'
import { ref } from 'vue'

const faqs = ref([
  {
    question: '¿Necesito crear una cuenta para agendar una cita?',
    answer: 'Sí. Para agendar una cita necesitás crear una cuenta gratuita en AppointMe. Esto te permite llevar control de tus reservas, recibir recordatorios, y comunicarte directamente con los negocios.'
  },
  {
      question: '¿Qué beneficios obtengo al registrar mi negocio?',
      answer: 'Tu negocio gana visibilidad frente a cientos de usuarios que buscan servicios como el tuyo. Además, podés gestionar tus citas, controlar la disponibilidad y mucho más.'
    },
  {
    question: '¿Puedo registrar más de un servicio o sucursal?',
    answer: 'Sí. Desde tu cuenta podés administrar varios servicios, colaboradores o sucursales, todo desde un mismo perfil. Ideal para salones, clínicas, talleres o cualquier negocio con varios puntos de atención.'
  },
  {
    question: '¿Qué hago si quiero cambiar o cancelar una cita?',
    answer:   'Solo ingresá a “Mis citas”, seleccioná la cita que querés ajustar y elegí “Editar” o “Cancelar”.'
  },
  {
    question: '¿Qué pasa si llego tarde a mi cita?',
    answer:   'Cada negocio maneja su propia política, pero la mayoría permite un margen de tolerancia. Si sabés que no llegarás, podés avisar desde la app para evitar penalizaciones o reagendar fácilmente.'
  }
])
</script>

<template>
  <section class="clients-faqs" id="faq">
    <!-- Sección de encabezado con título y subrayado -->
    <div class="clients-faqs__header">
      <h2 class="text-3xl font-bold text-center mb-12 font-title text-primary">FAQs</h2>
      <div class="clients-faqs__underline"></div>
    </div>

    <!-- Contenedor principal: dos columnas horizontales -->
    <div class="clients-faqs__inner">
      <!-- Columna de información e imagen -->
      <div class="clients-faqs__info">
        <p class="clients-faqs__desc">
          Con AppointMe, agendar citas y descubrir nuevos servicios es más fácil que nunca. Aquí respondemos tus preguntas más comunes:
        </p>
        <img
          class="clients-faqs__image"
          :src="faqIllustration"
          alt="Ilustración FAQs"
        />
      </div>

      <!-- Columna del componente de FAQs -->
      <div class="clients-faqs__card">
        <div class="faq-card">
          <div class="faq-card__header">
            <span>¿Tienes dudas? Estamos aquí para ayudarte.</span>
          </div>
          <div class="faq-card__list">
            <FaqItem
              v-for="(f, i) in faqs"
              :key="i"
              :question="f.question"
              :answer="f.answer"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.clients-faqs {
  padding: 4rem;
}

/* Encabezado con título y barra */
.clients-faqs__header {
  text-align: left;
  max-width: 1200px;
  margin: 0 auto 2rem;
}
.clients-faqs__title {
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
}
.clients-faqs__underline {
  width: 4rem;
  height: 0.25rem;
  background: var(--purple);
  border-radius: 2px;
  margin-top: 0.5rem;
}

/* Contenedor de dos columnas */
.clients-faqs__inner {
  display: flex;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
}

/* Columna de info */
.clients-faqs__info {
  flex: 1 1 45%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.clients-faqs__desc {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-gray);
}
.clients-faqs__image {
  max-width: 50%;
  height: auto;
  border-radius: 1rem;
}

/* Columna de tarjeta */
.clients-faqs__card {
  flex: 1 1 45%;
  min-width: 300px;
}
.faq-card {
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.faq-card__header {
  background-color: purple;
  padding: 1rem;
  color: #fff;
  font-weight: 600;
}
.faq-card__list {
  background: #fff;
}
</style>
