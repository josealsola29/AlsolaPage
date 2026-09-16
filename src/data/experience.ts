export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiences:
  ExperienceItem[] = [
  {
    role:
      "Desarrollador de aplicaciones móviles",

    organization:
      "Proyectos de software",

    period:
      "Actualidad",

    description:
      "Desarrollo y mantenimiento de aplicaciones orientadas a procesos de captura, consulta y sincronización de información.",

    highlights: [
      "Desarrollo Android con Kotlin.",
      "Interfaces modernas con Jetpack Compose.",
      "Integración con APIs REST.",
      "Persistencia y funcionamiento offline.",
      "Aplicación de principios de arquitectura limpia."
    ]
  },

  {
    role:
      "Soporte técnico y capacitación",

    organization:
      "Proyectos tecnológicos",

    period:
      "Experiencia profesional",

    description:
      "Apoyo técnico a usuarios, capacitación y resolución de incidencias relacionadas con herramientas y aplicaciones utilizadas en operaciones de campo.",

    highlights: [
      "Capacitación de usuarios.",
      "Resolución de incidencias.",
      "Documentación de procesos.",
      "Soporte a aplicaciones móviles."
    ]
  }
];