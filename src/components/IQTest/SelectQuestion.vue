<script setup lang="ts">
import type {TQuestionSelect} from "@/types/question";
import TextPicker from "@/components/UI/TextPicker.vue";

defineProps<{
  question: TQuestionSelect,
  modelValue: number | null
}>()
</script>

<template>
  <TextPicker :answers="question.answers"
              :model-value="modelValue"
              @update:modelValue="(value: number | null) => $emit('update:modelValue', value)"/>
</template>

<style scoped lang="scss">

</style>