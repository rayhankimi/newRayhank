<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen ">
    <!-- Navbar -->
    <TheNavbar/>

    <!-- Main content with padding to avoid navbar overlap -->
    <main class="">
      <!-- Page content -->
      <slot/>
    </main>

  </div>
</template>

<script setup>
// Import the navbar component
import TheNavbar from '~/components/TheNavbar.vue'
</script>