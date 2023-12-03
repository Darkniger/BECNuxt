<template>
  <div class="multi-block">
    <div class="main-content flex justify-evenly">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
.main-content > * {
  flex: 1 1 0;
  width: 0;
}
</style>

