<script setup lang="ts">
import { RouterLink } from 'vue-router'

// Add case studies here: problem, solution, outcome, client (or anonymized), optional link
// Add real case studies: { title, problem, solution, outcome, client?, link? }
const cases = [
  {
    title: 'Case studies coming soon',
    problem: 'We’re adding recent work—consumer apps, B2B products, and government projects—with problem, solution, and results.',
    solution: 'Each study will show how we approached the work and what shipped.',
    outcome: 'In the meantime, tell us about your project and we’ll share relevant examples in our first conversation.',
    client: null,
    link: null,
  },
]
</script>

<template>
  <div class="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
    <h1 class="text-3xl font-bold text-white sm:text-4xl">Work</h1>
    <p class="mt-4 text-neutral-400">
      Selected projects and case studies. Problem, solution, and results—so you
      can see how we deliver.
    </p>

    <div class="mt-12 space-y-10">
      <article
        v-for="(c, i) in cases"
        :key="i"
        class="rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:p-8"
      >
        <h2 class="text-xl font-semibold text-accent">{{ c.title }}</h2>
        <p v-if="c.client" class="mt-1 text-sm text-neutral-500">{{ c.client }}</p>
        <div class="mt-4 space-y-3 text-neutral-400">
          <p><strong class="text-neutral-300">Problem:</strong> {{ c.problem }}</p>
          <p><strong class="text-neutral-300">What we did:</strong> {{ c.solution }}</p>
          <p><strong class="text-neutral-300">Outcome:</strong> {{ c.outcome }}</p>
        </div>
        <a
          v-if="c.link"
          :href="c.link"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 inline-block text-sm text-accent hover:underline"
        >
          Learn more →
        </a>
      </article>
    </div>

    <p class="mt-12 text-center text-neutral-500">
      Have a project in mind? We’d love to hear about it.
    </p>
    <div class="mt-6 flex justify-center">
      <RouterLink
        to="/contact"
        class="inline-flex rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-surface-900 transition hover:bg-accent-hover"
      >
        Start a conversation
      </RouterLink>
    </div>
  </div>
</template>
