<script setup lang="ts">
import { computed, ref, unref } from 'vue'
import { ALPHABET } from './constants/alphabet'
import QuestionBox from './components/QuestionBox.vue'

const currentIndex = ref(0)
const currentChar = computed<keyof typeof ALPHABET>(
  () => Object.keys(ALPHABET)[unref(currentIndex)] as keyof typeof ALPHABET
)
function showNextQuestion(): void {
  if (unref(currentIndex) === Object.keys(ALPHABET).length - 1) {
    currentIndex.value = 0
    return
  }
  currentIndex.value++
}
</script>

<template>
  <QuestionBox :character="currentChar" @correct-answer="showNextQuestion" />
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
