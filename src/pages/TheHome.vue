  <script setup>
    import TheHero from '../components/Hero/TheHero.vue'
    
    // 2 Column Component
    import TwoColumn from '../components/TwoColumn.vue'
    import TheHistory from '@/components/TheHistory.vue'
    import HomePhotoOne from '@/components/HomePhotoOne.vue'

    // 3 Column Component
    import ThreeColumn from '../components/ThreeColumn.vue'

    import FitnessRoom from '@/components/FitnessRoom.vue';
    import GreatLoction from '@/components/GreatLoction.vue';
    import FreeMeals from '@/components/FreeMeals.vue';

    import { RouterLink } from 'vue-router';

  
  // export default {
  //   components: [
  //     'threeColLeft',
  //     'threeColMiddle',
  //     'threeColRight',
  //     'twoColLeft',
  //     'twoColRight',
  //     'TwoColumn',
  //     'ThreeColumn',

  //   ]
  // }

</script>

<template>
  <div class="home" id="thehome">
    <TheHero/>
    <TwoColumn>
      <template #twoColLeft>
        <HomePhotoOne/>
      </template>
      <template #twoColRight>
        <TheHistory/>
      </template>
    </TwoColumn>
    <ThreeColumn>
      <template v-slot:threeColLeft>
        <GreatLoction/>
      </template>
      <template v-slot:threeColMiddle>
        <FreeMeals/>
      </template>
      <template v-slot:threeColRight>
        <FitnessRoom/>
      </template>
    </ThreeColumn>
  </div>

</template>
