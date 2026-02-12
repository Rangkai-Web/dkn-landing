<template>
  <section id="contact" class="px-4 lg:px-20 py-24" style="background-color: var(--secondary);">
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-4 lg:gap-8">
      <!-- Left Side - Info Panel -->
      <div class="w-full lg:w-1/3 rounded-3xl shadow-2xl overflow-hidden border border-white" style="background-color: var(--dark);">
        <div class="p-8 lg:p-12 flex flex-col justify-between text-white">
          <div>
            <h1 class="text-3xl lg:text-4xl font-black mb-4 leading-tight uppercase font-poppins text-primary">Amankan Slotmu</h1>
            <p class="text-white/80 text-base lg:text-md mb-8">Pilih tanggal dan waktu yang tersedia untuk sesi foto Anda.</p>
            
            <!-- How it works -->
            <div class="space-y-6">
              <h3 class="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Cara Booking</h3>
              <div class="space-y-5">
                <div class="flex items-start gap-4">
                  <div class="size-8 rounded-full flex items-center justify-center border border-primary/30 shrink-0 text-sm font-bold text-primary" style="background-color: rgba(236, 224, 63, 0.1);">1</div>
                  <div>
                    <h4 class="font-bold font-poppins text-sm">Pilih Tanggal & Waktu</h4>
                    <p class="text-xs text-white/60">Pilih slot yang tersedia di kalender</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="size-8 rounded-full flex items-center justify-center border border-primary/30 shrink-0 text-sm font-bold text-primary" style="background-color: rgba(236, 224, 63, 0.1);">2</div>
                  <div>
                    <h4 class="font-bold font-poppins text-sm">Isi Data di Google Calendar</h4>
                    <p class="text-xs text-white/60">Lengkapi nama dan email Anda</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="size-8 rounded-full flex items-center justify-center border border-primary/30 shrink-0 text-sm font-bold text-primary" style="background-color: rgba(236, 224, 63, 0.1);">3</div>
                  <div>
                    <h4 class="font-bold font-poppins text-sm">Konfirmasi via WhatsApp</h4>
                    <p class="text-xs text-white/60">Isi form di bawah calendar & kirim</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Benefits -->
            <div class="mt-8 pt-6 border-t border-white/10 space-y-4">
              <div class="flex items-center gap-3">
                <Icon name="material-symbols:check-circle" class="text-primary shrink-0" />
                <span class="text-sm text-white/80">Booking cepat & mudah</span>
              </div>
              <div class="flex items-center gap-3">
                <Icon name="material-symbols:check-circle" class="text-primary shrink-0" />
                <span class="text-sm text-white/80">Pilih waktu sesuai ketersediaan</span>
              </div>
              <div class="flex items-center gap-3">
                <Icon name="material-symbols:check-circle" class="text-primary shrink-0" />
                <span class="text-sm text-white/80">Konfirmasi langsung tanpa menunggu</span>
              </div>
            </div>
          </div>
          
          <div class="mt-8 pt-6 border-t border-white/10">
            <p class="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">Butuh Bantuan?</p>
            <a :href="`https://wa.me/${whatsappNumber}`" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-lg font-bold mt-2 cursor-pointer hover:underline text-primary">
              <Icon name="mdi:whatsapp" class="size-5" />
              +62 878 3137 7755
            </a>
          </div>
        </div> 
      </div>

      <!-- Right Side - Calendar Panel -->
      <div class="flex-1 bg-white relative flex flex-col rounded-3xl shadow-2xl overflow-hidden border border-white/5">
        <!-- Loading State -->
        <div v-if="isLoading" class="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
          <div class="size-12 border-4 border-primary/20 rounded-full animate-spin mb-4" style="border-top-color: var(--primary);"></div>
          <p class="text-gray-500 text-sm">Memuat kalender...</p>
        </div>
        
        <!-- Google Calendar Appointment Scheduling -->
        <iframe
          :src="calendarUrl"
          style="border: 0"
          width="100%"
          height="600"
          frameborder="0"
          @load="isLoading = false"
        ></iframe>
        
        <!-- WhatsApp Confirmation Section -->
        <div class="p-5 contact-gradient">
          <p class="text-white font-bold text-sm mb-3 text-center sm:text-left">Sudah pilih jadwal? Isi data berikut untuk konfirmasi:</p>
          <div class="flex flex-col sm:flex-row gap-3 sm:items-end mb-4">
            <div class="flex flex-col gap-2 flex-1">
              <label for="confirm-name" class="text-white/80 text-xs font-bold">Nama</label>
              <input 
                id="confirm-name"
                v-model="confirmForm.name"
                type="text" 
                placeholder="Nama Anda"
                class="w-full px-4 py-2.5 rounded-3xl text-sm bg-white text-gray-800 ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div class="flex flex-col gap-2 flex-1 min-w-0">
              <label for="confirm-date" class="text-white/80 text-xs font-bold">Tanggal & Waktu</label>
              <ClientOnly>
                <VueDatePicker
                  v-model="confirmForm.bookingDate"
                  :enable-time-picker="true"
                  :min-date="new Date()"
                  :format-locale="idLocale"
                  format="dd MMMM yyyy, HH:mm"
                  placeholder="Pilih Tanggal & Waktu"
                  auto-apply
                  :input-class-name="'datepicker-input'"
                  :dark="false"
                />
                <template #fallback>
                  <input 
                    type="datetime-local"
                    class="w-full min-w-0 rounded-3xl text-sm bg-white text-gray-800 ring-1 ring-gray-200 px-4 py-2.5"
                  />
                </template>
              </ClientOnly>
            </div>
            <div class="flex flex-col gap-2 flex-1">
              <label for="confirm-service" class="text-white/80 text-xs font-bold">Pilih Layanan</label>
              <select 
                id="confirm-service"
                v-model="confirmForm.service"
                class="w-full px-4 py-2.5 rounded-3xl text-sm bg-white text-gray-800 ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none cursor-pointer"
              >
                <option value="">Pilih Layanan</option>
                <option value="Foto Produk">Foto Produk</option>
                <option value="Beauty Portrait">Beauty Portrait</option>
                <option value="Dokumentasi Bayi">Dokumentasi Bayi</option>
                <option value="Event Photography">Event Photography</option>
                <option value="Retouch & Editing">Retouch & Editing</option>
                <option value="Kelas Privat">Kelas Privat</option>
              </select>
            </div>
          </div>

          <button
            @click="confirmViaWhatsApp"
            :disabled="!confirmForm.name || !confirmForm.bookingDate"
            class="w-full flex items-center justify-center gap-2 bg-white text-green-600 px-6 py-3 rounded-3xl font-bold text-sm hover:bg-green-50 transition-all hover:scale-[1.02] cursor-pointer shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <Icon name="mdi:whatsapp" class="size-5" />
            <span class="hidden sm:inline">Konfirmasi via WhatsApp</span>
            <span class="sm:hidden">Kirim via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { id as idLocale } from 'date-fns/locale'

const route = useRoute()

const whatsappNumber = '6287831377755'

const isLoading = ref(true)

// TODO: Replace with your actual Google Calendar Appointments URL
const calendarUrl = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2VD4wMfbp3vD2dCm2PABg14ucMOEnMAmUVICPMrF9GJ2YeBmsN2tyvqCVdorvhNHwJxJPwQVwT?gv=true'

const confirmForm = reactive({
  name: '',
  bookingDate: null as Date | null,
  service: ''
})

watch(() => route.query.service, (newService) => {
  if (newService) {
    console.log('newService', newService)
    confirmForm.service = newService as string
  }
}, { immediate: true })

const confirmViaWhatsApp = () => {
  const formatDate = (dateValue: Date | string | null) => {
    if (!dateValue) return '-'
    const date = dateValue instanceof Date ? dateValue : new Date(dateValue)
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const message = `Halo Asih Angger! 👋

  Saya sudah melakukan booking melalui Google Calendar.

  📋 *Detail Booking:*
  • Nama: ${confirmForm.name}
  • Layanan: ${confirmForm.service || 'Belum dipilih'}
  • Jadwal: ${formatDate(confirmForm.bookingDate)}

  Mohon konfirmasi jadwal saya. Terima kasih! 🙏`

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
  
  // Reset form after sending
  confirmForm.name = ''
  confirmForm.bookingDate = null
  confirmForm.service = ''
}
</script>

<style>
.contact-gradient {
  background: linear-gradient(to right, var(--dark), #3a3a0a);
}

.datepicker-input {
  width: 100%;
  padding: 0.625rem 1rem;
  border-radius: 1.5rem;
  font-size: 0.875rem;
  background-color: white;
  color: #1f2937;
  border: 1px solid #e5e7eb;
}

.datepicker-input:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(236, 224, 63, 0.3);
}

.dp__theme_light {
  --dp-background-color: #ffffff;
  --dp-text-color: #1f2937;
  --dp-primary-color: #1a1a1a;
  --dp-primary-text-color: #ece03f;
  --dp-border-radius: 1rem;
}

.dp__input {
  padding: 0.45rem 2rem;
  border-radius: 1.5rem;
}
</style>
