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
  <main
    class="flex flex-col items-center space-y-10 h-screen pt-10 bg-slate-50"
  >
    <article class="text-xs text-slate-700">
      <h1 class="text-sm mb-2 text-slate-800">Learn Talon Alphabet</h1>
      <p class="mb-1">
        This tool helps you learn the alphabet of
        <a href="https://talonvoice.com/" class="text-purple-700">Talon Voice</a
        >:
      </p>
      <ol class="list-decimal pl-5">
        <li>
          Install
          <a href="https://talonvoice.com/" class="text-purple-700">
            Talon Voice
          </a>
        </li>
        <li>
          Add
          <a
            href="https://github.com/knausj85/knausj_talon"
            class="text-purple-700"
          >
            kausj_talon configuration
          </a>
        </li>
        <li>Start learning by saying the word shown below the box</li>
      </ol>
    </article>
    <QuestionBox :character="currentChar" @correctAnswer="showNextQuestion" />
  </main>
</template>
