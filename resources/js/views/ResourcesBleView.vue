<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BleDiagram from '../components/BleDiagram.vue'
</script>

<template>
  <div class="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
    <nav class="mb-8">
      <RouterLink
        to="/resources"
        class="text-sm text-neutral-500 transition hover:text-accent"
      >
        ← Resources
      </RouterLink>
    </nav>

    <h1 class="text-3xl font-bold text-white sm:text-4xl">
      How our BLE proximity detection works
    </h1>
    <p class="mt-2 text-accent">
      Data-only discovery · No connection overhead
    </p>
    <p class="mt-4 text-neutral-400">
      Traditional BLE requires connect → GATT discovery → read → disconnect, which adds seconds and power. We put the payload (e.g. a ULID) in the advertisement itself so the scanner reads it without ever connecting. The diagram below animates the difference.
    </p>

    <div class="mt-10">
      <BleDiagram />
    </div>

    <section class="mt-12" aria-label="Use cases">
      <h2 class="text-xl font-semibold text-white">Use cases</h2>
      <p class="mt-2 text-sm text-neutral-400">
        Social apps and events benefit from fast, low-power proximity—discover who’s nearby without pairing or keeping the app open.
      </p>
      <ul class="mt-4 grid gap-3 sm:grid-cols-2">
        <li class="flex gap-3 rounded-xl border border-surface-700 bg-surface-800/50 p-4">
          <span class="text-accent" aria-hidden="true">→</span>
          <div>
            <strong class="text-neutral-200">Event &amp; conference check-in</strong>
            <p class="mt-0.5 text-xs text-neutral-500">Validate attendees by proximity; no tap or QR. Great for meetups, festivals, and ticketed events.</p>
          </div>
        </li>
        <li class="flex gap-3 rounded-xl border border-surface-700 bg-surface-800/50 p-4">
          <span class="text-accent" aria-hidden="true">→</span>
          <div>
            <strong class="text-neutral-200">Who’s here / networking</strong>
            <p class="mt-0.5 text-xs text-neutral-500">Show users who else is in the same venue or room so they can connect in person or in-app.</p>
          </div>
        </li>
        <li class="flex gap-3 rounded-xl border border-surface-700 bg-surface-800/50 p-4">
          <span class="text-accent" aria-hidden="true">→</span>
          <div>
            <strong class="text-neutral-200">Friend finder &amp; groups</strong>
            <p class="mt-0.5 text-xs text-neutral-500">Locate friends at a festival or concert, or surface when your group is in the same place.</p>
          </div>
        </li>
        <li class="flex gap-3 rounded-xl border border-surface-700 bg-surface-800/50 p-4">
          <span class="text-accent" aria-hidden="true">→</span>
          <div>
            <strong class="text-neutral-200">Dating &amp; connection apps</strong>
            <p class="mt-0.5 text-xs text-neutral-500">Optional “nearby” or “same place” signals so users can choose to say hi when they’re close.</p>
          </div>
        </li>
      </ul>
    </section>

    <div class="mt-12 rounded-xl border border-surface-700 bg-surface-800/50 p-6">
      <h2 class="text-lg font-semibold text-white">Learn more</h2>
      <p class="mt-2 text-sm text-neutral-400">
        Full technical details, anti-synchronization, Android throttling, and cross-platform strategy are in the white paper.
      </p>
      <a
        href="/whitepapers/BLE_Proximity_Detection_White_Paper.html"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-4 inline-flex rounded-lg bg-accent px-4 py-2 text-sm font-medium text-surface-900 transition hover:bg-accent-hover"
      >
        Open white paper
      </a>
    </div>
  </div>
</template>
