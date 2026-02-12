<template>
  <section class="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div class="absolute inset-0 z-0">
      <div class="grid grid-cols-2 h-full">
        <div class="bg-gray-200">
          <NuxtImg
            src="/img/hero/hero1.webp"
            class="w-full h-full object-cover"
            alt="Fotografi profesional untuk produk, event, dan momen berharga Anda"
            width="1000"
            height="1000"
            loading="eager"
            preload
            fetchpriority="high"
          />
        </div>
        <div class="bg-gray-300">
          <NuxtImg
            src="/img/hero/hero2.webp"
            class="w-full h-full object-cover"
            alt="Fotografi profesional untuk produk, event, dan momen berharga Anda"
            width="1000"
            height="1000"
            loading="eager"
            preload
            fetchpriority="high"
          />
        </div>
      </div>
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 text-white text-center">
      <h1 class="text-3xl md:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
        Fotografi Profesional Komersial, Produk, dan <span class="text-primary">Momen Berharga Anda.</span>
      </h1>
      <!-- <p class="text-md md:text-2xl font-light mb-10 max-w-2xl mx-auto">
         produk, event, dan momen berharga Anda.
      </p> -->
      <div class="flex flex-col md:flex-row justify-center gap-4">
        <a href="#portfolio" class="px-10 py-4 border-2 border-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition" aria-label="View photography portfolio">Portofolio</a>
        <a href="/reservasi" class="px-10 py-4 bg-primary text-black font-bold uppercase tracking-widest hover:brightness-105 transition" aria-label="Book a photography session">Reservasi</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-primary {
  color: var(--primary);
}
</style>

