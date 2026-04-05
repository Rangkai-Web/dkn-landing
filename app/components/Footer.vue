<template>
  <footer class="relative bg-primary pt-24 pb-8 overflow-hidden">
    <!-- Decorative SVG elements -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <SvgIconDashedCircle
        class="text-white"
        :size="400"
        position-class="absolute -top-20 -right-20 opacity-[0.05] pointer-events-none"
      />
      <SvgIconRotatedSquare
        class="text-white"
        :size="250"
        :rotation="20"
        position-class="absolute -bottom-12 -left-12 opacity-[0.04] pointer-events-none"
      />
      <SvgIconFloatingDots
        :dots="[
          { top: '15%', left: '10%', size: '8px', color: 'bg-accent/15' },
          { top: '40%', right: '15%', size: '12px', color: 'bg-white/5' },
          { bottom: '30%', left: '40%', size: '8px', color: 'bg-accent/10' },
        ]"
      />
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- Main Footer Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 mb-10"
      >
        <!-- Brand Column -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-3 mb-6">
            <NuxtImg
              :src="profile?.logo_url || '/logo/dkn-logo.webp'"
              alt="Logo DKN"
              class="w-12 h-12 rounded-xl"
            />
            <span class="font-black text-2xl text-white tracking-tighter">
              {{ profile?.site_name || "DKN"
              }}<span class="text-accent">.</span>
            </span>
          </div>
          <p
            class="text-white/40 text-sm leading-relaxed font-medium mb-8 max-w-xs"
          >
            {{
              profile?.site_description ||
              "Mitra pengembangan sumber daya manusia yang profesional, unggul, dan berdaya saing. Top learning experiences that create more talent."
            }}
          </p>
          <!-- Social Icons -->
          <div class="flex gap-3">
            <a
              v-for="social in profile?.social_media || socials"
              :key="social.platform"
              :href="social.url"
              target="_blank"
              rel="noreferrer"
              class="w-10 h-10 rounded-xl bg-white/[0.07] border border-white/10 flex items-center justify-center text-white/40 hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
            >
              <Icon :name="social.icon" size="18" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4
            class="font-black text-xs uppercase tracking-[0.2em] text-accent mb-8"
          >
            Quick Links
          </h4>
          <ul class="space-y-4">
            <li v-for="link in quickLinks" :key="link.name">
              <a
                :href="link.href"
                class="text-white/40 text-sm font-bold hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
              >
                <span
                  class="w-0 h-[2px] bg-accent group-hover:w-4 transition-all duration-300"
                ></span>
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4
            class="font-black text-xs uppercase tracking-[0.2em] text-accent mb-8"
          >
            Kontak
          </h4>
          <ul class="space-y-5">
            <li
              v-for="contact in mappedContactInfo"
              :key="contact.label"
              class="flex items-start gap-3"
            >
              <div
                class="w-8 h-8 rounded-lg bg-white/[0.07] flex items-center justify-center text-accent shrink-0 mt-0.5"
              >
                <Icon :name="contact.icon" size="14" />
              </div>
              <div class="flex flex-col">
                <span
                  class="text-white/30 text-xs font-bold uppercase tracking-wider"
                >
                  {{ contact.label }}
                </span>
                <span class="text-white/60 text-sm font-medium break-all">
                  {{ contact.value }}
                </span>
              </div>
            </li>
          </ul>
        </div>

        <!-- E-Learning -->
        <div>
          <h4
            class="font-black text-xs uppercase tracking-[0.2em] text-accent mb-8"
          >
            Platform
          </h4>
          <div class="bg-white/[0.05] border border-white/10 rounded-2xl p-6">
            <div
              class="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center text-accent mb-4"
            >
              <Icon name="lucide:monitor-play" size="24" />
            </div>
            <h5 class="text-white font-black text-lg mb-2 tracking-tight">
              E-Learning
            </h5>
            <p class="text-white/40 text-sm font-medium mb-5 leading-relaxed">
              Akses materi pelatihan kapan saja, di mana saja melalui platform
              Moodle.
            </p>
            <a
              href="https://dkn.moodle.com"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-2 bg-accent text-primary px-5 py-2.5 rounded-full font-black text-sm hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/20"
            >
              Masuk Platform
              <Icon name="lucide:external-link" size="14" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="flex flex-col md:flex-row justify-center items-center pt-8 border-t border-white/10"
      >
        <p class="text-white/30 text-sm mb-4 md:mb-0 font-medium">
          © {{ new Date().getFullYear() }}
          {{ profile?.site_name || "PT Dayaguna Kompetensi Nusantara" }}. All
          rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useProfileStore } from "~/stores/profileStore";

const store = useProfileStore();
const { profile, isLoading, error } = storeToRefs(store);

onMounted(() => {
  store.fetchProfile();
});

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Training", href: "#training" },
  { name: "Why Choose Us", href: "#why-us" },
  { name: "Products", href: "#products" },
  { name: "Testimoni", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
  { name: "FAQ", href: "#faq" },
];

const mappedContactInfo = computed(() => {
  if (!profile.value?.contact) {
    return [
      { label: "Telepon", value: "+62 823-4342-4071", icon: "lucide:phone" },
      { label: "Email", value: "info@dkn.digital", icon: "lucide:mail" },
      {
        label: "Lokasi",
        value:
          "Jl. Sono No. 18 RT 012 RW 002, Bungur, Senen, Jakarta Pusat, DKI Jakarta",
        icon: "lucide:map-pin",
      },
    ];
  }
  return [
    {
      label: "Telepon",
      value: "+" + profile.value.contact.whatsapp_number,
      icon: "lucide:phone",
    },
    { label: "Email", value: profile.value.contact.email, icon: "lucide:mail" },
    {
      label: "Lokasi",
      value: profile.value.contact.address,
      icon: "lucide:map-pin",
    },
  ];
});

// Fallback socials if API data is missing
const socials = [
  {
    platform: "Instagram",
    icon: "lucide:instagram",
    url: "https://www.instagram.com/dknofficial.id/",
  },
  {
    platform: "LinkedIn",
    icon: "lucide:linkedin",
    url: "https://www.linkedin.com/company/pt-dayaguna-kompetensi-nusantara/?originalSubdomain=id",
  },
  {
    platform: "WhatsApp",
    icon: "lucide:phone",
    url: "http://wa.me/6282343424071",
  },
];
</script>

<style scoped></style>
