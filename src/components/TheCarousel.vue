<script>
 import sourceData from '@/assets/guests.json'
 
 export default {
  data(){
   return {
    guestsSay: sourceData.guests
   }
  },
  
 }

</script>

<template>
 <section id="thecarousel ">
  <TransitionGroup tag="div" class="relative">
   <div v-for="guestSay in guestsStay"
   <!-- @enter-cancelled="onEnterCancelled"  -->
   :key="guestSay.id"
   class="">
    <div class="w-full h-auto">
     <img :src="'/src/assets/images/'+ guestSay.image" alt="Guest" class="w-full h-auto">
    </div>
    <div class="bg-amber-200">
     <h3 class="text-2xl sm:text-3xl font-bold pt-8 px-3 text-center">
      What Our Guests Say
     </h3>
     <p class="text-center pt-5 px-5">
      {{ guestSay.comments }}
     </p>
     <h6 class="pt-2 pb-2 text-base sm:text-xl font-bold sm:font-semibold text-center">
      {{ guestSay.name }}
     </h6>
    </div>
   </div>
  </TransitionGroup>
 </section>
</template>

<style lang="scss">
 .v-enter-from
 .v-leave-to{
  opacity:0 ;
  z-index: 1;
  display: none;
 }

 .v-enter-to
 .v-leave-from{
  opacity:1 ;
  z-index: 0;
  display: block;
 }

 .v-enter-active
 .v-leave-active
 .v-move{
  transition: all 6s ease-in-out 8s;
  }

</style>
