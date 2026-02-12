export interface PortfolioItem {
  id: number
  cat: 'product' | 'beauty' | 'fashion' | 'baby' | 'event' | 'retouch' | 'private-class'
  img: string
  class: 'tall' | 'wide' | ''
}

export const portfolioItems: PortfolioItem[] = [
  { id: 1, cat: 'product', img: '/img/portfolio/produk/produk1.webp', class: 'tall' },
  { id: 2, cat: 'product', img: '/img/portfolio/produk/produk2.webp', class: '' },
  { id: 3, cat: 'product', img: '/img/portfolio/produk/produk3.webp', class: 'tall' },
  { id: 4, cat: 'product', img: '/img/portfolio/produk/produk4.webp', class: '' },
  { id: 5, cat: 'product', img: '/img/portfolio/produk/produk5.webp', class: 'wide' },
  // { id: 6, cat: 'product', img: '/img/portfolio/produk/produk6.webp', class: '' },
  { id: 7, cat: 'product', img: '/img/portfolio/produk/produk7.webp', class: '' },
  // { id: 8, cat: 'product', img: '/img/portfolio/produk/produk8.webp', class: 'wide' },
  // { id: 9, cat: 'product', img: '/img/portfolio/produk/produk9.webp', class: 'tall' },
  { id: 10, cat: 'beauty', img: '/img/portfolio/beauty/beauty1.webp', class: '' },
  { id: 11, cat: 'beauty', img: '/img/portfolio/beauty/beauty2.webp', class: 'tall' },
  { id: 12, cat: 'beauty', img: '/img/portfolio/beauty/beauty3.webp', class: 'tall' },
  { id: 13, cat: 'beauty', img: '/img/portfolio/beauty/beauty4.webp', class: '' },
  { id: 14, cat: 'beauty', img: '/img/portfolio/beauty/beauty5.webp', class: '' },
  { id: 15, cat: 'beauty', img: '/img/portfolio/beauty/beauty6.webp', class: 'wide' },
  { id: 16, cat: 'beauty', img: '/img/portfolio/beauty/beauty7.webp', class: 'tall' },
  { id: 17, cat: 'beauty', img: '/img/portfolio/beauty/beauty8.webp', class: 'tall' },
  { id: 18, cat: 'beauty', img: '/img/portfolio/beauty/beauty9.webp', class: '' },
  { id: 19, cat: 'beauty', img: '/img/portfolio/beauty/beauty10.webp', class: 'tall' },
  { id: 20, cat: 'beauty', img: '/img/portfolio/beauty/beauty11.webp', class: '' },
  { id: 21, cat: 'baby', img: '/img/portfolio/baby/baby1.webp', class: '' },
  { id: 22, cat: 'baby', img: '/img/portfolio/baby/baby2.webp', class: 'wide' },
  { id: 23, cat: 'baby', img: '/img/portfolio/baby/baby3.webp', class: 'tall' },
  { id: 24, cat: 'baby', img: '/img/portfolio/baby/baby4.webp', class: '' },
  { id: 25, cat: 'baby', img: '/img/portfolio/baby/baby5.webp', class: 'tall' },
  { id: 26, cat: 'baby', img: '/img/portfolio/baby/baby6.webp', class: 'tall' },
  { id: 27, cat: 'baby', img: '/img/portfolio/baby/baby7.webp', class: '' },
  { id: 28, cat: 'baby', img: '/img/portfolio/baby/baby8.webp', class: 'wide' },
  { id: 29, cat: 'baby', img: '/img/portfolio/baby/baby9.webp', class: '' },
  { id: 30, cat: 'baby', img: '/img/portfolio/baby/baby10.webp', class: 'tall' },
  { id: 31, cat: 'baby', img: '/img/portfolio/baby/baby11.webp', class: '' },
  { id: 32, cat: 'baby', img: '/img/portfolio/baby/baby12.webp', class: '' },
  { id: 33, cat: 'event', img: '/img/portfolio/event/event1.webp', class: 'wide' },
  { id: 34, cat: 'event', img: '/img/portfolio/event/event2.webp', class: 'tall' },
  { id: 35, cat: 'event', img: '/img/portfolio/event/event3.webp', class: 'tall' },
  { id: 36, cat: 'event', img: '/img/portfolio/event/event4.webp', class: '' },
  { id: 37, cat: 'retouch', img: '/img/portfolio/retouch/retouch1.webp', class: 'wide' },
  { id: 38, cat: 'retouch', img: '/img/portfolio/retouch/retouch2.webp', class: '' },
  { id: 39, cat: 'retouch', img: '/img/portfolio/retouch/retouch3.webp', class: '' },
  { id: 40, cat: 'private-class', img: '/img/portfolio/privat/privat1.webp', class: '' },
  { id: 41, cat: 'private-class', img: '/img/portfolio/privat/privat2.webp', class: '' },
  { id: 42, cat: 'private-class', img: '/img/portfolio/privat/privat3.webp', class: '' },
]

const ITEMS_PER_PAGE = 6

export const usePortfolio = () => {
  const activeFilter = ref<'all' | 'product' | 'beauty' | 'fashion' | 'baby' | 'event' | 'retouch' | 'private-class'>('all')
  const displayedCount = ref(ITEMS_PER_PAGE)

  const filteredItems = computed(() => {
    if (activeFilter.value === 'all') {
      return portfolioItems
    }
    return portfolioItems.filter(item => item.cat === activeFilter.value)
  })

  // Paginated items - only show up to displayedCount
  const paginatedItems = computed(() => {
    return filteredItems.value.slice(0, displayedCount.value)
  })

  // Check if there are more items to load
  const hasMore = computed(() => {
    return displayedCount.value < filteredItems.value.length
  })

  // Remaining items count
  const remainingCount = computed(() => {
    return Math.max(0, filteredItems.value.length - displayedCount.value)
  })

  const loadMore = () => {
    displayedCount.value += ITEMS_PER_PAGE
  }

  const setFilter = (filter: typeof activeFilter.value) => {
    activeFilter.value = filter
    // Reset pagination when filter changes
    displayedCount.value = ITEMS_PER_PAGE
  }

  return {
    activeFilter,
    filteredItems,
    paginatedItems,
    hasMore,
    remainingCount,
    loadMore,
    setFilter,
  }
}

