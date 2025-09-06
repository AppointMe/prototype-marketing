<script setup>
  import Navbar from '@/components/common/Navbar.vue'
  import Hero from '@components/sections/clients/Hero.vue'
  import Features from '@components/sections/clients/Features.vue'
  import Testimonials from '@components/sections/clients/Testimonials.vue'
  import Faqs from '@components/sections/clients/Faqs.vue'
  import Footer from "@components/common/Footer.vue";
</script>

<template>
  <div class="flex flex-col items-center justify-start h-screen bg-white">
    <Navbar />
    <Hero />
    <Features />
    <Testimonials />
    <Faqs />
    <Footer />
  </div>
</template>

