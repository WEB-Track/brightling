<template>
        <div class="footer p-2 md:border-t-2 border-black" id="thefooter">
        <div class="flex">
          <div class="flex-auto">
            <p class="text-center p-2.5 font-semibold text-xl text-black">
              Brightling Hotel &copy; {{ currentYear }}, All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
</template>

<script>
// setup current year
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>