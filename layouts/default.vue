<template>
  <div>
    <AppHeader />
      <slot />
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
/* TEMP BLOCKS OVERVIEW STYLING */
pre {
  display: inline-block;
  background: #eee;
  border: 1px solid #ccc;
  margin: 1rem 0;
}

div {
  div {
    div {
      div {
        border: 1px solid blue;

        div {
          border: 1px solid green;

          div {
            border: 1px solid yellow;
          }
        }
      }
    }
  }
}
</style>

