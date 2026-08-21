# Technical Specification: Portfolio Landing Page (Vue 3 + Tailwind CSS + Tabler Icons)

Dokumen Spesifikasi Teknis (TechSpec) ini dibuat sebagai panduan utama / prompt terstruktur untuk mengimplementasikan kembali seluruh tampilan landing page portofolio dari projek Next.js saat ini ke dalam ekosistem **Vue 3**, **Tailwind CSS**, dan **Tabler Icons** (*tanpa bagian Experience*).

---

## 1. Ringkasan & Aturan Utama (Strict Constraints)

### Tech Stack Utama
> **PENTING:** HANYA boleh menggunakan tech stack di bawah ini. DILARANG keras menggunakan library di luar daftar ini!

- **Framework:** Vue 3 (Composition API dengan `<script setup>`)
- **Styling:** Tailwind CSS (utility-first CSS)
- **Icons:** Tabler Icons (`@tabler/icons-vue` atau SVG Tabler Icons resmi)
- **State & Reactivity:** Vue 3 Native Reactivity (`ref`, `reactive`, `computed`, `provide`/`inject` jika diperlukan)

### Fitur yang Dikecualikan
- **TANPA Section Experience** (Semua komponen, navigasi, dan data terkait Experience dihapus total).

---

## 2. Sistem Desain & Tema (Dark / Light Mode)

### Warna & Adaptabilitas Dark Mode
- **Light Mode Background:** Default/Light CSS background (`bg-white` / `#ffffff`)
- **Dark Mode Background:** Dark CSS background (`bg-[#11001f]` / `bg-gray-950`)
- **Teks Light Mode:** `text-gray-900`
- **Teks Dark Mode:** `text-white` / `text-gray-100`
- **Kartu & Hover States:**
  - Light mode hover: `hover:bg-lightHover` (`hover:bg-[#fcf4ff]` atau sejenisnya), border `border-gray-400`
  - Dark mode hover: `hover:bg-darkHover` (`hover:bg-[#2a004a]` atau sejenisnya), border `border-white/50`
- **Smooth Transition:** Semua elemen interaktif memiliki transisi halus `transition-all duration-500`.

### Mode Toggle Implementation
- Menggunakan state global/reactive `isDarkMode` (`ref(false)`).
- Menambahkan class `dark` pada tag `<html>` atau `<body>` saat `isDarkMode` aktif.
- Switch icon menggunakan Tabler Icons: `IconSun` untuk Dark Mode dan `IconMoon` untuk Light Mode.

---

## 3. Struktur Komponen (Component Hierarchy)

```text
src/
├── assets/
│   ├── images/            # Gambar avatar, ilustrasi, kartu portofolio, logo, & tools
├── components/
│   ├── TheNavbar.vue      # Sticky header navigation & mobile drawer
│   ├── TheHeader.vue      # Hero section (Greeting, Title, Bio, CTA)
│   ├── TheAbout.vue       # Introduction, About text, Info Cards & Tools grid
│   ├── ThePortfolio.vue   # Grid portofolio/skill categories dengan image hover overlay
│   └── TheFooter.vue      # Social media links, Email CTA, & Copyright notice
└── App.vue                # Main layout pemanggil seluruh komponen
```

---

## 4. Spesifikasi Detail per Komponent

### 4.1. `TheNavbar.vue`
- **Fungsi:** Bar navigasi utama melayang (*fixed top-0*) di bagian atas layar.
- **Elemen:**
  - **Logo:** Image brand (versi light/dark sesuai `isDarkMode`).
  - **Desktop Menu Links:**
    - `Home` (`#top`)
    - `About` (`#about`)
    - `Portfolio` (`#porto`)
    - `Contact Me` (`#contact`)
  - **Theme Toggle Button:** Menggunakan icon Tabler (`IconSun` / `IconMoon`).
  - **Contact Button CTA:** Tombol pill dengan teks "Contact" + icon panah kanan Tabler (`IconArrowRight`).
  - **Mobile Hamburger Button:** Menggunakan icon Tabler (`IconMenu2` / `IconX`) untuk membuka menu pada layar kecil (`md:hidden`).
  - **Mobile Drawer Menu:** Sidebar yang muncul dari kanan dengan animasi `transition-transform duration-500` ketika menu dibuka.
- **Efek Scroll:** Saat window di-scroll > 50px, tambahkan efek glassmorphism (`backdrop-blur-lg bg-white/30` / `dark:bg-black/30 shadow-sm`).

---

### 4.2. `TheHeader.vue` (Hero Section)
- **Fungsi:** Tampilan awal utama pengenalan profil.
- **Elemen:**
  - **Profile Avatar:** Foto profil berbentuk lingkaran (`rounded-full w-32`).
  - **Greeting Text:** `Hello I'm Ibrahim Aryan Faridzi` dilengkapi icon tangan menyapa dari Tabler Icons (`IconHandWaving`).
  - **Main Headline (H1):** `Computer Technology Enthusiast` dengan ukuran responsif (`text-3xl sm:text-6xl lg:text-[66px]`).
  - **Bio Paragraph:** Deskripsi singkat passion & keahlian IT.
  - **CTA Button:** Tombol "contact me" dengan background kontras dan icon Tabler (`IconArrowRight`).
- **Animasi:** Transisi masuk halus (*fade-in / slide-up*) menggunakan CSS transition native Vue / Tailwind transition.

---

### 4.3. `TheAbout.vue` (About & Expertise Cards)
- **Fungsi:** Menampilkan latar belakang dan 4 kategori bidang keahlian beserta daftar tools yang digunakan.
- **Elemen:**
  - **Sub-header:** `Introduction`
  - **Header Utama:** `About Me`
  - **Profil Left Column:** Image foto profil besar dengan sudut membulat (`rounded-3xl`).
  - **Profil Right Column:** Teks narasi About Me + Grid 4 Info Cards.
- **Grid Info Cards (2x2 pada sm+):**
  1. **Computer Hardware**
     - Icon Tabler: `IconCpu`
     - Deskripsi: *Hands-on experience with computer hardware components and assembly...*
     - Sub-section: "Tools I use:" (Obeng/Screwdriver, Flashdisk, Windows logo)
  2. **Software**
     - Icon Tabler: `IconCode`
     - Deskripsi: *Creating websites and mobile applications...*
     - Sub-section: "Tools I use:" (MySQL, MongoDB, Laravel, Next.js, Streamlit logo)
  3. **Networking**
     - Icon Tabler: `IconWifi`
     - Deskripsi: *Knowledge of networking concepts and protocols...*
     - Sub-section: "Tools I use:" (Cisco Packet Tracer, MikroTik, UniFi, Tenda, TP-Link, Hikvision logo)
  4. **Multimedia**
     - Icon Tabler: `IconPencil` / `IconPalette`
     - Deskripsi: *Creating various designs... posters, logos, UI/UX...*
     - Sub-section: "Tools I use:" (Figma, CorelDraw, Canva, CapCut, Alight Motion, vMix, OBS logo)

---

### 4.4. `ThePortfolio.vue` (Skill & Projects Portfolio)
- **Fungsi:** Pameran portofolio berdasarkan 4 kategori bidang IT.
- **Elemen:**
  - **Sub-header:** `Skills and`
  - **Header Utama:** `Portofolio`
  - **Portfolio Grid (2x2 pada sm+):**
    1. **Computer Hardware** (`/hardware`)
    2. **Software** (`/software`)
    3. **Networking** (`/networking`)
    4. **Multimedia** (`/multimedia`)
- **Efek Hover Card:**
  - Gambar latar tertutup overlay gelap tipis (`bg-black/30`).
  - Judul di kiri atas: Teks putih bold (`Computer Hardware`, dsb.).
  - Saat hover: Teks tombol "Click for more details" di bagian tengah bawah beranimasi naik dari `translate-y-4` ke `translate-y-0` dengan efek gradient hitam (`bg-gradient-to-t from-black/70 to-transparent`).

---

### 4.5. `TheFooter.vue` (Footer & Contact Links)
- **Fungsi:** Kontak sosial media & hak cipta.
- **Elemen:**
  - **Contact Section Header:** `Contact`
  - **Social Links (Flex row/column dengan Tabler Icons):**
    - **Email:** `mailto:ibrahimaryanfaridzi@gmail.com` + Tabler Icon `IconMail`
    - **GitHub:** `https://github.com/ibrahimaryan` + Tabler Icon `IconBrandGithub`
    - **LinkedIn:** `https://www.linkedin.com/in/ibrahim-aryan-faridzi` + Tabler Icon `IconBrandLinkedin`
    - **Instagram:** `https://www.instagram.com/ibrahimaryan_` + Tabler Icon `IconBrandInstagram`
  - **Copyright Notice:** `© 2026 Ibrahim Aryan. All rights reserved.` dengan garis batas atas (`border-t border-gray-400`).

---

## 5. Data Schema & Reactive State (Vue 3 Data Structures)

Berikut contoh struktur data reactive di Vue 3:

```javascript
// data/portfolioData.js
export const navLinks = [
  { name: 'Home', href: '#top' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#porto' },
  { name: 'Contact Me', href: '#contact' }
];

export const infoList = [
  { 
    id: 'hardware',
    tablerIcon: 'IconCpu', 
    title: 'Computer Hardware', 
    description: 'Hands-on experience with computer hardware components and assembly. Such as OS installation, storage migration or upgrade, fix RAM problem.',
    tools: ['screwdriver.png', 'flashdisk.png', 'windows.png']
  },
  { 
    id: 'software',
    tablerIcon: 'IconCode', 
    title: 'Software', 
    description: 'Creating websites and mobile applications using various frameworks and technologies, including HTML, CSS, JavaScript, PHP, Python, and Dart.',
    tools: ['mysql.png', 'mongodb.png', 'laravel.png', 'nextjs.png', 'streamlit.png']
  },
  { 
    id: 'networking',
    tablerIcon: 'IconWifi', 
    title: 'Networking', 
    description: 'Knowledge of networking concepts and protocols. Create, manage, and troubleshoot local area networks using routers and switches.',
    tools: ['ciscopackettracer.png', 'mikrotik.png', 'unifi.png', 'tenda.png', 'tplink.png', 'hikvision.png']
  },
  { 
    id: 'multimedia',
    tablerIcon: 'IconPalette', 
    title: 'Multimedia', 
    description: 'Creating various designs, including posters, banners, logos, flat designs, low-poly art, vector art, and UI/UX interfaces.',
    tools: ['figma.png', 'coreldraw.png', 'canva.png', 'capcut.png', 'alightmotion.png', 'vmix.png', 'obs.png']
  }
];

export const portfolioCards = [
  { title: 'Computer Hardware', link: '/hardware', image: 'hardware.png' },
  { title: 'Software', link: '/software', image: 'software.png' },
  { title: 'Networking', link: '/networking', image: 'networking.png' },
  { title: 'Multimedia', link: '/multimedia', image: 'multimedia.png' }
];

export const socialLinks = [
  { name: 'Email', href: 'mailto:ibrahimaryanfaridzi@gmail.com', tablerIcon: 'IconMail' },
  { name: 'GitHub', href: 'https://github.com/ibrahimaryan', tablerIcon: 'IconBrandGithub' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ibrahim-aryan-faridzi', tablerIcon: 'IconBrandLinkedin' },
  { name: 'Instagram', href: 'https://www.instagram.com/ibrahimaryan_', tablerIcon: 'IconBrandInstagram' }
];
```

---

## 6. Template Prompt AI Siap Pakai (Ready-to-Use Master Prompt)

Gunakan prompt di bawah ini untuk menginstruksikan AI generator pembuat kode Vue 3:

```text
Buatkan aplikasi Landing Page Portofolio lengkap menggunakan Vue 3 (Composition API <script setup>), Tailwind CSS, dan Tabler Icons (@tabler/icons-vue). 

ATURAN STRICT TECH STACK:
- HANYA gunakan Vue 3, Tailwind CSS, dan Tabler Icons.
- DILARANG menggunakan Next.js, React, Framer Motion, Heroicons, FontAwesome, atau UI library lain di luar Vue 3, Tailwind, & Tabler Icons.
- TANPA Section Experience (Menu navigasi, section, dan data terkait Experience harus dihilangkan total).

Daftar Komponen & Spesifikasi Tampilan:
1. Navbar (`TheNavbar.vue`):
   - Fixed header dengan logo & menu links (Home [#top], About [#about], Portfolio [#porto], Contact Me [#contact]).
   - Tombol toggle Dark/Light mode menggunakan Tabler Icons (`IconSun` / `IconMoon`).
   - Tombol CTA "Contact" dengan icon `IconArrowRight`.
   - Hamburger drawer menu untuk tampilan responsive mobile (`IconMenu2` & `IconX`).
   - Efek glassmorphism pada header saat halaman di-scroll > 50px.

2. Header/Hero (`TheHeader.vue`):
   - Avatar foto profil berbentuk lingkaran (`rounded-full w-32`).
   - Sapaan: "Hello I'm Ibrahim Aryan Faridzi" + icon `IconHandWaving`.
   - Headline H1: "Computer Technology Enthusiast".
   - Teks Bio: Adaptable IT enthusiast with hands-on experience in computer hardware, software, networking, and multimedia...
   - Tombol CTA "contact me" dengan icon `IconArrowRight`.

3. About (`TheAbout.vue`):
   - Sub-header "Introduction", Header "About Me".
   - Foto profil dengan `rounded-3xl`.
   - Grid 4 Info Cards bidang IT:
     a. Computer Hardware (`IconCpu`) + tools (Screwdriver, Flashdisk, Windows).
     b. Software (`IconCode`) + tools (MySQL, MongoDB, Laravel, Next.js, Streamlit).
     c. Networking (`IconWifi`) + tools (Cisco Packet Tracer, MikroTik, UniFi, Tenda, TP-Link, Hikvision).
     d. Multimedia (`IconPalette`) + tools (Figma, CorelDraw, Canva, CapCut, Alight Motion, vMix, OBS).

4. Portfolio (`ThePortfolio.vue`):
   - Sub-header "Skills and", Header "Portofolio".
   - Grid 4 kartu kategori (Computer Hardware, Software, Networking, Multimedia).
   - Efek overlay gelap & animasi hover teks "Click for more details".

5. Footer (`TheFooter.vue`):
   - Social Media links dengan Tabler Icons: Email (`IconMail`), GitHub (`IconBrandGithub`), LinkedIn (`IconBrandLinkedin`), Instagram (`IconBrandInstagram`).
   - Teks Copyright: "© 2026 Ibrahim Aryan. All rights reserved."

Terapkan tema Dark/Light mode yang konsisten, desain yang responsif, dan efek transisi yang halus.
```
