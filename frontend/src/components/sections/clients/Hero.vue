<script setup lang="ts">

</script>

<template>
  <section class="my-16 py-8 px-4 bg-white flex flex-col max-w-7xl items-center" id="hero">
    <div class="container mx-auto px-4 flex flex-row items-center hero-container">
      <div class="w-1/2 text-center lg:text-left space-y-6 hero-text">
        <h2 class="text-4xl font-bold leading-snug">
          El mejor <span class="text-pink-500">marketplace de servicios</span> <br />
          <span class="text-black">y gestor de citas con</span> <span class="text-purple-500">AppointMe</span>
        </h2>
        <p class="text-gray-500">
          Descubre negocios cerca de ti. <br /> Elige el servicio que necesitas y reserva en segundos
        </p>
        <a href="#register" class="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:shadow-lg">
          ¡Regístrate!
        </a>
      </div>

      <div class="w-1/2 hero-image">
        <img src="../../../assets/hero.png" alt="AppointMe Ilustración" class="w-fit" />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Desktop styles remain as is, using Tailwind for desktop */

/* Responsive styles for mobile devices */
@media (max-width: 768px) {
  .hero-container {
    flex-direction: column !important;
    align-items: center !important;
    padding: 0 !important;
  }

  .hero-text {
    width: 100% !important;
    text-align: center !important;
    margin-bottom: 2rem;
  }

  .hero-image {
    width: 100% !important;
    display: flex;
    justify-content: center;
  }

  .hero-image img {
    width: 90vw;
    max-width: 350px;
    height: auto;
  }

  #hero {
    padding: 2rem 0.5rem !important;
    margin: 8rem 0 0 0 !important;
    max-width: 100vw !important;
  }
}
</style>