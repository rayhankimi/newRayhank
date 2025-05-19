<!-- components/TheNavbar.vue -->
<template>
  <div>
    <!-- Main navbar - fixed to top -->
    <nav
        class="fixed top-0 left-0 right-0 z-50 mx-auto mt-2 w-[95%] bg-teal-600 border-2 rounded-md border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <span class="text-black text-lg md:text-3xl font-semibold text-neutral-800">Rayhan Kimi</span>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-4">
            <!-- Back to top button for desktop -->
            <button @click="scrollToTop"
                    class="flex items-center justify-center h-10 w-auto p-4 bg-blue-300 hover:bg-blue-400 border-2 border-black rounded transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Top
            </button>

            <div class="flex space-x-2">
              <!-- Up button -->
              <button @click="navigateSection('up')"
                      class="flex items-center justify-center p-2 bg-blue-300 hover:bg-blue-400 border-2 border-black rounded transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                </svg>
              </button>

              <!-- Down button -->
              <button @click="navigateSection('down')"
                      class="flex items-center justify-center p-2 bg-teal-100 hover:bg-teal-200 border-2 border-black rounded transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                </svg>
              </button>
            </div>
            <div class="flex border-2 border-black rounded overflow-hidden">
              <a href="#section1" @click.prevent="scrollToSection('section1')" class="px-4 py-2 text-black font-medium hover:text-emerald-50 transition-colors border-r-2 border-black last:border-r-0">
                About Me
              </a>
              <a href="#section2" @click.prevent="scrollToSection('section2')" class="px-4 py-2 text-black font-medium hover:text-emerald-50 transition-colors border-r-2 border-black last:border-r-0">
                Skills
              </a>
              <a href="#section3" @click.prevent="scrollToSection('section3')" class="px-4 py-2 text-black font-medium hover:text-emerald-50 transition-colors border-r-2 border-black last:border-r-0">
                Projects
              </a>
              <a href="#section4" @click.prevent="scrollToSection('section4')" class="px-4 py-2 text-black font-medium hover:text-emerald-50 transition-colors">
                Contact Me
              </a>
            </div>
          </div>

          <!-- Mobile buttons -->
          <div class="md:hidden flex items-center space-x-2">
            <!-- Navigation buttons for mobile -->
            <div class="flex space-x-2">
              <button @click="scrollToTop"
                      class="flex items-center justify-center h-10 w-auto p-4 bg-blue-300 hover:bg-blue-400 border-2 border-black rounded transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Top
              </button>
              <!-- Up button -->
              <button @click="navigateSection('up')"
                      class="flex items-center justify-center p-2 bg-blue-300 hover:bg-blue-400 border-2 border-black rounded transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                </svg>
              </button>

              <!-- Down button -->
              <button @click="navigateSection('down')"
                      class="flex items-center justify-center p-2 bg-teal-100 hover:bg-teal-200 border-2 border-black rounded transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentSection = ref(0)
const sections = ref([])
let sectionObserver = null

// Inisialisasi section ids dalam array terpisah untuk memudahkan referensi
const sectionIds = ['hero', 'section1', 'section2', 'section3', 'section4', 'footer']

// Fungsi untuk mendapatkan semua section dengan timeout untuk memastikan DOM sudah ter-render
const initializeSections = () => {
  // Membuat timeout untuk memastikan DOM sudah dirender sepenuhnya
  setTimeout(() => {
    // Kumpulkan section berdasarkan ID yang sudah ditentukan
    sections.value = sectionIds.map(id => document.getElementById(id)).filter(Boolean)

    // Inisialisasi IntersectionObserver hanya jika sections berhasil ditemukan
    if (sections.value.length > 0) {
      // Bersihkan observer lama jika ada
      if (sectionObserver) {
        sectionObserver.disconnect()
      }

      // Buat observer baru
      sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            const index = sections.value.findIndex(el => el.id === id)
            if (index !== -1) {
              currentSection.value = index
            }
          }
        })
      }, {
        threshold: 0.3, // Menurunkan threshold untuk trigger lebih awal
        rootMargin: '-20% 0px -20% 0px' // Margin yang lebih ramah di Safari
      })

      // Observe semua section
      sections.value.forEach(section => {
        if (section) sectionObserver.observe(section)
      })
    }
  }, 500) // Delay untuk memastikan DOM sudah terrender
}

onMounted(() => {
  // Inisialisasi sections dengan delay untuk memastikan DOM dirender
  initializeSections()

  // Tambahkan event listener untuk memastikan scroll tetap berfungsi
  window.addEventListener('resize', initializeSections)

  // Cleanup saat component dihapus
  return () => {
    if (sectionObserver) {
      sectionObserver.disconnect()
    }
    window.removeEventListener('resize', initializeSections)
  }
})

// Scroll ke top dengan smooth behavior
const scrollToTop = () => {
  const heroElement = document.getElementById('hero')
  if (heroElement) {
    // Gunakan scrollTo untuk Safari compatibility
    window.scrollTo({
      top: heroElement.offsetTop,
      behavior: 'smooth'
    })
  }
}

// Scroll ke section spesifik dengan ID
const scrollToSection = (sectionId) => {
  const targetElement = document.getElementById(sectionId)
  if (targetElement) {
    // Gunakan scrollTo untuk Safari compatibility
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    })

    // Update current section untuk navigasi
    const index = sections.value.findIndex(section => section.id === sectionId)
    if (index !== -1) {
      currentSection.value = index
    }
  }
}

// Navigasi section atas/bawah
const navigateSection = (direction) => {
  let targetIndex = currentSection.value

  if (direction === 'up') {
    targetIndex = Math.max(0, currentSection.value - 1)
  } else if (direction === 'down') {
    targetIndex = Math.min(sections.value.length - 1, currentSection.value + 1)
  }

  // Jika target ditemukan, scroll ke target
  if (sections.value[targetIndex]) {
    // Gunakan scrollTo untuk Safari compatibility
    window.scrollTo({
      top: sections.value[targetIndex].offsetTop,
      behavior: 'smooth'
    })
  }
}
</script>
