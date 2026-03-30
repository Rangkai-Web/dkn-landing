<template>
  <section class="py-24 px-6 max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <span
        class="text-[#7C3AED] font-extrabold tracking-widest uppercase mb-3 text-sm"
        >Filosofi & Nilai Inti</span
      >
      <h2 class="text-4xl md:text-5xl font-extrabold text-[#0F172A]">
        IMPACT Core Values
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(val, idx) in coreValues"
        :key="idx"
        class="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
      >
        <div
          :class="`w-16 h-16 rounded-2xl ${val.bg} ${val.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`"
        >
          <Icon :name="val.icon" size="32" />
        </div>
        <h3 class="text-2xl font-bold mb-3 text-[#0F172A]">{{ val.title }}</h3>
        <p class="text-slate-500 font-medium leading-relaxed">{{ val.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const coreValues = [
  {
    title: "Integrity",
    icon: "lucide:check-circle-2",
    color: "text-[#0F766E]",
    bg: "bg-[#0F766E]/10",
    desc: "Menjunjung tinggi kejujuran, transparansi, dan kepatuhan dalam setiap proses.",
  },
  {
    title: "Mastery",
    icon: "lucide:award",
    color: "text-[#7C3AED]",
    bg: "bg-[#7C3AED]/10",
    desc: "Menghadirkan kompetensi dan keahlian terbaik melalui standar kualitas yang tinggi.",
  },
  {
    title: "Professional",
    icon: "lucide:briefcase",
    color: "text-[#3B82F6]",
    bg: "bg-[#3B82F6]/10",
    desc: "Bekerja dengan etika, tanggung jawab, dan komitmen layanan terpercaya.",
  },
  {
    title: "Agility",
    icon: "lucide:zap",
    color: "text-[#F59E0B]",
    bg: "bg-[#F59E0B]/10",
    desc: "Adaptif terhadap perubahan, responsif, dan siap menghadapi dinamika kerja.",
  },
  {
    title: "Collaboration",
    icon: "lucide:users",
    color: "text-[#22C55E]",
    bg: "bg-[#22C55E]/10",
    desc: "Membangun kemitraan yang kuat melalui kerja sama sinergis dengan klien.",
  },
  {
    title: "Transform",
    icon: "lucide:trending-up",
    color: "text-[#0F766E]",
    bg: "bg-[#0F766E]/10",
    desc: "Memberikan dampak nyata terhadap peningkatan kinerja dan daya saing.",
  },
];
</script>
