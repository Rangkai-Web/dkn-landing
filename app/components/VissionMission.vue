<template>
  <section class="relative py-32 overflow-hidden">
    <!-- Full-width background with gradient -->
    <div
      class="absolute inset-0 bg-linear-to-br from-primary via-primary to-secondary"
    ></div>

    <!-- Decorative SVG shapes -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <SvgIconDoubleCircle
        class="text-white"
        :size="500"
        position-class="absolute -top-32 -right-32 opacity-[0.06] pointer-events-none"
      />
      <SvgIconSimpleCircle
        class="text-white"
        :size="300"
        position-class="absolute -bottom-20 -left-20 opacity-[0.05] pointer-events-none"
      />
      <SvgIconFloatingDots
        :dots="[
          { top: '80px', left: '15%', size: '16px', color: 'bg-white/20' },
          { bottom: '128px', right: '20%', size: '12px', color: 'bg-white/15' },
          { top: '40%', right: '10%', size: '8px', color: 'bg-white/25' },
        ]"
      />
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- Vision Section -->
      <div class="text-center mb-24">
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="w-12 h-[2px] bg-accent"></div>
          <span
            class="text-accent font-black tracking-[0.2em] uppercase text-sm"
          >
            Visi Kami
          </span>
          <div class="w-12 h-[2px] bg-accent"></div>
        </div>

        <div
          class="max-w-4xl mx-auto bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-12"
        >
          <div
            class="w-16 h-16 bg-accent/20 rounded-3xl flex items-center justify-center text-accent mx-auto mb-8"
          >
            <Icon name="lucide:award" size="40" />
          </div>
          <h3
            class="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight"
          >
            Menjadi mitra pengembangan sumber daya manusia yang
            <span class="text-accent italic">profesional</span>,
            <span class="text-accent italic">unggul</span>, dan
            <span class="text-accent italic">berdaya saing</span>.
          </h3>
          <div
            class="w-24 h-1.5 bg-linear-to-r from-accent to-white/30 rounded-full mx-auto mt-10"
          ></div>
        </div>
      </div>

      <!-- Mission Section -->
      <div>
        <div class="flex items-center justify-center gap-3 mb-12">
          <div class="w-12 h-[2px] bg-accent"></div>
          <span
            class="text-accent font-black tracking-[0.2em] uppercase text-sm"
          >
            Misi Kami
          </span>
          <div class="w-12 h-[2px] bg-accent"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-6 lg:gap-8">
          <div
            v-for="(mission, idx) in missions"
            :key="idx"
            class="group relative bg-white/[0.07] hover:bg-white/[0.14] backdrop-blur-md border border-white/10 hover:border-accent/40 rounded-3xl p-4 md:p-6 transition-all duration-500 hover:-translate-y-1"
          >
            <!-- Number badge -->
            <div
              class="absolute -top-4 -left-2 w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-primary font-black text-sm shadow-lg shadow-accent/30 group-hover:scale-110 transition-transform duration-500"
            >
              {{ String(idx + 1).padStart(2, "0") }}
            </div>

            <div class="flex items-start gap-5 pt-2">
              <div
                class="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/20 transition-colors duration-500"
              >
                <Icon :name="mission.icon" size="24" />
              </div>
              <div>
                <h4
                  class="text-white font-black text-lg mb-2 tracking-tight group-hover:text-accent transition-colors duration-300"
                >
                  {{ mission.title }}
                </h4>
                <p
                  class="text-white/60 leading-relaxed font-medium group-hover:text-white/80 transition-colors duration-300"
                >
                  {{ mission.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const missions = [
  {
    title: "Pelatihan Relevan",
    description:
      "Menyelenggarakan program pelatihan kerja yang relevan dengan kebutuhan industri dan dunia usaha.",
    icon: "lucide:graduation-cap",
  },
  {
    title: "Pemetaan Talenta",
    description:
      "Menyediakan layanan pemetaan potensi dan pengelolaan talenta yang objektif dan terukur.",
    icon: "lucide:search",
  },
  {
    title: "Pengembangan Berkelanjutan",
    description:
      "Meningkatkan kinerja individu dan tim melalui program pengembangan yang berkelanjutan.",
    icon: "lucide:trending-up",
  },
  {
    title: "SDM Berkualitas",
    description:
      "Mendukung organisasi dalam menciptakan sumber daya manusia yang produktif dan berkualitas.",
    icon: "lucide:shield-check",
  },
];
</script>

<style scoped></style>
