<template>
  <div class="card-container shadow-lg rounded-xl w-48 p-4">
    <div class="card">
      <slot name="before-content"></slot>
      <div>
        <slot>
          <pre>This is a card.</pre>
          <h1 v-if="title">{{ title }}</h1>
          <p v-if="description">{{ description }}</p>
          <BaseButton v-if="cta">{{ cta }}</BaseButton>
        </slot>
      </div>
      <slot name="after-content"></slot>
    </div>
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
.card-container {
  container: card / inline-size;
  background: #F5F5F7;
}

.card {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
}

@container (inline-size > 768px) {
  .card {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
  }
}
</style>

