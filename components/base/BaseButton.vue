<template>
  <UButton color="yellow">
    <slot />
  </UButton>
</template>

<script lang="ts" setup>
defineProps<{
  square?: boolean
  fullWidth?: boolean
}>()
</script>
