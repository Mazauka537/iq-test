<script setup lang="ts">

import QuoteIcon from "@/components/Icons/QuoteIcon.vue";
</script>

<template>
  <div class="quote-section">
    <div class="quote-section__inner">
      <QuoteIcon class="quote-section__icon"/>
      <blockquote class="quote-section__text">
        Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта,<br>
        но и выработать список рекомендаций для повышения этого показателя.
      </blockquote>
      <QuoteIcon class="quote-section__icon"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.quote-section {
  background: radial-gradient(circle, rgba(41, 80, 194, 1) 0%, rgba(38, 91, 199, 0.96) 41%, rgba(39, 98, 187, 0) 85%), url("@/assets/images/bg-quote.webp") center center;
  background-size: cover;

  &__inner {
    padding: 83rem 0 50rem 0;
    position: relative;
    max-width: 340rem;
    margin: 0 auto;
  }

  &__text {
    text-align: center;
    color: #fff;
    font-family: var(--font-yeseva);
    font-size: 18rem;
    line-height: 23rem;
    letter-spacing: .05em;
    max-width: 240rem;
    margin: 0 auto;
  }

  &__icon {
    height: 23rem;
    width: 23rem;
    position: absolute;

    &:first-child {
      top: 43px;
      left: 24px;
      transform: rotate(180deg);
    }

    &:last-child {
      bottom: 32rem;
      right: 29rem;
    }
  }
}
</style>