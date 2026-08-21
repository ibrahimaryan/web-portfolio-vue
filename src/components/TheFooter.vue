<script setup>
import { IconArrowRight } from '@tabler/icons-vue';
import { socialLinks } from './data.js';
</script>

<template>
  <footer id="Contact" class="w-full max-w-7xl mx-auto pt-20 pb-12 px-5 sm:px-10 lg:px-20 transition-all duration-500">
    <!-- Contact Section Header -->
    <div class="text-center mb-12">
      <h4 class="text-center text-lg font-Ovo text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1">
        Connect with me
      </h4>
      <h2 class="text-center text-4xl sm:text-5xl font-Ovo font-semibold text-gray-900 dark:text-white mb-4">
        Contact
      </h2>
      <p class="max-w-xl mx-auto text-center font-Ovo text-gray-600 dark:text-gray-300 text-base sm:text-lg">
        I'd love to hear from you! If you have any questions, comments, or opportunities, please feel free to connect via social media or drop me an email.
      </p>
    </div>

    <!-- Contact / Email Banner CTA -->
    <div class="flex justify-center mb-16">
      <a 
        href="mailto:ibrahimaryanfaridzi@gmail.com" 
        class="px-8 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black font-Ovo text-base flex items-center gap-3 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1"
      >
        <span>Send a Message</span>
        <IconArrowRight class="w-5 h-5" />
      </a>
    </div>

    <!-- Social Links Grid / Flex -->
    <div class="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-16">
      <a 
        v-for="link in socialLinks" 
        :key="link.name" 
        :href="link.href" 
        target="_blank" 
        rel="noopener noreferrer"
        class="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-200 hover:bg-lightHover dark:hover:bg-darkHover hover:border-gray-400 dark:hover:border-white/50 hover:text-black dark:hover:text-white transition-all duration-300"
      >
        <component :is="link.icon" class="w-5 h-5 text-gray-800 dark:text-white" />
        <span class="font-Ovo text-sm font-medium">{{ link.name }}</span>
      </a>
    </div>

    <!-- Copyright Notice with Top Border -->
    <div class="pt-8 border-t border-gray-400 dark:border-white/20 text-center">
      <p class="font-Ovo text-sm text-gray-600 dark:text-gray-400">
        © 2026 Ibrahim Aryan. All rights reserved.
      </p>
    </div>
  </footer>
</template>
