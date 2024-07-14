<script setup lang="ts">
import HamburgerBtn from "@/components/UI/HamburgerBtn.vue";

withDefaults(defineProps<{
  withLogo?: boolean
  text?: string
  textSize?: 'sm' | 'lg'
}>(), {
  withLogo: true,
  textSize: 'sm'
})
</script>

<template>
  <div class="app-bar">
    <HamburgerBtn @click="$emit('hamburgerClick')"/>
    <img src="@/assets/images/brain.webp" alt="logo" loading="lazy">
    <p class="app-bar__text" :class="{'app-bar__text_sm': textSize === 'sm', 'app-bar__text_lg': textSize === 'lg'}">
      {{ text }}</p>
  </div>
</template>

<style scoped lang="scss">
.app-bar {
  background: #181818;
  height: 46rem;
  padding: 0 11rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4;

  img {
    height: 46rem;
    width: 48rem;
    margin-left: 5rem;
    margin-right: 9rem;
  }

  &__text {
    font-size: 12rem;
    color: var(--color-main);
    letter-spacing: .05em;
    font-family: var(--font-yeseva);
    text-transform: uppercase;

    &_sm {
      font-size: 12rem;
      letter-spacing: .05em;
    }

    &_lg {
      font-size: 20rem;
      letter-spacing: .1em;
      margin-left: 16rem;
    }
  }
}
</style>