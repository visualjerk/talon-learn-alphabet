<script setup lang="ts">
import { nextTick, onMounted, ref, unref } from 'vue'
import { DICTIONARY } from '../constants/dictionary'
import { useSession } from '../hooks/use-session'
import { useTimer } from '../hooks/use-timer'
import QuestionBox from '../components/QuestionBox.vue'
import ActionButton from '../components/ActionButton.vue'

const boxRef = ref()
const { current, next, addError } = useSession<typeof DICTIONARY>(
  'TALON',
  DICTIONARY
)

async function showNextQuestion(): Promise<void> {
  next()
  restart()
  await nextTick()
  unref(boxRef).reset()
}

async function handleCorrectAnswer(): Promise<void> {
  pause()
  await new Promise((resolve) => setTimeout(resolve, 1000))
  showNextQuestion()
}

function handleWrongAnswer(): void {
  addError()
  showNextQuestion()
}

const ANSWER_TIME = 5000
const { isActive, pause, resume, restart, timeLeft } = useTimer(
  ANSWER_TIME,
  handleWrongAnswer
)

async function toggleSession() {
  if (unref(isActive)) {
    pause()
    return
  }
  resume()
  await nextTick()
  unref(boxRef).reset()
}

pause()
onMounted(() => unref(boxRef).reset())
</script>

<template>
  <article class="text-xs text-slate-700">
    <div class="flex gap-3">
      <ActionButton @click="toggleSession">
        <template v-if="isActive">Stop Session</template>
        <template v-else>Start Session</template>
      </ActionButton>
    </div>
  </article>
  <QuestionBox
    ref="boxRef"
    :character="current"
    @correctAnswer="handleCorrectAnswer"
    :disabled="!isActive"
  />
  <div class="h-3 bg-purple-200 w-60 rounded-lg overflow-hidden mb-3">
    <div
      class="h-3 bg-purple-800 origin-right"
      :style="{ transform: `scaleX(${timeLeft / ANSWER_TIME})` }"
    ></div>
  </div>
</template>
