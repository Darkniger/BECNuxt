
import type { UButton } from '#ui-colors/components';
<template>
  <UButton primary v-bind="$attrs" v-on="$listeners">
    <slot />
  </UButton>
</template>

<script lang="ts" setup>
defineProps<{
  square?: boolean;
  fullWidth?: boolean;
}()
</script>
