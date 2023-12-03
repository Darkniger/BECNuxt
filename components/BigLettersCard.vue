<template>
  <div class="bg-black p-12">
    <BigLetterCardItem v-for="letterData in data" :key="letterData.letter" v-bind="letterData" />
  </div>
</template>

<script lang="ts" setup>
import type { AboutUsLetter } from '~/types/AboutUsLetter';

defineProps<{
  data: AboutUsLetter[]
}>()
</script>

<style scoped>

</style>
