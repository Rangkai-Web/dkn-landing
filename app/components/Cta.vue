<template>
  <section class="relative py-32 overflow-hidden text-center px-6">
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

    <!-- Content -->
    <div class="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
      <h2
        class="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight"
      >
        Siap Tingkatkan <br />
        <span class="text-accent italic">Kompetensi Anda?</span>
      </h2>
      <p
        class="text-white/50 text-lg md:text-xl max-w-xl mx-auto mb-12 font-medium leading-relaxed"
      >
        Bergabunglah dengan ratusan profesional yang telah mengembangkan
        keterampilan mereka bersama DKN Digital.
      </p>
      <a
        href="https://lms.dkn.digital/login/index.php"
        target="_blank"
        rel="noreferrer"
        class="flex items-center justify-center bg-accent text-primary px-12 py-5 rounded-full font-black text-lg hover:scale-110 transition-all duration-300 shadow-2xl shadow-accent/30 uppercase tracking-wider"
      >
        Masuk E-Learning
        <Icon name="lucide:external-link" size="24" class="ml-3" />
      </a>
    </div>
  </section>
</template>

<style scoped></style>
