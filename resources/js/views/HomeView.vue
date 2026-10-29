<script setup lang="ts">
import { RouterLink } from 'vue-router'
import StartProjectCta from '../components/StartProjectCta.vue'

const resumeUrl = '/Brett_Humphreys_Resume.pdf'

const skillGroups = [
  {
    label: 'Frontend',
    tags: [
      'React',
      'Next.js',
      'Vue 3',
      'Pinia',
      'Ionic',
      'Vuetify',
      'Tailwind',
      'shadcn/ui',
      'TanStack Query',
      'PWAs',
      'Design systems',
      'Figma-to-code',
      'WCAG / 508',
    ],
  },
  {
    label: 'Languages',
    tags: ['TypeScript', 'JavaScript', 'Dart', 'Go', 'PHP', 'C#', 'SQL'],
  },
  {
    label: 'Mobile',
    tags: ['React Native', 'Flutter', 'Capacitor', '.NET MAUI'],
  },
  {
    label: 'Testing & delivery',
    tags: ['Vitest', 'Playwright', 'MSW', 'Vite', 'pnpm', 'GitHub Actions', 'Docker', 'AI-assisted development'],
  },
]
</script>

<template>
  <div>
    <section class="border-b border-surface-700 bg-surface-800/50 px-4 py-16 sm:px-6 sm:py-24">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-medium uppercase tracking-widest text-accent">Veteran-owned · San Antonio metro · Remote</p>
        <h1 class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          I build web and mobile products people use every day.
        </h1>
        <p class="mt-2 text-lg text-neutral-300">Brett Humphreys · Lead Frontend Engineer · Retired U.S. Army Major</p>
        <p class="mt-6 text-left text-neutral-400 sm:text-center sm:text-lg">
          I build products end to end, from developer tools that keep AI coding agents in check to cross-platform web and mobile apps.
          Through Radiance Lux I take on frontend architecture, product work, and fractional leadership for teams that need someone who
          can own the client end to end.
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <RouterLink
            to="/projects"
            class="inline-flex rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-surface-900 transition hover:bg-accent-hover"
          >
            See my work
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
      <h2 class="text-2xl font-semibold text-white">About me</h2>
      <p class="mt-4 text-neutral-400">
        I am a husband and a dad in the San Antonio metro. I spent twenty years in the Army — enlisted combat medic to Major — then
        moved into building social and consumer products. I care about clear architecture, a high quality bar, and tooling that helps teams
        ship without drama. When I am not coding I am usually deep in product design and the policy side of trust and safety.
      </p>
    </section>

    <section class="border-t border-surface-700 bg-surface-900/50 px-4 py-14 sm:px-6">
      <div class="mx-auto max-w-5xl">
        <h2 class="text-2xl font-semibold text-white">About Radiance Lux</h2>
        <p class="mt-4 text-neutral-400">
          <strong class="text-neutral-300">Radiance Lux Technologies LLC</strong> is my veteran-owned studio, based in the San Antonio
          metro and working remotely across the U.S. I help teams ship web and mobile products with strong frontend architecture and
          hands-on leadership when you need it. Open for contracts.
        </p>
        <div class="mt-8 flex flex-wrap gap-4 text-sm">
          <a href="https://www.linkedin.com/in/humphreysbrett" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline"
            >LinkedIn</a
          >
          <a href="https://github.com/radiancelux" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">GitHub</a>
          <a href="https://x.com/radiance_lux" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">X @radiance_lux</a>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <h2 class="text-2xl font-semibold text-white">Skills &amp; stack</h2>
      <div class="mt-8 space-y-8">
        <div v-for="group in skillGroups" :key="group.label">
          <h3 class="text-sm font-medium uppercase tracking-wider text-neutral-500">{{ group.label }}</h3>
          <ul class="mt-3 flex flex-wrap gap-2">
            <li
              v-for="tag in group.tags"
              :key="tag"
              class="rounded-full border border-surface-600 bg-surface-800/80 px-3 py-1 text-sm text-neutral-300"
            >
              {{ tag }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="border-t border-surface-700 bg-surface-900/50 px-4 py-14 sm:px-6">
      <div class="mx-auto max-w-5xl">
        <h2 class="text-2xl font-semibold text-white">Education &amp; board</h2>
        <p class="mt-4 text-neutral-400">
          B.S. Health Sciences, Healthcare Management, Trident University (cum laude). Board member, Homeland Security Foundation of
          America (since Sep 2023).
        </p>
      </div>
    </section>

    <StartProjectCta />
  </div>
</template>
