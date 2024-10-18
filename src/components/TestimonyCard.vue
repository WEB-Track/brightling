<script>
 import sourceData from '@/assets/guests.json'

 export default {
  data(){
   return {
    guestsSay: sourceData.guests
   }
  }
 }

</script>

<template>
 <section id="testimonycard" class="cardsmall h-auto text-center">
   <div class="text-gray-100 text-4xl font-bold pt-12 mb-10 text-center">
    <h3>
     What Our Guests Say
    </h3>
   </div>
   <div v-for="guestSay in guestsSay" class="testimony-card bg-amber-300 flex w-10/12 p-5 rounded-lg mb-12 mx-auto">
    <img :src="'/src/assets/images/'+ guestSay.image" alt="Guest" class="self-center rounded-full w-24 h-auto border-none mr-4 align-middle flex-none">
    <div class="my-2 5 pl-2 5 flex-1">
     <h6 class="font-semibold text-xl pb-2">
     {{guestSay.name}}
     </h6>
     <p>
     "{{ guestSay.comments }}"
     </p>
    </div>
   </div>
   <br>
  </section>
</template>