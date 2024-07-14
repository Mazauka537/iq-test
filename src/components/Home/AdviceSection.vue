<script setup lang="ts">

import MainBtn from "@/components/UI/MainBtn.vue";
</script>

<template>
  <div class="advice-section">
    <div class="advice-section__inner">
      <p class="advice-section__text">
        Также по результатам теста<br>
        <strong class="uppercase">вы получите</strong> подробные<br>
        <strong class="uppercase">советы</strong> по определению наиболее<br>
        перспективной <strong class="uppercase">для вашего</strong><br>
        <strong class="uppercase">типа</strong> <strong>интеллекта</strong> <strong class="uppercase">сферы</strong><br>
        <strong class="uppercase">деятельности,</strong><br>
        которая принесет вам скорейший финансовый результат.
      </p>
      <img class="advice-section__img" src="@/assets/images/advice.png" alt="brain image" loading="lazy">
      <MainBtn class="advice-section__btn" :bigger="true" href="/iq-test">Пройти тест</MainBtn>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/css/breakpoints";

.advice-section {
  background: #F3F3F2;
  text-align: center;

  &__inner {
    padding: 38rem 11rem 40rem 11rem;
    max-width: 320rem;
    margin: 0 auto;
  }

  &__text {
    color: #272727;
    font-size: 16rem;
    line-height: 24rem;
    letter-spacing: 0.05em;
    text-align: left;
    font-family: var(--font-pt-serif);

    @include media-breakpoint(sm) {
      text-align: center;
    }
  }

  &__img {
    margin-top: 18rem;
    max-width: 211rem;
    width: 100%;
  }

  &__btn {
    margin-top: 31rem;
  }
}
</style>