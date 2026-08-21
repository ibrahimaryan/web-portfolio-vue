<div align="center">

  # Ibrahim Aryan Faridzi - Personal Portfolio

  <p align="center">
    <b>A modern, responsive, and high-performance personal web portfolio built with Vue 3, Vite, and Tailwind CSS.</b>
  </p>

  [![Vue 3](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)](https://vuejs.org/)
  [![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
  [![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

  <br />

  [Live Demo](https://ibrahimaryan.github.io/web-portfolio-vue/) • [Dokumentasi Project](document.md) • [Contact Me](#-contact--socials)

</div>

---

## Overview

**Web Portfolio Interaktif** yang dirancang untuk menampilkan keahlian, pengalaman, dan karya-karya profesional di bidang **Computer Technology** (Hardware, Software, Networking, dan Multimedia). Web ini dibekali dengan antarmuka modern, *Dark Mode toggle*, serta animasi yang halus dan responsif di seluruh ukuran layar.

---

## Key Features

- **Dark & Light Mode**: Pergantian tema gelap/terang secara otomatis dan manual dengan memori `localStorage`.
- **Fully Responsive Layout**: Tampilan yang dioptimalkan untuk perangkat mobile, tablet, hingga desktop.
- **Modern Glassmorphism UI**: Header navigasi melayang (*sticky navbar*) dengan efek blur dan gradien halus.
- **Expertise & Tools Showcase**: Kartu interaktif yang menampilkan 4 bidang keahlian beserta ikon perangkat & *software* yang digunakan.
- **Interactive Portfolio Gallery**: Galeri portofolio dengan popup modal interaktif untuk melihat detail proyek.
- **Super Fast & Lightweight**: Dibangun dengan Vite dan Vue 3 Composition API untuk performa maksimal.

---

## Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Vue.js 3** | Progressive JavaScript Framework (Composition API `<script setup>`) |
| **Vite** | Next Generation Frontend Tooling |
| **Tailwind CSS v4** | Utility-first CSS Framework with custom `@theme` tokens |
| **Tabler Icons** | Modern & Crisp SVG Icon Package (`@tabler/icons-vue`) |
| **Google Fonts** | `Outfit` (Sans-serif) & `Ovo` (Serif) |

---

## Getting Started

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di lingkungan lokal Anda:

### Prerequisites

Pastikan Anda telah menginstal Node.js (versi 18.x atau yang lebih baru) di perangkat Anda.

- [Node.js Download](https://nodejs.org/)

### Installation

1. **Clone repositori ini**:
   ```bash
   git clone https://github.com/ibrahimaryan/web-portfolio-vue.git
   cd web-portfolio-vue
   ```

2. **Install dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan Development Server**:
   ```bash
   npm run dev
   ```
   Buka browser dan akses alamat `http://localhost:5173`.

---

##  Build & Deployment

### Production Build

Untuk membuat *production build* yang dioptimalkan:
```bash
npm run build
```
Hasil build akan berada di dalam folder `dist/`.

### Preview Build

Untuk menguji build hasil produksi secara lokal:
```bash
npm run preview
```

### GitHub Pages Deployment

Proyek ini telah dikonfigurasi dengan `base: '/web-portfolio-vue/'` di `vite.config.js` sehingga siap didedikasikan ke GitHub Pages.

---

## Project Structure

```text
web-portfolio-vue/
├── public/                     # Public static assets (favicon.png)
├── src/
│   ├── assets/                 # Images & asset registry (assets.js)
│   ├── components/             # Reusable Vue components
│   │   ├── data.js             # Centralized Data Store (Navbar, About, Portfolio)
│   │   ├── TheNavbar.vue       # Header Navbar & Mobile Menu Drawer
│   │   ├── TheHeader.vue       # Hero Section
│   │   ├── TheAbout.vue        # About & Expertise Cards
│   │   ├── ThePortfolio.vue    # Portfolio Gallery & Detail Modal
│   │   └── TheFooter.vue       # Footer Section
│   ├── App.vue                 # Root Component
│   ├── main.js                 # App Entry Point
│   └── style.css               # Global CSS & Tailwind Design Tokens
├── index.html                  # HTML Document Template
├── vite.config.js              # Vite Configuration
├── document.md                 # Technical Documentation
└── README.md                   # Project Overview & Guide
```

---

## Contact & Socials

- **Portfolio**: [Ibrahim Aryan Faridzi](https://ibrahimaryan.github.io/web-portfolio-vue/)
- **GitHub**: [@ibrahimaryan](https://github.com/ibrahimaryan)

---

<div align="center">
  <sub>Built by Ibrahim Aryan Faridzi</sub>
</div>
