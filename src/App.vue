<script setup lang="ts">
import { computed, ref, unref } from 'vue'
import { DICTIONARY } from './constants/dictionary'
import QuestionBox from './components/QuestionBox.vue'

const currentIndex = ref(0)
const currentChar = computed<keyof typeof DICTIONARY>(
  () => Object.keys(DICTIONARY)[unref(currentIndex)] as keyof typeof DICTIONARY
)
function showNextQuestion(): void {
  if (unref(currentIndex) === Object.keys(DICTIONARY).length - 1) {
    currentIndex.value = 0
    return
  }
  currentIndex.value++
}
</script>

<template>
  <main class="flex justify-center h-screen pt-10 bg-slate-50">
    <QuestionBox :character="currentChar" @correctAnswer="showNextQuestion" />
  </main>
</template>
