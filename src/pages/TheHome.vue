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
  //   props: [
  //     'threeColLeft',
  //     'threeColMiddle',
  //     'threeColRight',
  //     'twoColLeft'
  //     'twoColRight'

  //   ]
  // }

</script>

<template>
  <div class="home" id="thehome">
    <TheHero/>
    <TwoColumn v-slot="twoColLeft">
      <HomePhotoOne/>
    </TwoColumn>
    <TwoColumn v-slot="twoColRight">
      <TheHistory/>
    </TwoColumn>
    <ThreeColumn v-slot="threeColLeft">
      <GreatLoction/>
    </ThreeColumn>
    <ThreeColumn v-slot="threeColMiddle">
      <FreeMeals/>
    </ThreeColumn>
    <ThreeColumn v-slot="threeColRight">
      <FitnessRoom/>
    </ThreeColumn>
  </div>

</template>
