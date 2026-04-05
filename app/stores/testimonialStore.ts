import { defineStore } from "pinia";
import { ref } from "vue";

export interface ITestimonial {
  id: number;
  title: string;
  img: string;
}

export const useTestimonialStore = defineStore("testimonial", () => {
  const testimonials = ref<ITestimonial[]>([]);
  const isLoading = ref(true);
  const error = ref<string | null>(null);

  const fetchTestimonials = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const config = useRuntimeConfig();
      const baseUrl = config.public.apiBaseUrl;
      console.log("Fetching testimonials from:", `${baseUrl}testimonials`);

      const data = await $fetch<any>("testimonials", {
        baseURL: baseUrl,
      });

      if (data) {
        testimonials.value = data?.data?.map((item: any) => ({
          ...item,
          img: item.image,
        }));
      }
    } catch (err: any) {
      console.error("Failed to fetch testimonials:", err);
      error.value = err.message || "Gagal mengambil data testimoni";

      // Fallback dummy data in case of development without backend
      testimonials.value = [];
    } finally {
      isLoading.value = false;
    }
  };

  return {
    testimonials,
    isLoading,
    error,
    fetchTestimonials,
  };
});
