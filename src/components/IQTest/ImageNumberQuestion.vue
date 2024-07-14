<script setup lang="ts">
import type {TQuestionImageNumber} from "@/types/question";
import NumberPicker from "@/components/UI/NumberPicker.vue";

defineProps<{
  question: TQuestionImageNumber,
  modelValue: number | null
}>()
</script>

<template>
  <div class="image-number-question">
    <img class="image-number-question__image" :class="'image-number-question__image_' + question.options?.imageSize"
         :src="question.imageUrl" alt="question image" loading="lazy">

    <hr class="image-number-question__line" v-if="question.options?.withLine">

    <NumberPicker class="image-number-question__answer-picker"
                  :answers="question.answers"
                  :model-value="modelValue"
                  @update:modelValue="(value: number | null) => $emit('update:modelValue', value)"/>
  </div>
</template>

<style scoped lang="scss">
.image-number-question {

  &__image {
    max-width: 173rem;

    &_sm {
      max-width: 173rem;
    }

    &_md {
      max-width: 185rem;
    }

    &_lg {
      max-width: 228rem;
    }
  }

  &__line {
    background: #F2F3F3;
    opacity: .15;
    height: 4rem;
    margin-top: 15rem;
  }

  &__answer-picker {
    margin-top: 15rem;
    padding: 0 15rem;
  }
}
</style>