<script>
import TheMenu from '@/components/Menu/TheMenu.vue'
import TheFooter from './components/TheFooter.vue';
import NotFound from './pages/NotFound.vue';

export default{
  components:{ TheMenu, TheFooter, NotFound,}
}
</script>
<template>
  <section class="app-main" id="theapp">
    <TheMenu></TheMenu>
    <RouterView></RouterView>
    <TheFooter></TheFooter>
    <NotFound></NotFound>
  </section>
</template>

<style lang="scss">
</style>
