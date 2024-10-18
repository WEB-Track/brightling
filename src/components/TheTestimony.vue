<script setup>
import TestimonyCard from './TestimonyCard.vue';
import TheCarousel from './TheCarousel.vue';
</script>

<template>
 <section class="testimony" id="testimony">
  <div id="cardsmall" class="max-md:hidden">
   <TestimonyCard/>
  </div>
  <div id="testimonycarousel" class="cardlarge md:hidden">
    <TheCarousel/>
  </div>
 </section>
</template>