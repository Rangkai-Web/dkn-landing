<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center overflow-hidden"
  >
    <!-- Carousel Full-Screen -->
    <ClientOnly>
      <Carousel
        :items-to-show="1"
        :items-to-scroll="1"
        :wrap-around="true"
        :autoplay="5000"
        :transition="1000"
        :pause-autoplay-on-hover="true"
        :mouse-drag="true"
        :touch-drag="true"
        class="w-full h-full"
      >
        <Slide v-for="(image, index) in heroImages" :key="index">
          <div class="relative w-full h-screen">
            <!-- Background Image -->
            <NuxtImg
              :src="image"
              alt="Hero Image"
              class="w-full h-full object-cover"
              loading="eager"
              :fetchpriority="index === 0 ? 'high' : 'auto'"
            />

            <!-- Overlay Gradient (Inspired by reference) -->
            <div
              class="absolute inset-0 z-10 bg-linear-to-r bg-primary/40"
            ></div>

            <!-- Content Layer -->
            <div
              class="absolute inset-0 z-20 flex flex-col items-start justify-center px-6 md:px-12 lg:px-32"
            >
              <div class="max-w-4xl">
                <h1
                  class="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-8 tracking-tighter"
                >
                  Where Competence <br />
                  <span
                    class="text-transparent bg-clip-text bg-linear-to-r from-accent to-white"
                  >
                    Moves Forward
                  </span>
                </h1>

                <p
                  class="text-slate-100 text-lg md:text-xl lg:text-2xl mb-12 max-w-xl leading-relaxed font-medium drop-shadow-lg"
                >
                  Mitra pengembangan SDM profesional, unggul, dan berdaya saing.
                  Bersiaplah menghadapi dinamika dunia kerja bersama kami.
                </p>

                <div class="flex flex-col sm:flex-row gap-5">
                  <a
                    href="#training"
                    class="flex items-center justify-center bg-white text-primary px-10 py-5 rounded-full font-black text-lg hover:bg-slate-100 hover:scale-110 transition-all duration-300 shadow-2xl uppercase tracking-wider"
                  >
                    Lihat Program
                    <Icon name="lucide:chevron-right" size="24" class="ml-2" />
                  </a>
                  <a
                    href="https://lms.dkn.digital/login/index.php"
                    target="_blank"
                    rel="noreferrer"
                    class="flex items-center justify-center bg-secondary backdrop-blur-md text-white px-10 py-5 rounded-full font-black text-lg hover:bg-primary border border-white/20 hover:scale-110 transition-all duration-300 shadow-2xl uppercase tracking-wider"
                  >
                    E-Learning
                    <Icon name="lucide:external-link" size="24" class="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>

      <!-- SSR Fallback -->
      <template #fallback>
        <div
          class="w-full h-screen bg-primary/20 animate-pulse flex items-center justify-center"
        >
          <div class="text-center">
            <h1
              class="text-4xl md:text-6xl font-black text-white/50 mb-4 opacity-0"
            >
              DKN Digital
            </h1>
          </div>
        </div>
      </template>
    </ClientOnly>
  </section>
</template>

<script setup>
const heroImages = [
  "/img/hero/hero1.webp",
  "/img/hero/hero2.webp",
  "/img/hero/hero3.webp",
];
</script>

<style scoped>
:deep(.carousel),
:deep(.carousel__viewport),
:deep(.carousel__track) {
  height: 100% !important;
  width: 100% !important;
}

:deep(.carousel__slide) {
  padding: 0;
  width: 100% !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.carousel__pagination) {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 30;
  display: flex !important;
  gap: 12px;
}

:deep(.carousel__pagination-button) {
  background-color: white;
  opacity: 0.3;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.carousel__pagination-button--active) {
  opacity: 1;
  width: 40px;
  border-radius: 6px;
  background-color: var(--color-accent, #8fd14f);
}
</style>
