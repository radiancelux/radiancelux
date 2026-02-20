<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
    <h1 class="text-3xl font-bold text-white sm:text-4xl">Services</h1>
    <p class="mt-4 text-neutral-400">
      What we offer as a consulting shop. We work as a lean, senior-level team under Radiance Lux; engagements can be solo or staffed to fit the project.
    </p>

    <p class="mt-4 text-sm text-neutral-500">
      <strong class="text-neutral-400">Tech stack:</strong> Vue, React, Flutter, Go, Laravel, Python; AWS, Docker, PostgreSQL, Redis. We fit your stack when it makes sense—see <RouterLink to="/skills" class="text-accent hover:underline">Skills &amp; stack</RouterLink> for the full picture.
    </p>

    <section class="mt-10 rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:p-8">
      <h2 class="text-lg font-semibold text-accent">How we engage</h2>
      <ul class="mt-3 space-y-2 text-neutral-400">
        <li><strong class="text-neutral-300">Project-based</strong> — Fixed scope and timeline; we own delivery end to end.</li>
        <li><strong class="text-neutral-300">Hourly consulting</strong> — Advisory, code reviews, or hands-on support as needed.</li>
        <li><strong class="text-neutral-300">Monthly retainer</strong> — Ongoing capacity for product work, maintenance, or leadership.</li>
        <li><strong class="text-neutral-300">Staff augmentation</strong> — We slot into your team for a sprint or longer; same discipline, your process.</li>
      </ul>
    </section>

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
      Ideal for: consumer products, startups, agencies, and orgs that need senior
      hands and clear delivery. Veteran-owned and TS/SCI cleared—government,
      defense, and regulated work is in our wheelhouse.
    </p>

    <div class="mt-10 flex flex-wrap justify-center gap-4">
      <RouterLink
        to="/contact"
        class="inline-flex rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-surface-900 transition hover:bg-accent-hover"
      >
        Schedule a discovery call
      </RouterLink>
      <RouterLink to="/skills" class="inline-flex rounded-lg border border-surface-600 px-5 py-2.5 text-sm font-medium text-neutral-300 transition hover:border-surface-500 hover:bg-surface-700">
        See our stack →
      </RouterLink>
    </div>
  </div>
</template>
