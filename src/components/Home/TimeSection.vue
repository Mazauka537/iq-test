<script setup lang="ts">

import MainBtn from "@/components/UI/MainBtn.vue";
</script>

<template>
  <div class="time-section">
    <div class="time-section__inner">
      <img class="time-section__thunder" src="@/assets/images/thunder.png" alt="thunder" loading="lazy">
      <p class="time-section__text">
        Прохождение теста займет у вас не более <strong>12 минут</strong>,
        а его <b>результаты</b> вы сможете <strong>использовать всю жизнь.</strong>
      </p>
      <blockquote class="time-section__quote">
        Профессиональная интерпретация и детально <b>проработанные рекомендации</b> позволят вам качественно
        <b>изменить все аспекты своей жизни:</b> от финансового до любовного.
      </blockquote>
      <MainBtn class="time-section__btn" bigger outline href="/iq-test">Пройти тест</MainBtn>
      <img class="time-section__thunder" src="@/assets/images/thunder.png" alt="thunder" loading="lazy">
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/css/breakpoints";
.time-section {
  overflow: hidden;
  text-align: center;
  position: relative;

  &__inner {
    padding: 0 11rem 73rem 11rem;
    position: relative;
    max-width: 320rem;
    margin: 0 auto;
  }

  &__thunder {
    width: 165rem;
    height: 165rem;
    position: absolute;
    z-index: -2;

    &:first-child {

      right: -65rem;
      top: 87rem;
      transform: rotate(19deg);
    }

    &:last-child {
      left: -70rem;
      top: 303rem;
      transform: rotate(-31.5deg);
    }
  }


  &__text {
    text-align: left;
    margin-top: 54rem;
    font-family: var(--font-merriweather);
    font-size: 15rem;
    line-height: 20rem;
    letter-spacing: .05em;
    color: #FFFFFF;
    max-width: 262rem;

    @include media-breakpoint(sm) {
      margin: 54rem auto 0 auto;
      text-align: center;
    }

    strong {
      color: var(--color-main);
    }
  }

  &__quote {
    text-align: left;
    margin: 22rem -2.5rem 0 -2.5rem;
    padding: 28rem 15rem 26rem 14rem;
    background: rgba(#F3F3F2, 0.8);
    color: #181818;
    font-family: var(--font-merriweather);
    font-size: 16rem;
    line-height: 23rem;
    letter-spacing: .05em;
    border-radius: 20rem;
  }

  &__btn {
    margin-top: 33rem;
  }
}
</style>