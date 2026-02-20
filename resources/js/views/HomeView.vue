<script setup lang="ts">
import { RouterLink } from "vue-router";
import ProcessDiagram from "../components/ProcessDiagram.vue";

// Replace with real testimonials when available
const testimonials = [
  {
    quote: "They delivered on time and communicated clearly every step of the way. Exactly what we needed.",
    attribution: "— Former client, product lead",
  },
  {
    quote: "Senior-level execution without the big-agency overhead. We’ll work with them again.",
    attribution: "— Former client, startup",
  },
];
</script>

<template>
  <div>
    <section
      class="hero-section relative overflow-hidden border-b border-surface-700 bg-surface-800/50 px-4 py-20 sm:px-6 sm:py-28"
    >
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-medium uppercase tracking-widest text-accent">
          Veteran-owned · TS/SCI cleared
        </p>
        <h1 class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Custom software for consumer, B2B, and government.
        </h1>
        <p class="mt-3 text-xl font-medium text-neutral-300 sm:text-2xl">
          Senior-only team. No junior devs, no legacy baggage—just delivery.
        </p>
        <p class="mt-4 text-lg text-neutral-400">
          We’re most experienced in consumer-facing products—apps, marketplaces,
          and web—and equally at home in B2B and government. Web, mobile, and
          backend, from idea to production. Mission discipline and clearance
          when you need it. Clear goals, room to iterate. No micromanagement; we ship.
        </p>
        <p class="mt-6 text-sm text-neutral-500">
          San Antonio, TX · Remote across the US · Government and DoD welcome
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <RouterLink
            to="/contact"
            class="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-surface-900 transition hover:bg-accent-hover"
          >
            Schedule a discovery call
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

    <section class="border-b border-surface-700 bg-surface-800/40 px-4 py-12 sm:px-6 sm:py-16">
      <div class="mx-auto max-w-5xl">
        <h2 class="text-center text-xl font-semibold text-white sm:text-2xl">
          Our process
        </h2>
        <p class="mt-1 text-center text-sm text-neutral-400">
          From idea to production—clear phases, no surprises. Hover or tap a step.
        </p>
        <ProcessDiagram class="mt-8" />
      </div>
    </section>

    <section class="border-b border-surface-700 bg-surface-900/80 px-4 py-8 sm:px-6">
      <div class="mx-auto max-w-4xl">
        <p class="text-center text-xs font-medium uppercase tracking-widest text-neutral-500">
          Trusted by teams building
        </p>
        <p class="mt-2 text-center text-sm text-neutral-400 sm:text-base">
          Consumer products · B2B & SaaS · Government & DoD
        </p>
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

    <section class="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <h2 class="text-center text-2xl font-semibold text-white sm:text-3xl">
        What people say
      </h2>
      <div class="mt-10 grid gap-8 sm:grid-cols-2">
        <blockquote
          v-for="(t, i) in testimonials"
          :key="i"
          class="rounded-xl border border-surface-700 bg-surface-800/50 p-6"
        >
          <p class="text-neutral-300 italic">"{{ t.quote }}"</p>
          <p class="mt-3 text-sm text-neutral-500">{{ t.attribution }}</p>
        </blockquote>
      </div>
    </section>

    <section class="border-t border-surface-700 bg-surface-800/30 px-4 py-16 sm:px-6 sm:py-20">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-xl font-semibold text-white sm:text-2xl">Ready to ship?</h2>
        <p class="mt-2 text-neutral-400">
          Schedule a quick call or send us a message. We’ll get back to you within a business day.
        </p>
        <div class="mt-6 flex flex-wrap justify-center gap-4">
          <RouterLink
            to="/contact"
            class="inline-flex rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-surface-900 transition hover:bg-accent-hover"
          >
            Schedule a discovery call
          </RouterLink>
          <RouterLink
            to="/work"
            class="inline-flex rounded-lg border border-surface-600 bg-transparent px-5 py-2.5 text-sm font-medium text-neutral-300 transition hover:border-surface-500 hover:bg-surface-700"
          >
            See our work
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
