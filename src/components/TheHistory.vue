<template>
 <div class="md:border-b-2 border-amber-950 content-center h-full w-full py-14" id="thehistory">
  <h2 class="text-3xl font-semibold text-center text-amber-500 pb-9 lg:text-7xl">The History <span class="text-amber-950">of Our Hotel</span></h2>
  <p class="text-amber-950 text-center px-12 pb-5 sm:text-lg lg:text-2xl">We opened in 2018 on November 14th. We were ready to service our new guests in our new hotel. Our hotel has 2 ballrooms and two 50,000 square foot conference rooms that can be breaking down into small rooms. There are two restaurants, one with a buffet style menu and other with full table service. We also have 500 rooms, 70 suites, 6 luxury suites with 180 degree views and 2 with 360 degree views. Amenities: two pools, wellness center and spa , hot tub, sauna, steam room and hotel shop.</p>
  <div class="inline-block readme-container pt-3 xl:pt-12">
   <RouterLink class="bg-amber-950 text-amber-50 hover:bg-amber-500 hover:text-amber-50 font-semibold px-7 py-3 xl:text-xl" to="/about">Read More</RouterLink>
  </div>
 </div>
</template>

<style lang="scss">
 .readme-container {
  padding-left: calc(50vw - 77px);
 
 @media screen and (min-width: 768px) {
  padding-left: calc(25vw - 77px);
 }
 }
</style>