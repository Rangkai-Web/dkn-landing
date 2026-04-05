<template>
  <section id="faq" class="relative py-24 bg-bg overflow-hidden">
    <!-- SVG Background Decorations -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Top Right Accent -->
      <svg
        class="absolute -top-24 -right-24 w-96 h-96 text-primary/5 opacity-20"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.5,81.4,29,73.6,42.2C65.8,55.4,55.8,67.3,42.7,75.1C29.6,82.9,14.8,86.6,-0.1,86.8C-15,87,-29.9,83.7,-43.3,76.1C-56.7,68.5,-68.6,56.6,-76.7,42.9C-84.8,29.2,-89.1,14.6,-89.4,-0.2C-89.7,-15,-86.1,-30,-78.2,-43.7C-70.3,-57.4,-58.1,-69.8,-43.9,-77C-29.7,-84.2,-14.8,-86.1,0.1,-86.3C15,-86.5,29.9,-84.9,44.7,-76.4Z"
          transform="translate(100 100)"
        />
      </svg>
      <!-- Bottom Left Accent -->
      <svg
        class="absolute -bottom-24 -left-24 w-80 h-80 text-accent/10 opacity-30"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="80" fill="currentColor" />
      </svg>
      <!-- Dot Pattern -->
      <div
        class="absolute inset-0 opacity-[0.03]"
        style="
          background-image: radial-gradient(
            var(--color-primary) 1px,
            transparent 1px
          );
          background-size: 32px 32px;
        "
      ></div>
    </div>

    <div class="max-w-4xl mx-auto px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-10">
        <span
          class="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-4"
        >
          Punya Pertanyaan?
        </span>
        <h2
          class="text-4xl md:text-5xl font-black text-dark leading-tight mb-4 tracking-tighter"
        >
          Frequently Asked <span class="text-primary italic">Questions</span>
        </h2>
        <p class="text-slate-500 text-lg max-w-2xl mx-auto">
          Temukan jawaban atas pertanyaan umum mengenai DKN Digital, program
          pelatihan kami, dan ekosistem e-learning.
        </p>
      </div>

      <!-- FAQ Content -->
      <div v-if="isLoading" class="flex justify-center items-center py-24">
        <SvgIconLoading />
      </div>

      <div v-else-if="faqs.length > 0" class="space-y-4">
        <div
          v-for="(item, index) in faqs"
          :key="item.id || index"
          class="group bg-white rounded-3xl border border-slate-200 transition-all duration-300 hover:shadow-xl hover:border-primary/20"
          :class="{
            'ring-2 ring-primary/10 shadow-lg border-primary/20':
              activeIndex === index,
          }"
        >
          <button
            @click="toggleAccordion(index)"
            class="w-full flex items-center justify-between p-4 text-left transition-all duration-300"
            :aria-expanded="activeIndex === index"
          >
            <div class="flex items-center gap-5">
              <!-- Item Icon -->
              <div
                class="shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl transition-colors duration-300"
                :class="
                  activeIndex === index
                    ? 'bg-primary text-white scale-110'
                    : 'bg-slate-50 text-slate-400 group-hover:bg-primary/5 group-hover:text-primary'
                "
              >
                <Icon :name="item.icon || 'lucide:info'" size="24" />
              </div>
              <h3
                class="text-xl font-bold transition-colors duration-300"
                :class="activeIndex === index ? 'text-primary' : 'text-dark'"
              >
                {{ item.question }}
              </h3>
            </div>

            <!-- Toggle Icon -->
            <div
              class="shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-slate-100 transition-all duration-500"
              :class="
                activeIndex === index
                  ? 'rotate-180 bg-accent border-accent text-white'
                  : 'bg-white text-slate-300 group-hover:text-primary group-hover:border-primary/30'
              "
            >
              <Icon
                :name="activeIndex === index ? 'lucide:minus' : 'lucide:plus'"
                size="20"
              />
            </div>
          </button>

          <!-- Accordion Answer -->
          <div
            class="overflow-hidden transition-[max-height] duration-500 ease-in-out"
            :style="{ maxHeight: activeIndex === index ? '500px' : '0' }"
          >
            <div class="px-6 md:px-8 pb-8 pt-2">
              <p class="text-slate-600 leading-relaxed text-lg">
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-24">
        <p class="text-slate-500">Belum ada FAQ yang tersedia.</p>
      </div>

      <!-- Support CTA -->
      <div
        class="mt-10 p-8 bg-primary rounded-3xl relative overflow-hidden group shadow-2xl"
      >
        <div
          class="absolute inset-0 bg-linear-to-r from-primary via-primary/95 to-secondary opacity-90"
        ></div>

        <!-- Decoration SVG for CTA -->
        <svg
          class="absolute right-0 top-0 h-full text-white/5 pointer-events-none transform translate-x-1/4 scale-150 rotate-12"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <circle cx="50" cy="50" r="40" />
        </svg>

        <div
          class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div>
            <h4 class="text-2xl font-black text-white mb-2">
              Masih punya pertanyaan?
            </h4>
            <p class="text-white/70">
              Tim dukungan kami siap membantu Anda 24/7.
            </p>
          </div>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            class="group flex items-center bg-accent text-primary px-8 py-4 rounded-full font-bold hover:text-secondary transition-all duration-300 shadow-xl"
          >
            Hubungi Lewat WhatsApp
            <Icon
              name="lucide:arrow-right"
              class="ml-2 group-hover:translate-x-2 transition-transform"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useFaqStore } from "~/stores/faqStore";

const store = useFaqStore();
const { faqs, isLoading, error } = storeToRefs(store);

const activeIndex = ref(0);

onMounted(() => {
  store.fetchFaqs();
});

const generatedId = useId();
const patternId = computed(() => `faq-dots-${generatedId}`);

const toggleAccordion = (index: number) => {
  activeIndex.value = activeIndex.value === index ? -1 : index;
};
</script>

<style scoped>
/* Custom Transition for height */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
