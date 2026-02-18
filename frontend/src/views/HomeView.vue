<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <section
      class="relative overflow-hidden border-b border-surface-700 bg-surface-800/50 px-4 py-20 sm:px-6 sm:py-28"
    >
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-medium uppercase tracking-widest text-accent">
          Need someone who'll actually ship?
        </p>
        <h1 class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          We build cool shit.
        </h1>
        <p class="mt-3 text-xl font-medium text-accent sm:text-2xl">
          Tell us what you need. We'll ship it.
        </p>
        <p class="mt-4 text-lg text-neutral-400">
          Clear goals and solid requirements, with room to iterate from idea to
          production. Whether you bring a detailed spec or a problem to solve,
          we're built to deliver. No micromanagement; just people who ship.
        </p>
        <p class="mt-6 text-sm text-neutral-500">
          Veteran-owned and operated · TS/SCI cleared
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <RouterLink
            to="/contact"
            class="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-surface-900 transition hover:bg-accent-hover"
          >
            Start a conversation
          </RouterLink>
          <RouterLink
            to="/services"
            class="inline-flex items-center rounded-lg border border-surface-600 bg-transparent px-5 py-2.5 text-sm font-medium text-neutral-300 transition hover:border-surface-500 hover:bg-surface-700"
          >
            What we do
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <h2 class="text-center text-2xl font-semibold text-white sm:text-3xl">
        Why work with us
      </h2>
      <div class="mt-12 grid gap-8 sm:grid-cols-3">
        <div class="rounded-xl border border-surface-700 bg-surface-800/50 p-6">
          <div class="text-2xl font-bold text-accent">Web & mobile</div>
          <p class="mt-2 text-neutral-400">
            Web frontends and mobile apps: any stack, any scope. We’ve led
            UI/frontend architecture and shipped production apps to the stores.
            SPAs, iOS/Android, real-time, BLE, or straightforward CRUD: tell us
            what you need and we’ll build it.
          </p>
        </div>
        <div class="rounded-xl border border-surface-700 bg-surface-800/50 p-6">
          <div class="text-2xl font-bold text-accent">Backend & APIs</div>
          <p class="mt-2 text-neutral-400">
            APIs, services, integrations: Go, Laravel, Python, or whatever fits.
            We’ve built production systems with PostgreSQL, Redis, Docker, and
            tests. Tell us what you need and we’ll build it.
          </p>
        </div>
        <div class="rounded-xl border border-surface-700 bg-surface-800/50 p-6">
          <div class="text-2xl font-bold text-accent">Leadership & team</div>
          <p class="mt-2 text-neutral-400">
            We lead, mentor, or execute: whatever the engagement needs. Army and
            tech leadership; contract work under the LLC is done by developers
            who get the mission and ship.
          </p>
        </div>
      </div>
    </section>

    <section
      class="border-t border-surface-700 bg-surface-800/30 px-4 py-16 sm:px-6 sm:py-20"
    >
      <div class="mx-auto max-w-3xl text-center">
        <blockquote class="text-lg italic text-neutral-300 sm:text-xl">
          “Opportunity is missed by most people because it is dressed in
          overalls and looks like work.”
        </blockquote>
        <p class="mt-2 text-sm text-neutral-500">- Thomas Edison</p>
        <p class="mt-6 text-neutral-400">
          No vaporware. Solid, production-ready software, built one step at a
          time, iteration by iteration.
        </p>
        <p class="mt-4 text-lg text-neutral-400">
          Give us the problem and the guardrails. We’ll figure out the how.
        </p>
        <RouterLink
          to="/philosophy"
          class="mt-4 inline-block text-accent hover:underline"
        >
          How we work →
        </RouterLink>
      </div>
    </section>
  </div>
</template>
