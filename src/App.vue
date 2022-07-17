<script setup lang="ts">
import MenuItem from './components/MenuItem.vue'
</script>

<template>
  <main class="min-h-screen bg-slate-50">
    <nav class="flex gap-2 p-2 shadow-md sticky top-0 z-10 bg-slate-50">
      <MenuItem to="/">Intro</MenuItem>
      <MenuItem to="/alphabet">Alphabet</MenuItem>
      <MenuItem to="/session">Session</MenuItem>
    </nav>
    <div class="flex flex-col items-center space-y-10 py-10 px-4">
      <router-view />
    </div>
  </main>
</template>
