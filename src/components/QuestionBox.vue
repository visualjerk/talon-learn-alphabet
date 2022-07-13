<script setup lang="ts">
import { ref, unref, computed, watch } from 'vue'
import { DICTIONARY } from '../constants/dictionary'

const props = defineProps<{ character: keyof typeof DICTIONARY }>()
const emit = defineEmits<{
  (e: 'correctAnswer'): void
}>()

const answer = ref('')
const word = computed(() => DICTIONARY[props.character])
const hasCorrectAnswer = computed(
  () => unref(answer) === unref(word) || unref(answer) === props.character
)
watch(hasCorrectAnswer, async (value) => {
  if (value) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    emit('correctAnswer')
    answer.value = ''
  }
})
</script>

<template>
  <div>
    <article
      class="flex items-center flex-col p-8 pt-4 border-4 border-gray-500 rounded-2xl"
      :class="[hasCorrectAnswer && 'border-green-500']"
    >
      <h2 class="text-9xl">{{ character }}</h2>
      <input
        class="text-7xl text-center font-bold max-w-[10rem] p-2 mt-5 border-2 border-gray-300 focus:border-indigo-600"
        v-model="answer"
      />
    </article>
    <aside class="mt-60 text-xs text-center text-gray-300">{{ word }}</aside>
  </div>
</template>
