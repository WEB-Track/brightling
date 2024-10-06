  <script>
  import TheHero from '../components/Hero/TheHero.vue'
  import TwoColumn from '../components/TwoColumn.vue'
  import ThreeColumn from '../components/ThreeColumn.vue'
  
  export default {
    components: { TwoColumn, ThreeColumn, TheHero },
  }
</script>

<template>
  <div class="home">
    <TheHero />
    <TwoColumn />
    <ThreeColumn />
  </div>

</template>
