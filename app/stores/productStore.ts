import { defineStore } from "pinia";
import { ref, computed } from "vue";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  price: string;
}

export const useProductStore = defineStore("product", () => {
  // State
  const products = ref<IProduct[]>([]);
  const isLoading = ref(true);
  const error = ref<string | null>(null);
  const currentPage = ref(1);
  const perPage = 8;

  // Actions
  const fetchProducts = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const config = useRuntimeConfig();
      const baseUrl = config.public.apiBaseUrl;

      const data = await $fetch<any>(`${baseUrl}products`);

      if (data) {
        products.value = data?.data?.map((item: any) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          image: item.image, // Map API image field
          link: item.link,
          price: item.price,
        }));
      }
    } catch (err: any) {
      console.error("Failed to fetch products:", err);
      error.value = err.message || "Gagal mengambil data produk";

      // Fallback dummy data for development
      products.value = [];
    } finally {
      isLoading.value = false;
    }
  };

  // Getters
  const totalProducts = computed(() => products.value.length);
  const totalPages = computed(() => Math.ceil(totalProducts.value / perPage));

  const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * perPage;
    return products.value.slice(start, start + perPage);
  });

  // Actions
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
    }
  };

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  };

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  };

  return {
    // State
    products,
    isLoading,
    error,
    currentPage,
    perPage,
    // Getters
    totalProducts,
    totalPages,
    paginatedProducts,
    // Actions
    fetchProducts,
    goToPage,
    nextPage,
    prevPage,
  };
});
