  <script setup>
  import { reactive } from 'vue';
  import TheHero from '../components/Hero/TheHero.vue'
  import TwoColumn from '../components/TwoColumn.vue'
  import ThreeColumn from '../components/ThreeColumn.vue'
import FitnessRoom from '@/components/FitnessRoom.vue';
import GreatLoction from '@/components/GreatLoction.vue';
import FreeMeals from '@/components/FreeMeals.vue';

  
  // export default {
  //   components: { TwoColumn, ThreeColumn, TheHero },
  // }

  const {threeCol} = reactive([
    {id: 1, name: GreatLoction.vue},
    {id: 2, name: FreeMeals.vue},
    {id: 3, name: FitnessRoom.vue},
  ])
</script>

<template>
  <div class="home">
    <TheHero />
    <TwoColumn />
    <ThreeColumn />
  </div>

</template>
