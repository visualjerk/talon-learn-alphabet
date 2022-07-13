<script setup lang="ts">
import { ref, unref, computed, watch } from 'vue'
import { ALPHABET } from '../constants/alphabet'

const props = defineProps<{ character: keyof typeof ALPHABET }>()
const emit = defineEmits(['correct-answer'])

const answer = ref('')
const word = computed(() => ALPHABET[props.character])
const hasCorrectAnswer = computed(
  () => unref(answer) === unref(word) || unref(answer) === props.character
)
watch(hasCorrectAnswer, async (value) => {
  if (value) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    emit('correct-answer')
    answer.value = ''
  }
})
</script>

<template>
  <div>
    <article :class="[hasCorrectAnswer && 'is-correct']">
      <h2>{{ character }}</h2>
      <input v-model="answer" />
    </article>
    <aside>{{ word }}</aside>
  </div>
</template>

<style scoped>
article {
  border: 0.2rem solid grey;
  border-radius: 1rem;
  padding: 1rem 2rem 2rem;
  max-width: 14rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  font-size: 7rem;
}

input {
  font-size: 5rem;
  max-width: 10rem;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
}
.is-correct {
  border-color: green;
}

aside {
  font-size: smaller;
  color: lightgray;
  margin-block-start: 16rem;
  text-align: center;
}
</style>
