<script setup lang="ts">
import type {TQuestionAnswer} from "@/types/question";

defineProps<{
  answers: TQuestionAnswer[],
  modelValue: number | null
}>()
</script>

<template>
  <div class="number-picker">
    <button v-for="answer in answers"
            class="number-picker__option"
            :class="{'number-picker__option_selected': modelValue === answer.value}"
            type="button"
            @click="$emit('update:modelValue', answer.value)">
      {{ answer.label }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.number-picker {
  display: flex;
  justify-content: space-between;

  &__option {
    width: 41rem;
    height: 41rem;
    font-family: var(--font-pt-serif);
    font-size: 20rem;
    color: #0D0C11;
    background: #FFFFFF;
    cursor: pointer;
    transition: box-shadow 0.2s ease;

    &:hover {
      box-shadow: 0 0 10rem 0 #FFFFFF;
    }

    &_selected {
      border: 6rem solid var(--color-main);

      &:hover {
        box-shadow: none;
      }
    }
  }
}
</style>