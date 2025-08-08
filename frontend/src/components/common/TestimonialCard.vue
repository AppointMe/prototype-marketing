<template>
  <div class="testimonial-card">
    <blockquote class="testimonial-card__quote">“{{ quote }}”</blockquote>
    <p class="testimonial-card__author">{{ author }}</p>
  </div>
</template>

<script setup>
defineProps({
  quote:  { type: String, required: true },
  author: { type: String, required: true }
})
</script>

<style scoped>
.testimonial-card {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 2rem;
}
.testimonial-card__quote {
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}
.testimonial-card__author {
  font-weight: 600;
  color: var(--purple);
}
</style>
