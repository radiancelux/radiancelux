<script setup lang="ts">
import { RouterLink } from "vue-router";

const principles = [
  {
    title: "Character, competence, and courage",
    body: "Character comes first. Without honesty and integrity, it’s impossible to inspire and lead. We stay sharp on our craft and on the mission so we can deliver. We have the courage to speak up when something’s wrong and to take care of our team and our clients. If you know a better way to do something, we expect you to say so.",
  },
  {
    title: "Lead from the front",
    body: "“Follow me” means we’re in the work, not just directing it. We don’t ask people to do what we wouldn’t do ourselves. Getting into the details improves situational awareness and decisions. You can’t lead from the front from behind a desk.",
  },
  {
    title: "Stay sharp",
    body: "We take care of ourselves so we can sustain focus and handle pressure. That discipline carries into how we work: consistent, reliable, no burnout heroics.",
  },
  {
    title: "Develop the team",
    body: "Set clear, realistic goals and expectations; lead by example. Make sure everyone understands the *why* behind the work. Delivery only really works when there’s a shared understanding of what we’re building and why.",
  },
  {
    title: "Empower people and let them do their job",
    body: "Good work needs room for imagination and creativity. We don’t stifle our team—we give them space to innovate, own outcomes, and learn from honest mistakes. Micromanagement and “build it exactly like this spec” are the opposite of how we want to operate.",
  },
  {
    title: "Anticipate problems and prepare",
    body: "Don’t wait until you’re at the cliff edge to decide. Be proactive, not reactive. We plan and prepare so we have time to do it right. The one-third / two-thirds rule: use the first third of available time to plan so the rest is execution.",
  },
  {
    title: "Remain humble",
    body: "Don’t worry about who gets the credit. Don’t let authority go to your head. We aim to be servant leaders: we serve the people we work with and the clients we work for. Period.",
  },
  {
    title: "Self-reflect",
    body: "Look in the mirror and ask: did I do my best, or can I be better? Honesty with ourselves is how we improve. A mindset of constant learning makes us better at what we do and how we lead.",
  },
  {
    title: "Satisfaction comes from shipping",
    body: "Respect is earned by character and delivery, not title. The real win is a shipped product or a solved problem, done without cutting corners on integrity.",
  },
  {
    title: "Hang tough",
    body: "When things get hard, giving up isn’t an option. We work through problems, ask for help when we need it, and keep going. The door is always open.",
  },
];
</script>

<template>
  <div class="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
    <h1 class="text-3xl font-bold text-white sm:text-4xl">How we work</h1>
    <p class="mt-4 text-neutral-400">
      Ten principles we live by at Radiance Lux: how we work with clients, with
      each other, and how we lead. They’re the same values we've carried from
      military and tech leadership into building software.
    </p>

    <div class="mt-12 space-y-10">
      <section
        v-for="(p, i) in principles"
        :key="i"
        class="rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:p-8"
      >
        <h2 class="text-xl font-semibold text-accent">
          {{ i + 1 }}. {{ p.title }}
        </h2>
        <p class="mt-2 text-neutral-400">
          {{ p.body }}
        </p>
      </section>
      <p class="mt-2 text-sm text-neutral-500">
        Inspired by the leadership principles in
        <em>Beyond Band of Brothers: The War Memoirs of Major Dick Winters</em>.
      </p>
    </div>

    <p class="mt-12 text-center text-neutral-500">
      These principles shape how we work. If this resonates, let’s talk.
    </p>
    <div class="mt-6 flex flex-wrap justify-center gap-4">
      <RouterLink
        to="/contact"
        class="inline-flex rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-surface-900 transition hover:bg-accent-hover"
      >
        Schedule a discovery call
      </RouterLink>
      <RouterLink to="/contact" class="text-sm text-accent hover:underline">
        Or send a message →
      </RouterLink>
    </div>
  </div>
</template>
