<script setup lang="ts">
import { computed, onMounted, ref, unref } from 'vue'
import { DICTIONARY } from '../constants/dictionary'
import QuestionBox from '../components/QuestionBox.vue'

const boxRef = ref()
const easyMode = ref(true)
function toggleEasyMode() {
  easyMode.value = !unref(easyMode)
  unref(boxRef).reset()
}

const currentIndex = ref(0)
const currentChar = computed<keyof typeof DICTIONARY>(() => {
  return Object.keys(DICTIONARY)[unref(currentIndex)] as keyof typeof DICTIONARY
})
const word = computed(() => DICTIONARY[unref(currentChar)])
async function showNextQuestion(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  if (unref(currentIndex) === Object.keys(DICTIONARY).length - 1) {
    currentIndex.value = 0
    return
  }
  currentIndex.value++
}

onMounted(() => unref(boxRef).reset())
</script>

<template>
  <div class="flex gap-3 justify-between">
    <button
      @click="toggleEasyMode"
      class="flex bg-purple-50 border-2 border-purple-600 rounded-md font-medium"
    >
      <div
        class="px-3 py-2 rounded-l-sm"
        :class="[
          easyMode
            ? 'bg-purple-700 text-purple-50'
            : 'bg-transparent text-purple-800',
        ]"
      >
        Easy
      </div>
      <div
        class="px-3 py-2 rounded-r-sm"
        :class="[
          !easyMode
            ? 'bg-purple-700 text-purple-50'
            : 'bg-transparent text-purple-800',
        ]"
      >
        Hard
      </div>
    </button>
  </div>
  <div class="flex items-center flex-col">
    <QuestionBox
      ref="boxRef"
      @correctAnswer="showNextQuestion"
      :character="currentChar"
    />
    <aside
      class="text-center"
      :class="[
        easyMode
          ? 'mt-6 text-5xl text-slate-700'
          : 'mt-20 text-xs text-slate-300',
      ]"
    >
      Say: <span class="font-medium">"{{ word }}"</span>
    </aside>
  </div>
</template>
