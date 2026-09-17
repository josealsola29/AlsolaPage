export interface EducationItem {
  title: string;
  institution: string;
  period?: string;
  description?: string;
}

export const education: EducationItem[] = [
  {
    title: "Maestría en Ingeniería de Software",

    institution: "Universidad Tecnológica de Panamá",

    description:
      "Formación de posgrado orientada a ingeniería de software, arquitectura, gestión de proyectos, producción de software y desarrollo de soluciones tecnológicas.",
  },

  {
    title: "Especialización en Ingeniería de Software",

    institution: "Universidad Tecnológica de Panamá",

    description:
      "Formación especializada en principios, metodologías y prácticas aplicadas al desarrollo y gestión de software.",
  },

  {
    title: "Formación continua",

    institution: "Desarrollo profesional",

    description:
      "Aprendizaje continuo en Android, Kotlin, Jetpack Compose, arquitectura de software, desarrollo multiplataforma y tecnologías web.",
  },
];
