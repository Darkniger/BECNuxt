<template>
  <div class="min-h-screen bg-[#1e2a38] text-white flex flex-col justify-center items-center text-center">
    <!-- Top line -->
    <div class="w-1/4 md:w-1/6 h-1 bg-copper mb-10"></div>

    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
      We’re <span class="text-copper">Undergoing Enhancement</span>
    </h1>
    <p class="text-md md:text-lg lg:text-xl mb-6 max-w-2xl text-gray-200">
      At <span class="text-copper font-semibold">BEC</span>, we’re updating our website to better reflect our commitment 
      to human centered automation and innovative engineering solutions.
    </p>
    <p class="text-sm md:text-md lg:text-md mb-0 text-gray-400">
      We’ll be back online soon — <span class="text-copper">stronger, smarter, and better for you</span>.
    </p>

    <!-- Bottom line -->
    <div class="w-1/4 md:w-1/6 h-1 bg-copper mt-10"></div>

    <!-- <div class="mt-16 text-xs text-gray-500">
      &copy; {{ new Date().getFullYear() }} <span class="text-copper">BEC-FZCO</span>. All rights reserved.
    </div> -->
  </div>
</template>

<script setup>
// No logic required
</script>

<style scoped>
.text-copper {
  color: #AA6735;
}
.bg-copper {
  background-color: #AA6735;
  border-color: #AA6735;
}
</style>