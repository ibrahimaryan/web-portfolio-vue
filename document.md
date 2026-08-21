# Dokumentasi Project - Web Portfolio Vue

## 📋 Rangkuman Utama
Project ini adalah **Web Portfolio Interaktif** untuk **Ibrahim Aryan Faridzi** (Computer Technology Enthusiast). Aplikasi ini dibangun sebagai *Single Page Application* (SPA) dengan performa tinggi, tampilan modern, responsif untuk semua perangkat, serta mendukung *Dark Mode* interaktif.

### Fitur Utama:
- 🌙 **Dark/Light Mode Toggle**: Pergantian tema gelap & terang yang tersimpan secara lokal (*LocalStorage*).
- 📱 **Responsive Navigation & Mobile Drawer**: Bilah navigasi melayang (*sticky navbar*) dengan efek *glassmorphism* serta menu *drawer* mobile yang mulus.
- 🎨 **Header Glow Gradient**: Dekorasional *gradient glow* di bagian atas yang memudar (*fade out*) secara alami ke bawah.
- 💻 **Expertise & Tool Cards (About Section)**: Menampilkan bidang keahlian (Hardware, Software, Networking, Multimedia) beserta ikon alat yang digunakan.
- 🖼️ **Portfolio Gallery & Modal Detail**: Galeri karya/proyek interaktif dengan popup modal detail saat diklik.
- 📜 **Smooth Scrolling**: Navigasi antar-section secara halus menggunakan *anchor links*.

---

## 🛠️ Tech Stack & Library

| Kategori | Teknologi / Library | Versi | Deskripsi |
| :--- | :--- | :--- | :--- |
| **Framework** | [Vue 3](https://vuejs.org/) | `^3.5.40` | Framework JavaScript progresif dengan Composition API (`<script setup>`) |
| **Build Tool** | [Vite](https://vitejs.dev/) | `^8.2.0` | Build tool super cepat untuk pengembangan web frontend |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `^4.3.3` | Utility-first CSS framework v4 dengan konfigurasi `@theme` & PostCSS |
| **Icon Set** | [Tabler Icons Vue](https://tabler.io/icons) | `^3.46.0` | Library ikon SVG yang fleksibel & modern |
| **Fonts** | [Google Fonts](https://fonts.google.com/) | - | Font **Outfit** (Sans-serif) & **Ovo** (Serif) |

---

## 📁 Struktur Folder

```text
web-portfolio-vue/
├── public/                     # File statis publik
│   ├── favicon.png             # Favicon tab browser
│   └── icons.svg               # Asset SVG tambahan
├── src/                        # Source code utama aplikasi
│   ├── assets/                 # Asset lokal (gambar & ikon)
│   │   └── images/             # Gambar proyek, logo, avatar, & ikon alat
│   │       ├── assets.js       # Centralized import & export untuk semua gambar
│   │       └── ... (file .png / .jpg)
│   ├── components/             # Komponen Vue modular
│   │   ├── data.js             # Centralized Data Store (navigasi, keahlian, proyek)
│   │   ├── TheNavbar.vue       # Sticky Navbar & Mobile Drawer
│   │   ├── TheHeader.vue       # Section Utama / Hero Banner
│   │   ├── TheAbout.vue        # Section About & Kartu Keahlian
│   │   ├── ThePortfolio.vue    # Section Portofolio & Modal Detail Proyek
│   │   └── TheFooter.vue       # Section Footer & Link Sosial Media
│   ├── App.vue                 # Komponen Root / Pembungkus Utama
│   ├── main.js                 # Entry Point Vue App
│   └── style.css               # Styling Global & Tailwind CSS Theme Tokens
├── index.html                  # Template HTML utama
├── package.json                # Dependensi & NPM Scripts
├── vite.config.js              # Konfigurasi Vite
└── document.md                 # Dokumentasi Resmi Project
```

---

## 🎨 Base Desain & Color Palette

### 1. Warna (Color Tokens)
Konfigurasi tema Tailwind CSS terletak di [`src/style.css`](file:///c:/Data%20D/coolyeah/Magang/Karya%20Energi/web-portfolio-vue/src/style.css):

- **Light Mode**:
  - **Background Utama**: `#ffffff` (Putih Bersih)
  - **Teks Utama**: `#111827` (`gray-900`)
  - **Light Hover**: `#fcf4ff` (Pinkish Light Glow)
  - **Mobile Drawer BG**: `bg-rose-50`
- **Dark Mode**:
  - **Background Utama**: `#11001f` (Deep Purple Black)
  - **Teks Utama**: `#ffffff` (Putih)
  - **Dark Hover**: `#2a004a`
  - **Mobile Drawer / Modal BG**: `#11001f` / `#160026`

### 2. Tipografi (Typography)
- **Primary Body Font**: `Outfit` (Sans-serif) - Digunakan untuk teks umum, tombol, dan paragraf.
- **Display / Heading Font**: `Ovo` (Serif) - Digunakan untuk judul utama (`<h1>`, `<h3>`) dan menu navigasi.

---

## 📝 Panduan Mengedit & Menambah Fitur

Jika Anda atau pengembang lain ingin melakukan perubahan atau menambah fitur baru, berikut adalah aturan dan panduan yang wajib diikuti:

### 1. Mengedit / Menambah Data Konten (Tanpa Mengubah UI)
Seluruh data teks, daftar menu, keahlian, dan isi portofolio dipusatkan di **[`src/components/data.js`](file:///c:/Data%20D/coolyeah/Magang/Karya%20Energi/web-portfolio-vue/src/components/data.js)**.
- **Menambah Menu Navigasi**: Tambahkan objek `{ name: 'Title', href: '#section-id' }` pada array `navLinks`.
- **Menambah Kartu Keahlian**: Tambahkan item pada array `infoList`.
- **Menambah / Mengubah Karya Portofolio**: Update array `portfolioCards` dan detail kategori terkait di `data.js`.

### 2. Mengolah Asset Gambar
- Tambahkan gambar baru ke dalam folder `src/assets/images/`.
- Daftarkan import gambar tersebut di file **[`src/assets/images/assets.js`](file:///c:/Data%20D/coolyeah/Magang/Karya%20Energi/web-portfolio-vue/src/assets/images/assets.js)** lalu masukkan ke dalam ekspor objek `assets`.

### 3. Mengganti atau Menambah Ikon Tabler
- Proyek menggunakan `@tabler/icons-vue`.
- Untuk menggunakan ikon baru, import dari `@tabler/icons-vue` pada komponen Vue yang sesuai:
  ```javascript
  import { IconName } from '@tabler/icons-vue';
  ```

### 4. Aturan Layering & Z-Index
Untuk menjaga tampilan UI tetap mulus dan mencegah konflik *layering*:
- **Background Decorative Glow**: Posisikan di `absolute top-0` dengan `-z-10`.
- **Sticky Navbar**: Menggunakan `z-40`.
- **Mobile Menu Overlay & Drawer**: Menggunakan `z-[60]` (Backdrop) dan `z-[70]` (Sidebar) di luar kontainer `<nav>` agar tidak terpotong oleh garis batas sticky navbar saat di-scroll.
- **Modal Popups**: Gunakan `z-[100]` untuk memastikan modal selalu berada di posisi paling depan.

### 5. Aturan Konvensi Kode
- Gunakan **Vue 3 Composition API** dengan `<script setup>`.
- Pertahankan struktur komponen tunggal (*Single File Components* / SFC).
- Pastikan setiap elemen UI baru selalu memiliki *styling* pendukung **Dark Mode** (menggunakan prefix class `dark:` dari Tailwind CSS).

---

*Dokumentasi ini dibuat untuk memudahkan pemeliharaan dan pengembangan proyek Web Portfolio Ibrahim Aryan Faridzi.*
