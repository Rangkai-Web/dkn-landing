<template>
  <nav class="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div class="flex items-start flex-col gap-2 mt-2">
        <NuxtLink to="/" class="text-2xl font-bold tracking-tighter uppercase">
          <span class="text-dark bg-primary px-2 py-1">Asih</span><span class="text-primary bg-dark px-2 py-1">Angger</span>
        </NuxtLink>
        <div class="text-sm font-medium uppercase tracking-widest">Fotografi</div>
      </div>
      <div class="hidden md:flex gap-4 text-sm font-medium uppercase tracking-widest">
        <NuxtLink to="/#about" class="text-dark navigation-link hover:text-primary transition px-4 py-2" aria-label="Navigate to About section">Tentang</NuxtLink>
        <NuxtLink to="/#services" class="text-dark navigation-link hover:text-primary transition px-4 py-2" aria-label="Navigate to Services section">Layanan</NuxtLink>
        <NuxtLink to="/#process" class="text-dark navigation-link hover:text-primary transition px-4 py-2" aria-label="Navigate to Process section">Alur Kerja</NuxtLink>
        <NuxtLink to="/#pricing" class="text-dark navigation-link hover:text-primary transition px-4 py-2" aria-label="Navigate to Pricing section">Paket</NuxtLink>
        <NuxtLink to="/#portfolio" class="text-dark navigation-link hover:text-primary transition px-4 py-2" aria-label="Navigate to Portfolio section">Portofolio</NuxtLink>
      </div>
      <div class="flex items-center gap-4">
        <NuxtLink to="/reservasi" class="hidden md:block bg-primary px-6 py-2 text-sm font-bold uppercase tracking-wider hover:brightness-95 transition" aria-label="Book a photography session">Reservasi</NuxtLink>
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <Icon :name="mobileMenuOpen ? 'lucide:x' : 'lucide:menu'" class="w-6 h-6" />
        </button>
      </div>
    </div>
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t border-gray-100">
        <div class="px-6 py-4 space-y-4">
          <NuxtLink to="/#about" class="block text-sm font-medium uppercase tracking-widest text-dark hover:text-primary transition px-4 py-2" @click="mobileMenuOpen = false" aria-label="Navigate to About section">Tentang</NuxtLink>
          <NuxtLink to="/#services" class="block text-sm font-medium uppercase tracking-widest text-dark hover:text-primary transition px-4 py-2" @click="mobileMenuOpen = false" aria-label="Navigate to Services section">Layanan</NuxtLink>
          <NuxtLink to="/#process" class="block text-sm font-medium uppercase tracking-widest text-dark hover:text-primary transition px-4 py-2" @click="mobileMenuOpen = false" aria-label="Navigate to Process section">Alur Kerja</NuxtLink>
          <NuxtLink to="/#pricing" class="block text-sm font-medium uppercase tracking-widest text-dark hover:text-primary transition px-4 py-2" @click="mobileMenuOpen = false" aria-label="Navigate to Pricing section">Paket</NuxtLink>
          <NuxtLink to="/#portfolio" class="block text-sm font-medium uppercase tracking-widest text-dark hover:text-primary transition px-4 py-2" @click="mobileMenuOpen = false" aria-label="Navigate to Portfolio section">Portofolio</NuxtLink>
          <NuxtLink to="/reservasi" class="block bg-primary px-6 py-2 text-sm font-bold uppercase tracking-wider text-dark hover:brightness-95 transition text-center mt-4" @click="mobileMenuOpen = false" aria-label="Book a photography session">Reservasi</NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)
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
  height: 45px;
  bottom: -4.5px;
  left: 0;
  background-color: var(--dark);
  transition: width 0.3s;
  z-index: -1;
}

.navigation-link:hover::after {
  width: 100%;
}
</style>
