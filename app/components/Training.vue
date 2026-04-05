<template>
  <section id="training" class="relative py-32 px-6 overflow-hidden">
    <!-- Background SVG Pattern -->
    <SvgIconDotPattern patternId="training-dots" />

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="w-12 h-[2px] bg-accent"></div>
          <span
            class="text-accent font-black tracking-[0.2em] uppercase text-sm"
          >
            Program Unggulan
          </span>
          <div class="w-12 h-[2px] bg-accent"></div>
        </div>
        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-black text-text tracking-tight leading-[1.1]"
        >
          Program <span class="text-primary italic">Pelatihan</span> Kami
        </h2>
        <p
          class="text-slate-500 max-w-2xl mx-auto mt-6 text-lg font-medium leading-relaxed"
        >
          Temukan kelas pengembangan diri dan profesionalisme yang dikurasi
          khusus untuk kebutuhan industri.
        </p>
      </div>

      <!-- Category Tabs -->
      <div
        v-if="!isLoading && categories.length > 0"
        class="flex justify-center mb-12"
      >
        <div
          class="inline-flex flex-wrap justify-center gap-3 p-2 bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl shadow-lg shadow-primary/5"
        >
          <button
            v-for="cat in categories"
            :key="cat"
            @click="setActiveTab(cat)"
            :class="[
              'px-6 py-3 rounded-xl text-sm font-black tracking-tight transition-all duration-300 whitespace-nowrap cursor-pointer',
              activeTab === cat
                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                : 'text-slate-500 hover:text-primary hover:bg-primary/5',
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Course List or Loading -->
      <div
        class="bg-white/60 backdrop-blur-sm border border-white/80 rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/5 mb-16"
      >
        <div v-if="isLoading" class="flex justify-center items-center py-20">
          <SvgIconLoading />
        </div>

        <template v-else-if="filteredCourses.length > 0">
          <div class="flex justify-center flex-col items-center gap-2 mb-10">
            <div
              class="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"
            >
              <Icon name="lucide:book-open" size="24" />
            </div>
            <h3 class="text-2xl font-black text-text tracking-tight uppercase">
              {{ activeTab }}
            </h3>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              v-for="course in filteredCourses"
              :key="course.id"
              class="group relative bg-white/60 backdrop-blur-sm border border-white/80 rounded-3xl overflow-hidden shadow-xl shadow-primary/5 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <!-- Image -->
              <div class="relative h-48 overflow-hidden">
                <NuxtImg
                  :src="course.image || '/img/others/placeholder.webp'"
                  :alt="course.title"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div
                  class="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"
                ></div>
              </div>

              <!-- Content -->
              <div class="p-6 flex flex-col flex-1">
                <h3
                  class="text-lg font-black text-text tracking-tight mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2"
                >
                  {{ course.title }}
                </h3>
                <p
                  class="text-slate-500 text-sm leading-relaxed font-medium mb-6 line-clamp-3 flex-1"
                >
                  {{ course.description }}
                </p>
              </div>
            </div>
          </div>
        </template>

        <div v-else class="text-center py-20">
          <p class="text-slate-500 font-medium">
            Belum ada program pelatihan di kategori ini.
          </p>
        </div>
      </div>

      <!-- CTA Banner -->
      <div
        class="relative bg-linear-to-r from-primary to-secondary rounded-3xl p-10 md:p-14 overflow-hidden"
      >
        <!-- Decorative SVGs -->
        <SvgIconDoubleCircle
          class="text-white"
          :size="256"
          position-class="absolute -top-12 -right-12 opacity-[0.06] pointer-events-none"
        />
        <div
          class="absolute -bottom-16 -left-16 w-48 h-48 bg-accent/10 rounded-full blur-3xl"
        ></div>

        <div
          class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3
              class="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight"
            >
              Akses Materi
              <span class="text-accent">Tanpa Batas</span>
            </h3>
            <p class="text-white/60 text-lg font-medium max-w-lg">
              Seluruh program pelatihan tersedia di platform E-Learning Moodle
              kami — kapan saja, di mana saja.
            </p>
          </div>
          <a
            href="https://dkn.moodle.com"
            target="_blank"
            rel="noreferrer"
            class="flex items-center justify-center bg-white text-primary px-10 py-5 rounded-full font-black text-lg hover:bg-slate-100 hover:scale-110 transition-all duration-300 shadow-2xl uppercase tracking-wider shrink-0"
          >
            Akses E-Learning
            <Icon name="lucide:external-link" size="24" class="ml-3" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTrainingStore } from "~/stores/trainingStore";

const store = useTrainingStore();
const {
  activeTab,
  categories,
  filteredCourses,
  activeCourseCount,
  isLoading,
  error,
} = storeToRefs(store);
const { setActiveTab, fetchTrainings } = store;

onMounted(() => {
  fetchTrainings();
});
</script>

<style scoped></style>
