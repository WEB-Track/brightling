<script>
import TheHistory from '@/components/TheHistory.vue'
import HomePhotoOne from '@/components/HomePhotoOne.vue'

export default {
 components: {TheHistory, HomePhotoOne}
}
</script>

<template>
 <div class="flex flex-col md:flex-row">
  <div class="min-h-32 w-full">
   <HomePhotoOne/>
  </div>
  <div class="min-h-32 w-full">
   <TheHistory/>
  </div>
 </div>
</template>

<style lang="scss">
 
</style>