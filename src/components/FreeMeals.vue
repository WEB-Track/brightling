<script setup>
 import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
</script>


<template>
 <div class="content-center h-full w-full py-12">
 <div class="icon-heroincon_center">
  <!-- <FontAwesomeIcon :icon="fa-utensils"/> -->
 </div>
  <h3 class="text-xl font-bold text-black  text-center pb-9 lg:text-2xl">
  Free Meals
  </h3>
  <p class="text-center px-6 font-semibold">
   Enjoy Continental Breakfast and Lunch.
  </p>
 </div>
</template>

<style lang="scss">
.icon-heroincon_center {
  padding-left: calc(50vw - 77px);
 
 @media screen and (min-width: 768px) {
  padding-left: calc(16vw - 30px);
 }
 }
</style>