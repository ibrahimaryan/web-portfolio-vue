<script setup>
import TheNavbar from './components/TheNavbar.vue';
import TheHeader from './components/TheHeader.vue';
import TheAbout from './components/TheAbout.vue';
import ThePortfolio from './components/ThePortfolio.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <div class="relative z-0 min-h-screen bg-white dark:bg-[#11001f] text-gray-900 dark:text-white font-Ovo transition-colors duration-500 selection:bg-purple-500 selection:text-white">
    <TheNavbar />
    <main>
      <TheHeader />
      <TheAbout />
      <ThePortfolio />
    </main>
    <TheFooter />
  </div>
</template>
