<template>
  <div class="feature-item">
    <div class="feature-item__text">
      <h3 class="feature-item__subtitle" v-html="subtitleWithBreaks"></h3>
      <p class="feature-item__desc">{{ desc }}</p>
    </div>
    <div class="feature-item__image">
      <img :src="imageSrc" :alt="imageAlt" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  subtitle: { type: String, required: true },
  desc:      { type: String, required: true },
  imageSrc:  { type: String, required: true },
  imageAlt:  { type: String, default: '' },
})

const subtitleWithBreaks = computed(() =>
  props.subtitle.replace(/\n/g, '<br/>')
)
</script>

<style scoped>
.feature-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.feature-item__text {
  flex: 1 1 40%;
  min-width: 280px;
}
.feature-item__subtitle {
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1rem;
}
.feature-item__desc {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-gray);
}

.feature-item__image {
  min-width: 300px;
  text-align: right;
  width: auto;
}
.feature-item__image img {
  max-width: 100%;
  max-height: 400px;
  height: auto;
  border-radius: 1rem;
}
</style>
