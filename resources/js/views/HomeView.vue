<script setup lang="ts">
import { RouterLink } from 'vue-router'
import StartProjectCta from '../components/StartProjectCta.vue'

const resumeUrl = '/Brett_Humphreys_Resume.pdf'

const skills = [
  'React, Next.js, Vue 3 (Pinia), Ionic, Vuetify, Tailwind, shadcn/ui, TanStack Query, PWAs, design systems, Figma-to-code, WCAG/508',
  'TypeScript, JavaScript, Dart, Go, PHP, C#, SQL',
  'React Native, Flutter, Capacitor, .NET MAUI',
  'Vitest, Playwright, MSW · Vite, pnpm, GitHub Actions, Docker, AI-assisted development',
]
</script>

<template>
  <div>
    <section class="border-b border-surface-700 bg-surface-800/50 px-4 py-16 sm:px-6 sm:py-24">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-medium uppercase tracking-widest text-accent">Veteran-owned · San Antonio metro · Remote</p>
        <h1 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Senior / Staff Frontend Engineer and Engineering Manager
        </h1>
        <p class="mt-2 text-lg text-neutral-300">Retired U.S. Army Major · Brett Humphreys</p>
        <p class="mt-6 text-left text-neutral-400 sm:text-center sm:text-lg">
          Hands-on frontend leader who led frontend for the Parler and PlayTV social platforms across web, iOS, and Android
          (TypeScript, React, Vue.js), owning the client from design to production. Turned a one-person web codebase into a shared
          client the team ships on, and unified web and mobile on one API/UI contract so features ship once. Set the review and quality
          bar while leading about 14 engineers and contractors. Earlier he built and ran Parler's moderation system end to end, after 20
          years in the Army.
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <RouterLink
            to="/contact"
            class="inline-flex rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-surface-900 transition hover:bg-accent-hover"
          >
            Start a project
          </RouterLink>
          <RouterLink
            to="/work"
            class="inline-flex rounded-lg border border-surface-600 px-5 py-2.5 text-sm font-medium text-neutral-300 transition hover:border-surface-500 hover:bg-surface-700"
          >
            Work history
          </RouterLink>
          <a
            :href="resumeUrl"
            download
            class="inline-flex rounded-lg border border-surface-600 px-5 py-2.5 text-sm font-medium text-neutral-300 transition hover:border-surface-500 hover:bg-surface-700"
          >
            Download résumé (PDF)
          </a>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <h2 class="text-2xl font-semibold text-white">About Radiance Lux</h2>
      <p class="mt-4 text-neutral-400">
        <strong class="text-neutral-300">Radiance Lux Technologies LLC</strong> is open for contracts — veteran-owned, based in the San
        Antonio metro, working remotely across the U.S. We help teams ship web and mobile products with strong frontend architecture and
        hands-on leadership when you need it.
      </p>
      <div class="mt-8 flex flex-wrap gap-4 text-sm">
        <a href="https://www.linkedin.com/in/humphreysbrett" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline"
          >LinkedIn</a
        >
        <a href="https://github.com/radiancelux" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">GitHub</a>
        <a href="https://x.com/radiance_lux" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">X @radiance_lux</a>
      </div>
    </section>

    <section class="border-t border-surface-700 bg-surface-900/50 px-4 py-14 sm:px-6">
      <div class="mx-auto max-w-5xl">
        <h2 class="text-2xl font-semibold text-white">Skills &amp; stack</h2>
        <ul class="mt-6 space-y-3 text-neutral-400">
          <li v-for="(line, i) in skills" :key="i">{{ line }}</li>
        </ul>
      </div>
    </section>

    <section class="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <h2 class="text-2xl font-semibold text-white">Education</h2>
      <p class="mt-4 text-neutral-400">
        B.S. Health Sciences, Healthcare Management, Trident University (cum laude). Board member, Homeland Security Foundation of America
        (since Sep 2023).
      </p>
    </section>

    <StartProjectCta />
  </div>
</template>
