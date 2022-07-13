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
  <QuestionBox :character="currentChar" @correctAnswer="showNextQuestion" />
</template>

<style>
#app {
  display: flex;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  margin: 0;
  box-sizing: border-box;
}
</style>
