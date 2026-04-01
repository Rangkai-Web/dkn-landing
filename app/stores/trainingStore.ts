import { defineStore } from "pinia";
import { ref, computed } from "vue";

export interface ICourse {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

export const useTrainingStore = defineStore("training", () => {
  // State
  const activeTab = ref("Core Banking");

  const courses = ref<ICourse[]>([
    // Core Banking
    {
      id: 1,
      title: "General Banking Level 4",
      description:
        "Pelatihan perbankan umum untuk meningkatkan kompetensi dasar di sektor keuangan.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      category: "Core Banking",
    },
    {
      id: 2,
      title: "Cash Handling Level 4",
      description:
        "Penanganan uang tunai sesuai standar industri perbankan nasional.",
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      category: "Core Banking",
    },
    {
      id: 3,
      title: "Cash Handling Level 5",
      description:
        "Pelatihan lanjutan penanganan uang tunai untuk tingkat manajerial.",
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      category: "Core Banking",
    },
    {
      id: 4,
      title: "Branch Operations Excellence",
      description:
        "Optimalisasi operasional cabang untuk efisiensi layanan perbankan.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      category: "Core Banking",
    },

    // Leadership
    {
      id: 5,
      title: "Officer Development Program (ODP)",
      description:
        "Program pengembangan kepemimpinan untuk calon officer dan manajer baru.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      category: "Leadership",
    },
    {
      id: 6,
      title: "Building High-Performance Corporate Culture",
      description:
        "Membangun budaya perusahaan yang kuat dan berdampak pada kinerja.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      category: "Leadership",
    },
    {
      id: 7,
      title: "Performance Management for High-Impact Teams",
      description:
        "Sistem manajemen kinerja untuk membangun tim berperforma tinggi.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      category: "Leadership",
    },
    {
      id: 8,
      title: "Coaching Skills for Leaders & Supervisors",
      description:
        "Keterampilan coaching untuk pemimpin dan supervisor dalam memotivasi tim.",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      category: "Leadership",
    },

    // Finance
    {
      id: 9,
      title: "Financial Statement Analysis & Investment Evaluation",
      description:
        "Analisis laporan keuangan dan evaluasi investasi untuk keputusan strategis.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      category: "Finance",
    },
    {
      id: 10,
      title: "Fundamentals of Financial Management",
      description:
        "Dasar-dasar manajemen keuangan untuk profesional dan non-keuangan.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      category: "Finance",
    },
    {
      id: 11,
      title: "Financial Planning",
      description:
        "Perencanaan keuangan komprehensif untuk individu maupun korporasi.",
      image:
        "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      category: "Finance",
    },
    {
      id: 12,
      title: "Wealth Management Basics",
      description:
        "Dasar pengelolaan kekayaan dan strategi investasi portofolio.",
      image:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      category: "Finance",
    },

    // Business Strategy
    {
      id: 13,
      title: "Strategic Management & Execution Excellence",
      description:
        "Manajemen strategis dan eksekusi rencana bisnis yang efektif.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      category: "Business Strategy",
    },
    {
      id: 14,
      title: "Business Planning & Business Model Development",
      description:
        "Pengembangan model bisnis inovatif dan perencanaan strategis.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      category: "Business Strategy",
    },
    {
      id: 15,
      title: "Value Chain Management & Business Ecosystem Strategy",
      description:
        "Manajemen rantai nilai dan strategi ekosistem bisnis terintegrasi.",
      image:
        "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      category: "Business Strategy",
    },
    {
      id: 16,
      title: "Business Case Writing for Decision Making",
      description: "Keterampilan menyusun business case yang persuasif.",
      image:
        "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      category: "Business Strategy",
    },

    // Marketing & Sales
    {
      id: 17,
      title: "Digital Marketing",
      description: "Kuasai strategi pemasaran digital dari dasar hingga mahir.",
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      category: "Marketing & Sales",
    },
    {
      id: 18,
      title: "Marketing Fundamentals for Business Growth",
      description:
        "Dasar-dasar pemasaran untuk pertumbuhan bisnis yang berkelanjutan.",
      image:
        "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      category: "Marketing & Sales",
    },
    {
      id: 19,
      title: "Smart Selling Skills",
      description:
        "Teknik penjualan cerdas dan efektif untuk meningkatkan revenue.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      category: "Marketing & Sales",
    },
    {
      id: 20,
      title: "Service Excellence & Customer Experience Mastery",
      description:
        "Program layanan pelanggan premium untuk pengalaman terbaik.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      category: "Marketing & Sales",
    },
  ]);

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

  return {
    // State
    activeTab,
    courses,
    // Getters
    categories,
    filteredCourses,
    activeCourseCount,
    // Actions
    setActiveTab,
  };
});
