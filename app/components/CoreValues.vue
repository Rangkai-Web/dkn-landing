<template>
  <section
    id="core-values"
    class="relative py-32 px-6 overflow-hidden bg-background"
  >
    <!-- Background SVG Pattern -->
    <SvgIconGridPattern patternId="core-values-grid" />

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="w-12 h-[2px] bg-accent"></div>
          <span
            class="text-accent font-black tracking-[0.2em] uppercase text-sm"
          >
            Filosofi & Core Value
          </span>
          <div class="w-12 h-[2px] bg-accent"></div>
        </div>
        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-black text-text tracking-tight leading-[1.1]"
        >
          Our Core Values <span class="text-primary italic">"IMPACT"</span>
        </h2>
        <p
          class="text-slate-500 max-w-2xl mx-auto mt-6 text-lg font-medium leading-relaxed"
        >
          Nilai-nilai fundamental yang menjadi landasan setiap langkah kami
          dalam memberikan layanan terbaik bagi mitra kami.
        </p>
      </div>

      <!-- Core Values Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(val, idx) in coreValues"
          :key="idx"
          class="group relative bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 shadow-xl shadow-primary/5 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3 overflow-hidden flex flex-col"
        >
          <!-- Decorative SVG on Card -->
          <SvgIconDashedCircle
            class="text-primary"
            :size="120"
            position-class="absolute -top-10 -right-10 opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.08]"
          />

          <!-- Icon & Initial Layer -->
          <div class="flex items-center gap-6 mb-8">
            <div
              :class="`w-16 h-16 rounded-2xl ${val.bg} ${val.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-white/10 relative`"
            >
              <Icon :name="val.icon" size="36" />
            </div>
            <div class="flex flex-col">
              <span
                class="text-slate-500 font-bold text-xs uppercase tracking-widest"
              >
                Value {{ idx + 1 }}
              </span>
              <span
                class="text-primary font-black text-4xl leading-none group-hover:text-secondary! transition-colors duration-500 mt-1"
              >
                {{ val.title }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <p class="text-slate-500 font-medium leading-relaxed flex-1">
            {{ val.desc }}
          </p>

          <!-- Bottom decoration -->
          <div
            class="mt-6 border-t border-slate-100/50 flex items-center justify-between"
          >
            <div class="flex gap-1">
              <div class="w-1.5 h-1.5 rounded-full bg-primary/20"></div>
              <div
                class="w-4 h-1.5 rounded-full bg-primary/40 group-hover:w-8 transition-all duration-500"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const coreValues = [
  {
    title: "Integrity",
    icon: "lucide:check-circle-2",
    color: "text-primary",
    bg: "bg-primary/10",
    desc: "Menjunjung tinggi kejujuran, transparansi, dan kepatuhan dalam setiap proses kerja yang kami jalani.",
  },
  {
    title: "Mastery",
    icon: "lucide:award",
    color: "text-accent",
    bg: "bg-accent/10",
    desc: "Menghadirkan kompetensi dan keahlian terbaik melalui standar kualitas yang tinggi dan berkelanjutan.",
  },
  {
    title: "Professional",
    icon: "lucide:briefcase",
    color: "text-primary",
    bg: "bg-primary/10",
    desc: "Bekerja dengan etika, tanggung jawab, dan komitmen layanan terpercaya untuk hasil yang maksimal.",
  },
  {
    title: "Agility",
    icon: "lucide:zap",
    color: "text-accent",
    bg: "bg-accent/10",
    desc: "Adaptif terhadap perubahan, responsif, dan selalu siap menghadapi dinamika dunia kerja yang modern.",
  },
  {
    title: "Collaboration",
    icon: "lucide:users",
    color: "text-primary",
    bg: "bg-primary/10",
    desc: "Membangun kemitraan yang kuat melalui kerja sama sinergis dengan klien untuk mencapai tujuan bersama.",
  },
  {
    title: "Transform",
    icon: "lucide:trending-up",
    color: "text-accent",
    bg: "bg-accent/10",
    desc: "Memberikan dampak nyata terhadap peningkatan kinerja dan daya saing yang berkelanjutan bagi mitra.",
  },
];
</script>

<style scoped></style>
