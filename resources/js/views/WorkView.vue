<script setup lang="ts">
import StartProjectCta from '../components/StartProjectCta.vue'

const roles = [
  {
    org: 'Intent Media Group',
    title: 'VP of Engineering, Frontend',
    dates: 'Jan 2026 – present',
    summary:
      'I am building the mobile and web clients for a club platform in Vue 3, TypeScript, Vuetify, and Capacitor. Alongside that I ship a .NET MAUI app with Maestro mobile tests and iOS/Android release CI.',
  },
  {
    org: 'Parler / Sovren',
    title: 'Lead Frontend Engineer',
    dates: 'Aug 2025 – Oct 2026',
    summary:
      'I led frontend for the Parler and PlayTV social platforms across web, iOS, and Android, managing eight frontend engineers and six to eight offshore contractors. I turned a one-person web codebase into a shared client the team ships on, cutting ownership concentration from 85% to 64%, and unified web and mobile on one API and UI contract against Laravel/PHP and Go backends. I helped lead the migration from Vue to React/React Native while keeping the Flutter apps shipping, and set the review and quality bar the team executes against.',
  },
  {
    org: 'Radiance Lux Technologies LLC',
    title: 'Lead Mobile Engineer (contract)',
    dates: 'Nov 2023 – present',
    summary:
      'I am the primary engineer on the Genuine Flutter app for iOS, Android, and web — about 4,200 of 5,300 commits. The work covers Bluetooth LE, in-app purchases, Firebase messaging and storage, and GitHub Actions release pipelines for all three platforms.',
  },
  {
    org: 'Closed Circuit Inc.',
    title: 'Lead Frontend Developer',
    dates: 'Apr 2023 – Aug 2025',
    summary: 'I built the Vue 3 web client that the new Parler later acquired and adopted as its production web app.',
  },
  {
    org: 'Parlement Technologies (original Parler)',
    title: 'Architect and Head of Moderation Systems',
    dates: 'Jun 2020 – Apr 2023',
    summary:
      'I rebuilt moderation systems for a platform that peaked at about 15 million users, work that helped restore the app\'s Apple App Store listing after its 2021 removal. I owned the policies, the community jury workflow, and the operator tools and dashboards, writing procedure with product and legal and running crisis response when sensitive content hit.',
  },
]

const armyBody =
  'Twenty years taught me how to lead under pressure and keep large teams aligned when the stakes are real. I rose from combat medic — including a deployment to Iraq with the 101st Airborne — to company commander of 89 soldiers and more than 600 civilians, then to roles planning CBRNE response with FEMA and federal partners at U.S. Army North. As Acting Director and Test Officer I led teams of up to 100 people and owned operational test programs from $600K to $6M. That experience is why I care about clear standards, calm crisis response, and briefing executives without fluff.'

const armyAwards = 'Awards: Army Commendation Medal (2), Army Achievement Medal (2).'
</script>

<template>
  <div>
    <div class="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 class="text-3xl font-bold text-white sm:text-4xl">Work</h1>
      <p class="mt-4 text-neutral-400">
        Short stories from the products I have shipped and the teams I have led. Dates are secondary — the point is what changed.
      </p>

      <div class="mt-12 space-y-8">
        <article
          v-for="role in roles"
          :key="role.org + role.dates"
          class="rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:p-8"
        >
          <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 class="text-xl font-semibold text-accent">{{ role.org }}</h2>
            <p class="text-sm text-neutral-600">{{ role.dates }}</p>
          </div>
          <p class="mt-1 font-medium text-neutral-200">{{ role.title }}</p>
          <p class="mt-3 text-neutral-400">{{ role.summary }}</p>
        </article>

        <article class="rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:p-8">
          <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 class="text-xl font-semibold text-accent">U.S. Army</h2>
            <p class="text-sm text-neutral-600">2004 – 2024</p>
          </div>
          <p class="mt-1 font-medium text-neutral-200">Enlisted combat medic → Major (retired Apr 1, 2024)</p>
          <p class="mt-3 text-neutral-400">{{ armyBody }}</p>
          <p class="mt-4 text-sm text-neutral-500">{{ armyAwards }}</p>
        </article>
      </div>
    </div>

    <StartProjectCta />
  </div>
</template>
