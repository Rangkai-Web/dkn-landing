<template>
  <section id="products" class="relative py-32 px-6 overflow-hidden">
    <!-- Background dot pattern -->
    <SvgIconDotPattern patternId="product-dots" />

    <!-- Decorative SVGs -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <SvgIconDashedCircle class="text-primary" :size="350" />
      <SvgIconRotatedSquare class="text-accent" :size="250" :rotation="30" />
      <!-- Floating dots -->
      <div
        class="absolute top-[20%] right-[8%] w-3 h-3 rounded-full bg-accent/15"
      ></div>
      <div
        class="absolute bottom-[25%] left-[12%] w-2 h-2 rounded-full bg-primary/10"
      ></div>
      <div
        class="absolute top-[50%] left-[5%] w-4 h-4 rounded-full bg-accent/8"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="w-12 h-[2px] bg-accent"></div>
          <span
            class="text-accent font-black tracking-[0.2em] uppercase text-sm"
          >
            Produk Kami
          </span>
          <div class="w-12 h-[2px] bg-accent"></div>
        </div>
        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-black text-text tracking-tight leading-[1.1]"
        >
          Produk <span class="text-primary italic">Terbaik</span> Untuk Anda
        </h2>
        <p
          class="text-slate-500 max-w-2xl mx-auto mt-6 text-lg font-medium leading-relaxed"
        >
          Pilih produk yang sesuai dengan kebutuhan Anda.
        </p>
      </div>

      <!-- Product Grid -->
      <div v-if="isLoading" class="flex justify-center items-center py-24">
        <SvgIconLoading />
      </div>

      <template v-else-if="products.length > 0">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div
            v-for="product in paginatedProducts"
            :key="product.id"
            class="group relative bg-white/60 backdrop-blur-sm border border-white/80 rounded-3xl overflow-hidden shadow-xl shadow-primary/5 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 flex flex-col"
          >
            <!-- Image -->
            <div class="relative h-48 overflow-hidden">
              <NuxtImg
                :src="product.image || '/img/others/placeholder.webp'"
                :alt="product.title"
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
                {{ product.title }}
              </h3>
              <p
                class="text-slate-500 text-sm leading-relaxed font-medium mb-4 line-clamp-3 flex-1"
              >
                {{ product.description }}
              </p>
              <p class="text-primary font-black text-lg mb-4 tracking-tight">
                {{ product.price }}
              </p>
              <a
                :href="product.link"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center justify-center gap-2 bg-primary/10 text-primary px-5 py-3 rounded-xl font-black text-sm hover:bg-primary hover:text-white! transition-all duration-300 w-full"
              >
                Lihat Detail
                <Icon name="lucide:external-link" size="16" />
              </a>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="flex items-center justify-center gap-3">
          <!-- Prev Button -->
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            :class="[
              'w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 font-black cursor-pointer',
              currentPage === 1
                ? 'bg-slate-100 text-slate-300 cursor-not-allowed'
                : 'bg-white/60 border border-white/80 text-primary shadow-lg hover:bg-primary hover:text-white hover:border-primary',
            ]"
          >
            <Icon name="lucide:chevron-left" size="20" />
          </button>

          <!-- Page Numbers -->
          <button
            v-for="page in totalPages"
            :key="page"
            @click="goToPage(page)"
            :class="[
              'w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 font-black text-sm cursor-pointer',
              currentPage === page
                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                : 'bg-white/60 border border-white/80 text-slate-500 hover:bg-primary/10 hover:text-primary hover:border-primary/30',
            ]"
          >
            {{ page }}
          </button>

          <!-- Next Button -->
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            :class="[
              'w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 font-black cursor-pointer',
              currentPage === totalPages
                ? 'bg-slate-100 text-slate-300 cursor-not-allowed'
                : 'bg-white/60 border border-white/80 text-primary shadow-lg hover:bg-primary hover:text-white hover:border-primary',
            ]"
          >
            <Icon name="lucide:chevron-right" size="20" />
          </button>
        </div>

        <!-- Page info -->
        <p class="text-center text-slate-400 text-sm font-medium mt-4">
          Menampilkan {{ (currentPage - 1) * perPage + 1 }}–{{
            Math.min(currentPage * perPage, totalProducts)
          }}
          dari {{ totalProducts }} produk
        </p>
      </template>

      <div v-else class="text-center py-24">
        <p class="text-slate-500">Belum ada produk.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useProductStore } from "~/stores/productStore";

const store = useProductStore();
const {
  products,
  paginatedProducts,
  currentPage,
  totalProducts,
  totalPages,
  isLoading,
  error,
} = storeToRefs(store);
const { perPage, goToPage, nextPage, prevPage } = store;

onMounted(() => {
  store.fetchProducts();
});
</script>

<style scoped></style>
