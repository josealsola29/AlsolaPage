export interface EducationItem {
  title: string;
  institution: string;
  period?: string;
  description?: string;
}

export const education:
  EducationItem[] = [
  {
    title:
      "Formación en Ingeniería de Software",

    institution:
      "Formación universitaria y de posgrado",

    description:
      "Estudios orientados al diseño, desarrollo, arquitectura y gestión de soluciones de software."
  },

  {
    title:
      "Desarrollo de Software",

    institution:
      "Formación universitaria",

    description:
      "Fundamentos de programación, bases de datos, análisis, diseño y construcción de sistemas."
  },

  {
    title:
      "Formación continua",

    institution:
      "Cursos y aprendizaje profesional",

    description:
      "Actualización constante en Android, Kotlin, arquitectura de software y tecnologías modernas."
  }
];