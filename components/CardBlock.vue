<template>
  <Card class="w-max" :title="title" :description="description" :cta="cta">
    <NuxtImg #after-content :src="imageSrc" :alt="imageAlt" />
  </Card>
</template>

<script lang="ts" setup>
defineProps({
  imageSrc: {
    type: String,
    default: ''
  },
  imageAlt: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  cta: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>

</style>

