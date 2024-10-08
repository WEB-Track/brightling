<script setup>
 import {BuildingOfficeIcon} from '@heroicons/vue/24/solid'
</script>


<template>
 <div class="bg-orange-300 content-center h-full w-full py-12">
 <div class="icon-heroincon_center">
  <BuildingOfficeIcon class="size-10 md:size-20"/>
 </div>
  <h3 class="text-xl font-bold text-black  text-center pb-9 lg:text-2xl">
  Fitness Room
  </h3>
  <p class="text-center px-6 font-semibold">
   We have a complete fitness center.
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