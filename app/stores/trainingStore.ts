import { defineStore } from "pinia";
import { ref, computed } from "vue";

export interface ICourse {
  id: number;
  title: string;
  description: string;
  image: string;
  // link: string;
  category: string;
}

export const useTrainingStore = defineStore("training", () => {
  // State
  const activeTab = ref("Core Banking");
  const courses = ref<ICourse[]>([]);
  const isLoading = ref(true);
  const error = ref<string | null>(null);

  // Getters
  const categories = computed(() => {
    const cats = [...new Set(courses.value.map((c) => c.category))];
    return cats;
  });

  const filteredCourses = computed(() => {
    return courses.value.filter((c) => c.category === activeTab.value);
  });

  const activeCourseCount = computed(() => filteredCourses.value.length);

  // Actions
  const setActiveTab = (tab: string) => {
    activeTab.value = tab;
  };

  const fetchTrainings = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const config = useRuntimeConfig();
      const baseUrl = config.public.apiBaseUrl || "http://127.0.0.1:8000/api/";

      const data = await $fetch<any>(`${baseUrl}trainings`);

      if (data) {
        courses.value = data?.data?.map((item: any) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          image: item.image, // Map API image field
          // link: item.link || "https://dkn.moodle.com",
          category: item.category,
        }));

        // Maintenance: If activeTab is empty or not in current categories, select the first one
        if (
          categories.value.length > 0 &&
          (!activeTab.value || !categories.value.includes(activeTab.value))
        ) {
          const firstCategory = categories.value[0];
          if (firstCategory) {
            activeTab.value = firstCategory;
          }
        }
      }
    } catch (err: any) {
      console.error("Failed to fetch trainings:", err);
      error.value = err.message || "Gagal mengambil data pelatihan";

      // Fallback dummy data for development
      courses.value = [];

      if (!activeTab.value || !categories.value.includes(activeTab.value)) {
        activeTab.value = "Core Banking";
      }
    } finally {
      isLoading.value = false;
    }
  };

  return {
    // State
    activeTab,
    courses,
    isLoading,
    error,
    // Getters
    categories,
    filteredCourses,
    activeCourseCount,
    // Actions
    setActiveTab,
    fetchTrainings,
  };
});
