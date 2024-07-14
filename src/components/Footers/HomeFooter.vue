<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <div class="home-footer">
    © {{ year }}
  </div>
</template>

<style scoped lang="scss">
.home-footer {
  text-align: center;
  font-size: 10rem;
  font-family: var(--font-roboto);
  color: rgba(#FFF, 0.5);
}
</style>