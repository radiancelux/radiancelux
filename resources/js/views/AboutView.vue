<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
    <h1 class="text-3xl font-bold text-white sm:text-4xl">About</h1>
    <p class="mt-2 text-sm font-medium uppercase tracking-widest text-accent">
      Veteran-owned · TS/SCI cleared
    </p>
    <p class="mt-4 text-neutral-400">
      Radiance Lux exists because we saw a gap: teams that need to ship software
      often get either big-agency overhead or junior-heavy shops. We’re a
      veteran-led, senior-only shop—mission discipline and reliability, applied
      to your product.
    </p>

    <section class="mt-12 rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:p-8">
      <h2 class="text-xl font-semibold text-accent">Why veteran-led matters</h2>
      <p class="mt-2 text-neutral-400">
        Military service taught us to operate under pressure, own outcomes, and
        lead from the front. We bring that same discipline to software: clear
        requirements, no vaporware, and delivery you can count on. For
        government, defense, and regulated work, we’re TS/SCI cleared and
        comfortable in high-stakes environments. For commercial clients, you get
        the same reliability—less bureaucracy, more shipping.
      </p>
    </section>

    <section class="mt-10 rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:p-8">
      <h2 class="text-xl font-semibold text-accent">How we’re built</h2>
      <p class="mt-2 text-neutral-400">
        We’re most experienced in consumer-facing products—apps, marketplaces, and
        web—and equally at home in B2B and government. Lean team, no junior
        developers, no bench; every engagement is senior hands. We scale with
        contract talent when a project needs it, but the bar stays high. Newly
        launched means modern stack, no legacy baggage. Based in San Antonio,
        remote across the US; government and DoD welcome.
      </p>
    </section>

    <section class="mt-10 rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:p-8">
      <h2 class="text-xl font-semibold text-accent">Why we started</h2>
      <p class="mt-2 text-neutral-400">
        After years in the Army and in tech—leading teams, shipping products,
        and watching too many projects stall—we wanted a place that did one
        thing well: deliver. Radiance Lux is that place. If you have a problem
        to solve or a product to build, and you want people who’ll own it and
        ship it, we’re here.
      </p>
    </section>

    <p class="mt-12 text-center text-neutral-500">
      Want to see how we work? Read our
      <RouterLink to="/philosophy" class="text-accent hover:underline">principles</RouterLink>
      or meet the
      <RouterLink to="/team" class="text-accent hover:underline">team</RouterLink>.
    </p>
    <div class="mt-6 flex justify-center">
      <RouterLink
        to="/contact"
        class="inline-flex rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-surface-900 transition hover:bg-accent-hover"
      >
        Get in touch
      </RouterLink>
    </div>
  </div>
</template>
