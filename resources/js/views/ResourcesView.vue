<script setup lang="ts">
import { RouterLink } from 'vue-router'

const whitepapers = [
  {
    title: 'Efficient Cross-Platform Proximity Detection Using BLE Advertisement Data',
    subtitle: 'A novel approach to device discovery without connection overhead',
    description: 'This white paper presents a BLE proximity detection approach that eliminates device connections by using advertisement data for direct information exchange. Sub-2-second discovery times, 75% reduction in discovery latency vs traditional BLE, 60% less power, and full iOS/Android compatibility.',
    date: 'October 2025',
    author: 'Brett Humphreys, Radiance Lux Technologies LLC',
    file: '/whitepapers/BLE_Proximity_Detection_White_Paper.html',
    keywords: ['BLE', 'Proximity detection', 'Cross-platform', 'Mobile'],
  },
]
</script>

<template>
  <div class="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
    <h1 class="text-3xl font-bold text-white sm:text-4xl">Resources</h1>
    <p class="mt-4 text-neutral-400">
      White papers and technical write-ups from our work. Download or view in your browser.
    </p>

    <div class="mt-12 space-y-8">
      <article
        v-for="(wp, i) in whitepapers"
        :key="i"
        class="rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:p-8"
      >
        <h2 class="text-xl font-semibold text-white sm:text-2xl">
          {{ wp.title }}
        </h2>
        <p v-if="wp.subtitle" class="mt-1 text-accent">
          {{ wp.subtitle }}
        </p>
        <p class="mt-3 text-neutral-400">
          {{ wp.description }}
        </p>
        <p class="mt-2 text-sm text-neutral-500">
          {{ wp.author }} · {{ wp.date }}
        </p>
        <div class="mt-4 flex flex-wrap gap-2">
          <RouterLink
            to="/resources/ble"
            class="inline-flex rounded-lg border border-surface-600 bg-surface-800 px-4 py-2 text-sm font-medium text-neutral-300 transition hover:border-accent/50 hover:text-accent"
          >
            Animated diagram
          </RouterLink>
          <a
            :href="wp.file"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex rounded-lg bg-accent px-4 py-2 text-sm font-medium text-surface-900 transition hover:bg-accent-hover"
          >
            View white paper
          </a>
        </div>
        <p v-if="wp.keywords?.length" class="mt-3 text-xs text-neutral-500">
          {{ wp.keywords.join(' · ') }}
        </p>
      </article>
    </div>
  </div>
</template>
