<template>
  <section id="why-us" class="relative py-32 px-6 overflow-hidden bg-primary/5">
    <!-- Background SVG Pattern -->
    <SvgIconGridPattern patternId="whyus-grid" />

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="w-12 h-[2px] bg-accent"></div>
          <span
            class="text-accent font-black tracking-[0.2em] uppercase text-sm"
          >
            Mengapa Kami?
          </span>
          <div class="w-12 h-[2px] bg-accent"></div>
        </div>
        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-black text-text tracking-tight leading-[1.1]"
        >
          Alasan Memilih <span class="text-primary italic">DKN Digital</span>
        </h2>
      </div>

      <!-- Why Choose Us Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <div
          v-for="(item, idx) in whyChooseUsItems"
          :key="idx"
          class="group relative bg-white/60 backdrop-blur-sm border border-white/80 rounded-3xl p-8 shadow-xl shadow-primary/5 hover:border-primary hover:bg-white transition-all duration-500 hover:-translate-y-2"
        >
          <!-- Number watermark -->
          <span
            class="absolute top-4 right-5 text-7xl font-black text-primary/20 leading-none select-none group-hover:text-primary/40 transition-colors duration-500"
          >
            {{ String(idx + 1).padStart(2, "0") }}
          </span>

          <div
            class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:text-white transition-all duration-500"
          >
            <Icon :name="item.icon" size="28" />
          </div>
          <h4
            class="text-xl font-black text-text tracking-tight mb-2 group-hover:text-primary transition-colors duration-300"
          >
            {{ item.title }}
          </h4>
          <p class="text-slate-500 text-sm leading-relaxed font-medium">
            {{ item.description }}
          </p>
        </div>
      </div>

      <!-- Legalitas & Manajemen -->
      <div class="grid gap-8">
        <!-- Legalitas Card -->
        <div
          class="relative bg-white/60 backdrop-blur-sm border border-white/80 rounded-3xl p-6 md:p-8 shadow-xl shadow-primary/5 overflow-hidden"
        >
          <!-- Decorative corner SVG -->
          <SvgIconNestedSquare
            class="text-primary"
            :size="160"
            position-class="absolute -top-6 -right-6 opacity-[0.04] pointer-events-none"
          />

          <div class="flex items-center gap-4 mb-10">
            <div
              class="w-14 h-14 bg-accent/15 rounded-2xl flex items-center justify-center text-primary"
            >
              <Icon name="lucide:file-badge-2" size="28" />
            </div>
            <div>
              <h3 class="text-2xl font-black text-text tracking-tight">
                Legalitas Perusahaan
              </h3>
              <p class="text-slate-500 text-sm font-medium">
                Terdaftar & terverifikasi resmi
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-3 gap-4">
            <div
              v-for="(doc, idx) in legalDocs"
              :key="idx"
              class="group flex flex-col md:flex-row md:items-center gap-2 justify-between p-4 rounded-2xl bg-background/80 border border-slate-300 hover:border-primary/30 transition-colors duration-300"
            >
              <div class="flex items-center gap-2">
                <div
                  class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary"
                >
                  <Icon :name="doc.icon" size="16" />
                </div>
                <span class="text-slate-500 font-bold text-sm">
                  {{ doc.label }}
                </span>
              </div>
              <span class="font-mono font-bold text-primary text-sm">
                {{ doc.value }}
              </span>
            </div>
          </div>
        </div>

        <!-- Manajemen Card -->
        <!-- <div
          class="relative bg-white/60 backdrop-blur-sm border border-white/80 rounded-3xl p-10 md:p-12 shadow-xl shadow-primary/5 overflow-hidden"
        >
          <SvgIconDashedCircle
            class="text-accent"
            :size="160"
            position-class="absolute -bottom-6 -left-6 opacity-[0.06] pointer-events-none"
          />

          <div class="flex items-center gap-4 mb-10">
            <div
              class="w-14 h-14 bg-accent/15 rounded-2xl flex items-center justify-center text-primary"
            >
              <Icon name="lucide:users-round" size="28" />
            </div>
            <div>
              <h3 class="text-2xl font-black text-text tracking-tight">
                Struktur Manajemen
              </h3>
              <p class="text-slate-500 text-sm font-medium">
                Tim profesional & berpengalaman
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-3 gap-4">
            <div
              v-for="(person, idx) in directors"
              :key="idx"
              class="group flex flex-col items-center gap-5 p-5 rounded-2xl bg-background/80 border border-slate-300 hover:border-accent/30 transition-all duration-300"
            >
              <NuxtImg
                :src="person.img"
                class="w-full h-60 lg:h-32 rounded-xl hover:scale-110 transition-all duration-300"
                draggable="false"
              />
              <div class="flex flex-col">
                <span class="font-black text-text tracking-tight text-center">
                  {{ person.name }}
                </span>
                <span class="text-sm text-slate-500 font-medium text-center">
                  {{ person.role }}
                </span>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
const whyChooseUsItems = [
  {
    title: "Berbasis Kompetensi",
    description:
      "Program pelatihan dirancang berdasarkan standar kompetensi industri terkini.",
    icon: "lucide:award",
  },
  {
    title: "SDM Terintegrasi",
    description:
      "Pendekatan holistik dalam pengembangan dan pengelolaan sumber daya manusia.",
    icon: "lucide:puzzle",
  },
  {
    title: "Tim Profesional",
    description:
      "Didukung oleh tenaga ahli berpengalaman di bidang pelatihan dan konsultasi.",
    icon: "lucide:user-check",
  },
  {
    title: "Pendekatan Fleksibel",
    description:
      "Solusi yang dapat disesuaikan dengan kebutuhan spesifik setiap organisasi.",
    icon: "lucide:settings-2",
  },
];

const legalDocs = [
  {
    label: "SK PT",
    value: "AHU-0007167.AH.01.11.TAHUN 2026",
    icon: "lucide:file-text",
  },
  {
    label: "NIB",
    value: "2101260004358",
    icon: "lucide:hash",
  },
  {
    label: "NPWP",
    value: "1000 0000 0790 1576",
    icon: "lucide:receipt",
  },
];

const directors = [
  {
    name: "Yunus Mulia",
    role: "Direktur Utama",
    img: "/img/owner/yunus_mulia.webp",
  },
  {
    name: "Ade Salman Alfarisi",
    role: "Direktur Operasional",
    img: "/img/owner/ade_salman.webp",
  },
  {
    name: "Ony Suryono Widodo",
    role: "Direktur Pengembangan Usaha & Konsultan",
    img: "/img/owner/ony.webp",
  },
];
</script>

<style scoped></style>
