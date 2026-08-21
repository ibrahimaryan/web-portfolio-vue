<script setup>
import { infoList } from './data.js';

// Dynamic helper function for resolving tool images from assets
const getImageUrl = (name) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
};
</script>

<template>
  <section id="About" class="w-full max-w-7xl mx-auto py-20 px-5 sm:px-10 lg:px-20 transition-all duration-500">
    <!-- Sub-header & Header -->
    <div class="text-center mb-16">
      <h4 class="text-center text-lg font-Ovo text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1">
        Introduction
      </h4>
      <h2 class="text-center text-4xl sm:text-5xl font-Ovo font-semibold text-gray-900 dark:text-white">
        About Me
      </h2>
    </div>

    <!-- Narrative Bio & 4 Info Cards Grid -->
    <div class="w-full max-w-4xl mx-auto">
      <!-- Narrative Paragraph -->
      <p class="font-Ovo text-center text-gray-600 dark:text-gray-300 leading-relaxed mb-12 text-base sm:text-lg">
        I am a passionate and dedicated Computer Technology Enthusiast. With a solid foundation across multiple IT domains, I continuously challenge myself to learn and stay updated with emerging tech trends. From diagnosing hardware issues and assembling systems, to engineering robust web applications, managing network infrastructure, and crafting beautiful multimedia assets — I enjoy bringing ideas to life through technology.
      </p>

        <!-- Grid 4 Info Cards (2x2 on sm+) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div 
            v-for="card in infoList" 
            :key="card.id"
            class="border border-gray-300 dark:border-white/20 rounded-xl p-6 hover:bg-lightHover dark:hover:bg-darkHover hover:border-gray-400 dark:hover:border-white/50 shadow-sm hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <!-- Card Header Icon & Title -->
              <div class="flex items-center gap-3 mb-3">
                <div class="p-2.5 rounded-lg bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white">
                  <component :is="card.icon" class="w-6 h-6" />
                </div>
                <h3 class="font-Ovo font-semibold text-lg text-gray-900 dark:text-white">
                  {{ card.title }}
                </h3>
              </div>

              <!-- Card Description -->
              <p class="font-Ovo text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {{ card.description }}
              </p>
            </div>

            <!-- Sub-section: Tools I use -->
            <div>
              <h4 class="font-Ovo text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                Tools I use:
              </h4>
              <div class="flex flex-wrap items-center gap-2">
                <div 
                  v-for="(tool, index) in card.tools" 
                  :key="index"
                  class="w-8 h-8 rounded-lg p-1.5 border border-gray-200 dark:border-white/15 bg-white dark:bg-white/70 flex items-center justify-center hover:scale-110 transition-transform"
                  :title="tool.replace('.png', '')"
                >
                  <img 
                    :src="getImageUrl(tool)" 
                    :alt="tool" 
                    class="w-full h-full object-contain" 
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
  </section>
</template>
