<script setup lang="ts">
import type {TQuestionAnswer} from "@/types/question";

defineProps<{
  answers: TQuestionAnswer[],
  modelValue: number | null
}>()
</script>

<template>
  <div class="color-picker">
    <button v-for="answer in answers"
            class="color-picker__option"
            :style="{background: answer.label}"
            :class="{'color-picker__option_selected': modelValue === answer.value}"
            type="button"
            @click="$emit('update:modelValue', answer.value)">
    </button>
  </div>
</template>

<style scoped lang="scss">
.color-picker {
  margin-top: 10rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &__option {
    flex-shrink: 0;
    margin: 10rem;
    width: 75rem;
    height: 75rem;
    border: 1rem solid transparent;
    cursor: pointer;

    &_selected {
      border: 4rem solid var(--color-main);
    }
  }
}
</style>