<script setup>
// Formulario para beta testers
import { ref } from 'vue'
import pb from '@/lib/pocketbase'

// Campos del formulario
const nombre = ref('')
const apellido = ref('')
const email = ref('')
const nombreNegocio = ref('')
const descripcionNegocio = ref('')

// Estados UI
const loading = ref(false)
const success = ref(false)
const errorMsg = ref('')

// Config: nombre de la colección (permite override por .env)
const COLLECTION = import.meta.env.VITE_BETA_TESTERS_COLLECTION || 'beta_testers'

function reset() {
	nombre.value = ''
	apellido.value = ''
	email.value = ''
	nombreNegocio.value = ''
	descripcionNegocio.value = ''
}

function validate() {
	if (!nombre.value.trim()) return 'El nombre es requerido'
	if (!apellido.value.trim()) return 'El apellido es requerido'
	if (!email.value.trim()) return 'El correo es requerido'
	// Regex simple para email
	const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
	if (!emailRegex.test(email.value)) return 'Correo inválido'
	return null
}

async function submit() {
	errorMsg.value = ''
	success.value = false
	const validationError = validate()
	if (validationError) {
		errorMsg.value = validationError
		return
	}
	loading.value = true
	try {
		// Adapt payload keys to PocketBase schema
		// New fields: name, lastname, business_name, business_description, email_address
		await pb.collection(COLLECTION).create({
			name: nombre.value.trim(),
			lastname: apellido.value.trim(),
			email_address: email.value.trim(),
			business_name: nombreNegocio.value.trim() || null,
			business_description: descripcionNegocio.value.trim() || null,
		})
		success.value = true
		reset()
	} catch (err) {
		console.error(err)
		const status = err?.status || err?.response?.status || err?.data?.code
		if (status === 403) {
			errorMsg.value = 'Esta colección no permite crear registros públicos. En PocketBase habilita la regla "Create" para acceso sin autenticación.'
		} else if (status === 422) {
			// Validación de campos en PocketBase
			const fieldErr = err?.data?.data && Object.values(err.data.data)[0]?.message
			errorMsg.value = fieldErr || 'Datos inválidos. Revisa los campos.'
		} else {
			errorMsg.value = err?.message || 'Error al enviar. Intenta de nuevo.'
		}
	} finally {
		loading.value = false
	}
}
</script>

<template>
	<section class="w-full max-w-3xl mx-auto mt-40 mb-16 px-6">
		<h1 class="text-4xl font-extrabold text-indigo-600 mb-4 text-center">Únete como Beta Tester</h1>
		<p class="text-lg text-gray-600 mb-8 text-center">
			Completa el formulario para participar en las pruebas iniciales de AppointMe y recibir novedades antes que nadie.
		</p>

		<form @submit.prevent="submit" class="grid gap-6 bg-white p-8 rounded-2xl shadow-md">
			<div class="grid md:grid-cols-2 gap-6">
				<div class="flex flex-col gap-2">
					<label class="text-sm font-semibold text-gray-700" for="nombre">Nombre *</label>
					<input id="nombre" v-model="nombre" type="text" class="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tu nombre" required />
				</div>
				<div class="flex flex-col gap-2">
					<label class="text-sm font-semibold text-gray-700" for="apellido">Apellido *</label>
					<input id="apellido" v-model="apellido" type="text" class="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tu apellido" required />
				</div>
			</div>
			<div class="flex flex-col gap-2">
				<label class="text-sm font-semibold text-gray-700" for="email">Correo electrónico *</label>
				<input id="email" v-model="email" type="email" class="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="tu@correo.com" required />
			</div>
			<div class="flex flex-col gap-2">
				<label class="text-sm font-semibold text-gray-700" for="nombreNegocio">Nombre del negocio (opcional)</label>
				<input id="nombreNegocio" v-model="nombreNegocio" type="text" class="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Ej. Mi Barbería" />
			</div>
			<div class="flex flex-col gap-2">
				<label class="text-sm font-semibold text-gray-700" for="descripcionNegocio">Descripción del negocio (opcional)</label>
				<textarea id="descripcionNegocio" v-model="descripcionNegocio" rows="4" class="border rounded-lg p-3 resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Cuéntanos brevemente sobre tu negocio"></textarea>
			</div>

			<div class="flex flex-col gap-4">
				<button type="submit" :disabled="loading" class="bg-gradient-to-r from-indigo-500 to-pink-500 disabled:opacity-60 text-white px-6 py-3 rounded-lg font-semibold shadow hover:shadow-lg transition-all">
					<span v-if="!loading">Enviar solicitud</span>
					<span v-else>Enviando...</span>
				</button>
				<p v-if="errorMsg" class="text-sm text-red-600">{{ errorMsg }}</p>
				<p v-if="success" class="text-sm text-green-600">¡Gracias! Hemos recibido tu solicitud. Te contactaremos pronto.</p>
			</div>
			<p class="text-xs text-gray-400 text-center">Tus datos serán usados únicamente para contactarte sobre el programa beta de AppointMe.</p>
		</form>
	</section>
</template>

<style scoped>
section { scroll-margin-top: 6rem; }
</style>
