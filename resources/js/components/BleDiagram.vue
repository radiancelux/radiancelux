<script setup lang="ts">
const traditionalSteps = [
  'Discover',
  'Connect',
  'GATT',
  'Data',
  'Disconnect',
]
// Both devices alternate between Advertise and Scan (anti-sync); payload in ad → read → done
const ourSteps = [
  { label: 'Advertise', sub: 'payload in packet' },
  { label: 'Scan', sub: 'listen' },
  { label: 'Read payload (no connection)', sub: 'no GATT' },
  { label: 'Done', sub: '' },
]
</script>

<template>
  <div class="ble-diagram space-y-10">
    <!-- Traditional BLE flow -->
    <div class="rounded-xl border border-surface-700 bg-surface-800/50 p-6">
      <h3 class="text-sm font-semibold uppercase tracking-wider text-neutral-500">
        Traditional BLE (4–10 s)
      </h3>
      <div class="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
        <span class="text-xs text-neutral-500 sm:text-sm">Device A</span>
        <template v-for="(step, i) in traditionalSteps" :key="step">
          <span
            class="ble-step flex min-w-[4rem] items-center justify-center rounded-lg border-2 border-surface-600 bg-surface-800 px-3 py-2 text-xs font-medium text-neutral-400 sm:min-w-[5rem] sm:text-sm"
            :style="{ animationDelay: `${i * 1}s` }"
          >
            {{ step }}
          </span>
          <span
            v-if="i < traditionalSteps.length - 1"
            class="ble-arrow hidden text-surface-500 sm:block"
            :style="{ animationDelay: `${i * 1 + 0.5}s` }"
          >
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 001.414 0l4-4a1 1 0 000-1.414l-4-4a1 1 0 10-1.414 1.414L10.586 9H3a1 1 0 100 2h7.586l-2.293 2.293a1 1 0 000 1.414z" clip-rule="evenodd" />
            </svg>
          </span>
        </template>
        <span class="text-xs text-neutral-500 sm:text-sm">Device B</span>
      </div>
    </div>

    <!-- Our approach: both devices alternate Advertise ⇄ Scan -->
    <div class="rounded-xl border border-accent/30 bg-accent/5 p-6">
      <h3 class="text-sm font-semibold uppercase tracking-wider text-accent">
        Our approach (0.5–2 s)
      </h3>
      <p class="mt-1 text-xs text-neutral-500">
        Both devices alternate between advertise and scan (anti-sync). When one advertises, the other can scan → read payload, no connection.
      </p>
      <div class="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
        <span class="text-xs text-neutral-500 sm:text-sm">Both devices</span>
        <template v-for="(step, i) in ourSteps" :key="step.label + i">
          <span
            class="ble-step-alt flex min-w-[4rem] flex-col items-center justify-center rounded-lg border-2 border-accent/50 bg-surface-800 px-3 py-2 text-center sm:min-w-[5rem]"
            :style="{ animationDelay: `${i * 0.25}s` }"
          >
            <span class="text-xs font-medium text-neutral-300 sm:text-sm">{{ step.label }}</span>
            <span v-if="step.sub" class="mt-0.5 text-[10px] text-neutral-500">{{ step.sub }}</span>
          </span>
          <!-- Between Advertise and Scan: both devices alternate these two phases -->
          <span
            v-if="i === 0"
            class="ble-arrow-alt hidden shrink-0 items-center text-accent/70 sm:flex"
            :style="{ animationDelay: '0.12s' }"
            title="Each device alternates between advertise and scan"
          >
            <span class="text-sm font-medium" aria-hidden="true">⇄</span>
          </span>
          <span
            v-else-if="i < ourSteps.length - 1"
            class="ble-arrow-alt hidden text-accent/70 sm:block"
            :style="{ animationDelay: `${i * 0.25 + 0.12}s` }"
          >
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 001.414 0l4-4a1 1 0 000-1.414l-4-4a1 1 0 10-1.414 1.414L10.586 9H3a1 1 0 100 2h7.586l-2.293 2.293a1 1 0 000 1.414z" clip-rule="evenodd" />
            </svg>
          </span>
        </template>
      </div>
    </div>

    <!-- One-line explanation -->
    <p class="text-center text-sm text-neutral-500">
      No connection or GATT—data travels in the advertisement payload. Optional WebSocket notifies the advertiser when discovered (cross-platform).
    </p>
  </div>
</template>

<style scoped>
.ble-step {
  animation: step-pulse 5s ease-in-out infinite;
}
.ble-step-alt {
  animation: step-pulse-alt 1s ease-in-out infinite;
}
.ble-arrow {
  animation: arrow-fade 5s ease-in-out infinite;
}
.ble-arrow-alt {
  animation: arrow-fade-alt 1s ease-in-out infinite;
}

@keyframes step-pulse {
  0%, 12% {
    border-color: rgb(82 82 82);
    background-color: rgb(26 26 26);
    color: rgb(163 163 163);
  }
  15%, 25% {
    border-color: rgb(245 158 11 / 0.7);
    background-color: rgb(245 158 11 / 0.15);
    color: rgb(229 231 235);
  }
  30%, 100% {
    border-color: rgb(82 82 82);
    background-color: rgb(26 26 26);
    color: rgb(163 163 163);
  }
}

@keyframes step-pulse-alt {
  0%, 5% {
    border-color: rgb(245 158 11 / 0.5);
    background-color: rgb(26 26 26);
    color: rgb(163 163 163);
  }
  8%, 25% {
    border-color: rgb(245 158 11);
    background-color: rgb(245 158 11 / 0.2);
    color: rgb(245 158 11);
  }
  30%, 100% {
    border-color: rgb(245 158 11 / 0.5);
    background-color: rgb(26 26 26);
    color: rgb(163 163 163);
  }
}

@keyframes arrow-fade {
  0%, 100% { opacity: 0.4; }
  15% { opacity: 1; }
  28%, 100% { opacity: 0.4; }
}

@keyframes arrow-fade-alt {
  0%, 100% { opacity: 0.7; }
  12% { opacity: 1; }
  28%, 100% { opacity: 0.7; }
}
</style>
