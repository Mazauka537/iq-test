<script setup lang="ts">
import {onMounted, onUnmounted, ref} from "vue";
import SpinLoader from "@/components/UI/SpinLoader.vue";

const processText = ref('Определение стиля мышления..')

let timerId: number | undefined
onMounted(() => {
  timerId = setInterval(() => {
    processText.value += '.'
  }, 500)
})

onUnmounted(() => {
  clearInterval(timerId)
})
</script>

<template>
  <div class="loading-screen">
    <p class="loading-screen__title">Обработка результатов</p>
    <SpinLoader class="loading-screen__loader"/>
    <p class="loading-screen__process-text">{{ processText }}</p>
  </div>
</template>

<style scoped lang="scss">
.loading-screen {
  text-align: center;
  padding: 0 22rem;

  &__title {
    font-family: var(--font-pt-serif);
    font-size: 23rem;
    letter-spacing: 0.05em;
    margin: 0 auto;
    max-width: 200rem;
  }

  &__loader {
    margin: 40rem auto 0 auto;
  }

  &__process-text {
    margin-top: 32rem;
    font-family: var(--font-pt-serif);
    font-size: 14rem;
    letter-spacing: 0.05em;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>