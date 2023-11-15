<template>
  <UButton>
    <slot />
  </UButton>
</template>

<script lang="ts" setup>
defineProps<{
  square?: boolean
  fullWidth?: boolean
}>()
</script>
