<script>
import TheMenu from '@/components/Menu/TheMenu.vue'
import TheFooter from './components/TheFooter.vue';

export default{
  components:{ TheMenu, TheFooter},
}
</script>

<template>
  <div class="app-main" id="app">
    <TheMenu></TheMenu>
    <RouterView></RouterView>
    <TheFooter></TheFooter>
  </div>
</template>

<style lang="scss">
</style>
