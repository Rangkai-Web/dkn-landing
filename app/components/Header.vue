<template>
  <div
    class="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4 pointer-events-none"
  >
    <nav
      :class="[
        'pointer-events-auto w-full max-w-7xl rounded-full transition-all duration-500 flex justify-between items-center px-6 md:px-8 py-3',
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-xl border border-white/20 py-3'
          : 'bg-transparent border-transparent py-5',
      ]"
    >
      <NuxtImg
        :src="profile?.logo_url || '/logo/dkn-logo.webp'"
        alt="Logo DKN"
        class="w-12 h-12 rounded-lg"
      />

      <ul class="hidden lg:flex items-center gap-8">
        <li v-for="link in navLinks" :key="link.name">
          <a
            :href="link.href"
            :class="[
              'text-base font-bold uppercase tracking-widest transition-all duration-300 hover:text-accent relative group',
              isScrolled ? 'text-slate-600' : 'text-white/90',
            ]"
          >
            {{ link.name }}
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
        </li>
      </ul>

      <div class="hidden lg:flex items-center">
        <a
          href="https://lms.dkn.digital/login/index.php"
          target="_blank"
          rel="noreferrer"
          :class="[
            'px-6 py-2.5 rounded-full text-sm font-black transition-all duration-300 shadow-lg flex items-center gap-2 group',
            isScrolled
              ? 'bg-primary text-white hover:bg-slate-800 animate-bounce'
              : 'bg-accent text-primary shadow-accent/20',
          ]"
        >
          Masuk E-Learning
          <Icon
            name="lucide:external-link"
            size="16"
            class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </a>
      </div>

      <button
        :class="[
          'lg:hidden transition-colors duration-300',
          isScrolled ? 'text-primary' : 'text-white',
        ]"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <Icon :name="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'" size="28" />
      </button>
    </nav>
  </div>

  <!-- Mobile Menu -->
  <div
    v-if="isMobileMenuOpen"
    class="fixed inset-x-4 top-24 bg-white shadow-2xl rounded-2xl p-6 flex flex-col gap-4 z-40 border border-slate-100 lg:hidden"
  >
    <a
      v-for="link in navLinks"
      :key="link.name"
      :href="link.href"
      @click="isMobileMenuOpen = false"
      class="text-slate-800 font-bold py-2 hover:text-accent"
    >
      {{ link.name }}
    </a>
    <hr class="border-slate-300 my-2" />
    <a
      href="https://lms.dkn.digital/login/index.php"
      target="_blank"
      rel="noreferrer"
      class="bg-primary text-white px-6 py-3.5 rounded-xl font-bold text-center flex items-center justify-center gap-2"
    >
      Masuk E-Learning <Icon name="lucide:external-link" size="18" />
    </a>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useProfileStore } from "~/stores/profileStore";
import { ref, onMounted, onUnmounted } from "vue";

const store = useProfileStore();
const { profile, isLoading, error } = storeToRefs(store);

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Training", href: "#training" },
  // { name: "Why Us", href: "#why-us" },
  { name: "Products", href: "#products" },
  { name: "Contact", href: "#contact" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
