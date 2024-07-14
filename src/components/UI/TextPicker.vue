<script setup lang="ts">
import type {TQuestionAnswer} from "@/types/question";
import {computed} from "vue";

defineProps<{
  answers: TQuestionAnswer[],
  modelValue: number | null
}>()
</script>

<template>
  <div class="text-picker">
    <button v-for="answer in answers"
            class="text-picker__option"
            :class="{'text-picker__option_selected': modelValue === answer.value, 'text-picker__option_small': answers.length > 5}"
            type="button"
            @click="$emit('update:modelValue', answer.value)">
      <span class="text-picker__option-check"></span>
      <span class="text-picker__option-text">{{ answer.label }}</span>
    </button>
  </div>
</template>

<style scoped lang="scss">
.text-picker {

  &__option {
    min-height: 50rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
    background: rgba(#F2F3F3, 0.15);
    padding: 7rem 11rem 7rem 35rem;
    margin-top: 8rem;
    transition: background 0.2s ease;

    &:hover {
      background: rgba(#F2F3F3, 0.3);
    }

    &:first-child {
      margin-top: 0;
    }

    &_small {
      min-height: 40rem;
    }

    &_selected {
      background: var(--color-main);

      &:hover {
        background: var(--color-main);
      }

      .text-picker__option-check {
        background: #2950C2;
        border-color: #272727;
      }

      .text-picker__option-text {
        color: #000;
      }
    }
  }

  &__option-check {
    height: 20rem;
    width: 20rem;
    border: 1rem solid #fff;
    background: none;
    border-radius: 50%;
    margin-right: 35rem;
    flex-shrink: 0;
  }

  &__option-text {
    font-size: 18rem;
    font-family: var(--font-pt-serif);
    letter-spacing: .05em;
    color: #fff;
    text-align: left;
  }
}
</style>