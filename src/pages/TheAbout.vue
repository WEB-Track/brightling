<script setup>
import AboutHotel from '@/components/AboutHotel.vue';
import AboutPhoto from '@/components/AboutPhoto.vue';
import TheTestimony from '@/components/TheTestimony.vue';
import TwoColumn from '@/components/TwoColumn.vue';
</script>

<template>
 <section class="theabout" id="theabout">
  <div class="bg-gray-100  static twocolumn_height">
   <TwoColumn>
    <template v-slot:twoColLeft>
     <AboutHotel/>
    </template>
    <template v-slot:twoColRight>
     <AboutPhoto/>
    </template>
   </TwoColumn>
  </div>
  <TheTestimony/>
 </section>
</template>