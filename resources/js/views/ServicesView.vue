<script setup lang="ts">
import StartProjectCta from '../components/StartProjectCta.vue'
</script>

<template>
  <div>
    <div class="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 class="text-3xl font-bold text-white sm:text-4xl">Services</h1>
      <p class="mt-4 text-neutral-400">
        Through <strong class="text-neutral-300">Radiance Lux Technologies LLC</strong> I take on frontend architecture, web and mobile
        delivery, and fractional engineering leadership. Veteran-owned, San Antonio metro, remote U.S. engagements welcome.
      </p>

      <section class="mt-10 rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:p-8">
        <h2 class="text-lg font-semibold text-accent">How we engage</h2>
        <ul class="mt-3 space-y-2 text-neutral-400">
          <li><strong class="text-neutral-300">Project-based</strong> — Fixed scope and timeline; I own delivery end to end.</li>
          <li><strong class="text-neutral-300">Hourly consulting</strong> — Advisory, reviews, or hands-on support.</li>
          <li><strong class="text-neutral-300">Monthly retainer</strong> — Ongoing product work, maintenance, or leadership.</li>
          <li><strong class="text-neutral-300">Staff augmentation</strong> — Embed with your team for a sprint or longer.</li>
        </ul>
      </section>

      <div class="mt-12 space-y-8">
        <section class="rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:p-8">
          <h2 class="text-xl font-semibold text-accent">Frontend architecture (Vue / React)</h2>
          <p class="mt-2 text-neutral-400">
            Design systems, SPAs, performance, accessibility, and production-ready web clients. Vue 3 and React ecosystems — Pinia,
            TanStack Query, Tailwind, Vuetify, shadcn/ui — from greenfield to migration.
          </p>
        </section>

        <section class="rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:p-8">
          <h2 class="text-xl font-semibold text-accent">Web &amp; mobile apps</h2>
          <p class="mt-2 text-neutral-400">
            Flutter, React Native, and Capacitor apps shipped to iOS, Android, and web. Store releases, BLE, Firebase, in-app purchases,
            and CI/CD pipelines I have run in production.
          </p>
        </section>

        <section class="rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:p-8">
          <h2 class="text-xl font-semibold text-accent">Fractional engineering leadership</h2>
          <p class="mt-2 text-neutral-400">
            Interim or part-time VP / lead frontend: hiring bar, code review standards, roadmap alignment, and unblocking teams without
            adding permanent headcount.
          </p>
        </section>

        <section class="rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:p-8">
          <h2 class="text-xl font-semibold text-accent">Content &amp; trust systems</h2>
          <p class="mt-2 text-neutral-400">
            Moderation workflows, operator tooling, and policy-aware product design — drawn from rebuilding moderation systems for a large
            social platform.
          </p>
        </section>
      </div>
    </div>

    <StartProjectCta />
  </div>
</template>
