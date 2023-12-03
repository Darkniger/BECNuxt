<template>
  <div>
    <section id="hero">
      <MultiBlock>
        <TextBlock title="Who are we and what do we stand for?" description="At BEC, we believe that industrial automation can be taken to new heights and that ‘s why we‘ve set out on a mission to do it better. Our journey has began with a simple yet powerful standpoint: to redefine automation for businesses. The business moto we handle is success." />
        <NuxtImg src="https://picsum.photos/300/200" />
      </MultiBlock>
    </section>
    <section id="letters">
      <BigLettersCard :data="aboutUsLetters" />
    </section>
  </div>
</template>

<script lang="ts" setup>
import { aboutUsLetters } from '~/data/about-us-letters';
</script>

<style scoped>

</style>
