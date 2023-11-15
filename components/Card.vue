<template>
  <div class="shadow-lg rounded-md w-48">
    <pre>This is a card.</pre>
    <h1 v-if="title">{{ title }}</h1>
    <p v-if="description">{{ description }}</p>
    <BaseButton v-if="cta">{{ cta }}</BaseButton>
  </div>
</template>

<script lang="ts" setup>
defineProps({
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
<style>

</style>

