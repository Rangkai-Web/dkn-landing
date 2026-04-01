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
  const products = ref<IProduct[]>([
    {
      id: 1,
      title: "E-Course: General Banking Level 4",
      description:
        "Kursus online perbankan umum untuk meningkatkan kompetensi dasar di sektor keuangan.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      price: "Rp 350.000",
    },
    {
      id: 2,
      title: "E-Course: Leadership Mastery",
      description:
        "Program kepemimpinan online untuk manajer dan supervisor yang ingin naik level.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      price: "Rp 499.000",
    },
    {
      id: 3,
      title: "E-Course: Digital Marketing",
      description:
        "Kuasai strategi pemasaran digital dari dasar hingga mahir secara online.",
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      price: "Rp 299.000",
    },
    {
      id: 4,
      title: "E-Course: Financial Planning",
      description:
        "Perencanaan keuangan komprehensif untuk individu maupun korporasi.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      price: "Rp 275.000",
    },
    {
      id: 5,
      title: "E-Course: Strategic Management",
      description:
        "Pelajari manajemen strategis dan eksekusi rencana bisnis yang efektif.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      price: "Rp 425.000",
    },
    {
      id: 6,
      title: "E-Course: Service Excellence",
      description:
        "Program layanan pelanggan premium untuk menciptakan pengalaman terbaik.",
      image:
        "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      price: "Rp 199.000",
    },
    {
      id: 7,
      title: "E-Course: Risk Management",
      description:
        "Manajemen risiko komprehensif untuk sektor perbankan dan keuangan.",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      price: "Rp 375.000",
    },
    {
      id: 8,
      title: "E-Course: Smart Selling Skills",
      description:
        "Teknik penjualan cerdas dan efektif untuk meningkatkan revenue bisnis.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      price: "Rp 249.000",
    },
    {
      id: 9,
      title: "E-Book: Panduan Lengkap General Banking",
      description:
        "Buku digital komprehensif tentang dasar-dasar perbankan umum dan operasional.",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      price: "Rp 89.000",
    },
    {
      id: 10,
      title: "E-Book: Leadership untuk Generasi Baru",
      description:
        "Panduan kepemimpinan modern untuk profesional muda dan calon manajer.",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      price: "Rp 75.000",
    },
    {
      id: 11,
      title: "E-Book: Strategi Bisnis Modern",
      description:
        "Kumpulan framework dan studi kasus strategi bisnis yang relevan di era digital.",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      price: "Rp 99.000",
    },
    {
      id: 12,
      title: "E-Book: Financial Literacy 101",
      description:
        "Dasar-dasar literasi keuangan wajib untuk setiap profesional dan mahasiswa.",
      image:
        "https://images.unsplash.com/photo-1553729459-uj7t8h6c4d83?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      price: "Rp 65.000",
    },
    {
      id: 13,
      title: "E-Book: Coaching & Mentoring Handbook",
      description:
        "Panduan praktis untuk para coach dan mentor di lingkungan korporat.",
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      price: "Rp 85.000",
    },
    {
      id: 14,
      title: "E-Book: Digital Transformation Playbook",
      description:
        "Roadmap transformasi digital untuk organisasi yang ingin relevan di masa depan.",
      image:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      price: "Rp 120.000",
    },
    {
      id: 15,
      title: "E-Book: Manajemen SDM Efektif",
      description:
        "Strategi pengelolaan sumber daya manusia untuk meningkatkan kinerja organisasi.",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      price: "Rp 95.000",
    },
    {
      id: 16,
      title: "E-Book: Public Speaking Mastery",
      description:
        "Teknik presentasi dan komunikasi publik yang efektif untuk profesional.",
      image:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      price: "Rp 79.000",
    },
    {
      id: 17,
      title: "Tumbler DKN Digital Premium",
      description:
        "Tumbler stainless steel eksklusif berlogo DKN Digital, kapasitas 500ml.",
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      price: "Rp 150.000",
    },
    {
      id: 18,
      title: "Notebook Eksklusif DKN",
      description:
        "Notebook hardcover A5 premium dengan kertas tebal 120gsm untuk catatan profesional.",
      image:
        "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      price: "Rp 85.000",
    },
    {
      id: 19,
      title: "Tote Bag Canvas DKN",
      description:
        "Tote bag kanvas tebal berkualitas dengan desain minimalis DKN Digital.",
      image:
        "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      price: "Rp 120.000",
    },
    {
      id: 20,
      title: "Lanyard ID Card DKN",
      description:
        "Lanyard premium dengan holder ID card transparan, cocok untuk acara dan pelatihan.",
      image:
        "https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      price: "Rp 45.000",
    },
    {
      id: 21,
      title: "Mug Keramik DKN Digital",
      description:
        "Mug keramik berkualitas tinggi dengan desain eksklusif DKN Digital.",
      image:
        "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      price: "Rp 75.000",
    },
    {
      id: 22,
      title: "Polo Shirt DKN Digital",
      description:
        "Polo shirt premium dengan bordir logo DKN, bahan cotton combed 30s.",
      image:
        "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      price: "Rp 185.000",
    },
    {
      id: 23,
      title: "Flash Drive 32GB DKN",
      description:
        "Flash drive USB 3.0 32GB dengan casing metal premium berlogo DKN.",
      image:
        "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      price: "Rp 95.000",
    },
    {
      id: 24,
      title: "Sertifikat Frame DKN",
      description:
        "Frame sertifikat kayu premium ukuran A4 untuk menampilkan sertifikat pelatihan.",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=80",
      link: "https://dkn.moodle.com",
      price: "Rp 110.000",
    },
  ]);

  const currentPage = ref(1);
  const perPage = 8;

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
    currentPage,
    perPage,
    // Getters
    totalProducts,
    totalPages,
    paginatedProducts,
    // Actions
    goToPage,
    nextPage,
    prevPage,
  };
});
