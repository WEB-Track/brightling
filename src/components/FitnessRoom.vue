<script setup>
 import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
 import {faDumbbell} from '@fortawesome/free-solid-svg-icons'
</script>


<template>
 <div class="bg-orange-300 content-center h-full w-full py-12" id="fitnessroom">
 <div class="icon-heroincon_center">
  <FontAwesomeIcon :icon="faDumbbell" class="size-12 md:size-20" />
 </div>
  <h3 class="text-xl font-bold text-black  text-center pb-9 lg:text-2xl">
  Fitness Room
  </h3>
  <p class="text-center px-6 font-semibold">
   We have a complete fitness center.
  </p>
 </div>
</template>

