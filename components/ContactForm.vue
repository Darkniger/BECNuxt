<template>
  <div>
    <form :on-submit="submitForm" class="grid grid-cols-2 gap-4">
      <input type="text" name="name" id="name" placeholder="Name" v-model="formData.name">
      <input type="email" name="email" id="email" placeholder="E-mail" v-model="formData.email">
      <textarea  class="col-span-2"  name="message" id="message" cols="30" rows="10" placeholder="Your Message" v-model="formData.message"></textarea>
      <BaseButton class="col-span-2 uppercase flex justify-center" type="submit" size="xl">
        Send Message
      </BaseButton>
    </form>    
  </div>
</template>

<script lang="ts" setup>
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const submitForm = () => {
  console.log(formData.value);
}
</script>

<style scoped>
form {
  input, textarea {
    padding: 1rem;
    border-radius: 0.25rem;
    
    @apply bg-gray-950 border border-gray-500 text-gray-100;
  }
}
</style>
