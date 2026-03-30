<template>
  <section id="training" class="py-24 px-6 max-w-7xl mx-auto">
    <div class="text-center mb-12">
      <span
        class="text-[#3B82F6] font-extrabold tracking-widest uppercase mb-3 text-sm"
        >Program Unggulan</span
      >
      <h2 class="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-6">
        Our Training Program
      </h2>
      <p class="text-slate-500 max-w-2xl mx-auto font-medium">
        Temukan kelas pengembangan diri dan profesionalisme yang dikurasi khusus
        untuk kebutuhan industri.
      </p>
    </div>

    <!-- Tabs Desktop & Accordion Mobile-like feel -->
    <div
      class="bg-white rounded-[2rem] shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-slate-100 overflow-hidden mb-12"
    >
      <div
        class="flex overflow-x-auto border-b border-slate-100 hide-scrollbar bg-slate-50/50"
      >
        <button
          v-for="(courses, cat) in trainingData"
          :key="cat"
          @click="activeTab = cat"
          :class="[
            'flex-none py-5 px-6 md:px-8 text-center font-bold text-sm md:text-base whitespace-nowrap transition-all border-b-4',
            activeTab === cat
              ? 'text-[#0F766E] border-[#0F766E] bg-white'
              : 'text-slate-500 border-transparent hover:text-[#0F172A] hover:bg-slate-100',
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <div class="p-8 md:p-12 min-h-[300px]">
        <h3 class="text-2xl font-bold text-[#0F172A] mb-8">
          {{ activeTab }} Programs
        </h3>
        <div class="grid md:grid-cols-2 gap-x-12 gap-y-6">
          <div
            v-for="(course, idx) in trainingData[activeTab]"
            :key="idx"
            class="flex items-start gap-4 p-5 rounded-2xl bg-[#F8FAFC] border border-slate-100 hover:border-[#3B82F6] transition-colors group"
          >
            <div
              class="w-10 h-10 rounded-full bg-white text-[#3B82F6] shadow-sm flex items-center justify-center font-bold shrink-0"
            >
              {{ idx + 1 }}
            </div>
            <div>
              <h4
                class="font-bold text-[#0F172A] group-hover:text-[#0F766E] transition-colors"
              >
                {{ course }}
              </h4>
              <p class="text-xs font-semibold text-slate-400 mt-1 uppercase">
                Digital Material
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 🔥 Highlight CTA Section inline -->
    <div
      class="bg-gradient-to-r from-[#0F766E] to-[#22C55E] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between shadow-xl relative overflow-hidden"
    >
      <div
        class="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"
      ></div>

      <div class="relative z-10 text-left mb-6 md:mb-0">
        <h3 class="text-2xl md:text-3xl font-extrabold text-white mb-2">
          Akses Materi Tanpa Batas
        </h3>
        <p class="text-emerald-100 font-medium">
          Seluruh program tersedia di platform Moodle kami.
        </p>
      </div>

      <a
        href="https://dkn.moodle.com"
        target="_blank"
        rel="noreferrer"
        class="relative z-10 bg-white text-[#0F766E] px-8 py-4 rounded-full font-bold hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all flex items-center gap-2 shrink-0"
      >
        👉 Akses Full Program di E-Learning
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref("Core Banking");

const trainingData = {
  "Core Banking": [
    "General Banking Level 4",
    "Cash Handling Level 4",
    "Cash Handling Level 5",
    "Branch Operations Excellence Program",
  ],
  Leadership: [
    "Officer Development Program (ODP)",
    "Building High-Performance Corporate Culture",
    "Performance Management for High-Impact Teams",
    "Coaching Skills for Leaders & Supervisors",
    "Strategic Personal Branding for Professionals",
  ],
  Finance: [
    "Financial Statement Analysis & Investment Evaluation",
    "Fundamentals of Financial Management",
    "Financial Planning",
    "Wealth Management Basics",
  ],
  "Business Strategy": [
    "Strategic Management & Execution Excellence",
    "Business Planning & Business Model Development",
    "Value Chain Management & Business Ecosystem Strategy",
    "Business Case Writing for Decision Making",
    "Value-Based Management for Organizational Performance",
  ],
  "Marketing & Sales": [
    "Digital Marketing",
    "Marketing Fundamentals for Business Growth",
    "Smart Selling Skills",
    "Service Excellence & Customer Experience Mastery",
  ],
};
</script>
