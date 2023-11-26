<template>
  <Card class="card-block" :title="title" :description="description" :cta="cta">
    <template #after-content>
      <NuxtImg  :src="imageSrc" :alt="imageAlt" class="w-[100%]" />
    </template>
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

<style scoped>
.card-block {
  width: 100%;
}
</style>

