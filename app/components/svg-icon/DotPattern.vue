<script setup>
const props = defineProps({
  spacing: { type: [String, Number], default: 40 },
  patternId: { type: String, default: "" },
});

const generatedId = useId();
const finalId = computed(() => props.patternId || `dot-pattern-${generatedId}`);
</script>

<template>
  <div class="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          :id="finalId"
          x="0"
          y="0"
          :width="spacing"
          :height="spacing"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="2"
            cy="2"
            r="1.5"
            fill="currentColor"
            class="text-primary"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" :fill="`url(#${finalId})`" />
    </svg>
  </div>
</template>
