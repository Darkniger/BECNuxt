<template>
  <div>
    <pre>This is a multiblock. In here we can stack 2 or 3 children in a row.</pre>
    <div class="flex justify-evenly">
      <slot />
    </div>

    <p>We currently have: {{ $slots.length }} children</p>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>

