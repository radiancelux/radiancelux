<script setup lang="ts">
import StartProjectCta from '../components/StartProjectCta.vue'

const roles = [
  {
    org: 'Intent Media Group',
    title: 'VP of Engineering, Frontend',
    dates: 'Jan 2026 – present',
    summary:
      'Vue 3/TS/Vuetify/Capacitor club platform, plus a .NET MAUI app with Maestro tests and iOS/Android release CI.',
  },
  {
    org: 'Parler / Sovren',
    title: 'Lead Frontend Engineer',
    dates: 'Aug 2025 – Oct 2026',
    summary:
      'Led frontend for Parler and PlayTV with 8 frontend engineers and 6–8 offshore contractors. Cut code-ownership concentration from 85% to 64%. Built one API/UI contract across web and mobile against Laravel/PHP and Go backends. Helped lead the Vue to React/React Native migration while keeping the Flutter apps shipping. Set the review and quality standards.',
  },
  {
    org: 'Radiance Lux Technologies LLC',
    title: 'Lead Mobile Engineer (contract)',
    dates: 'Nov 2023 – present',
    summary:
      'Primary engineer on the Genuine Flutter app for iOS, Android, and web (about 4,200 of 5,300 commits), covering BLE, in-app purchases, Firebase, and GitHub Actions release pipelines.',
  },
  {
    org: 'Closed Circuit Inc.',
    title: 'Lead Frontend Developer',
    dates: 'Apr 2023 – Aug 2025',
    summary: 'Built the Vue 3 web client that the new Parler acquired and adopted as its production web app.',
  },
  {
    org: 'Parlement Technologies (original Parler)',
    title: 'Architect and Head of Moderation Systems',
    dates: 'Jun 2020 – Apr 2023',
    summary:
      'Rebuilt moderation for 15M users at peak, which restored the App Store listing after the 2021 removal. Built the community jury workflow, operator tools, and dashboards. Wrote policy with product and legal, and ran crisis response.',
  },
]

const armySummary =
  'Rose from enlisted combat medic to Major, retired Apr 1, 2024. Roles include CBRNE Deputy at U.S. Army North (FEMA and federal partners, hurricane response); Acting Director and Test Officer at Army Test & Evaluation Command (up to 100 people, $600K–$6M programs); Division CBRNE Deputy, 2nd Infantry Division in Korea; Company Commander (89 soldiers, 600+ civilians, $40M in property); training manager for 54 WMD Civil Support Teams; combat medic deployed to Iraq 2005–2006 with the 101st Airborne. Awards: Army Commendation Medal (2), Army Achievement Medal (2).'
</script>

<template>
  <div>
    <div class="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 class="text-3xl font-bold text-white sm:text-4xl">Work history</h1>
      <p class="mt-4 text-neutral-400">Selected roles in tech and 20 years of service in the U.S. Army.</p>

      <div class="mt-12 space-y-8">
        <article
          v-for="role in roles"
          :key="role.org + role.dates"
          class="rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:p-8"
        >
          <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 class="text-xl font-semibold text-accent">{{ role.org }}</h2>
            <p class="text-sm text-neutral-500">{{ role.dates }}</p>
          </div>
          <p class="mt-1 font-medium text-neutral-200">{{ role.title }}</p>
          <p class="mt-3 text-neutral-400">{{ role.summary }}</p>
        </article>

        <article class="rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:p-8">
          <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 class="text-xl font-semibold text-accent">U.S. Army</h2>
            <p class="text-sm text-neutral-500">2004 – 2024</p>
          </div>
          <p class="mt-1 font-medium text-neutral-200">Enlisted combat medic to Major (retired)</p>
          <p class="mt-3 text-neutral-400">{{ armySummary }}</p>
        </article>
      </div>
    </div>

    <StartProjectCta />
  </div>
</template>
