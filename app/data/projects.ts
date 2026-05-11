export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tipo?: string;
  estado?: string;
  stack?: string;
  role: string;
  technologies: { name: string; desc: string }[];
  liveUrl?: string;
  repoUrl?: string;
  liveLabel?: string;
  repoLabel?: string;
  objetivo: { intro?: string; items?: string[]; text?: string };
  proceso: { intro?: string; items?: string[]; text?: string; numbered?: boolean };
  resultados: { items: string[] };
  responsabilidades: { items: string[] };
  quote: string;
};

export const projects: Project[] = [
  {
    id: 'academia',
    title: 'Campus Academia Mariana Casella — Sistema de Desafíos',
    subtitle: 'Plataforma educativa fullstack orientada a la enseñanza de programación con usuarios reales.',
    description: 'Plataforma educativa fullstack orientada a la enseñanza de programación con usuarios reales.',
    image: '/img/academia.jpg',
    tipo: 'Aplicación Web Fullstack / E-learning',
    estado: 'En producción / Usuarios reales',
    stack: 'Vue.js · Laravel · PostgreSQL · Tailwind CSS',
    role: 'Fullstack Developer',
    technologies: [
      { name: 'VUE.JS', desc: 'INTERFACES DINÁMICAS Y REACTIVAS' },
      { name: 'LARAVEL', desc: 'BACKEND ROBUSTO Y APIS SEGURAS' },
      { name: 'POSTGRESQL', desc: 'GESTIÓN DE DATOS RELACIONALES COMPLEJA' },
      { name: 'TAILWIND CSS', desc: 'DISEÑO VISUAL CONSISTENTE Y RÁPIDO' },
      { name: 'GIT & GITHUB', desc: 'GESTIÓN DE TAREAS Y CONTROL DE VERSIONES' },
    ],
    liveUrl: 'https://campus.marianacasella.com/desafio-express',
    liveLabel: 'Ver Proyecto en Vivo',
    objetivo: {
      intro: 'Modernizar y escalar la experiencia de aprendizaje:',
      items: ['Desafíos interactivos', 'Panel de progreso', 'Gestión de datos PostgreSQL'],
    },
    proceso: {
      intro: 'Creación de funcionalidades críticas:',
      items: ['Componentes Vue.js', 'APIs REST Laravel', 'Optimización SQL'],
      numbered: true,
    },
    resultados: {
      items: [
        'Mejora significativa en el engagement de los estudiantes',
        'Reducción de incidencias técnicas en el seguimiento de progreso',
        'Arquitectura modular que permite el crecimiento continuo del producto',
      ],
    },
    responsabilidades: {
      items: [
        'Desarrollo de nuevas funcionalidades en el frontend con Vue.js',
        'Mantenimiento y evolución de la API en Laravel',
        'Gestión y optimización de base de datos en PostgreSQL',
        'Debugging y resolución de incidencias en entorno productivo',
      ],
    },
    quote: '"El proyecto destaca por su estabilidad en producción y la fluidez de la experiencia del estudiante, logrando un producto educativo de alta calidad técnica y funcional."',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Personal',
    subtitle: 'Sitio web personal diseñado para mostrar proyectos, habilidades y experiencia. Diseño adaptable.',
    description: 'Sitio web personal diseñado para mostrar proyectos, habilidades y experiencia. Diseño adaptable.',
    image: '/img/portfolio.jpg',
    role: 'Desarrolladora Web (Frontend)',
    technologies: [
      { name: 'HTML', desc: 'ESTRUCTURA SEMÁNTICA' },
      { name: 'CSS', desc: 'ESTILOS Y ANIMACIONES CUSTOM' },
      { name: 'JAVASCRIPT', desc: 'INTERACTIVIDAD Y DOM' },
      { name: 'BOOTSTRAP', desc: 'SISTEMA DE GRILLAS' },
    ],
    repoUrl: 'https://github.com/KaryQuinteros/Portfolio',
    repoLabel: 'Ver Repositorio en GitHub',
    objetivo: { text: 'Desarrollar una vitrina digital premium y responsiva que refleje habilidades técnicas y atención al detalle estético.' },
    proceso: { text: 'Implementación de un sistema de temas dinámico (Light/Dark), uso de variables CSS para consistencia y optimización de assets.' },
    resultados: { items: ['Interfaz fluida y persistente', 'Modales de alta fidelidad', 'Optimización del 100% en Lighthouse'] },
    responsabilidades: { items: ['Diseño Visual (UX/UI)', 'Lógica de Tematización', 'Maquetación Semántica'] },
    quote: '"Un portafolio es la carta de presentación de un desarrollador; debe ser funcional, estéticamente agradable y reflejar atención al detalle."',
  },
  {
    id: 'argbroker',
    title: 'ArgBroker — Simulador Bursátil',
    subtitle: 'Aplicación de consola en Python para gestionar portafolios y operaciones en el mercado bursátil.',
    description: 'Aplicación de consola en Python para gestionar portafolios y operaciones en el mercado bursátil.',
    image: '/img/ArgBroker.jpg',
    role: 'Desarrolladora (Equipo Innovacoders)',
    technologies: [
      { name: 'PYTHON', desc: 'LÓGICA DE NEGOCIO' },
      { name: 'MYSQL', desc: 'BASES DE DATOS' },
      { name: 'MVC & DAO', desc: 'PATRONES DE DISEÑO' },
    ],
    repoUrl: 'https://github.com/Innovacoders-devs/ArgBroker',
    repoLabel: 'Ver Repositorio en GitHub',
    objetivo: { text: 'Crear una aplicación robusta que permita a los inversores registrar cuentas y gestionar portafolios bajo principios SOLID.' },
    proceso: { text: 'Modelado de base de datos relacional (3FN), implementación de patrones MVC y DAO para una arquitectura desacoplada.' },
    resultados: { items: ['Sistema estructurado en MVC/DAO', 'Persistencia en base de datos MySQL', 'Normalización completa de datos'] },
    responsabilidades: { items: ['Modelado de Entidad-Relación', 'Desarrollo de lógica CRUD en Python', 'Gestión de transacciones SQL'] },
    quote: '"ArgBroker demuestra cómo estructurar aplicaciones con buenas prácticas de programación, logrando un código limpio, mantenible y escalable."',
  },
  {
    id: 'profesort',
    title: 'ProfeSort — Plan FinEs',
    subtitle: 'Sistema digital integral para el Plan FinEs, que optimiza la gestión administrativa y académica.',
    description: 'Sistema digital integral para el Plan FinEs, que optimiza la gestión administrativa y académica.',
    image: '/img/profesort.jpg',
    role: 'Desarrolladora Fullstack & Scrum Master (Equipo ProCoders)',
    technologies: [
      { name: 'DJANGO', desc: 'BACKEND API REST' },
      { name: 'ANGULAR', desc: 'FRONTEND SPA' },
      { name: 'POSTGRESQL', desc: 'BASE DE DATOS' },
      { name: 'SCRUM', desc: 'METODOLOGÍAS ÁGILES' },
    ],
    repoUrl: 'https://github.com/ProCoders-ISPC/ProfeSort',
    repoLabel: 'Ver Repositorio en GitHub',
    objetivo: { text: 'Optimizar procesos del Plan FinEs mediante una plataforma web integral para gestión de alumnos y docentes.' },
    proceso: { text: 'Diseño de arquitectura MVC, maquetación responsiva con Angular y desarrollo de lógica backend en Django.' },
    resultados: { items: ['Autenticación segura basada en roles', 'Paneles dinámicos para materias', 'API RESTful conectada con UI'] },
    responsabilidades: { items: ['Desarrollo de API con Django', 'Integración en Angular para UI', 'Flujos de registro de usuarios'] },
    quote: '"ProfeSort transforma la gestión académica tradicional en una experiencia digital fluida, facilitando la toma de decisiones con datos confiables."',
  },
];
