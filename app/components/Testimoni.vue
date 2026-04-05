<template>
  <section id="testimonials" class="relative py-32 px-6 overflow-hidden">
    <!-- Dark gradient background -->
    <div
      class="absolute inset-0 bg-linear-to-br from-primary via-primary to-secondary"
    ></div>

    <!-- Overlay gradient for depth -->
    <div
      class="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"
    ></div>

    <!-- Decorative SVG elements -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <SvgIconRotatedSquare
        class="text-white"
        :size="350"
        :rotation="25"
        position-class="absolute -bottom-16 -left-16 opacity-[0.05] pointer-events-none"
      />
      <SvgIconSimpleCircle
        class="text-white"
        :size="120"
        position-class="absolute top-[30%] left-[5%] opacity-[0.08] pointer-events-none"
      />
      <SvgIconDiamond
        class="text-white"
        :size="80"
        position-class="absolute bottom-[25%] right-[8%] opacity-[0.07] pointer-events-none"
      />
      <SvgIconFloatingDots
        :dots="[
          { top: '20%', right: '25%', size: '12px', color: 'bg-accent/20' },
          { bottom: '15%', left: '30%', size: '8px', color: 'bg-white/15' },
          { top: '55%', left: '15%', size: '16px', color: 'bg-accent/10' },
        ]"
      />

      <!-- Glow blobs -->
      <div
        class="absolute -top-20 left-1/3 w-72 h-72 bg-accent/8 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute -bottom-20 right-1/4 w-64 h-64 bg-secondary/15 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-10 px-4">
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="w-12 h-[2px] bg-accent"></div>
          <span
            class="text-accent font-black tracking-[0.2em] uppercase text-sm"
          >
            Apa Kata Mereka
          </span>
          <div class="w-12 h-[2px] bg-accent"></div>
        </div>
        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]"
        >
          Testimoni <span class="text-accent italic">Klien</span>
        </h2>
      </div>

      <!-- Carousel Container -->
      <div v-if="isLoading" class="flex justify-center items-center py-24">
        <SvgIconLoading />
      </div>

      <div v-else-if="testimonials.length > 0" class="relative px-2 md:px-12">
        <ClientOnly>
          <Carousel
            v-bind="carouselConfig"
            class="testimonials-carousel h-full"
          >
            <Slide v-for="(testimonial, index) in testimonials" :key="index">
              <div
                class="group h-full px-2 py-8 transition-transform duration-300"
              >
                <div
                  class="testimonial-card relative flex flex-col justify-center items-center bg-primary/50! backdrop-blur-xl p-4 shadow-xl shadow-primary/5 group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
                >
                  <!-- Decorative SVG on Card -->
                  <SvgIconDashedCircle
                    class="text-primary"
                    :size="100"
                    position-class="absolute -top-6 -left-6 opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.08] pointer-events-none"
                  />

                  <NuxtImg
                    :src="testimonial.img || '/img/others/placeholder.webp'"
                    :alt="`${testimonial.title} - DKN Digital`"
                    class="w-full h-fit object-contain rounded-2xl select-none"
                    draggable="false"
                    loading="lazy"
                    format="webp"
                    quality="85"
                  />

                  <!-- Bottom decoration -->
                  <div
                    class="absolute bottom-6 right-8 flex gap-1 opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <div class="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <div class="w-8 h-1.5 rounded-full bg-primary/40"></div>
                  </div>
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
              <Pagination />
            </template>
          </Carousel>

          <template #fallback>
            <div class="flex justify-center items-center py-24">
              <SvgIconLoading />
            </div>
          </template>
        </ClientOnly>
      </div>

      <div v-else class="text-center py-24">
        <p class="text-white/60">Belum ada testimoni.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { storeToRefs } from "pinia";
import { useTestimonialStore } from "~/stores/testimonialStore";

const store = useTestimonialStore();
const { testimonials, isLoading, error } = storeToRefs(store);

onMounted(() => {
  store.fetchTestimonials();
});

const carouselConfig = {
  itemsToShow: 1,
  itemsToScroll: 1,
  wrapAround: true,
  autoplay: 5000,
  transition: 600,
  breakpoints: {
    768: {
      itemsToShow: 2,
    },
    1024: {
      itemsToShow: 3,
    },
  },
};
</script>

<style scoped>
.testimonials-carousel {
  padding: 1rem 0;
}

.testimonial-card {
  height: 44rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border-top: 8px solid #8fd14f;
  border-bottom: 8px solid #8fd14f;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  margin: 0;
}

@media (min-width: 768px) {
  .testimonial-card {
    padding: 2rem;
  }
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  margin: 0 -24px;
  background-color: #8fd14f;
  color: #1f5e5a;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
}

:deep(.carousel__pagination) {
  margin-top: 2.5rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

:deep(.carousel__pagination-button) {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: #e2e8f0;
  transition: all 0.3s ease;
}

:deep(.carousel__pagination-button::after) {
  display: none;
}

:deep(.carousel__pagination-button--active) {
  width: 2.5rem;
  background-color: #8fd14f;
  border-radius: 5px;
}

:deep(.carousel__slide) {
  height: auto;
}

:deep(.carousel__track) {
  height: auto;
}
</style>
