<template>
  <div class="bg-[#1e2a38]">
    <!--<AppHeader /> -->
      <main>
        <slot />
      </main>
    <!--<AppFooter /> -->
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

main {
  margin: 0 auto;
  max-width: 1200px;
}

div {
  div {
    div {
      div {
        border: 0px solid blue;

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

