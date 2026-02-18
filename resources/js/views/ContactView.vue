<script setup lang="ts">
import { ref, reactive } from 'vue'

const email = 'radiancelux@gmail.com'

const sending = ref(false)
const sent = ref(false)
const error = ref('')

const form = reactive({
  name: '',
  email: '',
  message: '',
})

async function submit() {
  error.value = ''
  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    error.value = 'Please fill in all fields.'
    return
  }
  sending.value = true
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(form),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok) {
      error.value = data.errors ? Object.values(data.errors).flat().join(' ') : data.message || 'Something went wrong.'
      return
    }
    sent.value = true
    form.name = ''
    form.email = ''
    form.message = ''
  } catch {
    error.value = 'Network error. Try emailing us directly.'
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <div class="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
    <h1 class="text-3xl font-bold text-white sm:text-4xl">Contact</h1>
    <p class="mt-4 text-neutral-400">
      Have a project or a problem? Send us a message below or email directly. We’re based in San Antonio and work remotely.
    </p>

    <div class="mt-10 rounded-xl border border-surface-700 bg-surface-800/50 p-6 sm:p-8">
      <p class="mb-6 text-sm text-neutral-500">
        Prefer email? Write to
        <a :href="`mailto:${email}`" class="text-accent hover:underline">{{ email }}</a>
      </p>

      <form v-if="!sent" class="space-y-5" @submit.prevent="submit">
        <div>
          <label for="name" class="block text-sm font-medium text-neutral-300">Name</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="mt-1 block w-full rounded-lg border border-surface-600 bg-surface-900 px-3 py-2 text-white placeholder-neutral-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-neutral-300">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="mt-1 block w-full rounded-lg border border-surface-600 bg-surface-900 px-3 py-2 text-white placeholder-neutral-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-neutral-300">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            required
            rows="5"
            class="mt-1 block w-full rounded-lg border border-surface-600 bg-surface-900 px-3 py-2 text-white placeholder-neutral-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="What are you looking for?"
          />
        </div>
        <p v-if="error" class="text-sm text-red-400">{{ error }}</p>
        <button
          type="submit"
          :disabled="sending"
          class="w-full rounded-lg bg-accent px-4 py-2.5 font-medium text-surface-900 transition hover:bg-accent-hover disabled:opacity-50 sm:w-auto sm:px-6"
        >
          {{ sending ? 'Sending…' : 'Send message' }}
        </button>
      </form>

      <div v-else class="rounded-lg bg-accent-muted p-4 text-accent">
        <p class="font-medium">Message sent.</p>
        <p class="mt-1 text-sm">We’ll get back to you soon.</p>
      </div>
    </div>
  </div>
</template>
