<template>
  <section class="py-24 bg-white border-y border-slate-100">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16">
        <!-- Vision Highlight -->
        <div class="flex flex-col justify-center">
          <span
            class="text-[#F59E0B] font-extrabold tracking-widest uppercase mb-3 text-sm"
            >Our Vision</span
          >
          <h3
            class="text-3xl md:text-5xl font-extrabold text-[#0F172A] leading-tight mb-6"
          >
            Menjadi mitra pengembangan sumber daya manusia yang profesional,
            unggul, dan berdaya saing.
          </h3>
          <div
            class="w-24 h-2 bg-gradient-to-r from-[#0F766E] to-[#22C55E] rounded-full"
          ></div>
        </div>

        <!-- Mission Timeline -->
        <div
          class="bg-[#F8FAFC] p-8 md:p-12 rounded-[2rem] border border-slate-100"
        >
          <span
            class="text-[#0F766E] font-extrabold tracking-widest uppercase mb-6 block text-sm"
            >Our Mission</span
          >
          <div
            class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200"
          >
            <div
              v-for="(mission, idx) in missions"
              :key="idx"
              class="relative flex items-start gap-6 group"
            >
              <div
                class="absolute left-0 w-10 h-10 flex items-center justify-center z-10 bg-[#F8FAFC] md:left-1/2 md:-ml-5"
              >
                <div
                  class="w-4 h-4 rounded-full bg-white border-4 border-[#3B82F6] group-hover:scale-150 group-hover:bg-[#22C55E] group-hover:border-[#22C55E] transition-all duration-300"
                ></div>
              </div>
              <div
                class="pl-14 md:pl-0 md:w-1/2 md:odd:pr-14 md:even:pl-14 md:odd:text-right md:even:text-left md:even:ml-auto flex flex-col justify-center min-h-[40px]"
              >
                <p class="text-slate-600 font-medium">{{ mission }}</p>
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
  "Menyelenggarakan program pelatihan kerja yang relevan dengan kebutuhan industri dan dunia usaha.",
  "Menyediakan layanan pemetaan potensi dan pengelolaan talenta yang objektif dan terukur.",
  "Meningkatkan kinerja individu dan tim melalui program pengembangan yang berkelanjutan.",
  "Mendukung organisasi dalam menciptakan sumber daya manusia yang produktif dan berkualitas.",
];
</script>
