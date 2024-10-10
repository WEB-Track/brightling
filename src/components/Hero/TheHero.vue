<script setup>

</script>

<template>
  <section class="hero w-full justify-self-center" id="thehero">
    <div class="flex">
      <div class="flex-auto p-0 m-0">
        <div class="w-screen hero--jumbotron bg-cover bg-no-repeat bg-center rounded-none border-none">
          <h1
            class="text-center m-0 text-4xl sm:text-5xl md:text-6xl font-bold px-px text-slate-50 hero_text hero_mt_spacing">
            <span class="text-center text-amber-500">Enjoy</span> Your Stay
          </h1>
          <p class="text-center px-2 pt-4 mt-4 pb-4 mb-4 text-lg sm:text-xl md:text-2xl text-neutral-400 md:pb-3">
            Come!! Relax, See The Sites and Enjoy Yourself. While we pamper
            you.
          </p>
          <div class="flex justify-center hero--btn-container">
            <RouterLink to="/about" class="hero--btn bg-amber-950 py-2 px-3.5 text-lg font-medium sm:text-xl md:py-3 md:px-4" role="button">About
              Our Hotel</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use './hero-sec.scss';
</style>