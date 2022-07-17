<script setup lang="ts">
import { nextTick, onMounted, ref, unref, computed } from 'vue'
import { STORAGE_KEY, DICTIONARY } from '../constants/dictionary'
import { useSession } from '../hooks/use-session'
import { useTimer } from '../hooks/use-timer'
import QuestionBox from '../components/QuestionBox.vue'
import ActionButton from '../components/ActionButton.vue'
import LinkButton from '../components/LinkButton.vue'

const boxRef = ref()
const { current, next, addError } = useSession(STORAGE_KEY, DICTIONARY)
const sessionRunning = ref(false)
const showWord = ref(false)
const word = computed(() => DICTIONARY[unref(current)])

async function showNextQuestion(): Promise<void> {
  next()
  restart()
  await nextTick()
  unref(boxRef).reset()
}

let resetAfterWrongAnswerTimeout: number

async function handleCorrectAnswer(): Promise<void> {
  clearInterval(resetAfterWrongAnswerTimeout)
  pause()
  await new Promise((resolve) => setTimeout(resolve, 1000))
  showWord.value = false
  showNextQuestion()
}

function handleWrongAnswer(): void {
  addError()
  showWord.value = true
  resetAfterWrongAnswerTimeout = setTimeout(() => {
    showWord.value = false
    showNextQuestion()
  }, 3000)
}

const ANSWER_TIME = 5000
const { isActive, pause, resume, restart, timeLeft } = useTimer(
  ANSWER_TIME,
  handleWrongAnswer
)

async function toggleSession() {
  sessionRunning.value = !unref(sessionRunning)
  if (unref(isActive)) {
    pause()
  } else {
    resume()
  }
  await nextTick()
  unref(boxRef).reset()
}

pause()
onMounted(() => unref(boxRef).reset())
</script>

<template>
  <div class="flex gap-3">
    <ActionButton @click="toggleSession">
      <template v-if="sessionRunning">Stop Session</template>
      <template v-else>Start Session</template>
    </ActionButton>
    <LinkButton to="/session-result">Show Results</LinkButton>
  </div>
  <QuestionBox
    ref="boxRef"
    :character="current"
    @correctAnswer="handleCorrectAnswer"
    :disabled="!sessionRunning"
  />
  <div class="h-3 bg-purple-200 w-60 rounded-lg overflow-hidden mb-3">
    <div
      class="h-3 bg-purple-800 origin-right"
      :style="{ transform: `scaleX(${timeLeft / ANSWER_TIME})` }"
    ></div>
  </div>
  <aside class="text-center mt-6 text-5xl text-slate-700" v-if="showWord">
    Say: <span class="font-medium">"{{ word }}"</span>
  </aside>
</template>
