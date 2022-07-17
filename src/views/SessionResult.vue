<script setup lang="ts">
import { STORAGE_KEY, DICTIONARY } from '../constants/dictionary'
import { useSession } from '../hooks/use-session'
import LinkButton from '../components/LinkButton.vue'

const { results } = useSession(STORAGE_KEY, DICTIONARY)
</script>

<template>
  <div class="flex gap-3">
    <LinkButton to="/session">Back to Session</LinkButton>
  </div>
  <h1 class="text-2xl mb-4 text-slate-800">Session Accuracy</h1>
  <div class="grid gap-4 grid-cols-3">
    <div
      v-for="item in results"
      :key="item.key"
      class="p-3 rounded-md shadow-xl bg-white"
    >
      <div class="text-xl text-center mb-2 font-medium text-slate-800">
        {{ item.key }}
      </div>
      <div class="w-40 bg-slate-200">
        <div
          class="h-4"
          :class="item.accuracy > 0.8 ? 'bg-green-600' : 'bg-yellow-600'"
          :style="{
            width: `${item.accuracy * 100}%`,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>
