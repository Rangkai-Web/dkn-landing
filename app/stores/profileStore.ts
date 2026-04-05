import { defineStore } from "pinia";
import { ref } from "vue";

export interface ICompanyProfile {
  site_name: string;
  site_description: string;
  logo_url: string;
  contact: {
    phone: string;
    email: string;
    address: string;
    whatsapp_number: string;
    google_maps_url: string;
    google_maps_directions: string;
  };
  social_media: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export const useProfileStore = defineStore("profile", () => {
  const profile = ref<ICompanyProfile | null>(null);
  const isLoading = ref(true);
  const error = ref<string | null>(null);

  const fetchProfile = async () => {
    // If already loaded, don't fetch again unless needed
    if (profile.value) {
      isLoading.value = false;
      return;
    }

    isLoading.value = true;
    error.value = null;

    try {
      const config = useRuntimeConfig();
      const baseUrl = config.public.apiBaseUrl;

      const data = await $fetch<any>(`${baseUrl}company-profile`);

      if (data && data.data) {
        profile.value = data.data;
      }
    } catch (err: any) {
      console.error("Failed to fetch company profile:", err);
      error.value = err.message || "Gagal mengambil data profil perusahaan";

      // Fallback dummy data if necessary, or keep as null
      profile.value = null;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    profile,
    isLoading,
    error,
    fetchProfile,
  };
});
