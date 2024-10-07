<script setup>
import GreatLoction from '@/components/GreatLoction.vue'

export default {
 components: { GreatLoction }
}
</script>

<template>
 <div class="flex flex-col md:flex-row">
  <div class="grow min-h-32 h-60 md:h-80 bg-red-400">
   <ThreeColumnLeft/>
  </div>
  <div class="grow min-h-32 h-60 md:h-80 bg-red-900">
   <ThreeColumnMiddle/>
  </div>
  <div class="grow min-h-32 h-60 md:h-80 bg-red-500">
   <ThreeColumnRight/>
  </div>
 </div>
</template>