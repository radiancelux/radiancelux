<script setup lang="ts"></script>

<template>
  <div class="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
    <h1 class="text-3xl font-bold text-white sm:text-4xl">Skills & stack</h1>
    <p class="mt-4 text-neutral-400">
      What we use day to day and what we’re comfortable picking up. We care more
      about solving the problem than sticking to one stack—and we integrate with
      your existing workflows when needed.
    </p>

    <div class="mt-12 grid gap-8 sm:grid-cols-2">
      <section
        class="rounded-xl border border-surface-700 bg-surface-800/50 p-6"
      >
        <h2 class="text-lg font-semibold text-accent">Web frontend</h2>
        <p class="mt-2 text-sm text-neutral-500">
          SPAs, dashboards, marketing sites, internal tools—whatever the product
          needs, we can build it.
        </p>
        <ul class="mt-3 space-y-1 text-neutral-400">
          <li>
            Vue, React, Angular, Svelte—we prefer Vue but work in your stack
          </li>
          <li>TypeScript, HTML5, CSS, responsive & accessible UIs</li>
          <li>Ionic, Vite, build tooling, performance, design systems</li>
        </ul>
      </section>

      <section
        class="rounded-xl border border-surface-700 bg-surface-800/50 p-6"
      >
        <h2 class="text-lg font-semibold text-accent">Mobile</h2>
        <p class="mt-2 text-sm text-neutral-500">
          iOS, Android, or both—we can build whatever you need, from MVPs to
          store-ready apps.
        </p>
        <ul class="mt-3 space-y-1 text-neutral-400">
          <li>Flutter, React Native, or native when it fits</li>
          <li>Real-time, BLE, device APIs, in-app purchase, subscriptions</li>
          <li>
            Firebase, backend integration, CI/CD to App Store & Play Store
          </li>
          <li>Custom packages and plugins · localization · design systems</li>
        </ul>
      </section>

      <section
        class="rounded-xl border border-surface-700 bg-surface-800/50 p-6"
      >
        <h2 class="text-lg font-semibold text-accent">Backend & APIs</h2>
        <p class="mt-2 text-sm text-neutral-500">
          APIs, services, integrations, background jobs—whatever your product or
          system needs.
        </p>
        <ul class="mt-3 space-y-1 text-neutral-400">
          <li>Go, PHP/Laravel, Python—we pick the right tool</li>
          <li>PostgreSQL, Redis, REST, event-driven · auth, queues, mail</li>
          <li>Modular, tested, production-ready</li>
        </ul>
      </section>

      <section
        class="rounded-xl border border-surface-700 bg-surface-800/50 p-6"
      >
        <h2 class="text-lg font-semibold text-accent">Product & process</h2>
        <p class="mt-2 text-sm text-neutral-500">
          Strategy, execution, or both—we can own it or plug into yours.
        </p>
        <ul class="mt-3 space-y-1 text-neutral-400">
          <li>Roadmaps, prioritization, launch</li>
          <li>Content moderation, policy, compliance—we’ve built it</li>
          <li>Cross-functional and stakeholder-heavy environments</li>
        </ul>
      </section>

      <section
        class="rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:col-span-2"
      >
        <h2 class="text-lg font-semibold text-accent">
          Workflows & collaboration
        </h2>
        <p class="mt-2 text-sm text-neutral-500">
          Whatever you use, we work in it. We don’t ask you to change how you
          work—we plug into Jira, ClickUp, Asana, Linear, Notion, Confluence,
          Slack, Teams, Zoom, or whatever your stack is. Docs, chat, meetings:
          we show up and stay aligned.
        </p>
        <ul class="mt-3 space-y-1 text-neutral-400">
          <li>
            <span class="text-neutral-300">Tracking:</span> Jira, ClickUp,
            Asana, Linear, GitHub Projects, Trello
          </li>
          <li>
            <span class="text-neutral-300">Docs & comms:</span> Notion,
            Confluence, Google Docs · Slack, Teams, email · Zoom, Meet, Whereby
          </li>
        </ul>
      </section>

      <section
        class="rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:col-span-2"
      >
        <h2 class="text-lg font-semibold text-accent">Also in the toolbox</h2>
        <p class="mt-2 text-sm text-neutral-500">
          The rest of what it takes to ship—version control, CI/CD, databases,
          testing, DevOps, cloud, design handoff, hardware/edge. We’ve got it
          covered.
        </p>
        <ul class="mt-3 space-y-1.5 text-neutral-400">
          <li>
            <span class="text-neutral-300">Version control & delivery:</span>
            Git, GitHub, GitLab, Bitbucket · CI/CD (Actions, GitLab CI,
            CircleCI, etc.)
          </li>
          <li>
            <span class="text-neutral-300">Databases & data:</span> PostgreSQL,
            SQLite, Redis · migrations, tuning · analytics when needed
          </li>
          <li>
            <span class="text-neutral-300">Testing:</span> unit, integration,
            E2E when it pays off · we test what matters
          </li>
          <li>
            <span class="text-neutral-300">DevOps & cloud:</span> Docker · AWS,
            Azure, Digital Ocean · Linux, shell, config, monitoring
          </li>
          <li>
            <span class="text-neutral-300">Design & assets:</span> Figma
            handoff, design systems, asset pipelines
          </li>
          <li>
            <span class="text-neutral-300">Hardware & edge:</span> BLE, device
            APIs, embedded-adjacent · whatever the platform needs
          </li>
        </ul>
      </section>
    </div>

    <p class="mt-10 text-center text-neutral-500">
      We’d rather get the right solution than the most fashionable stack. Need
      something not listed? Ask.
    </p>
  </div>
</template>
