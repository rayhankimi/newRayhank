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
              <a href="#section1" class="px-4 py-2 text-black font-medium hover:text-emerald-50 transition-colors border-r-2 border-black last:border-r-0">
                About Me
              </a>
              <a href="#section2" class="px-4 py-2 text-black font-medium hover:text-emerald-50 transition-colors border-r-2 border-black last:border-r-0">
                Skills
              </a>
              <a href="#section3" class="px-4 py-2 text-black font-medium hover:text-emerald-50 transition-colors border-r-2 border-black last:border-r-0">
                Projects
              </a>
              <a href="#section4" class="px-4 py-2 text-black font-medium hover:text-emerald-50 transition-colors">
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
import {ref, onMounted} from 'vue'

const currentSection = ref(0)
const sections = ref([])

onMounted(() => {
  sections.value = [
    document.getElementById('hero'),
    ...Array.from(document.querySelectorAll('[id^="section"]')).sort((a, b) => a.offsetTop - b.offsetTop),
    document.getElementById('footer')
  ]

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id
        const index = sections.value.findIndex(el => el?.id === id)
        if (index !== -1) {
          currentSection.value = index
        }
      }
    })
  }, {
    threshold: 0.5,
    rootMargin: '-50px 0px -50px 0px'
  })

  sections.value.forEach(section => {
    if (section) sectionObserver.observe(section)
  })
})

const scrollToTop = () => {
  document.getElementById('hero')?.scrollIntoView({behavior: 'smooth'})
}

const navigateSection = (direction) => {
  if (direction === 'up') {
    if (currentSection.value <= 0) {
      scrollToTop()
      return
    }
    const target = sections.value[currentSection.value - 1]
    target?.scrollIntoView({behavior: 'smooth'})
  } else if (direction === 'down') {
    const nextIndex = currentSection.value + 1
    if (nextIndex >= sections.value.length) {
      scrollToTop()
    } else {
      const target = sections.value[nextIndex]
      target?.scrollIntoView({behavior: 'smooth'})
    }
  }
}
</script>
