<template>
  <section id="about" class="relative py-32 px-6 overflow-hidden bg-background">
    <!-- Background SVG Pattern -->
    <SvgIconDotPattern patternId="about-dots" />

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <!-- Text Content -->
        <div class="flex flex-col gap-8">
          <div class="space-y-4">
            <div class="flex items-center gap-2">
              <div class="w-12 h-[2px] bg-accent"></div>
              <span
                class="text-accent font-black tracking-[0.2em] uppercase text-sm"
              >
                About Us
              </span>
            </div>
            <h2
              class="text-4xl md:text-5xl lg:text-6xl font-black text-text leading-[1.1] tracking-tight"
            >
              Meningkatkan Kompetensi <br />
              <span class="text-primary italic">Individu & Organisasi</span>
            </h2>
            <p
              class="text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl font-medium"
            >
              PT. Dayaguna Kompetensi Nusantara adalah perusahaan pengembangan
              sumber daya manusia yang berfokus pada pendekatan pelatihan kerja,
              pemetaan talenta, dan solusi SDM strategis.
            </p>
          </div>

          <!-- Feature Cards -->
          <div class="grid gap-6">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="group flex items-start gap-6 p-6 rounded-3xl bg-white/40 backdrop-blur-sm border border-white/60 shadow-xl shadow-primary/5 hover:border-primary hover:bg-white/80 transition-all duration-500 transform hover:-translate-y-1"
            >
              <div
                class="w-16 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:text-white transition-all duration-500 shadow-inner relative overflow-hidden"
              >
                <Icon :name="feature.icon" size="20" class="relative z-10" />
                <div
                  class="absolute inset-0 bg-accent/20 scale-0 group-hover:scale-110 transition-transform duration-700 rounded-full blur-xl"
                ></div>
              </div>
              <div class="flex flex-col gap-1">
                <h4
                  class="text-xl font-black text-text tracking-tight group-hover:text-primary transition-colors"
                >
                  {{ feature.title }}
                </h4>
                <p class="text-slate-500 leading-relaxed font-medium">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Visual Side -->
        <div class="relative group hidden lg:block">
          <!-- Abstract Decorations -->
          <div
            class="absolute -top-12 -right-12 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"
          ></div>
          <div
            class="absolute -bottom-16 -left-16 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          ></div>

          <!-- Image Container -->
          <div
            class="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-4/5 lg:aspect-auto lg:h-[650px] transform group-hover:scale-[1.01] transition-transform duration-700"
          >
            <NuxtImg
              src="/img/others/about.webp"
              alt="Training Session"
              class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              loading="lazy"
            />

            <!-- Professional Overlay -->
            <div
              class="absolute inset-0 bg-primary/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-700"
            ></div>

            <!-- Float UI Details -->
            <div class="absolute bottom-10 left-6 right-6">
              <div
                class="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700"
              >
                <div class="flex items-center gap-6">
                  <div
                    class="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-primary shadow-xl shadow-accent/20"
                  >
                    <Icon name="lucide:target" size="36" />
                  </div>
                  <div class="flex flex-col">
                    <span
                      class="text-xs text-primary font-black uppercase tracking-[0.3em]"
                    >
                      Komitmen Kami
                    </span>
                    <h3 class="text-2xl font-black text-text tracking-tighter">
                      Mitra Strategis Anda
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Decorative SVGs -->
          <SvgIconDashedCircle
            class="text-accent"
            :size="128"
            position-class="absolute -top-8 -left-8 opacity-20 pointer-events-none"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: "Lembaga Pelatihan Kerja (LPK)",
    description:
      "Menyelenggarakan program terstruktur & tersertifikasi untuk meningkatkan kualitas tenaga kerja nasional.",
    icon: "lucide:award",
  },
  {
    title: "Fokus Pengembangan SDM",
    description:
      "Menyiapkan talenta adaptif, unggul, dan siap menghadapi dinamika dunia kerja yang terus berubah.",
    icon: "lucide:users",
  },
  {
    title: "Program Berbasis Industri",
    description:
      "Kurikulum yang dirancang khusus sesuai dengan kebutuhan riil dunia usaha dan standar industri global.",
    icon: "lucide:briefcase",
  },
];
</script>

<style scoped></style>
