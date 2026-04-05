<template>
  <section id="contact" class="relative py-24 px-6 bg-primary/5">
    <div
      class="bg-white max-w-7xl mx-auto rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden grid lg:grid-cols-2"
    >
      <div class="p-10 md:p-16 flex flex-col justify-center">
        <span
          class="text-[#0F766E] font-extrabold tracking-widest uppercase mb-3 text-sm"
          >Reach Out</span
        >
        <h2 class="text-4xl font-extrabold text-[#0F172A] mb-10">
          Hubungi Kami
        </h2>

        <div class="space-y-8">
          <div class="flex items-center gap-5">
            <div
              class="w-14 h-14 bg-[#F8FAFC] rounded-2xl flex items-center justify-center text-[#22C55E] shrink-0"
            >
              <Icon name="lucide:phone" size="24" />
            </div>
            <div>
              <h4 class="text-sm font-bold text-slate-400 mb-1">Phone</h4>
              <p class="text-xl font-bold text-[#0F172A]">
                {{
                  "+" + profile?.contact?.whatsapp_number || "+62 823-4342-4071"
                }}
              </p>
            </div>
          </div>
          <div class="flex items-center gap-5">
            <div
              class="w-14 h-14 bg-[#F8FAFC] rounded-2xl flex items-center justify-center text-[#3B82F6] shrink-0"
            >
              <Icon name="lucide:mail" size="24" />
            </div>
            <div>
              <h4 class="text-sm font-bold text-slate-400 mb-1">Email</h4>
              <p class="text-lg font-bold text-[#0F172A] break-all">
                {{ profile?.contact?.email || "info@dkn.digital" }}
              </p>
            </div>
          </div>
          <div class="flex items-center gap-5">
            <div
              class="w-14 h-14 bg-[#F8FAFC] rounded-2xl flex items-center justify-center text-[#F59E0B] shrink-0"
            >
              <Icon name="lucide:map-pin" size="24" />
            </div>
            <div>
              <h4 class="text-sm font-bold text-slate-400 mb-1">Address</h4>
              <p class="font-medium text-[#0F172A] leading-relaxed">
                {{
                  profile?.contact?.address ||
                  "Jl. Sono No. 18 RT 012 RW 002, Bungur, Senen, Jakarta Pusat, DKI Jakarta"
                }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-4 mt-8">
          <a
            :href="`http://wa.me/${profile?.contact?.whatsapp_number || '6282343424071'}`"
            target="_blank"
            rel="noreferrer"
            class="flex-1 bg-primary text-white px-6 py-3.5 rounded-full font-bold text-center flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300"
          >
            WhatsApp
            <Icon name="lucide:phone" size="18" />
          </a>
          <a
            :href="
              profile?.contact?.google_maps_directions ||
              'https://www.google.com/maps/dir/?api=1&destination=Jl.%20Sono%20No.18%2C%20RT.6%2FRW.8%2C%20Bungur%2C%20Kec.%20Senen%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010460'
            "
            target="_blank"
            rel="noreferrer"
            class="flex-1 bg-primary text-white px-6 py-3.5 rounded-full font-bold text-center flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300"
          >
            Get Direction
            <Icon name="lucide:map-pin" size="18" />
          </a>
        </div>
      </div>

      <div class="h-[400px] lg:h-auto bg-slate-200">
        <iframe
          :src="
            profile?.contact?.google_maps_url ||
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4023.5222368646246!2d106.84857577508069!3d-6.169917960463763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5b18fbbb5d5%3A0x7451adc44b67af87!2sJl.%20Sono%20No.18%2C%20RT.6%2FRW.8%2C%20Bungur%2C%20Kec.%20Senen%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010460!5e1!3m2!1id!2sid!4v1774927577245!5m2!1sid!2sid'
          "
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Map"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useProfileStore } from "~/stores/profileStore";

const store = useProfileStore();
const { profile, isLoading, error } = storeToRefs(store);

onMounted(() => {
  store.fetchProfile();
});
</script>

<style scoped></style>
