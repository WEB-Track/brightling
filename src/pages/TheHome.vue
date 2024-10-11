  <script setup>
  import TheHero from '../components/Hero/TheHero.vue'
  import TwoColumn from '../components/TwoColumn.vue'
  import ThreeColumn from '../components/ThreeColumn.vue'
import FitnessRoom from '@/components/FitnessRoom.vue';
import GreatLoction from '@/components/GreatLoction.vue';
import FreeMeals from '@/components/FreeMeals.vue';
import { RouterLink } from 'vue-router';

  
  // export default {
  //   components: { TwoColumn, ThreeColumn, TheHero },
  // }

</script>

<template>
  <div class="home" id="thehome">
    <TheHero />
    <RouterView :to="twocol"></RouterView>
    <RouterView :to="threecol"></RouterView>
  </div>

</template>
