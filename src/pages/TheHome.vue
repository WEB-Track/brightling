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
    <slot-comp v-slot:twoColLeft>
      <HomePhotoOne/>
    </slot-comp>
    <slot-comp v-slot:twoColRight>
      <TheHistory/>
    </slot-comp>
    <slot-comp v-slot:threeColLeft>
      <GreatLoction/>
    </slot-comp>
    <slot-comp v-slot:threeColMiddle>
      <FreeMeals/>
    </slot-comp>
    <slot-comp v-slot:threeColRight>
      <FitnessRoom/>
    </slot-comp>
  </div>

</template>
