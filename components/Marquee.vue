<!-- components/Marquee.vue -->
<template>
  <div class="overflow-hidden bg-teal-700 border-t-4 border-black py-2 md:py-4">
    <div class="whitespace-nowrap inline-block animate-marquee">
      <span v-for="(_, index) in 12" :key="index" class="text-lg md:text-2xl  mx-4">{{ text }}</span>
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