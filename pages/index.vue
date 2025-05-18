<!-- pages/index.vue -->
<template>
  <div class="mx-auto ">
    <!-- Hero section - This is not an actual section for navigation -->
    <section id="hero" class="min-h-screen relative w-full flex py-12 text-neutral-900 ">
      <div class="flex flex-col items-center justify-center mx-auto">
        <h1 class="text-5xl lg:text-6xl font-bold mb-8 text-center">Rayhan Kimi</h1>
        <p class="text-2xl lg:text-4xl mb-4 px-4 text-center px-6 md:px-20">
          Internet of Things Developer, Embedded System Engineer, Go Developer.
        </p>
        <div class="flex mt-4 flex-row mx-auto space-x-4 mb-20 md:mb-30 lg:mb-48">
          <a
              href="/cv.pdf"
              target="_blank"
          class="text-neutral-800 flex items-center text-xl justify-center h-12 w-auto p-4 bg-emerald-500 hover:bg-emerald-400 border-2 border-black rounded transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
          Download My CV
          </a>

          <a
              href="#footer"
              class="text-neutral-800 flex items-center text-xl justify-center h-12 w-auto p-4 bg-emerald-400 hover:bg-emerald-400 border-2 border-black rounded transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Social
          </a>
        </div>
      </div>
    </section>

    <!-- Section 1 - About me -->
    <section id="section1" class="min-h-screen border-t-4 border-black grid-pattern flex flex-col">
      <!-- Marquee -->

      <!-- Konten utama -->
      <div class="flex-grow px-4 mb-20 md:px-48 pt-6">
        <h2 class="text-3xl md:text-5xl font-bold mb-6 mt-20">About me</h2>


        <!-- About Content -->
        <div class="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-md">
          <p class="mb-4 text-lg lg:text-4xl">
            Hello! I'm <span class="font-bold">Rayhan Kimi Nabiel Athallah</span>. Call me <span class="font-bold">Rayhan</span>
            for short.
          </p>
          <p class="text-md md:text-2xl mb-4">
            I'm IoT Developer, Embedded System Engineer, and Go Developer. I enjoy working with hardware and software
            and making internet-connected devices. As an Electrical Engineering graduate, I have a strong foundation in
            hardware level control and low level programming, so most of the time I code using C, C++, and sometime Go
            for backend development.
          </p>
          <div class="mt-6 md:w-1/2 p-4 bg-blue-100 border-2 border-black rounded-md">
            <p class="font-medium">I'm <span class="font-bold">22 years old</span>. I was born in July 25, 2003.</p>
            <p>Currently, I'm looking for a job after my graduation</p>
            <h3> Rayhan Kimi Nabiel Athallah</h3>
          </div>
        </div>
      </div>

      <!-- Image Carousel -->
      <div class="mb-10 p-2">
        <!-- Desktop: 3 images in row -->
        <div class="hidden md:flex gap-4">
          <div class="w-1/3 h-64 border-2 border-black bg-gray-100">
            <img src="/foto1.jpg"
                 alt="Project 1"
                 class="object-cover w-full h-full p-1">
          </div>
          <div class="w-1/3 h-64 border-2 border-black bg-gray-100">
            <img src="/foto2.jpeg"
                 alt="Project 2"
                 class="object-cover w-full h-full p-1">
          </div>
          <div class="w-1/3 h-64 border-2 border-black bg-gray-100">
            <img src="/foto3.png"
                 alt="Project 3"
                 class="object-cover w-full h-full p-1">
          </div>
        </div>

        <!-- Mobile: Single image with controls -->
        <div class="md:hidden relative">
          <div class="relative h-64  overflow-hidden">
            <!-- Images -->
            <img v-for="(img, index) in images"
                 :key="index"
                 :src="img"
                 :alt="'Project ' + (index + 1)"
                 class="absolute inset-0 w-full h-full object-cover p-1 transition-transform duration-300"
                 :class="{ 'translate-x-0': currentImageIndex === index, '-translate-x-full': currentImageIndex > index, 'translate-x-full': currentImageIndex < index }">
          </div>

          <!-- Navigation Buttons -->
          <div class="absolute inset-y-0 left-0 flex items-center px-2">
            <button @click="prevImage"
                    class="bg-white p-2 border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100">
              ←
            </button>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center px-2">
            <button @click="nextImage"
                    class="bg-white p-2 border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100">
              →
            </button>
          </div>
        </div>
      </div>
      <Marquee text="Rayhan Kimi - About Me" class="w-full"/>
    </section>

    <section id="section2" class="min-h-screen border-t-4 border-black line-pattern flex flex-col">
      <div class="flex-grow px-4 mb-20 md:px-48 pt-6">
        <h2 class="text-3xl md:text-5xl font-bold mb-6 text-center mt-20">Skills</h2>
        <div class="flex-grow bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div class="flex flex-col">
            <!-- First Row -->
            <div class="flex flex-col md:flex-row">
              <!-- Embedded System -->
              <div class="bg-white border-b-2 md:border-r-2 border-black p-4 md:p-6">
                <div class="flex flex-col md:flex-row items-start gap-4">
                  <div class="w-full md:w-2/3">
                    <h3 class="text-2xl font-semibold md:text-4xl p-2">Embedded System</h3>
                    <p class="text-sm md:text-base">
                      Expertise in microcontroller programming (STM32, ESP32), RTOS, and hardware design.
                      Proficient in C/C++ for embedded applications and low-level system optimization.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                      <span class="px-2 py-1 bg-black text-white text-xs md:text-sm border border-black">C/C++</span>
                      <span class="px-2 py-1 bg-black text-white text-xs md:text-sm border border-black">FreeRTOS</span>
                      <span
                          class="px-2 py-1 bg-black text-white text-xs md:text-sm border border-black">PlatformIO</span>
                      <span
                          class="px-2 py-1 bg-black text-white text-xs md:text-sm border border-black">ESP-IDF</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Backend & IoT -->
              <div class="bg-emerald-50 border-b-2 md:border-l-2 border-black p-4 md:p-6">
                <div class="flex flex-col md:flex-row items-start gap-4">
                  <div class="w-full md:w-2/3">
                    <h3 class="text-2xl font-semibold md:text-4xl p-2">Backend & IoT</h3>
                    <p class="text-sm md:text-base">
                      Building scalable backend systems and IoT solutions. Experience with MQTT, WebSockets,
                      and cloud integration for smart devices and data processing pipelines.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                      <span class="px-2 py-1 bg-black text-white text-xs md:text-sm border border-black">Go</span>
                      <span class="px-2 py-1 bg-black text-white text-xs md:text-sm border border-black">Django REST</span>
                      <span class="px-2 py-1 bg-black text-white text-xs md:text-sm border border-black">FastAPI</span>
                      <span class="px-2 py-1 bg-black text-white text-xs md:text-sm border border-black">MQTT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Second Row -->
            <div class="flex flex-col md:flex-row">
              <!-- Other Tech -->
              <div class="bg-white border-b-2 md:border-r-2 border-black p-4 md:p-6 md:bg-emerald-50">
                <div class="flex flex-col md:flex-row items-start gap-4">
                  <div class="w-full md:w-2/3">
                    <h3 class="text-2xl font-semibold md:text-4xl p-2">Other Tech</h3>
                    <p class="text-sm md:text-base">
                      Versatile in various technologies including DevOps, Databases, Frontend Development, and other.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                      <span class="px-2 py-1 bg-black text-white text-xs md:text-sm border border-black">Docker</span>
                      <span
                          class="px-2 py-1 bg-black text-white text-xs md:text-sm border border-black">PostgreSQL</span>
                      <span class="px-2 py-1 bg-black text-white text-xs md:text-sm border border-black">AWS & GCP</span>
                      <span class="px-2 py-1 bg-black text-white text-xs md:text-sm border border-black">Vue</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Soft Skills -->
              <div class="bg-emerald-50 border-b-2 md:border-l-2 border-black p-4 md:p-6 md:bg-white">
                <div class="flex flex-col md:flex-row items-start gap-4">
                  <div class="w-full md:w-2/3">
                    <h3 class="text-2xl font-semibold md:text-4xl p-2">Soft Skills</h3>
                    <p class="text-sm md:text-base">
                      Effective communicator and team player with strong problem-solving abilities.
                      Experienced in project management and cross-functional collaboration in agile environments.
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                      <span
                          class="px-2 py-1 bg-black text-white text-xs md:text-sm border border-black">Goal Oriented</span>
                      <span
                          class="px-2 py-1 bg-black text-white text-xs md:text-sm border border-black">Communication</span>
                      <span class="px-2 py-1 bg-black text-white text-xs md:text-sm border border-black">Agile</span>
                      <span class="px-2 py-1 bg-black text-white text-xs md:text-sm border border-black">Easy Going</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Marquee positioned at the bottom -->
      <Marquee text="Rayhan Kimi - Skills & Tech" class="w-full"/>
    </section>

    <!-- Section 3 - Projects -->
    <!-- Section 3 - Projects -->
    <section id="section3" class="min-h-screen border-t-4 border-black flex flex-col vertical-pattern">
      <div class="flex-grow px-4 py-12 md:px-48">
        <h2 class="mt-20 text-3xl md:text-5xl font-bold mb-12 text-center">Projects</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Project Card 1 -->
          <div class="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-md overflow-hidden">
            <div class="p-6">
              <h3 class="text-2xl font-semibold md:text-3xl mb-4">Traffic Detection Computer Vision Model</h3>
              <div class="flex flex-col gap-6">
                <div>
                  <p class="text-sm md:text-base mb-4">
                    Integrated intelligent traffic light system that adapts to real-time traffic conditions using computer vision (using YoLoV5 model) and IoT technology.
                    Utilizing Raspberry Pi to perform computer vision program.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-2 py-1 bg-black text-white text-xs md:text-sm border border-black">YoLoV5</span>
                    <span class="px-2 py-1 bg-black text-white text-xs md:text-sm border border-black">OpenCV</span>
                    <span class="px-2 py-1 bg-black text-white text-xs md:text-sm border border-black">Django REST</span>
                    <span class="px-2 py-1 bg-black text-white text-xs md:text-sm border border-black">Raspberry Pi</span>
                  </div>
                </div>
                <button @click="openModal('traffic')" class="mt-4 px-4 py-2 bg-teal-700 text-white border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-teal-800 transition-colors">
                  View Project Images
                </button>
              </div>
            </div>
          </div>

          <!-- Project Card 2 -->
          <div class="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-md overflow-hidden">
            <div class="p-6">
              <h3 class="text-2xl font-semibold md:text-3xl mb-4">Suika Studio Development</h3>
              <div class="flex flex-col gap-6">
                <div>
                  <p class="text-sm md:text-base mb-4">
                    Research & Development member. Contributed in making API for whatsapp bot, creating hardware monitoring system,
                    and handling server hosting and marketing.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-2 py-1 bg-black text-white text-xs md:text-sm border border-black">Go</span>
                    <span class="px-2 py-1 bg-black text-white text-xs md:text-sm border border-black">Express</span>
                    <span class="px-2 py-1 bg-black text-white text-xs md:text-sm border border-black">DevOps</span>
                  </div>
                </div>
                <button @click="openModal('suika')" class="mt-4 px-4 py-2 bg-teal-700 text-white border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-teal-800 transition-colors">
                  View Project Images
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Marquee positioned at the bottom -->
      <Marquee text="Innovation Through Technology" class="w-full"/>

      <!-- Modal Component -->
      <div v-if="activeModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white p-6 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border-4 border-black">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-2xl font-bold">{{ modalTitles[activeModal] }}</h3>
            <button @click="closeModal" class="text-2xl">&times;</button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img v-for="(image, index) in modalImages[activeModal]"
                 :key="index"
                 :src="image"
                 :alt="'Project Image ' + (index + 1)"
                 class="w-full h-auto border-2 border-black">
          </div>
          <button @click="closeModal" class="mt-4 px-4 py-2 bg-black text-white border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-800 transition-colors">
            Close
          </button>
        </div>
      </div>
    </section>

    <!-- Section 4 - Contact -->
    <section id="section4" class="min-h-screen border-t-4 border-black flex flex-col">
      <div class="flex-grow px-4 py-12 md:px-48">
        <div class="mt-20 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-md overflow-hidden">
          <div class="p-6 md:p-8">
            <h2 class="text-3xl md:text-5xl font-bold mb-6 text-center">Get In Touch</h2>

            <!-- Contact Card -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-2xl font-semibold md:text-3xl mb-4">Contact Me</h3>
                <p class="text-sm md:text-base mb-6">
                  Interested in collaborating or have questions about my work?
                  Feel free to reach out through email or connect with me on social media.
                </p>

                <div class="space-y-4">
                  <div class="flex items-center gap-4">
                    <div class="w-10 h-10 bg-teal-700 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <a href="mailto:r4yhankimi@gmail.com" class="text-lg md:text-xl font-medium hover:underline">r4yhankimi@gmail.com</a>
                  </div>

                  <div class="flex items-center gap-4">
                    <div class="w-10 h-10 bg-teal-700 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span class="text-lg md:text-xl font-medium">+62 812-3456-7890</span>
                  </div>

                  <div class="flex items-center gap-4">
                    <div class="w-10 h-10 bg-teal-700 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span class="text-lg md:text-xl font-medium">Bandung, Indonesia</span>
                  </div>
                </div>
              </div>

              <div class="border-t-2 md:border-t-0 md:border-l-2 border-black pt-6 md:pt-0 md:pl-6">
                <h3 class="text-2xl font-semibold md:text-3xl mb-4">Send a Message</h3>
                <form class="space-y-4">
                  <div>
                    <label for="name" class="block text-sm font-medium mb-1">Name</label>
                    <input type="text" id="name" class="w-full px-4 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black">
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium mb-1">Email</label>
                    <input type="email" id="email" class="w-full px-4 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black">
                  </div>
                  <div>
                    <label for="message" class="block text-sm font-medium mb-1">Message</label>
                    <textarea id="message" rows="4" class="w-full px-4 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"></textarea>
                  </div>
                  <button type="submit" class="px-6 py-3 bg-teal-700 text-white font-bold border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-teal-800 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Marquee positioned at the bottom -->
      <Marquee text="Let's Build Something Amazing Together!" class="w-full"/>
    </section>

    <!-- Section 5 - Mega Footer -->
    <section id="footer" class="min-h-[80vh] border-t-4 border-black bg-neutral-900 text-white relative overflow-hidden">
      <!-- Giant Marquee Banner -->
      <div class="h-24 bg-black text-white flex items-center overflow-hidden">
        <div class="flex items-center animate-marquee whitespace-nowrap">
          <span class="text-5xl md:text-7xl font-bold mx-8">RAYHAN KIMI NABIEL ATHALLAH</span>
          <span class="text-5xl md:text-7xl font-bold mx-8">•</span>
          <span class="text-5xl md:text-7xl font-bold mx-8">EMBEDDED SYSTEMS ENGINEER</span>
          <span class="text-5xl md:text-7xl font-bold mx-8">•</span>
          <span class="text-5xl md:text-7xl font-bold mx-8">IOT DEVELOPER</span>
          <span class="text-5xl md:text-7xl font-bold mx-8">•</span>
          <span class="text-5xl md:text-7xl font-bold mx-8">RAYHAN KIMI NABIEL ATHALLAH</span>
        </div>
      </div>

      <!-- Giant Footer Content -->
      <div class="p-12 md:p-24 flex flex-col h-full">
        <div class="flex-grow flex flex-col md:flex-row gap-12">
          <!-- Left Column - Giant Name -->
          <div class="md:w-1/2 flex items-center justify-center">
            <h2 class="text-8xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem] font-bold leading-none text-center md:text-left">
              RAYHAN<br>KIMI
            </h2>
          </div>

          <!-- Right Column - Info -->
          <div class="md:w-1/2 flex flex-col justify-center space-y-8">
            <div class="border-4 border-emerald-50 p-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
              <h3 class="text-3xl font-bold mb-4">Connect</h3>
              <div class="space-y-4">
                <a href="mailto:r4yhankimi@gmail.com" class="text-xl flex items-center gap-4 hover:underline">
              <span class="w-10 h-10 bg-emerald-50 flex items-center justify-center">
                ✉️
              </span>
                  r4yhankimi@gmail.com
                </a>
                <a href="#" class="text-xl flex items-center gap-4 hover:underline">
              <span class="w-10 h-10 bg-emerald-50 flex items-center justify-center">
                💼
              </span>
                  LinkedIn
                </a>
                <a href="#" class="text-xl flex items-center gap-4 hover:underline">
              <span class="w-10 h-10 bg-emerald-50 flex items-center justify-center">
                ⌨️
              </span>
                  GitHub
                </a>
              </div>
            </div>

            <div class="border-4 border-emerald-50 p-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
              <h3 class="text-3xl font-bold mb-4">Navigation</h3>
              <div class="grid grid-cols-2 gap-4">
                <a href="#section1" class="text-lg hover:underline">About Me</a>
                <a href="#section2" class="text-lg hover:underline">Skills</a>
                <a href="#section3" class="text-lg hover:underline">Projects</a>
                <a href="#section4" class="text-lg hover:underline">Contact</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Copyright -->
        <div class="mt-12 pt-6 border-t-4 border-white text-center">
          <p class="text-xl">© 2023 Rayhan Kimi Nabiel Athallah. All systems operational.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

import { ref, onMounted, onBeforeUnmount } from 'vue';

const currentImageIndex = ref(0)
const images = ref([
  'foto1.jpg',
  'foto2.jpeg',
  'foto3.png'
])

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length
}

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + images.value.length) % images.value.length
}


const activeModal = ref(null);
const modalTitles = {
  traffic: 'Traffic Adaptive Red Light',
  suika: 'Suika Studio Development'
};
const modalImages = {
  traffic: [
    'https://placehold.co/600x400.png',
    'https://placehold.co/600x400.png',
    'https://placehold.co/600x400.png',
    'https://placehold.co/600x400.png',
  ],
  suika: [
    'https://placehold.co/600x400.png',
    'https://placehold.co/600x400.png',
    'https://placehold.co/600x400.png',
    'https://placehold.co/600x400.png',
     ]
};

const openModal = (modalType) => {
  activeModal.value = modalType;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  activeModal.value = null;
  document.body.style.overflow = 'auto';
};

// Close modal when clicking outside content
const handleOutsideClick = (e) => {
  if (activeModal.value && e.target.classList.contains('bg-opacity-50')) {
    closeModal();
  }
};

// Close modal with escape key
const handleKeydown = (e) => {
  if (activeModal.value && e.key === 'Escape') {
    closeModal();
  }
};

onMounted(() => {
  document.addEventListener('click', handleOutsideClick);
  document.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleOutsideClick);
  document.removeEventListener('keydown', handleKeydown);
});

</script>

<style>
body {
  background-color: #f5fcf9;
}

body::before {
  content: '';
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
      90deg,
      #f5fcf9 0%,
      #c5fdf1 25%,
      #abfce8 50%,
      #bbfcdc 75%,
      #f5fcf9 100%
  );
  background-size: 400% 400%;
  animation: gradientFlow 15s ease infinite;
  filter: blur(10px);
  z-index: -1;
  opacity: 0.8;
}

@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.grid-pattern {
  background-color: #eafafc;
  background-size: 50px 50px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.15) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 1px, transparent 1px);
}

.line-pattern {
  background-color: #dff5f3;
  background-size: 50px 50px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 1px, transparent 1px);
}
.vertical-pattern {
  background-color: #dff5e5;
  background-size: 50px 50px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.15) 1px, transparent 1px);
}
</style>