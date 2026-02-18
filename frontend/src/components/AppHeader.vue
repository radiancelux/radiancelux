<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const open = ref(false)

const nav = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/team', label: 'Our Team' },
  { path: '/skills', label: 'Skills' },
  { path: '/philosophy', label: 'How We Work' },
  { path: '/contact', label: 'Contact' },
]

function close() {
  open.value = false
}

onMounted(() => {
  window.addEventListener('resize', close)
})
onUnmounted(() => {
  window.removeEventListener('resize', close)
})
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-surface-700 bg-surface-900/95 backdrop-blur">
    <div class="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
      <RouterLink to="/" class="flex items-center gap-2 font-semibold text-white transition hover:text-accent">
        <span class="text-accent">RL</span>
        <span>Radiance Lux</span>
      </RouterLink>

      <nav class="hidden md:flex md:items-center md:gap-6">
        <RouterLink
          v-for="item in nav"
          :key="item.path"
          :to="item.path"
          class="text-sm text-neutral-400 transition hover:text-white"
          active-class="text-accent"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <button
        type="button"
        class="md:hidden rounded p-2 text-neutral-400 hover:text-white"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div
      v-show="open"
      class="border-t border-surface-700 bg-surface-800 md:hidden"
    >
      <div class="flex flex-col gap-1 px-4 py-3">
        <RouterLink
          v-for="item in nav"
          :key="item.path"
          :to="item.path"
          class="rounded px-3 py-2 text-sm text-neutral-300 hover:bg-surface-700 hover:text-white"
          active-class="bg-accent-muted text-accent"
          @click="close"
        >
          {{ item.label }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>
