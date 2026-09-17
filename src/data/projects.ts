export interface Project {
  title: string;
  description: string;
  technologies: string[];
  repository?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title:
      "AlsolaPage",

    description:
      "Portafolio personal desarrollado con Astro para presentar experiencia profesional, tecnologías, formación y proyectos de software.",

    technologies: [
      "Astro",
      "TypeScript",
      "CSS",
      "GitHub Actions"
    ],

    repository:
      "https://github.com/josealsola29/AlsolaPage",

    demo:
      "https://josealsola29.github.io/AlsolaPage/",

    featured: true
  },

  {
    title:
      "Aplicación Android Offline-First",

    description:
      "Aplicación móvil diseñada para captura y gestión de información, con funcionamiento offline, persistencia local y sincronización con servicios remotos.",

    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Room",
      "Retrofit"
    ]
  },

  {
    title:
      "Sistema de captura de datos",

    description:
      "Solución orientada a procesos de recolección de información, validación, consulta y sincronización de datos desde dispositivos móviles.",

    technologies: [
      "Android",
      "Kotlin",
      "REST APIs",
      "SQLite"
    ]
  }
];