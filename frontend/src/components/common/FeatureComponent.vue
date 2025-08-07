<template>
  <div class="feature-item">
    <div class="feature-item__text">
      <!-- permitimos saltos de línea con \n -->
      <h3 class="feature-item__subtitle" v-html="subtitleWithBreaks"></h3>
      <p class="feature-item__desc">{{ desc }}</p>
    </div>
    <div class="feature-item__image">
      <img :src="imageSrc" :alt="imageAlt" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureComponent',
  props: {
    subtitle: { type: String, required: true },
    desc:     { type: String, required: true },
    imageSrc: { type: String, required: true },
    imageAlt: { type: String, default: '' },
  },
  computed: {
    subtitleWithBreaks() {
      // reemplaza '\n' por un <br/>
      return this.subtitle.replace(/\n/g, '<br/>');
    }
  }
}
</script>

<style scoped>
.feature-item {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

/* TEXTO */
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

/* IMAGEN */
.feature-item__image {
  flex: 1 1 30%;
  min-width: 300px;
  text-align: right;
  margin-left: auto;
}
.feature-item__image img {
    /* Ancho máximo de 300px, alto máximo de 400px */
    max-width: 300px;
    max-height: 400px;

    /* Opcional: para que la imagen conserve proporciones y recorte si supera el contenedor */
    object-fit: cover;

    /* Si quieres que reduzca pero no crezca más allá de sus dimensiones originales */
    width: auto;
    height: auto;

    border-radius: 1rem;
}
</style>
