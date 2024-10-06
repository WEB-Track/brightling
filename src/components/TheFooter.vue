<template>
        <div class="footer">
        <div class="flex">
          <div class="flex-auto">
            <p class="text-center p-2.5 font-semibold text-xl text-neutral-500">
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