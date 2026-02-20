<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const CYCLE_INTERVAL_MS = 3500;
const PAUSE_RESUME_DELAY_MS = 800;

const activeIndex = ref(0);
const userPaused = ref(false);
let cycleTimer: ReturnType<typeof setInterval> | null = null;
let resumeTimer: ReturnType<typeof setTimeout> | null = null;

const steps = [
    {
        id: "discover",
        number: 1,
        label: "Discover",
        sublabel: "Scope & goals",
        detail: "We align on the problem, success criteria, and constraints so we’re building the right thing.",
    },
    {
        id: "define",
        number: 2,
        label: "Define",
        sublabel: "Requirements & design",
        detail: "Clear requirements, architecture, and design—enough to ship without over-specifying.",
    },
    {
        id: "build",
        number: 3,
        label: "Build",
        sublabel: "Develop & test",
        detail: "We develop in iterations with feedback. Quality and delivery go hand in hand.",
    },
    {
        id: "ship",
        number: 4,
        label: "Ship",
        sublabel: "Deploy & iterate",
        detail: "Deploy to production, then iterate based on real usage and your priorities.",
    },
];

function goNext() {
    activeIndex.value = (activeIndex.value + 1) % steps.length;
}

function startCycle() {
    if (cycleTimer) return;
    cycleTimer = setInterval(goNext, CYCLE_INTERVAL_MS);
}

function stopCycle() {
    if (cycleTimer) {
        clearInterval(cycleTimer);
        cycleTimer = null;
    }
}

function setActive(i: number) {
    activeIndex.value = i;
    userPaused.value = true;
    stopCycle();
}

function onInteractionEnd() {
    if (!userPaused.value) return;
    if (resumeTimer) clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
        userPaused.value = false;
        startCycle();
        resumeTimer = null;
    }, PAUSE_RESUME_DELAY_MS);
}

onMounted(() => {
    startCycle();
});

onUnmounted(() => {
    stopCycle();
    if (resumeTimer) clearTimeout(resumeTimer);
});
</script>

<template>
    <div class="process-diagram" role="list" aria-label="Our process steps">
        <!-- Mobile: single column with down arrows. Desktop: row with right arrows -->
        <div
            class="flex flex-col items-center gap-2 md:flex-row md:flex-wrap md:items-stretch md:justify-center md:gap-1"
        >
            <template v-for="(step, i) in steps" :key="step.id">
                <button
                    type="button"
                    role="listitem"
                    :aria-current="activeIndex === i ? 'step' : undefined"
                    class="process-step group flex h-28 w-28 shrink-0 flex-col items-center justify-start overflow-visible rounded-full border-2 pt-4 pb-3 px-3 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900 sm:h-32 sm:w-32 sm:pt-5 md:h-36 md:w-36 md:pt-6"
                    :class="[
                        activeIndex === i
                            ? 'border-accent bg-accent/25 shadow-[0_0_28px_rgba(245,158,11,0.2)] ring-2 ring-accent/30 scale-105'
                            : 'border-surface-600 bg-surface-800 hover:border-accent/70 hover:bg-surface-700 hover:shadow-[0_0_20px_rgba(245,158,11,0.08)] hover:scale-105',
                    ]"
                    @click="setActive(i)"
                    @focus="setActive(i)"
                    @blur="onInteractionEnd()"
                    @mouseenter="setActive(i)"
                    @mouseleave="onInteractionEnd()"
                >
                    <!-- Fixed-height slot so number is always in the same place -->
                    <span
                        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-300 sm:mt-2 sm:h-10 sm:w-10 md:h-11 md:w-11 md:text-base"
                        :class="
                            activeIndex === i
                                ? 'bg-accent text-neutral-900 ring-2 ring-accent/60'
                                : 'bg-surface-700 text-neutral-300 group-hover:bg-accent/30 group-hover:text-accent'
                        "
                    >
                        {{ step.number }}
                    </span>
                    <!-- Fixed min-height so label/sublabel area is same height for all steps -->
                    <div
                        class="flex mt-1 min-h-[2.25rem] flex-col items-center justify-center text-center sm:min-h-[2.5rem] md:min-h-[2.75rem]"
                    >
                        <span
                            class="text-sm font-semibold leading-tight transition-colors duration-300 sm:text-base"
                            :class="
                                activeIndex === i ? 'text-accent' : 'text-white'
                            "
                        >
                            {{ step.label }}
                        </span>
                        <span
                            class="mt-0.5 text-xs leading-tight transition-colors duration-300"
                            :class="
                                activeIndex === i
                                    ? 'text-accent/90'
                                    : 'text-neutral-500'
                            "
                        >
                            {{ step.sublabel }}
                        </span>
                    </div>
                </button>
                <!-- Arrow: down on mobile, right on desktop -->
                <span
                    v-if="i < steps.length - 1"
                    class="flex shrink-0 items-center justify-center text-neutral-500 md:py-0"
                    aria-hidden="true"
                >
                    <svg
                        class="h-5 w-5 rotate-90 md:rotate-0 sm:h-6 sm:w-6 md:h-6 md:w-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 001.414 0l4-4a1 1 0 000-1.414l-4-4a1 1 0 10-1.414 1.414L10.586 9H3a1 1 0 100 2h7.586l-2.293 2.293a1 1 0 000 1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </span>
                <!-- Cycle arrow after last: only show on desktop (horizontal flow) -->
            </template>
        </div>

        <!-- Single animated detail area (cycle through steps) -->
        <div class="mt-6 min-h-[4.5rem] overflow-hidden px-2 text-xs">
            <Transition name="detail" mode="out-in">
                <p
                    :key="activeIndex"
                    class="text-center text-sm leading-relaxed text-neutral-400"
                >
                    {{ steps[activeIndex].detail }}
                </p>
            </Transition>
        </div>
    </div>
</template>

<style scoped>
.detail-enter-active,
.detail-leave-active {
    transition:
        opacity 0.35s ease,
        transform 0.35s ease;
}
.detail-enter-from {
    opacity: 0;
    transform: translateY(8px);
}
.detail-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}
</style>
