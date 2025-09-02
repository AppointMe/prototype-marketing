<script setup>
import { ref } from 'vue'
import pb from "@/lib/pocketbase"

const features = ref([])
const pocketbaseUrl = import.meta.env.VITE_POCKETBASE_URL

const email = ref('')
const type = ref('')
const message = ref('')

const emit = defineEmits(['close'])

function submitForm() {
  if (!email.value || !type.value || !message.value) {
    alert('Por favor, llena todos los campos')
    return
  }

  pb.collection('contact_form').create({
    email: email.value,
    type: type.value,
    message: message.value
  }).then(() => {
    email.value = ''
    type.value = ''
    message.value = ''
    emit('close')
  }).catch((err) => {
    console.error('Error al enviar el mensaje:', err)
  })

  email.value = ''
  type.value = ''
  message.value = ''
  emit('close')
}
</script>

<template>
  <div
      class="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
      @click.self="emit('close')"
  >
    <div class="bg-white rounded-2xl p-6 mx-10 w-full shadow-xl max-w-7xl">
      <h2 class="text-2xl font-bold text-indigo-600 mb-4">Contáctanos</h2>
      <p class="text-lg text-gray-600 mb-4">
        ¿Tienes alguna pregunta o necesitas más información? Envíanos un mensaje y nos pondremos en contacto contigo lo antes posible.
        <br/><br/>
        Si lo que deseas es mantenerte al día con nuestras novedades, próximamente lanzaremos nuestro newsletter.
        Manda un mensaje con 'Newsletter' en el asunto y te añadiremos a la lista de correos.
      </p>
      <form @submit.prevent="submitForm" class="flex flex-col gap-4">
        <input
            v-model="email"
            type="email"
            placeholder="Tu correo electrónico"
            class="border rounded-lg p-3 w-full"
            required
        />

        <select
            v-model="type"
            class="border rounded-lg p-3 w-full text-gray-700"
            required
        >
          <option value="" disabled selected>Selecciona una opción</option>
          <option value="cliente">Soy un cliente</option>
          <option value="negocio">Tengo un negocio</option>
        </select>

        <textarea
            v-model="message"
            placeholder="Escribe tu mensaje"
            rows="4"
            class="border rounded-lg p-3 w-full"
            required
        ></textarea>

        <button
            type="submit"
            class="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90"
        >
          Enviar
        </button>
      </form>
    </div>
  </div>
</template>
