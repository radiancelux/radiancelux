<script setup lang="ts">
import humphreysUrl from "../assets/headshot/humphreys.png";
import mateusUrl from "../assets/headshot/mateus.png";

const team = [
  {
    name: "Brett Humphreys",
    role: "Founder",
    avatar: humphreysUrl,
    credentials: "Veteran-owned · TS/SCI cleared",
    bio: "Retired Army Major and senior software engineer. Leads frontend architecture and product in the wild; builds with Vue, Flutter, and Go. Board member at Homeland Security Foundation of America. 20+ years of leadership and delivery—from command to production apps.",
    linkedin: "https://www.linkedin.com/in/humphreysbrett/",
    github: "https://github.com/radiancelux",
  },
  {
    name: "Mateus Galasso",
    role: "Senior Full Cycle Developer",
    avatar: mateusUrl,
    bio: "Senior Full Cycle Developer with 20+ years of IT industry experience. Skilled in PHP, Python, HTML5, CSS, Laravel, VueJS, Docker, DevOps, and cloud platforms (AWS, Azure, Digital Ocean). Strong technical understanding with excellent communication skills and commitment to continuous learning.",
    linkedin: "https://www.linkedin.com/in/mateus-galasso",
    github: "https://github.com/mateusgalasso",
  },
];
</script>

<template>
  <div class="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
    <h1 class="text-3xl font-bold text-white sm:text-4xl">Our Team</h1>
    <p class="mt-4 text-neutral-400">
      The people behind Radiance Lux. We’re a veteran-owned and operated small
      shop; more developers join on contract for specific engagements.
    </p>

    <div class="mt-12 space-y-8">
      <article
        v-for="member in team"
        :key="member.name"
        class="rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:p-8"
      >
        <div class="flex flex-wrap items-start gap-4 sm:gap-6">
          <img
            v-if="member.avatar"
            :src="member.avatar"
            :alt="member.name"
            class="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-surface-600 sm:h-20 sm:w-20"
          />
          <div class="min-w-0 flex-1 shrink">
            <h2 class="text-xl font-semibold text-white">
              {{ member.name }}
            </h2>
            <p class="mt-1 text-accent">{{ member.role }}</p>
            <p v-if="member.credentials" class="mt-1 text-sm text-neutral-500">
              {{ member.credentials }}
            </p>
          </div>
          <div class="flex flex-wrap gap-2 w-full shrink-0 sm:w-auto">
            <a
              v-if="member.linkedin"
              :href="member.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex rounded-lg border border-surface-600 bg-surface-700/80 px-3 py-2 text-sm font-medium text-neutral-200 transition hover:border-surface-500 hover:bg-surface-600 hover:text-white"
            >
              LinkedIn
            </a>
            <a
              v-if="member.github"
              :href="member.github"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex rounded-lg border border-surface-600 bg-surface-700/80 px-3 py-2 text-sm font-medium text-neutral-200 transition hover:border-surface-500 hover:bg-surface-600 hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
        <div class="mt-4">
          <p class="text-neutral-400">
            {{ member.bio }}
          </p>
        </div>
      </article>
    </div>
  </div>
</template>
