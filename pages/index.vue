<template>
  <div>
    <pre>This is the homepage</pre>
    <section id="hero">
      <pre>This is the hero section. It will container a Text block and a CTA.</pre>
      <MultiBlock>
        <TextBlock title="Title" description="Description" />
        <TextBlock cta="Click here" />
      </MultiBlock>
    </section>
    <section id="services">
      <pre>This is the services section. </pre>
      <TitleBlock title="Services" />
      <NuxtImg class="mx-auto" src="https://picsum.photos/300/200" />
      <MultiBlock>
        <Card title="title" description="description" cta="cta" />
        <Card title="title" description="description" cta="cta" />
        <Card title="title" description="description" cta="cta" />
      </MultiBlock>
    </section>
    <section id="contact">
      <pre>This is the contact section. </pre>
      <MultiBlock>
        <NuxtImg src="https://picsum.photos/300/200" />
        <TextBlock description="lorem ipsum" cta="Click here" />
      </MultiBlock>
    </section>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
</style>

