<template>
  <div
    class="avatar-circle"
    :class="{ 'avatar-circle--active': active }"
    @click="$emit('select')"
  >
    <img :src="src" :alt="alt" />
  </div>
</template>

<script setup>
defineProps({
  src:    { type: String, required: true },
  alt:    { type: String, default: '' },
  active: { type: Boolean, default: false }
})
</script>

<style scoped>
.avatar-circle {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.2s;
}
.avatar-circle--active {
  transform: scale(1.1);
  opacity: 1;
  border: 2px solid var(--purple);
}
.avatar-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
