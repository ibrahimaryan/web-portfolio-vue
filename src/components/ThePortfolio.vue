<script setup>
import { ref } from 'vue';
import { IconArrowUpRight, IconX, IconExternalLink } from '@tabler/icons-vue';
import { portfolioCards, portfolioDetails } from './data.js';

// Reactive Modal state
const selectedCategory = ref(null);
const isModalOpen = ref(false);

// Dynamic helper function to resolve images from src/assets/images
const getImageUrl = (name) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
};

// Open detailed modal for selected category
const openCategoryModal = (id) => {
  if (portfolioDetails[id]) {
    selectedCategory.value = portfolioDetails[id];
    isModalOpen.value = true;
    document.body.style.overflow = 'hidden'; // Lock background scroll
  }
};

// Close detail modal
const closeModal = () => {
  isModalOpen.value = false;
  selectedCategory.value = null;
  document.body.style.overflow = ''; // Unlock background scroll
};
</script>

<template>
  <section id="Portofolio" class="w-full max-w-7xl mx-auto py-20 px-5 sm:px-10 lg:px-20 transition-all duration-500">
    <!-- Sub-header & Main Header -->
    <div class="text-center mb-16">
      <h4 class="text-center text-lg font-Ovo text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1">
        Skills and
      </h4>
      <h2 class="text-center text-4xl sm:text-5xl font-Ovo font-semibold text-gray-900 dark:text-white">
        Portofolio
      </h2>
    </div>

    <!-- Portfolio Grid (1 col mobile, 2 col sm+) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div 
        v-for="card in portfolioCards" 
        :key="card.id" 
        @click="openCategoryModal(card.id)"
        class="relative h-80 rounded-2xl overflow-hidden shadow-lg group cursor-pointer border border-gray-200 dark:border-white/10"
      >
        <!-- Background Image -->
        <img 
          :src="getImageUrl(card.image)" 
          :alt="card.title" 
          class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <!-- Default Overlay -->
        <div class="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/50"></div>

        <!-- Top Left Title -->
        <div class="absolute top-6 left-6 z-10">
          <h3 class="text-2xl font-Ovo font-bold text-white tracking-wide drop-shadow-md">
            {{ card.title }}
          </h3>
        </div>

        <!-- Bottom CTA Overlay -->
        <div class="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between opacity-100 translate-y-0 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500 sm:translate-y-4 sm:group-hover:translate-y-0">
          <span class="text-sm font-Ovo font-medium text-gray-200 tracking-wide flex items-center gap-1">
            Click for more details
          </span>

          <div class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
            <IconArrowUpRight class="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>

    <!-- Detailed Content Modal (Hardware, Software, Networking, Multimedia) -->
    <transition
      enter-active-class="transition opacity-0 duration-300"
      enter-to-class="opacity-100"
      leave-active-class="transition opacity-100 duration-300"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="isModalOpen && selectedCategory" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto"
        @click.self="closeModal"
      >
        <div class="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#1a0033] border border-gray-200 dark:border-white/20 rounded-2xl shadow-2xl overflow-y-auto p-6 sm:p-10 my-auto text-left">
          
          <!-- Close Button -->
          <button 
            @click="closeModal" 
            class="absolute top-6 right-6 p-2.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-all cursor-pointer z-20"
            aria-label="Close modal"
          >
            <IconX class="w-6 h-6" />
          </button>

          <!-- Modal Header -->
          <div class="text-center mb-8 pr-8">
            <h4 class="text-sm font-Ovo uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">
              {{ selectedCategory.categoryTitle }}
            </h4>
            <h2 class="text-3xl sm:text-4xl font-Ovo font-bold text-gray-900 dark:text-white mb-3">
              Portofolio
            </h2>
            <p class="text-base font-Ovo text-gray-600 dark:text-gray-300">
              {{ selectedCategory.subtitle }}
            </p>
          </div>

          <!-- Project List Items -->
          <div class="space-y-8 mb-12">
            <div 
              v-for="item in selectedCategory.items" 
              :key="item.id"
              class="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 hover:bg-lightHover dark:hover:bg-darkHover hover:border-gray-400 dark:hover:border-white/30 hover:-translate-y-1 dark:hover:-translate-y-1 transition-all duration-500"
            >
              <!-- Single Image or Grid of Images -->
              <div v-if="item.image" class="w-full sm:w-1/2 flex justify-center flex-shrink-0">
                <img 
                  :src="getImageUrl(item.image)" 
                  :alt="item.title || selectedCategory.categoryTitle"
                  class="rounded-lg object-contain max-h-64 border border-gray-300 dark:border-white/20 shadow-sm"
                />
              </div>
              <div v-else-if="item.images" class="w-full sm:w-1/2 grid grid-cols-1 gap-3 place-items-center flex-shrink-0">
                <img 
                  v-for="(img, idx) in item.images" 
                  :key="idx" 
                  :src="getImageUrl(img)" 
                  alt="UI/UX Showcase"
                  class="rounded-lg object-contain max-h-40 border border-gray-300 dark:border-white/20 shadow-sm"
                />
              </div>

              <!-- Content Description & Metas -->
              <div class="w-full sm:w-1/2 flex flex-col gap-3">
                <h3 v-if="item.title" class="font-Ovo font-bold text-lg text-gray-900 dark:text-white">
                  {{ item.title }}
                </h3>

                <p class="font-Ovo text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {{ item.description }}
                </p>

                <!-- Device Info (Hardware) -->
                <p v-if="item.device" class="font-Ovo text-sm text-gray-800 dark:text-gray-200 font-semibold">
                  Device: {{ item.device }}
                </p>

                <!-- Project Links (Software / Networking / Multimedia) -->
                <div v-if="item.links && item.links.length" class="flex flex-col gap-1.5 my-1">
                  <a 
                    v-for="(link, lIdx) in item.links" 
                    :key="lIdx" 
                    :href="link.url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>{{ link.text }}</span>
                    <IconExternalLink class="w-4 h-4" />
                  </a>
                </div>

                <!-- Tech Stack / Software Used -->
                <p v-if="item.techStack" class="font-Ovo text-xs text-gray-500 dark:text-gray-400">
                  <span class="font-bold text-gray-700 dark:text-gray-300">Tech stack:</span> {{ item.techStack }}
                </p>
                <p v-if="item.createdWith" class="font-Ovo text-xs text-gray-500 dark:text-gray-400">
                  <span class="font-bold text-gray-700 dark:text-gray-300">Created with:</span> {{ item.createdWith }}
                </p>
                <p v-if="item.software" class="font-Ovo text-xs text-gray-500 dark:text-gray-400">
                  <span class="font-bold text-gray-700 dark:text-gray-300">Software:</span> {{ item.software }}
                </p>
              </div>
            </div>
          </div>

          <!-- Bottom Section: Skills & Competencies List -->
          <div class="pt-8 border-t border-gray-200 dark:border-white/10">
            <h4 class="font-Ovo font-medium text-base text-gray-800 dark:text-gray-200 mb-4 text-center">
              {{ selectedCategory.skillsHeading }}
            </h4>
            <ul class="list-disc ml-6 sm:ml-12 space-y-2 font-Ovo text-sm text-gray-600 dark:text-gray-300">
              <li v-for="(skill, sIdx) in selectedCategory.skills" :key="sIdx">
                <template v-if="typeof skill === 'string'">
                  {{ skill }}
                </template>
                <template v-else>
                  <span class="font-semibold text-gray-900 dark:text-white">{{ skill.title }}</span> — {{ skill.text }}
                </template>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </transition>
  </section>
</template>
