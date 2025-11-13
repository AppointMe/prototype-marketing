<script setup>
    import Navbar from '@/components/common/Navbar.vue'
    import BetaTestersFormSection from '@components/sections/beta-testers/BetaTestersFormSection.vue'
    import Footer from "@components/common/Footer.vue";
</script>

<template>
    <div class="flex flex-col items-center justify-start min-h-screen bg-white">
        <Navbar />
        <BetaTestersFormSection />
        <Footer />
    </div>
</template>