<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
      <main class="flex-grow">
        <slot />
      </main>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
main {
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
}
</style>

