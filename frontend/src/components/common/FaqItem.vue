<template>
  <div class="faq-item">
    <button class="faq-item__button" @click="toggle" :aria-expanded="open">
      <span class="faq-item__question">{{ question }}</span>
      <svg
        class="faq-item__icon"
        :class="{ 'faq-item__icon--open': open }"
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round"
      >
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </button>
    <div v-if="open" class="faq-item__content">
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  question: { type: String, required: true },
  answer:   { type: String, required: true }
})

const open = ref(false)
function toggle() {
  open.value = !open.value
}
</script>

<style scoped>
.faq-item + .faq-item {
  border-top: 1px solid var(--gray-light);
}

.faq-item__button {
  width: 100%;
  background: none;
  border: none;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.faq-item__question {
  font-size: 1rem;
  color: var(--text-dark);
}

.faq-item__icon {
  transition: transform 0.3s ease;
}
.faq-item__icon--open {
  transform: rotate(180deg);
}

.faq-item__content {
  padding: 0 1rem 1rem;
  font-size: 0.95rem;
  color: var(--text-gray);
}
</style>
