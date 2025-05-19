<!-- components/Marquee.vue -->
<template>
  <div class="overflow-hidden bg-teal-700 border-t-4 border-black py-4 md:py-6 lg:py-8">
    <div class="whitespace-nowrap inline-block animate-marquee">
      <span v-for="(_, index) in 12" :key="index" class="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-200 mx-4">{{ text }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "Welcome to my portfolio!"
  }
})
</script>