<template>
  <section id="services" class="py-24 relative overflow-hidden bg-[#0F172A]">
    <!-- Background Gradients -->
    <div
      class="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0F766E] rounded-full blur-[150px] opacity-40"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#7C3AED] rounded-full blur-[150px] opacity-30"
    ></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <span
          class="text-[#22C55E] font-extrabold tracking-widest uppercase mb-3 text-sm"
          >Layanan Utama Kami</span
        >
        <h2 class="text-4xl md:text-5xl font-extrabold text-white">
          Our Services
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(srv, idx) in services"
          :key="idx"
          :class="[
            'bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300',
            idx === 3 ? 'lg:col-start-1 lg:ml-auto lg:w-full' : '',
            idx === 4 ? 'lg:col-start-2 lg:mr-auto lg:w-full' : '',
          ]"
        >
          <div
            class="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 shadow-inner border border-white/10"
          >
            <Icon :name="srv.icon" size="32" />
          </div>
          <h3 class="text-xl font-bold mb-3 text-white">{{ srv.title }}</h3>
          <p class="text-slate-300 text-sm leading-relaxed font-medium">
            {{ srv.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: "lucide:graduation-cap",
    title: "Training & Development",
    desc: "Pelatihan kerja sesuai kebutuhan industri (hard skill, soft skill, sikap kerja).",
  },
  {
    icon: "lucide:target",
    title: "Assessment Center",
    desc: "Penilaian psikologi untuk pemetaan kemampuan dan kesiapan peran.",
  },
  {
    icon: "lucide:heart-handshake",
    title: "Employee Counseling",
    desc: "Pendukung SDM menghadapi tantangan kerja & menjaga keseimbangan mental.",
  },
  {
    icon: "lucide:users",
    title: "Team Building",
    desc: "Peningkatan kerja sama, komunikasi, kepemimpinan, dan efektivitas tim.",
  },
  {
    icon: "lucide:building",
    title: "Advisory Services",
    desc: "Pendampingan BPD untuk Manajemen Risiko, Perkreditan, Digital Banking.",
  },
];
</script>
