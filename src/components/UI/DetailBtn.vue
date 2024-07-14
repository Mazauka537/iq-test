<script setup lang="ts">

import ArrowUpIcon from "@/components/Icons/ArrowUpIcon.vue";
</script>

<template>
  <div class="detail-btn">
    <a class="detail-btn__circle" href="#quote" aria-label="Узнать больше">
      <ArrowUpIcon class="detail-btn__arrow-icon"/>
    </a>
    <br>
    <a class="detail-btn__text" href="#quote" aria-label="Узнать больше">Подробнее</a>
  </div>
</template>

<style scoped lang="scss">
.detail-btn {
  text-align: center;

  &__circle {
    width: 16rem;
    height: 16rem;
    border-radius: 50%;
    text-align: center;
    background: #fff;
    display: inline-block;
    padding: 4rem;
  }

  &__arrow-icon {
    height: 8rem;
    width: 8rem;
  }

  &__text {
    display: inline-block;
    font-size: 8rem;
    color: #fff;
    margin-top: 5rem;
    font-family: var(--font-pt-serif);
  }
}
</style>