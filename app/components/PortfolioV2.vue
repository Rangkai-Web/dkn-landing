<template>
  <section id="portfolio" ref="sectionRef" class="py-24 bg-gray-50 fade-in-section" :class="{ 'is-visible': isVisible }">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold">Portofolio</h2>
        <div class="flex justify-center mb-8">
          <NuxtLink
            to="https://drive.google.com/file/d/1a3Rx-Qf0TcHZz4JpVYW0xdL7dUu57Ei2/view?usp=drive_link"
            target="_blank"
            class="font-medium navigation-link hover:text-primary px-6 py-2 mt-6 border"
          >
            Lihat Semua Portofolio
          </NuxtLink>
        </div>
        <div class="w-20 h-2 bg-primary mx-auto" role="presentation" aria-hidden="true"></div>
        <div class="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 mt-6 md:mt-8 px-4">
          <button
            v-for="filter in filters"
            :key="filter.value"
            :class="[
              'filter-btn text-xs md:text-sm font-bold uppercase tracking-widest px-4 md:px-6 py-2 border-b-2 transition',
              activeFilter === filter.value
                ? 'border-primary active'
                : 'border-transparent hover:border-gray-300'
            ]"
            @click="setFilter(filter.value)"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>

      <div class="portfolio-grid">
        <div
          v-for="item in paginatedItems"
          :key="item.id"
          :class="['portfolio-item fade-in cursor-pointer']"
          @click="openLightbox(item)"
        >
          <NuxtImg
            :src="item.img"
            :alt="`Professional ${item.cat} photography portfolio by Asih Angger - High-quality ${item.cat === 'product' ? 'commercial product' : item.cat === 'beauty' ? 'beauty portrait' : item.cat === 'baby' ? 'baby documentary' : 'event'} photography services`"
            width="800"
            height="600"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 300px"
            class="w-full h-full object-cover"
            loading="lazy"
            draggable="false"
            placeholder
            placeholder-class="blur-placeholder"
          />
        </div>
      </div>

      <!-- Load More Button -->
      <div v-if="hasMore" class="flex justify-center mt-8">
        <button
          @click="loadMore"
          class="font-medium navigation-link hover:text-primary px-6 py-2 mt-6 border cursor-pointer"
        >
          Muat Lebih Banyak ({{ remainingCount }} lagi)
        </button>
      </div>
    </div>
  </section>

  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="selectedImage"
        class="lightbox-overlay"
        @click="closeLightbox"
      >
        <div class="lightbox-content" @click.stop>
          <button
            @click="closeLightbox"
            class="lightbox-close"
            aria-label="Close lightbox"
          >
            <Icon name="lucide:x" class="w-6 h-6" />
          </button>
          <NuxtImg
            :src="selectedImage.img"
            :alt="`Professional ${selectedImage.cat} photography portfolio by Asih Angger - High-quality ${selectedImage.cat === 'product' ? 'commercial product' : selectedImage.cat === 'beauty' ? 'beauty portrait' : selectedImage.cat === 'baby' ? 'baby documentary' : 'event'} photography services`"
            width="1200"
            height="900"
            class="lightbox-image"
            loading="eager"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import type { PortfolioItem } from '~/composables/usePortfolio'

const { elementRef: sectionRef, isVisible } = useFadeIn()
const { activeFilter, paginatedItems, hasMore, remainingCount, loadMore, setFilter } = usePortfolio()

const filters = [
  { value: 'all' as const, label: 'Semua' },
  { value: 'product' as const, label: 'Produk' },
  { value: 'beauty' as const, label: 'Beauty' },
  { value: 'fashion' as const, label: 'Fashion' },
  { value: 'baby' as const, label: 'Baby' },
  { value: 'event' as const, label: 'Event' },
  { value: 'retouch' as const, label: 'Retouch' },
  { value: 'private-class' as const, label: 'Privat' },
]

const selectedImage = ref<PortfolioItem | null>(null)

const openLightbox = (item: PortfolioItem) => {
  selectedImage.value = item
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  selectedImage.value = null
  document.body.style.overflow = ''
}

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
.navigation-link {
  position: relative;
  transition: color 0.3s;
}

.navigation-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 42px;
  bottom: -1px;
  left: 0;
  background-color: var(--dark);
  transition: width 0.3s;
  z-index: -1;
}

.navigation-link:hover::after {
  width: 100%;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 250px;
  gap: 1rem;
}

@media (min-width: 640px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 250px;
    gap: 1rem;
  }
}

@media (min-width: 768px) {
  .portfolio-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-auto-rows: 250px;
    gap: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .portfolio-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: 300px;
    gap: 1.5rem;
  }
}

.portfolio-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  width: 100%;
  height: 100%;
}

.portfolio-item img {
  transition: transform 0.5s ease;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.portfolio-item:hover img {
  transform: scale(1.05);
}

@media (min-width: 768px) {
  .tall {
    grid-row: span 2;
  }

  .wide {
    grid-column: span 2;
  }
}

@media (max-width: 767px) {
  .tall,
  .wide {
    grid-column: span 1;
    grid-row: span 1;
  }
}

.fade-in {
  animation: fadeIn 0.5s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Blur placeholder for lazy loading images */
.blur-placeholder {
  filter: blur(20px);
  transform: scale(1.1);
  transition: filter 0.3s ease, transform 0.3s ease;
}

.border-primary {
  border-color: var(--primary);
}

.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  cursor: pointer;
  overflow: auto;
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
}

.lightbox-image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
}

.lightbox-close {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 100000;
  backdrop-filter: blur(10px);
}

.lightbox-close:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-active .lightbox-content,
.lightbox-leave-active .lightbox-content {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.lightbox-enter-from .lightbox-content,
.lightbox-leave-to .lightbox-content {
  transform: scale(0.9);
  opacity: 0;
}

@media (max-width: 640px) {
  .lightbox-overlay {
    padding: 1rem;
  }

  .lightbox-close {
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
  }
}

.fade-in-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>

