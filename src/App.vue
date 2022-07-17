<script setup lang="ts">
import MenuItem from './components/MenuItem.vue'
</script>

<template>
  <main class="min-h-screen bg-slate-50">
    <header
      class="flex items-center gap-3 p-2 justify-between sticky top-0 z-10 bg-slate-50 border-b border-slate-200"
    >
      <h1 class="text-purple-600 flex items-center pl-2">
        <div
          class="bg-purple-800 h-7 w-7 flex items-center justify-center mr-2 rounded-full text-purple-300"
        >
          <svg style="width: 20px; height: 20px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"
            />
          </svg>
        </div>
        Learn
        <span class="font-bold text-purple-800">Talon</span>
      </h1>
      <nav class="flex items-center gap-2">
        <MenuItem to="/">Intro</MenuItem>
        <MenuItem to="/alphabet">Alphabet</MenuItem>
        <MenuItem to="/session">Session</MenuItem>
      </nav>
    </header>

    <div class="flex flex-col items-center space-y-10 py-10 px-4">
      <router-view />
    </div>
  </main>
</template>
