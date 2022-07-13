<script setup lang="ts">
import { computed, ref, unref } from 'vue'
import { DICTIONARY } from './constants/dictionary'
import QuestionBox from './components/QuestionBox.vue'

const easyMode = ref(true)
function toggleEasyMode() {
  easyMode.value = !unref(easyMode)
}

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
    class="flex flex-col items-center space-y-10 min-h-screen pt-10 bg-slate-50"
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
      <button
        @click="toggleEasyMode"
        class="mt-4 flex bg-purple-50 border-2 border-purple-600 rounded-md"
      >
        <div
          class="px-3 py-1 rounded-l-sm"
          :class="[
            easyMode
              ? 'bg-purple-700 text-purple-50'
              : 'bg-transparent text-purple-800',
          ]"
        >
          Easy
        </div>
        <div
          class="px-3 py-1 rounded-r-sm"
          :class="[
            !easyMode
              ? 'bg-purple-700 text-purple-50'
              : 'bg-transparent text-purple-800',
          ]"
        >
          Hard
        </div>
      </button>
    </article>
    <QuestionBox
      :character="currentChar"
      :easyMode="easyMode"
      @correctAnswer="showNextQuestion"
    />
  </main>
</template>
