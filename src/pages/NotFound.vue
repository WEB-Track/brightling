<script setup>
 import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
 import{faBan, faNotdef} from '@fortawesome/free-solid-svg-icons'
 import{faDumbbell} from '@fortawesome/free-solid-svg-icons'
</script>

<template>
 <section id="notfound" class="notfound h-[85vh]">
  <div class="">
   <h1 class="text-5xl pt-24 pl-24 pb-10 font-extrabold">
    <FontAwesomeIcon :icon="faBan" class="size-16 text-red-600"/>
    404 Page Not Found
   </h1>
   <p class="text-2xl font-bold pl-24">
    Sorry, this page could not be found!!! 
    <RouterLink class="text-amber-500 hover:opacity-35" to="/">Click Here</RouterLink> to Home Page
   </p>
  </div>
 </section>
</template>