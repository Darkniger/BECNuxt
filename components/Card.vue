<template>
  <div class="shadow-lg rounded-md w-48">
    <slot id="before-content"></slot>
    <div>
      <slot id="main-content">
        <pre>This is a card.</pre>
        <h1 v-if="title">{{ title }}</h1>
        <p v-if="description">{{ description }}</p>
        <BaseButton v-if="cta">{{ cta }}</BaseButton>
      </slot>
    </div>
    <slot id="after-content"></slot>
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

