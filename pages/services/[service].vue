<template>
  <div v-if="service">
    <h1>{{  service.name }}</h1>
    <CardBlock v-for="block in service.blocks" :key="block.title" :image-src="block.imageSrc" :image-alt="block.imageAlt" :title="block.title" :description="block.description" />
  </div>
</template>

<script lang="ts" setup>
import { services } from '~/data/services';

const route = useRoute();
const serviceSlug = route.params.service as string;
const service = services.find((service) => service.slug === serviceSlug);

if (!service) {
  createError(`Service ${serviceSlug} not found`);
}
</script>

<style scoped>

</style>

