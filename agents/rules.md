# Rules & Architectural Guidelines: Portfolio Vue 3

Dokumen aturan ini wajib dipatuhi oleh seluruh AI Agent saat membaca, menambah, maupun memodifikasi kode dalam repositori ini.

---

## 1. Strict Tech Stack & Constraints

- **Framework:** Vue 3 (Composition API dengan `<script setup>`).
- **Styling:** Tailwind CSS (versi 4+ dengan `@import "tailwindcss";` dan `@theme` custom variables).
- **Icons:** Tabler Icons (`@tabler/icons-vue` saja). DILARANG menggunakan FontAwesome, Heroicons, Lucide, atau icon library lainnya.
- **Pengecualian Fitur (EXCLUDED FEATURES):**
  - **DILARANG keras menambahkan section `Experience`** atau menu/komponen/data apapun terkait Experience.
  - HANYA sertakan 4 bidang keahlian utama: **Computer Hardware**, **Software**, **Networking**, dan **Multimedia**.
  - JANGAN menambahkan fitur yang tidak secara eksplisit diminta oleh pengguna.

---

## 2. Struktur Folder Standard (Directory Layout)

Seluruh pengembangan wajib mengikuti struktur folder berikut:

```text
src/
├── assets/
│   ├── images/            # File aset gambar avatar, ilustrasi, kartu portofolio, logo, & tools
├── components/
│   ├── data.js            # PUSAT SELURUH DATA STATIS (Nav, Info, Portfolio, Social)
│   ├── TheNavbar.vue      # Sticky header navigation & mobile drawer
│   ├── TheHeader.vue      # Hero section (Greeting, Title, Bio, CTA)
│   ├── TheAbout.vue       # About text, Info Cards & Tools grid (Tanpa Foto Profil)
│   ├── ThePortfolio.vue   # Grid portofolio dengan overlay (Visible default di mobile, hover di desktop)
│   └── TheFooter.vue      # Social media links, Email CTA, & Copyright notice
├── style.css              # Setup Tailwind CSS v4 & Custom Font utility classes
└── App.vue                # Main layout pemanggil seluruh komponen
```

---

## 3. Data Centralization Rule (`src/components/data.js`)

> **ATURAN MUTLAK:** DILARANG mendefinisikan data array/objek statis (seperti daftar menu, keahlian, portofolio, atau sosial media) langsung di dalam tag `<script setup>` komponen `.vue`.

Setiap penambahan atau perubahan data WAJIB dilakukan pada file terpusat **`src/components/data.js`**:

1. **Navigasi Navbar (`navLinks`):**
   - Struktur: `{ name: string, href: string }`
2. **Keahlian & Tools (`infoList`):**
   - Struktur: `{ id: string, icon: Component, title: string, description: string, tools: Array<string> }`
3. **Kartu Portofolio (`portfolioCards`):**
   - Struktur: `{ title: string, link: string, image: string }`
4. **Sosial Media (`socialLinks`):**
   - Struktur: `{ name: string, label: string, href: string, icon: Component }`

---

## 4. Sistem Desain & Mode Gelap (Dark Mode)

- **Root Dark Class:** Dark mode dikontrol menggunakan class `dark` pada tag `<html>`.
- **Background:** Light mode (`bg-white` / `#ffffff`), Dark mode (`bg-[#11001f]`).
- **Teks:** Light mode (`text-gray-900`), Dark mode (`text-white`).
- **Typography:**
  - Font Sans Utama: `'Outfit', sans-serif` (`font-Outfit` / default `body`).
  - Font Serif Display: `'Ovo', serif` (`font-Ovo`).
- **Transisi Interaktif:** Selalu gunakan `transition-all duration-500` atau `duration-300` untuk animasi interaksi dan perpindahan tema mode gelap.

---

## 5. Peraturan Komponen (Component Rules)

1. **`TheNavbar.vue`**:
   - Menampilkan logo (versi light & dark), menu navigasi dari `data.js`, tombol toggle dark mode (`IconSun`/`IconMoon`), dan mobile drawer menu.
   - Ukuran logo dijaga tetap proporsional (`w-14 sm:w-18`).
2. **`TheAbout.vue`**:
   - TANPA foto profil di sisi kiri. Tampilan difokuskan pada teks narasi pengenalan dan 4 Info Cards grid di bawahnya secara simetris.
3. **`ThePortfolio.vue`**:
   - CTA overlay *"Click for more details"* wajib tampil **secara default tanpa hover pada tampilan mobile** (`opacity-100 translate-y-0`), dan hanya menggunakan animasi hover pada tampilan desktop (`sm:opacity-0 sm:group-hover:opacity-100`).
4. **`TheFooter.vue`**:
   - Menampilkan email CTA button, grid sosial media dari `data.js`, dan copyright notice `© 2026 Ibrahim Aryan. All rights reserved.`.
