import {
  IconCpu,
  IconCode,
  IconWifi,
  IconPalette,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram
} from '@tabler/icons-vue';

// Navbar Navigation Links
export const navLinks = [
  { name: 'Home', href: '#Top' },
  { name: 'About', href: '#About' },
  { name: 'Portfolio', href: '#Portofolio' },
  { name: 'Contact Me', href: '#Contact' },
];

// About Section 4 Expertise Info Cards Data
export const infoList = [
  {
    id: 'Hardware',
    icon: IconCpu,
    title: 'Computer Hardware',
    description: 'Hands-on experience with computer hardware components and assembly. Such as OS installation, storage migration or upgrade, fix RAM problem.',
    tools: ['screwdriver.png', 'flashdisk.png', 'windows.png']
  },
  {
    id: 'Software',
    icon: IconCode,
    title: 'Software',
    description: 'Creating websites and mobile applications using various frameworks and technologies, including HTML, CSS, JavaScript, PHP, Python, and Dart.',
    tools: ['mysql.png', 'mongodb.png', 'laravel.png', 'nextjs.png', 'streamlit.png']
  },
  {
    id: 'Networking',
    icon: IconWifi,
    title: 'Networking',
    description: 'Knowledge of networking concepts and protocols. Create, manage, and troubleshoot local area networks using routers and switches.',
    tools: ['ciscopackettracer.png', 'mikrotik.png', 'unifi.png', 'tenda.png', 'tplink.png', 'hikvision.png']
  },
  {
    id: 'Multimedia',
    icon: IconPalette,
    title: 'Multimedia',
    description: 'Creating various designs, including posters, banners, logos, flat designs, low-poly art, vector art, and UI/UX interfaces.',
    tools: ['figma.png', 'coreldraw.png', 'canva.png', 'capcut.png', 'alightmotion.png', 'vmix.png', 'obs.png']
  }
];

// Portfolio Main Cards Data
export const portfolioCards = [
  { id: 'Hardware', title: 'Computer Hardware', image: 'hardware.png' },
  { id: 'Software', title: 'Software', image: 'software.png' },
  { id: 'Networking', title: 'Networking', image: 'networking.png' },
  { id: 'Multimedia', title: 'Multimedia', image: 'multimedia.png' }
];

// Detailed Portfolio Content for Categories (Hardware, Software, Networking, Multimedia)
export const portfolioDetails = {
  Hardware: {
    categoryTitle: 'Computer Hardware',
    subtitle: 'Here are some cases that I can solve related to computer hardware',
    skillsHeading: 'In the field of Computer Hardware, I am capable of:',
    skills: [
      'Performing personal computer maintenance',
      'Diagnosing and repairing hardware issues',
      'Repasting CPU and GPU for optimal performance',
      'Upgrading storage and memory (RAM)',
      'Installing and configuring operating systems',
      'Documenting and reporting technical issues and their resolutions'
    ],
    items: [
      {
        id: 'Repaste',
        image: 'repaste.jpeg',
        description: 'Carry out hardware maintenance by replacing thermal paste on the CPU and GPU to reduce operational temperatures and increase laptop performance stability. The process is carried out by dismantling the cooling system, cleaning the remaining old thermal paste using isopropyl alcohol, then applying new thermal paste.',
        device: 'Acer Aspire 5 A514-54G'
      },
      {
        id: 'Upgrade_SSD',
        image: 'upgrade_ssd.jpeg',
        description: 'Handling the problem of laptops not being able to boot due to damage to the built-in SSD. The process is carried out by removing the old SSD, replacing it with a new SSD, then reinstalling the Windows 11 operating system along with important drivers and applications. After replacement, the laptop returned to normal function.',
        device: 'HP 14S'
      },
      {
        id: 'Cleaning',
        image: 'cleaning.jpeg',
        description: "Carry out a thorough cleaning of the laptop's internal parts to remove dust that has accumulated on the cooling fan and heatsink so that air circulation is smoother. After the cleaning process, the hardware condition is checked, including storage health, RAM checking, and battery health measurements.",
        device: 'Predator Helio Neo 16'
      }
    ]
  },

  Software: {
    categoryTitle: 'Software',
    subtitle: 'Here are my projects about software development',
    skillsHeading: 'In the field of software development, I possess the following skills and abilities:',
    skills: [
      { title: 'Quick adaptability', text: 'able to learn new programming languages and frameworks efficiently.' },
      { title: 'Problem-solving & debugging', text: 'experienced in identifying, analyzing, and resolving issues within projects.' },
      { title: 'Hands-on experience', text: 'with modern frameworks such as Next.js, Laravel, and Streamlit.' }
    ],
    items: [
      {
        id: 'Siami_Front_End',
        image: 'siamife.png',
        title: 'SiAMI Polines (Web App: Sistem Asesmen Mutu Internal / Frontend)',
        description: 'This project is an internal quality assessment application for study program accreditation at Politeknik Negeri Semarang. It was collaboratively developed using Laravel as the backend framework and Tailwind CSS for the user interface, aimed at supporting the internal evaluation process of study programs in preparation for accreditation.',
        links: [
          { text: 'Click here to see the project', url: 'https://github.com/PBL-TI2B/siami-polines.git' }
        ],
        techStack: 'Laravel, Tailwind CSS, MySQL'
      },
      {
        id: 'Siami_Back_End',
        image: 'siamibe.png',
        title: 'SiAMI Polines (Web App: Sistem Asesmen Mutu Internal / Backend)',
        description: 'This project also includes a backend developed using Laravel with a REST API structure. The backend serves as the data service provider, managing business logic, and acting as the bridge between the database and the frontend application to support the internal quality assessment process of study programs.',
        links: [
          { text: 'Click here to see the project', url: 'https://github.com/PBL-TI2B/siami-polines-api.git' }
        ],
        techStack: 'Laravel'
      },
      {
        id: 'Karhutla',
        image: 'karhutla.png',
        title: 'Karhutla Dashboard (Forest Fire Alarm IoT)',
        description: 'The Karhutla Dashboard is an IoT-based system designed to provide early warnings when indications of forest fires are detected. Sensor data is collected and stored in MongoDB Atlas, then visualized through an interactive dashboard built with Streamlit. The dashboard is also equipped with an AI-powered chatbot using the Gemini API, serving as an intelligent assistant to help users understand the data and fire alert status more effectively.',
        links: [
          { text: 'Click here to see the project', url: 'https://github.com/ibrahimaryan/Stage_4_Assignment_2_Tim_Tujuh.git' },
          { text: 'Link Demo', url: 'https://timtujuhassignment3-em4oqdkqcdtkfpf8skflxr.streamlit.app' }
        ],
        techStack: 'Streamlit, MongoDB Atlas, Gemini API'
      }
    ]
  },

  Networking: {
    categoryTitle: 'Networking',
    subtitle: 'Here are my Portofolio in the field networking',
    skillsHeading: 'In the field of networking, I possess the following skills and competencies:',
    skills: [
      { title: 'Basic network device configuration', text: 'experienced in configuring routers, switches, access points, IP cam, and DVR.' },
      { title: 'Troubleshooting and problem-solving', text: 'capable of diagnosing and resolving network-related issues at both device and configuration levels.' },
      { title: 'Applied networking for other domains', text: 'able to utilize networking knowledge to support and integrate with other fields such as IoT systems, including device connectivity, data communication, and monitoring.' }
    ],
    items: [
      {
        id: 'TA_Monitoring',
        image: 'TA_monitoring.jpeg',
        title: 'Internet Network and IP Camera Management (Sub title: Monitoring Mikrotik Routers and UniFi Access Points using Telegram Bot)',
        description: 'This project was my final practical assignment at SMK Negeri 7 Semarang. I was involved in on-site network surveys, network topology design, and bandwidth optimization by upgrading LAN infrastructure to fiber optic cables and repairing damaged FO splices. I also optimized access point channels to reduce interference, maintained and troubleshot IP cameras, and ensured reliable network performance across the school. The core focus of this project was developing a Telegram bot-based monitoring system that automatically notifies administrators when UniFi access points go offline, enabling faster response to network issues.',
        links: [
          { text: 'View project documentation', url: 'https://drive.google.com/file/d/1FA8yyZFiRidHGXQXF5mHqjVuRze8f8yM/view?usp=sharing' }
        ]
      },
      {
        id: 'Soal_Networking',
        image: 'soal_networking.png',
        title: 'Questions for UKM PCC Network Staff Selection',
        description: 'Designed a case study–based question set in the form of a network topology scenario that participants were required to analyze and complete. The main topics covered include basic network device configuration, DNS server configuration, DHCP server configuration, and static routing implementation.',
        links: [
          { text: 'Click here to see the file', url: 'https://drive.google.com/file/d/1gAIWwN6UV4gnqY36cCUNGjLIfvrAz29S/view' }
        ],
        createdWith: 'Cisco Packet Tracer'
      },
      {
        id: 'Smart_Waste_Dashboard',
        image: 'smartwastedashboard.jpeg',
        title: 'Smart Waste Classifier (Waste Management System Using IoT and AI)',
        description: 'Smart Waste Classifier is an intelligent trash bin system capable of automatically classifying waste into organic, inorganic, and hazardous (B3) categories. The system utilizes IoT and AI-based object detection to identify waste through image capture, automatically direct it to the appropriate bin, and provide real-time monitoring through a web-based dashboard.',
        links: [
          { text: 'Click here to see the project', url: 'https://github.com/ibrahimaryan/Smart_Waste_Classifier_ESP32.git' }
        ],
        techStack: 'NextJs, MySQL, YOLOv8, Flask'
      }
    ]
  },

  Multimedia: {
    categoryTitle: 'Multimedia',
    subtitle: 'Here are my Portofolio in the field multimedia',
    skillsHeading: 'In the field of multimedia, I possess the following skills and competencies:',
    skills: [
      { title: 'Graphic design and visual creativity', text: 'experienced in designing posters, banners, logos, and various illustration styles, including custom art styles for digital and promotional needs.' },
      { title: 'UI/UX design for web', text: 'capable of creating user interface and user experience designs for websites, focusing on layout structure, usability, and visual consistency.' },
      { title: 'Audio-visual production & event media', text: 'experienced as a crew member in event organizer teams, handling camera operation, audio setup, live streaming, and multimedia production support.' }
    ],
    items: [
      {
        id: 'Rengoku',
        image: 'rengoku_blade.png',
        title: 'Image Tracing and Digital Illustration (Flat Design, Vector, Low-Poly 3D, Scribble)',
        description: 'Created multiple digital artworks by tracing original images into various styles, including flat design, vector illustration, low-poly 3D, and scribble art.',
        links: [
          { text: 'View art album', url: 'https://flic.kr/s/aHBqjCEY2M' }
        ],
        software: 'CorelDRAWX7, Adobe Photoshop'
      },
      {
        id: 'Dashboards',
        images: ['dashboard_polivent.png', 'dashboard_siami.png', 'dashboard_bop.png'],
        title: 'UI/UX Design for Web-Based Projects',
        description: 'Designed UI/UX interfaces for several web-based case studies, including an event management system (Polivent), a Sistem Asesmen Mutu Internal (SiAMI) POLINES, and a government operational fund management system (Sistem BOP). The designs focus on usability, clarity of information, and user-centered workflows.',
        software: 'Figma'
      },
      {
        id: 'EO_Media',
        image: 'eomedia.jpeg',
        title: 'Event Media & Live Streaming Crew',
        description: 'Experienced as part of an event organizer media team, responsible for setting up and operating cameras, microphones, drones, mixers, and encoders. Acted as a camera operator, mixer operator, and encoder operator for videotron displays and live streaming productions using platforms such as Zoom and YouTube.',
        software: 'OBS, vMix'
      }
    ]
  }
};

// Footer Social Media Links Data
export const socialLinks = [
  {
    name: 'Email',
    label: 'ibrahimaryanfaridzi@gmail.com',
    href: 'mailto:ibrahimaryanfaridzi@gmail.com',
    icon: IconMail
  },
  {
    name: 'GitHub',
    label: 'ibrahimaryan',
    href: 'https://github.com/ibrahimaryan',
    icon: IconBrandGithub
  },
  {
    name: 'LinkedIn',
    label: 'ibrahim-aryan-faridzi',
    href: 'https://www.linkedin.com/in/ibrahim-aryan-faridzi',
    icon: IconBrandLinkedin
  },
  {
    name: 'Instagram',
    label: '@ibrahimaryan_',
    href: 'https://www.instagram.com/ibrahimaryan_',
    icon: IconBrandInstagram
  }
];
