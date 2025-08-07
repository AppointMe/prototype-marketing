<script setup>
  import Navbar from '@/components/common/Navbar.vue'
  import Hero from '@components/sections/partners/Hero.vue'
  import Features from '@components/sections/partners/Features.vue'
  import Introduction from "@components/sections/partners/Introduction.vue";
</script>

<template>
  <div class="flex flex-col items-center justify-start h-screen bg-white">
    <Navbar />
    <Hero />
    <Features />
    <Introduction />
  </div>
</template>

<style scoped>
</style>