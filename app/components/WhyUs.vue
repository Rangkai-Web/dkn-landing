<template>
  <section id="why-us" class="py-24 bg-white border-t border-slate-100 px-6">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
      <!-- Left: Why Choose Us -->
      <div class="lg:w-1/2">
        <span
          class="text-[#F59E0B] font-extrabold tracking-widest uppercase mb-3 text-sm"
          >Mengapa Kami?</span
        >
        <h2 class="text-4xl font-extrabold mb-8 text-[#0F172A]">
          Why Choose Us
        </h2>

        <div class="grid sm:grid-cols-2 gap-6">
          <div
            v-for="(item, idx) in whyChooseUsItems"
            :key="idx"
            class="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-100 flex flex-col items-start gap-4 hover:border-[#F59E0B] transition-colors"
          >
            <div
              class="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-[#F59E0B]"
            >
              <Icon name="lucide:check-circle-2" size="24" />
            </div>
            <span class="font-bold text-[#0F172A]">{{ item }}</span>
          </div>
        </div>
      </div>

      <!-- Right: Company Info / Legalitas -->
      <div class="lg:w-1/2">
        <div
          class="bg-[#F8FAFC] p-8 md:p-10 rounded-[2rem] border border-slate-200 h-full flex flex-col justify-center"
        >
          <h3
            class="text-2xl font-extrabold text-[#0F172A] mb-8 border-b border-slate-200 pb-4"
          >
            Legalitas & Manajemen
          </h3>

          <div class="space-y-4 mb-8">
            <div class="flex justify-between items-center">
              <span class="text-slate-500 font-bold text-sm">SK PT</span>
              <span class="font-mono font-bold text-[#0F766E]"
                >AHU-0007167.AH.01.11.TAHUN 2026</span
              >
            </div>
            <div class="flex justify-between items-center">
              <span class="text-slate-500 font-bold text-sm">NIB</span>
              <span class="font-mono font-bold text-[#0F172A]"
                >2101260004358</span
              >
            </div>
            <div class="flex justify-between items-center">
              <span class="text-slate-500 font-bold text-sm">NPWP</span>
              <span class="font-mono font-bold text-[#0F172A]"
                >1000 0000 0790 1576</span
              >
            </div>
          </div>

          <div>
            <h4
              class="font-bold text-slate-400 text-xs uppercase tracking-widest mb-4"
            >
              Struktur Direktur
            </h4>
            <div
              class="bg-white rounded-xl border border-slate-100 overflow-hidden"
            >
              <div class="p-4 border-b border-slate-50 flex justify-between">
                <span class="text-sm text-slate-500">Direktur Utama</span>
                <span class="font-bold text-[#0F172A]">Yunus Mulia</span>
              </div>
              <div class="p-4 border-b border-slate-50 flex justify-between">
                <span class="text-sm text-slate-500">Dir. Operasional</span>
                <span class="font-bold text-[#0F172A]"
                  >Ade Salman Alfarisi</span
                >
              </div>
              <div class="p-4 flex justify-between">
                <span class="text-sm text-slate-500">Dir. Pengembangan</span>
                <span class="font-bold text-[#0F172A]">Ony Suryono Widodo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const whyChooseUsItems = [
  "Competency-Based Programs",
  "Integrated HR Development",
  "Professional Team",
  "Flexible Approach",
];
</script>
