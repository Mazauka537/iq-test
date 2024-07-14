<script setup lang="ts">
import type {TQuestionColor} from "@/types/question";
import ColorPicker from "@/components/UI/ColorPicker.vue";

defineProps<{
  question: TQuestionColor,
  modelValue: number | null
}>()
</script>

<template>
  <ColorPicker :answers="question.answers"
               :model-value="modelValue"
               @update:modelValue="(value: number | null) => $emit('update:modelValue', value)"/>
</template>

<style scoped lang="scss">

</style>