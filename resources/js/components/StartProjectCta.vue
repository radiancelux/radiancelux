<script setup lang="ts">
import { RouterLink } from 'vue-router'

withDefaults(
  defineProps<{
    title?: string
    description?: string
  }>(),
  {
    title: 'Ready to build something together?',
    description:
      "I'm open for contract work through Radiance Lux — frontend architecture, web and mobile apps, and fractional engineering leadership.",
  },
)
</script>

<template>
  <section class="border-t border-surface-700 bg-surface-800/30 px-4 py-12 sm:px-6">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-xl font-semibold text-white sm:text-2xl">{{ title }}</h2>
      <p class="mt-2 text-neutral-400">{{ description }}</p>
      <RouterLink
        to="/contact"
        class="mt-6 inline-flex rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-surface-900 transition hover:bg-accent-hover"
      >
        Start a project
      </RouterLink>
    </div>
  </section>
</template>
