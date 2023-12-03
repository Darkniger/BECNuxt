<template>
  <div>
    <button >
      <UIcon :name="iconName" />
      <slot />
    </button>    
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  icon: {
    type: String,
    default: ''
  }
})

const iconName = computed(() => {
  if (props.icon === 'email') {
    return 'i-ic-round-alternate-email'
  }

  if (props.icon === 'whatsapp') {
    return 'i-ic-sharp-whatsapp'
  }

  return ''
})
</script>

<style scoped>

</style>
