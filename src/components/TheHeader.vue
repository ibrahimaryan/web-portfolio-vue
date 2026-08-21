<script setup>
import { IconHandStop, IconArrowRight, IconDownload } from '@tabler/icons-vue';
</script>

<template>
  <header 
    id="Top" 
    class="w-full max-w-7xl mx-auto min-h-screen pt-36 pb-20 px-5 sm:px-10 lg:px-20 flex flex-col items-center justify-center text-center transition-all duration-500"
  >
    <!-- Profile Avatar Container -->
    <!-- <div class="relative mb-4 group">
      <img 
        src="../assets/images/user_image.png" 
        alt="Ibrahim Aryan Faridzi Avatar" 
        class="rounded-full w-32 h-32 object-cover shadow-lg border-2 border-gray-200 dark:border-white/20 transition-transform duration-500 group-hover:scale-105"
      />
    </div> -->

    <!-- Greeting Text -->
    <h3 class="flex items-center justify-center gap-2 text-xl sm:text-2xl font-Ovo font-medium text-gray-800 dark:text-gray-200 mb-3">
      <span>Hello I'm Ibrahim Aryan Faridzi</span>
      <IconHandStop class="w-6 h-6 text-amber-500 animate-bounce" />
    </h3>

    <!-- Main Headline (H1) -->
    <h1 class="text-3xl sm:text-6xl lg:text-[66px] font-Ovo font-semibold text-gray-900 dark:text-white leading-tight max-w-4xl mb-6">
      Computer Technology Enthusiast
    </h1>

    <!-- Bio Paragraph -->
    <p class="max-w-2xl text-base sm:text-lg font-Ovo text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
      Adaptable IT enthusiast with hands-on experience in computer hardware, software, networking, and multimedia. Passionate about learning new technology and applying technical skills to real-world solutions.
    </p>

    <!-- Call to Action Buttons -->
    <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
      <!-- Contact Me CTA -->
      <a 
        href="#Contact" 
        class="px-8 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white font-Ovo text-sm sm:text-base flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-500 shadow-md hover:shadow-xl hover:-translate-y-0.5"
      >
        <span>Contact Me</span>
        <IconArrowRight class="w-4 h-4" />
      </a>

      <!-- Optional Resume Download Button (if needed for completeness) -->
      <!-- <a 
        href="#contact" 
        class="px-8 py-3 rounded-full border border-gray-500 dark:border-white/50 text-gray-800 dark:text-white font-Ovo text-sm sm:text-base flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-500"
      >
        <span>my resume</span>
        <IconDownload class="w-4 h-4" />
      </a> -->
    </div>
  </header>
</template>
