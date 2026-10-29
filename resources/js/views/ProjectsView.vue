<script setup lang="ts">
import StartProjectCta from '../components/StartProjectCta.vue'

interface OpenSourceProject {
  name: string
  url: string
  description: string
  stack: string
  stars?: number
  whitepaper?: string
}

import projectsJson from '../data/openSourceProjects.json'

const openSourceProjects = projectsJson as OpenSourceProject[]

const privateProjects = [
  {
    name: 'VerifyChain.AI',
    description:
      'Content provenance with SHA-256 fingerprints, Ed25519 identities, and a Merkle ledger that issues certificates and badges. Go plus Vue 3/TS/Pinia.',
  },
]
</script>

<template>
  <div>
    <div class="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 class="text-3xl font-bold text-white sm:text-4xl">Projects</h1>
      <p class="mt-4 text-neutral-400">
        Open-source tools we build in the open, plus a small set of private work we describe without linking until it is ready to share.
      </p>

      <section class="mt-12">
        <h2 class="text-xl font-semibold text-white">Open source</h2>
        <div class="mt-6 grid gap-6 sm:grid-cols-2">
          <article
            v-for="project in openSourceProjects"
            :key="project.url"
            class="flex flex-col rounded-xl border border-surface-700 bg-surface-800/50 p-6"
          >
            <div class="flex items-start justify-between gap-3">
              <h3 class="text-lg font-semibold text-accent">{{ project.name }}</h3>
              <span v-if="project.stars != null" class="shrink-0 text-sm text-neutral-500"> ★ {{ project.stars }} </span>
            </div>
            <p class="mt-2 flex-1 text-sm text-neutral-400">{{ project.description }}</p>
            <p class="mt-3 text-xs text-neutral-500">{{ project.stack }}</p>
            <div class="mt-4 flex flex-wrap gap-3">
              <a
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-medium text-accent hover:underline"
              >
                GitHub →
              </a>
              <a
                v-if="project.whitepaper"
                :href="project.whitepaper"
                class="text-sm text-neutral-400 hover:text-accent hover:underline"
              >
                White paper
              </a>
            </div>
          </article>
        </div>
      </section>

      <section class="mt-16">
        <h2 class="text-xl font-semibold text-white">Private work</h2>
        <p class="mt-2 text-sm text-neutral-500">Descriptions only — no public links yet.</p>
        <div class="mt-6 space-y-4">
          <article
            v-for="project in privateProjects"
            :key="project.name"
            class="rounded-xl border border-surface-700 bg-surface-800/50 p-6"
          >
            <h3 class="text-lg font-semibold text-neutral-200">{{ project.name }}</h3>
            <p class="mt-2 text-sm text-neutral-400">{{ project.description }}</p>
          </article>
        </div>
      </section>
    </div>

    <StartProjectCta title="Need something built?" />
  </div>
</template>
