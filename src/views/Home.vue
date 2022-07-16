<script setup lang="ts">
import LinkButton from '../components/LinkButton.vue'
</script>

<template>
  <article class="text-lg text-slate-700">
    <h1 class="text-3xl mb-4 text-slate-800">Learn Talon Alphabet</h1>
    <p class="mb-1">
      This tool helps you learn the alphabet of
      <a href="https://talonvoice.com/" class="text-purple-700">Talon Voice</a>:
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
      <li>Start learning by choosing an option</li>
    </ol>
    <div class="flex gap-3 mt-4">
      <LinkButton to="/alphabet"> Learn Simple Alphabet </LinkButton>
      <LinkButton to="/session"> Start Timed Session </LinkButton>
    </div>
  </article>
</template>
