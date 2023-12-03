<template>
  <div>
    <MultiBlock>
      <TextBlock :title="title" :description="description" />
      <div class="p-10 bg-gray-600">
        <IconButton icon="mail" :href="`mailto:info@${email}`">E-mail</IconButton>
        <IconButton icon="whatsapp" href="https://wa.me/31612345678" target="_blank">Whatsapp</IconButton>
      </div>
    </MultiBlock>

    <section id="contact-form" class="mt-12 rounded-md p-12 bg-gray-800">
      <ContactForm />
    </section>
  </div>
</template>

<script lang="ts" setup>
const title = 'Our robots are great at making connections';
const description = "Send us a message on trough e-mail, whatsapp or a form and we contact you back within 24h on business days"
const email = 'contact@becfzco.com';
</script>

<style scoped>

</style>
