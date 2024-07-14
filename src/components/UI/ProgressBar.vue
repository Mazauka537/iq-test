<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  length: number
  value: number
}>()

const transition = computed(() => {
  return 100 - props.value * 100 / props.length
})
</script>

<template>
  <div class="progress-bar">
    <div class="progress-bar__thumb" :style="{transform: 'translateX(-'+ transition +'%)'}"></div>
  </div>
</template>

<style scoped lang="scss">
.progress-bar {
  width: 100%;
  height: 11rem;
  border-radius: 100px;
  background: #F2F3F3;
  overflow: hidden;

  &__thumb {
    background: #3BDE7C;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    transition: transform .2s;
  }
}
</style>