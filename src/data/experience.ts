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
      "Desarrollo Android y soporte tecnológico",

    organization:
      "Proyectos de software",

    period:
      "Actualidad",

    description:
      "Desarrollo y soporte de soluciones móviles utilizadas en procesos de captura, consulta y sincronización de información para operaciones de campo.",

    highlights: [
      "Desarrollo de aplicaciones Android con Kotlin y Jetpack Compose.",
      "Implementación de funcionamiento offline y persistencia local.",
      "Integración con APIs REST y procesos de sincronización.",
      "Soporte técnico a usuarios y dispositivos utilizados en operaciones de campo.",
      "Resolución de incidencias y apoyo en procesos de actualización de aplicaciones.",
      "Aplicación de principios de arquitectura limpia y separación de responsabilidades."
    ]
  }
];