<script setup>
import { useRoute } from 'vue-router';

import GreatLoction from '@/components/GreatLoction.vue'
import FitnessRoom from '@/components/FitnessRoom.vue'
import FreeMeals from '@/components/FreeMeals.vue';

// export default {
//   setup() {
//     const route = useRoute();
//     const id = route.params.id; 

//     return { id };
//   }

//  components: { GreatLoction }
// }
// </script>

<template>
 <div class="flex flex-col md:flex-row">
  <div class="w-full min-h-32 h-60 md:h-80">
   <RouterView :to="threecol-left"/>
  </div>
  <div class="w-full min-h-32 h-60 md:h-80">
   <RouterView :to="threecol-middle"/>
  </div>
  <div class="w-full min-h-32 h-60 md:h-80">
   <RouterView :to="threecol-right"/>
  </div>
 </div>
</template>