<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { 
  IconSun, 
  IconMoon, 
  IconArrowRight, 
  IconMenu2, 
  IconX 
} from '@tabler/icons-vue';
import { navLinks } from './data.js';

// Reactive states
const isDarkMode = ref(false);
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

// Lock background scroll when mobile menu is open
watch(isMobileMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

// Dark mode toggle function
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

// Toggle mobile drawer menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Close mobile drawer menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Handle window scroll event to add glassmorphism effect
const handleScroll = () => {
  if (window.scrollY > 50) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

onMounted(() => {
  // Check initial theme preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    isDarkMode.value = true;
    document.documentElement.classList.add('dark');
  } else {
    isDarkMode.value = false;
    document.documentElement.classList.remove('dark');
  }

  // Attach scroll listener
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.body.style.overflow = '';
});
</script>

<template>
  <!-- Background Header / Decorative Glow (Positioned at top behind header, fades naturally to transparent at bottom) -->
  <div 
    class="absolute top-0 left-0 right-0 w-full h-56 sm:h-72 -z-10 overflow-hidden dark:hidden pointer-events-none"
    style="mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 100%); -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 100%);"
  >
    <img 
      src="../assets/images/header-bg-color.png" 
      alt="Header Background" 
      class="w-full h-full object-cover object-top opacity-100" 
    />
  </div>

  <!-- Navbar Sticky / Fixed Top Container -->
  <nav 
    class="fixed top-0 left-0 w-full z-40 transition-all duration-500 py-4 px-5 lg:px-20 flex items-center justify-between"
    :class="[
      isScrolled 
        ? 'backdrop-blur-lg bg-white/50 dark:bg-black/40 shadow-sm border-b border-gray-200/20 dark:border-white/10' 
        : 'bg-transparent'
    ]"
  >
    <!-- Logo section -->
    <a href="#top" class="flex items-center gap-2 cursor-pointer">
      <img 
        v-if="!isDarkMode" 
        src="../assets/images/logo.png" 
        alt="Logo" 
        class="w-14 sm:w-18 object-contain" 
      />
      <img 
        v-else 
        src="../assets/images/logo_dark.png" 
        alt="Logo Dark" 
        class="w-14 sm:w-18 object-contain" 
      />
    </a>

    <!-- Desktop Menu Links -->
    <ul class="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 py-3 bg-white/50 dark:bg-black/20 shadow-sm border border-gray-200/50 dark:border-white/10 backdrop-blur-md">
      <li v-for="link in navLinks" :key="link.name">
        <a 
          :href="link.href" 
          class="font-Ovo text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors duration-300"
        >
          {{ link.name }}
        </a>
      </li>
    </ul>

    <!-- Actions (Theme Toggle & Mobile Hamburger) -->
    <div class="flex items-center gap-3 sm:gap-4">
      <!-- Dark/Light Theme Toggle Button -->
      <button 
        @click="toggleDarkMode" 
        aria-label="Toggle Theme"
        class="p-2.5 rounded-full border border-gray-300 dark:border-white/30 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 cursor-pointer"
      >
        <IconSun v-if="isDarkMode" class="w-5 h-5 text-yellow-400" />
        <IconMoon v-else class="w-5 h-5 text-gray-700" />
      </button>

      <!-- Mobile Hamburger Button -->
      <button 
        @click="toggleMobileMenu" 
        aria-label="Toggle Mobile Menu"
        class="block md:hidden p-2 text-gray-700 dark:text-white focus:outline-none"
      >
        <IconMenu2 v-if="!isMobileMenuOpen" class="w-7 h-7" />
      </button>
    </div>
  </nav>

  <!-- Mobile Drawer Menu Overlay & Sidebar (Placed outside nav to avoid sticky header clipping) -->
  <transition
    enter-active-class="transition opacity-0 duration-300"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-300"
    leave-to-class="opacity-0"
  >
    <div 
      v-if="isMobileMenuOpen" 
      @click="closeMobileMenu" 
      class="fixed inset-0 bg-black/60 backdrop-blur-md z-[60] md:hidden"
    ></div>
  </transition>

  <div 
    class="fixed top-0 bottom-0 right-0 h-full w-64 z-[70] bg-rose-50 dark:bg-[#11001f] flex flex-col gap-8 py-20 px-10 transition-transform duration-500 md:hidden border-l border-gray-200/50 dark:border-white/10 shadow-2xl"
    :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <!-- Close Button Mobile Menu -->
    <button 
      @click="closeMobileMenu" 
      aria-label="Close Mobile Menu"
      class="absolute top-6 right-6 p-2 text-gray-700 dark:text-white hover:opacity-75 transition-opacity"
    >
      <IconX class="w-6 h-6" />
    </button>

    <!-- Mobile Menu Links -->
    <ul class="flex flex-col gap-6">
      <li v-for="link in navLinks" :key="link.name">
        <a 
          :href="link.href" 
          @click="closeMobileMenu"
          class="font-Ovo text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-black dark:hover:text-white transition-colors"
        >
          {{ link.name }}
        </a>
      </li>
    </ul>
  </div>
</template>
