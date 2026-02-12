<template>
  <section id="pricing" ref="sectionRef" class="py-24 bg-gray-50 fade-in-section" :class="{ 'is-visible': isVisible }">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4 uppercase tracking-tighter">Paket</h2>
        <p class="text-gray-500">Pilih paket yang sesuai dengan kebutuhan Anda.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(plan, index) in plans" 
          :key="index"
          class="flex justify-between flex-col bg-white p-10 border border-gray-100 hover:border-primary transition group pricing-item"
          :class="{ 'border-2 border-primary relative transform scale-105 shadow-xl': plan.popular }"
          :style="{ transitionDelay: isVisible ? `${index * 0.15}s` : '0s' }"
        >
          <div class="flex-1">
            <div v-if="plan.popular" class="absolute top-0 right-0 bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-tighter">Paling Populer</div>
            <!-- <h3 class="text-xs uppercase tracking-widest font-bold text-gray-400 mb-4">{{ plan.title }}</h3> -->
            <div class="text-4xl font-bold mb-6">{{ plan.title }}<span class="text-sm text-gray-400"></span></div>
            <ul v-if="plan.features" class="space-y-4 text-sm text-gray-600 mb-10">
              <li v-for="(feature, idx) in plan.features" :key="idx" class="flex items-center gap-2">
                <div class="w-6 h-6 px-1 py-0.5 bg-primary rounded-full shrink-0 flex items-center justify-center">
                  <Icon name="lucide:check" class="w-4 h-4 text-dark" />
                </div>
                {{ feature }}
              </li>
            </ul>
          </div>
          <NuxtLink :to="{ path: plan.link, query: { service: plan.action } }" class="block text-center py-3 font-bold text-xs uppercase tracking-widest transition" :class="plan.popular ? 'bg-primary hover:brightness-105' : 'bg-gray-200 group-hover:bg-gray-300'" :aria-label="plan.ariaLabel">{{ plan.buttonText }}</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { elementRef: sectionRef, isVisible } = useFadeIn()

const plans = [
  {
    title: 'Retouch & Editing',
    features: ['Basic Editing', 'Advanced Retouching'],
    link: '/reservasi',
    buttonText: 'Pilih Paket',
    ariaLabel: 'Pilih Paket Retouch & Editing',
    action: 'Retouch & Editing',
    popular: false,
  },
  {
    title: 'Fotografi',
    features: ['Foto Produk', 'Beauty Portrait', 'Dokumentasi Bayi', 'Event Photography'],
    link: '/reservasi',
    buttonText: 'Pilih Paket',
    ariaLabel: 'Pilih Paket Fotografi',
    action: 'Event Photography',
    popular: true,
  },
  {
    title: 'Kelas Privat',
    features: ['Kelas Fotografi', 'Kelas Editing Foto'],
    link: '/reservasi',
    buttonText: 'Pilih Paket',
    ariaLabel: 'Pilih Paket Kelas Privat',
    action: 'Kelas Privat',
    popular: false,
  },
]
</script>

<style scoped>
.fade-in-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.pricing-item {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.fade-in-section.is-visible .pricing-item {
  opacity: 1;
  transform: translateY(0);
}

.text-primary {
  color: var(--primary);
}
</style>
