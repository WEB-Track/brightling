<!-- <script>
import TheHistory from '@/components/TheHistory.vue'
import HomePhotoOne from '@/components/HomePhotoOne.vue'

export default {
 components: {TheHistory, HomePhotoOne}
}
</script> -->

<template>
 <div class="flex flex-col md:flex-row" id="twocolumn">
  <div class="min-h-32 w-full">
   <slot name="twoColLeft"></slot>
  </div>
  <div class="min-h-32 w-full">
   <slot name="twoColRight"></slot>
  </div>
 </div>
</template>

<style lang="scss">
 
</style>