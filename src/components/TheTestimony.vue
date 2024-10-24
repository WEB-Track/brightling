<script setup>
import CarouselSlider from './CarouselSlider.vue';
import TestimonyCard from './TestimonyCard.vue';
</script>

<template>
 <section class="testimony" id="testimony">
  <div id="cardsmall" class="max-md:hidden">
   <TestimonyCard/>
  </div>
  <div id="testimonycarousel" class="cardlarge md:hidden">
    <CarouselSlider/>
  </div>
 </section>
</template>