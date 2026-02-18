<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
    <h1 class="text-3xl font-bold text-white sm:text-4xl">Services</h1>
    <p class="mt-4 text-neutral-400">
      What we offer as a consulting shop. We work as a team of developers under Radiance Lux; engagements can be solo or staffed to fit the project.
    </p>

    <div class="mt-12 space-y-10">
      <section class="rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:p-8">
        <h2 class="text-xl font-semibold text-accent">Web frontend architecture & development</h2>
        <p class="mt-2 text-neutral-400">
          We build web frontends—period. SPAs, dashboards, marketing sites, internal tools; Vue, React, Angular, or whatever fits. We prefer Vue but work in your stack. Design systems, performance, accessibility, production-ready: tell us what you need and we’ll build it.
        </p>
      </section>

      <section class="rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:p-8">
        <h2 class="text-xl font-semibold text-accent">Mobile app development</h2>
        <p class="mt-2 text-neutral-400">
          We build mobile apps—period. iOS, Android, or both; Flutter, React Native, or native when that’s the right call. We’ve shipped production apps with real-time features, BLE, Firebase, in-app purchase, subscriptions, and full CI/CD to the stores. From MVP to scale, from consumer to internal tools: tell us what you need and we’ll build it.
        </p>
      </section>

      <section class="rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:p-8">
        <h2 class="text-xl font-semibold text-accent">Backend & API development</h2>
        <p class="mt-2 text-neutral-400">
          We build backends and APIs—period. Go, Laravel, Python, or whatever fits. REST, event-driven, queues, auth, integrations; PostgreSQL, Redis, Docker, tests. New build or extend what you have: tell us what you need and we’ll build it.
        </p>
      </section>

      <section class="rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:p-8">
        <h2 class="text-xl font-semibold text-accent">Product strategy & roadmap</h2>
        <p class="mt-2 text-neutral-400">
          We can own strategy and execution—or plug into yours. From idea to launch: roadmapping, prioritization, shipping. We’ve done it in startups and high-stakes environments. Tell us where you are and where you want to go; we’ll figure out the path and execute.
        </p>
      </section>

      <section class="rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:p-8">
        <h2 class="text-xl font-semibold text-accent">Technical leadership & team guidance</h2>
        <p class="mt-2 text-neutral-400">
          We can lead, unblock, or mentor—whatever your team needs. Technical direction, short-term leadership gaps, leveling up how the team works. Experience from Army leadership and from leading frontend and product in tech. Tell us the problem and we’ll fit the role.
        </p>
      </section>

      <section class="rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:p-8">
        <h2 class="text-xl font-semibold text-accent">Compliance-aware design</h2>
        <p class="mt-2 text-neutral-400">
          We build systems that stay within the rules—policy, content moderation, legal or partner requirements. We’ve built and run moderation systems and policy frameworks. Whatever the guardrails, we can design and implement features that meet them without killing usability. Tell us the constraints and we’ll work within them.
        </p>
      </section>
    </div>

    <p class="mt-12 text-center text-neutral-500">
      Ideal for: startups, agencies, and orgs that need senior hands and clear delivery. We’re veteran-owned and operated and TS/SCI cleared—government, defense, and regulated work is in our wheelhouse.
    </p>

    <div class="mt-8 text-center">
      <RouterLink to="/contact" class="text-accent hover:underline">
        Get in touch →
      </RouterLink>
    </div>
  </div>
</template>
