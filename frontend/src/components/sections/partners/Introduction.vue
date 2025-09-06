<script setup>

</script>

<template>
  <section class="my-16 py-8 px-4 max-w-7xl bg-white">
    <div class="container mx-auto px-4 flex flex-row lg:flex-col items-center gap-12">
      <!-- Text Content -->
      <div class="lg:w-1/2">
        <!-- Línea decorativa -->
        <div class="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mb-6"></div>

        <h2 class="text-4xl font-bold text-gray-900 mb-6 font-title leading-snug">
          Digitalizamos tu negocio<br/>
          y transformamos tus ganancias.
        </h2>

        <p class="text-lg text-gray-600 font-body mb-6">
          Somos <span class="text-primary font-semibold">AppointMe</span>, una empresa dedicada a digitalizar los
          pequeños y medianos negocios, brindándoles visibilidad digital, exponiéndolos a un mercado más amplio y
          estableciendo una relación cercana y duradera entre tú y tus clientes.
        </p>

        <a
            href="#"
            class="text-primary font-medium inline-flex items-center hover:underline"
        >
          Ver más información
          <span class="ml-2 text-xl">→</span>
        </a>
      </div>

      <!-- Video Thumbnail -->
      <div class="lg:w-1/2 relative group">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"
           class="block overflow-hidden rounded-3xl shadow-lg">
          <img
              src="/src/assets/hero.png"
              alt="Video preview"
              class="w-full h-auto object-cover"
          />
        </a>

        <!-- Play button -->
        <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            class="absolute inset-0 flex items-center justify-center"
        >
          <div
              class="w-16 h-16 rounded-full bg-white/80 backdrop-blur-md border-2 border-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          >
            <svg
                class="w-6 h-6 text-purple-700"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
              <path
                  fill-rule="evenodd"
                  d="M6.5 5.5v9l7-4.5-7-4.5z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Responsive styles for mobile devices */
@media (max-width: 768px) {
  .container {
    flex-direction: column !important;
    gap: 2rem !important;
    padding: 0 !important;
  }

  .lg\:w-1\/2 {
    width: 100% !important;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 2rem !important;
    text-align: center !important;
  }

  p {
    text-align: center !important;
  }

  a.text-primary {
    justify-content: center;
    display: flex;
  }

  .relative.group {
    width: 100% !important;
    display: flex;
    justify-content: center;
  }

  .relative.group img {
    width: 90vw;
    max-width: 350px;
    height: auto;
  }
}
</style>