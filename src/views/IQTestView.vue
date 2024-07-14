<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";
import type {TQuestionColor, TQuestionImageNumber, TQuestionImageSelect, TQuestionSelect} from "@/types/question";
import MainBtn from "@/components/UI/MainBtn.vue";
import ProgressBar from "@/components/UI/ProgressBar.vue";
import SelectQuestion from "@/components/IQTest/SelectQuestion.vue";
import ColorQuestion from "@/components/IQTest/ColorQuestion.vue";
import ImageSelectQuestion from "@/components/IQTest/ImageSelectQuestion.vue";
import ImageNumberQuestion from "@/components/IQTest/ImageNumberQuestion.vue";
import {questions} from "@/questions";
import LoadingScreen from "@/components/IQTest/LoadingScreen.vue";

const router = useRouter()

const currentQuestion = ref<number>(0)

const currentAnswer = ref<number | null>(null)

const isAnswersProcessing = ref(false)

const nextQuestion = () => {
  if (currentQuestion.value < questions.length - 1) {
    currentQuestion.value += 1
    currentAnswer.value = null
  } else {
    localStorage.setItem('iq-test', new Date().getTime().toString())
    isAnswersProcessing.value = true
    setTimeout(() => {
      router.push({name: 'results'})
    }, 2000)
  }
}
</script>

<template>

  <div class="test-view">
    <div class="test-view__inner">

      <div class="test-view__top">
        <ProgressBar class="test-view__progress-bar" :length="questions.length" :value="currentQuestion + 1"/>
      </div>

      <div class="test-view__main" v-if="!isAnswersProcessing">
        <div class="test-view__main-inner">
          <div class="test-view__question"
               :class="{'test-view__question_small': questions[currentQuestion].question.length > 80}">
            {{ questions[currentQuestion].question }}
          </div>
          <SelectQuestion v-if="questions[currentQuestion].type === 'select'"
                          class="test-view__question-block"
                          :question="questions[currentQuestion] as TQuestionSelect"
                          v-model="currentAnswer"/>
          <ColorQuestion v-if="questions[currentQuestion].type === 'color'"
                         class="test-view__question-block"
                         :question="questions[currentQuestion] as TQuestionColor"
                         v-model="currentAnswer"/>
          <ImageSelectQuestion v-if="questions[currentQuestion].type === 'image-select'"
                               class="test-view__question-block"
                               :question="questions[currentQuestion] as TQuestionImageSelect"
                               v-model="currentAnswer"/>
          <ImageNumberQuestion v-if="questions[currentQuestion].type === 'image-number'"
                               class="test-view__question-block"
                               :question="questions[currentQuestion] as TQuestionImageNumber"
                               v-model="currentAnswer"/>
        </div>

      </div>

      <LoadingScreen v-else class="test-view__loading-screen"/>

      <div class="test-view__bottom" v-if="!isAnswersProcessing">
        <MainBtn class="test-view__next-btn" :disabled="currentAnswer === null" @click="nextQuestion">Далее</MainBtn>
      </div>

    </div>
  </div>

</template>

<style scoped lang="scss">
.test-view {
  text-align: center;
  background: rgba(#000, .6);

  &__inner {
    padding-top: 46rem;
    max-width: 400rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  &__top {
    padding: 17rem 30rem;
    flex-shrink: 0;
  }

  &__main {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }

  &__main-inner {
    width: 100%;
  }

  &__loading-screen {
    width: 100%;
    margin-top: 30rem;
  }

  &__question {
    font-family: var(--font-pt-serif);
    font-size: 19rem;
    letter-spacing: .05em;
    line-height: 23rem;
    color: #FFFFFF;
    padding: 0 20rem;

    &_small {
      font-size: 16rem;
      line-height: 21rem;
    }
  }

  &__question-block {
    margin-top: 15rem;
  }

  &__bottom {
    flex-shrink: 0;
    padding: 20rem 0;
  }


}
</style>
