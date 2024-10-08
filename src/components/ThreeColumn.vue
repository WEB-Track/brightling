<script setup>
import GreatLoction from '@/components/GreatLoction.vue'
import FitnessRoom from '@/components/FitnessRoom.vue'
import FreeMeals from '@/components/FreeMeals.vue';

// export default {
//  components: { GreatLoction }
// }
</script>

<template>
 <div class="flex flex-col md:flex-row">
  <div class="w-full min-h-32 h-60 md:h-80">
   <GreatLoction/>
  </div>
  <div class="w-full min-h-32 h-60 md:h-80">
   <FreeMeals/>
  </div>
  <div class="w-full min-h-32 h-60 md:h-80">
   <FitnessRoom/>
  </div>
 </div>
</template>