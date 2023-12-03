<template>
  <div class="grid grid-cols-12 text-white">
    <div class="letter col-span-2">
      <div class="m-auto w-max" style="font-size: 128px">
        {{ letter }}
      </div>
    </div>
    <div class="col-span-10">
      <div class="flex gap-6">
        <div class="box__icon">
          <img :src="icon" alt="icon" />
        </div>
        <div class="uppercase">
          {{ title }}
        </div>
      </div>
      <div class="box__richtext">
        <div v-html="richtext" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  letter: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  richtext: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>

</style>
