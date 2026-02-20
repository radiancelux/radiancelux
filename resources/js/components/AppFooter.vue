<script setup lang="ts">
const email = 'radiancelux@gmail.com'
</script>

<template>
  <footer class="border-t border-surface-700 bg-surface-800">
    <div class="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div class="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div class="text-center sm:text-left">
          <p class="font-semibold text-white">Radiance Lux Technologies LLC</p>
          <p class="mt-1 text-sm text-neutral-500">Veteran-owned and operated · San Antonio, TX · Remote-friendly</p>
        </div>
        <div class="flex flex-wrap justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/humphreysbrett/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-neutral-400 transition hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/radiancelux"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-neutral-400 transition hover:text-accent"
          >
            GitHub
          </a>
          <a
            :href="`mailto:${email}`"
            class="text-sm text-neutral-400 transition hover:text-accent"
          >
            {{ email }}
          </a>
        </div>
      </div>
      <p class="mt-6 text-center text-xs text-neutral-600">
        © {{ new Date().getFullYear() }} Radiance Lux Technologies LLC. Custom software. Clear delivery. Veteran-led.
      </p>
    </div>
  </footer>
</template>
