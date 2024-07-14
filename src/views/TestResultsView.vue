<script setup lang="ts">
import {computed, onMounted, onUnmounted, ref} from "vue";
import {useRouter} from "vue-router";
import type {TTestResults} from "@/types/apiResponse";
import PhoneIcon from "@/components/Icons/PhoneIcon.vue";

const router = useRouter()

const results = ref<string | TTestResults | null>(null)

const callNumber = async (e: Event): Promise<void> => {
  e.preventDefault()
  const response = await fetch('https://swapi.dev/api/people/1')
  if (response.ok) {
    results.value = await response.json()
  } else {
    results.value = 'Что-то пошло не так :('
  }
}


const seconds = ref(600 - Math.floor((new Date().getTime() - new Date(+localStorage.getItem('iq-test')!).getTime()) / 1000))

const time = computed(() => {
  const min = Math.floor(seconds.value / 60)
  const sec = seconds.value % 60
  return (min.toString().length > 1 ? min : '0' + min) + ':' + (sec.toString().length > 1 ? sec : '0' + sec)
})

let timerId: number | undefined
onMounted(() => {
  timerId = setInterval(() => {
    seconds.value--
    if (seconds.value <= 0) {
      clearInterval(timerId)
      router.push({ name: 'home' })
    }
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timerId)
})
</script>

<template>
  <div class="test-results">

    <img class="test-results__thunder" src="@/assets/images/thunder.png" alt="thunder" loading="lazy">

    <p class="test-results__sup-title">Ваш результат рассчитан:</p>
    <p class="test-results__sup-title-desc">
      <span class="underline">Вы относитесь к 3%</span> респондентов, чей уровень интеллекта более чем на
      15 пунктов отличается от среднего в большую или меньшую сторону!
    </p>
    <h1 class="test-results__title">Скорее получите свой результат!</h1>
    <p class="test-results__desc">
      В целях защиты персональных данных результат теста, их подробная интерпретация и рекомендации доступны в виде
      голосового сообщения по звонку с вашего мобильного телефона
    </p>
    <p class="test-results__time-text">
      Звоните скорее, запись доступна всего<br>
      <span class="test-results__timer">{{ time }}</span> минут
    </p>
    <a class="test-results__link" href="tel:9999999" target="_blank" rel="nofollow" @click="callNumber">
      <PhoneIcon class="test-results__link-icon"/>
      <span class="test-results__link-text">Позвонить и прослушать результат</span>
    </a>

    <template v-if="results !== null">

      <div class="test-results__results" v-if="results instanceof Object">
        <p class="test-results__results-header">По результатам теста Вы:</p>
        <p class="test-results__results-person">{{ results.name }}</p>
        <p class="test-results__results-line" v-if="results.gender">
          <span>Пол:</span>
          <span>{{ results.gender }}</span>
        </p>
        <p class="test-results__results-line" v-if="results.birth_year">
          <span>Год рождения:</span>
          <span>{{ results.birth_year }}</span>
        </p>
        <p class="test-results__results-line" v-if="results.height">
          <span>Рост:</span>
          <span>{{ results.height }}</span>
        </p>
        <p class="test-results__results-line" v-if="results.mass">
          <span>Вес:</span>
          <span>{{ results.mass }}</span>
        </p>
        <p class="test-results__results-line" v-if="results.hair_color">
          <span>Цвет волос:</span>
          <span>{{ results.hair_color }}</span>
        </p>
        <p class="test-results__results-line" v-if="results.eye_color">
          <span>Цвет глаз:</span>
          <span>{{ results.eye_color }}</span>
        </p>
      </div>
      <p class="test-results__results-error" v-else>
        {{ results }}
      </p>
    </template>

    <img class="test-results__thunder" src="@/assets/images/thunder.png" alt="thunder" loading="lazy">

  </div>
</template>

<style scoped lang="scss">
.test-results {
  padding: 46rem 15rem 100rem 15rem;;
  text-align: center;
  position: relative;
  overflow: hidden;

  &__thunder {
    position: absolute;
    z-index: 0;

    &:first-child {
      width: 165rem;
      height: 165rem;
      transform: rotate(-53deg);
      top: 402rem;
      left: -87rem;
    }

    &:last-child {
      width: 175rem;
      height: 175rem;
      transform: rotate(-58deg);
      top: 438rem;
      right: -124rem;
    }
  }

  &__sup-title {
    font-family: var(--font-pt-serif);
    font-size: 16rem;
    letter-spacing: .1em;
    font-weight: 700;
    color: #FFFFFF;
    margin-top: 30rem;
    text-transform: uppercase;
  }

  &__sup-title-desc {
    font-family: var(--font-pt-serif);
    font-size: 14rem;
    line-height: 18rem;
    color: #FFFFFF;
    max-width: 340rem;
    margin: 6rem auto 0 auto;
  }

  &__title {
    font-family: var(--font-pt-serif);
    font-size: 18rem;
    line-height: 22rem;
    letter-spacing: .1em;
    font-weight: 700;
    color: #3BDE7C;
    margin-top: 20rem;
    text-transform: uppercase;
  }

  &__desc {
    font-family: var(--font-roboto);
    font-size: 8rem;
    line-height: 14rem;
    letter-spacing: 2rem;
    font-weight: 500;
    color: #FFFFFF;
    background: #1C2741;
    width: 256rem;
    padding: 15rem 12rem;
    border-radius: 6rem;
    margin: 14rem auto 0 auto;
    text-transform: uppercase;
  }

  &__time-text {
    font-family: var(--font-pt-serif);
    font-size: 11rem;
    letter-spacing: .1em;
    color: #3BDE7C;
    margin-top: 8rem;
    line-height: 18rem;
  }

  &__timer {
    font-size: 20rem;
  }

  &__link {
    background: #EB1B00;
    display: flex;
    padding: 27rem 15rem;
    max-width: 290rem;
    border-radius: 5rem;
    margin: 8rem auto 0 auto;
    text-align: left;
    align-items: center;
    z-index: 2;
    position: relative;

    &:hover {
      box-shadow: 0 0 15rem #eb1b00;
    }
  }

  &__link-icon {
    height: 29rem;
    width: 29rem;
    margin-right: 18rem;
    flex-shrink: 0;
  }

  &__link-text {
    font-family: var(--font-roboto);
    font-size: 15rem;
    letter-spacing: .05em;
    font-weight: 900;
    color: #FFFFFF;
  }

  &__results {
    font-family: var(--font-pt-serif);
    font-size: 14rem;
    letter-spacing: .1em;
    font-weight: 400;
    color: #FFFFFF;
    margin: 30rem auto 0 auto;
    max-width: 340rem;
  }

  &__results-person {
    text-transform: uppercase;
    font-size: 18rem;
    font-weight: 700;
  }

  &__results-line {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin-top: 5rem;

    span:last-child {
      text-transform: uppercase;
    }
  }

  &__results-error {
    font-family: var(--font-pt-serif);
    font-size: 14rem;
    line-height: 18rem;
    color: red;
    margin-top: 20rem;
  }
}
</style>