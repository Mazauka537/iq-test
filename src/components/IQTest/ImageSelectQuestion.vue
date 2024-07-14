<script setup lang="ts">
import type {TQuestionImageSelect} from "@/types/question";
import TextPicker from "@/components/UI/TextPicker.vue";

defineProps<{
  question: TQuestionImageSelect,
  modelValue: number | null
}>()
</script>

<template>
  <div class="image-select-question">
    <img class="image-select-question__image" :src="question.imageUrl" alt="question image" loading="lazy">

    <TextPicker class="image-select-question__answer-picker"
                :answers="question.answers"
                :model-value="modelValue"
                @update:modelValue="(value: number | null) => $emit('update:modelValue', value)"/>
  </div>
</template>

<style scoped lang="scss">
.image-select-question {

  &__image {
    max-width: 175rem;
  }

  &__answer-picker {
    margin-top: 15rem;
  }
}
</style>