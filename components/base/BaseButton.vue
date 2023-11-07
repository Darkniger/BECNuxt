<template>
  <UButton v-bind="$attrs" v-on="$listeners">
    <slot />
  </UButton>
</template>

<script lang="ts" setup>
defineProps<{
  square?: boolean
  fullWidth?: boolean
}>()
</script>
