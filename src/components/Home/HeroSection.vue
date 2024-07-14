<script setup lang="ts">
import MainBtn from "@/components/UI/MainBtn.vue";
import DetailBtn from "@/components/UI/DetailBtn.vue";
</script>

<template>
  <div class="hero-section">
    <div class="hero-section__inner">
      <p class="hero-section__sup-title">Пройдите точный и быстрый</p>
      <h1 class="hero-section__title">Тест на определение IQ</h1>
      <MainBtn class="hero-section__test-btn" href="/iq-test">Пройти тест</MainBtn>
      <p class="hero-section__sub-title">
        <span>и получите рекомендации<br> по развитию своего интеллекта</span><br>
        и улучшению финансового<br> благосостояния и личной жизни
      </p>
      <DetailBtn class="hero-section__detail-btn"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero-section {
  padding-top: 39rem;
  padding-bottom: 50rem;
  min-height: 100vh;
  background-image: url("@/assets/images/bg-hero.webp");
  background-position: center 46rem;
  background-size: 109%;
  text-align: center;
  position: relative;

  &__inner {
    max-width: 340rem;
    margin: 0 auto;
  }

  &__sup-title {
    font-size: 18rem;
    font-family: var(--font-pt-serif);
    letter-spacing: .05em;
    margin-top: 27rem;
  }

  &__title {
    color: var(--color-main);
    font-size: 30rem;
    text-transform: uppercase;
    max-width: 252rem;
    letter-spacing: .03em;
    margin: 17rem auto 0 auto;
    font-family: var(--font-yeseva);
  }

  &__test-btn {
    margin-top: 154rem;
  }

  &__sub-title {
    margin-top: 22rem;
    font-size: 15rem;
    line-height: 19rem;
    letter-spacing: .05em;
    font-family: var(--font-pt-serif);
    font-weight: 700;

    span {
      color: var(--color-main);
    }
  }

  &__detail-btn {
    margin-top: 15rem;
    position: absolute;
    bottom: 12rem;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>