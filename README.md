# AlsolaPage

Portafolio personal desarrollado con Astro para presentar mi experiencia, formación, tecnologías y proyectos relacionados con el desarrollo de software.

El proyecto está enfocado principalmente en desarrollo móvil, Android e ingeniería de software, manteniendo una arquitectura sencilla, rápida, accesible y fácil de mantener.

## 🚀 Tecnologías

- Astro
- TypeScript
- HTML semántico
- CSS
- Git
- GitHub

## ✨ Características

- Diseño responsive para escritorio, tablet y dispositivos móviles.
- Navegación adaptable con menú móvil.
- Diseño basado en componentes reutilizables.
- Sistema global de estilos mediante variables CSS.
- Soporte para navegación por teclado.
- Compatibilidad con `prefers-reduced-motion`.
- Secciones independientes para experiencia, educación, tecnologías y proyectos.
- Datos de proyectos separados de los componentes visuales.

## 📁 Estructura del proyecto

```text
AlsolaPage/
├── public/
│   ├── favicon.ico
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── Education.astro
│   │   ├── Experience.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── ProjectCard.astro
│   │   ├── Projects.astro
│   │   └── Skills.astro
│   │
│   ├── data/
│   │   └── projects.ts
│   │
│   ├── layouts/
│   │   └── MainLayout.astro
│   │
│   ├── pages/
│   │   └── index.astro
│   │
│   └── styles/
│       └── global.css
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## 🧩 Arquitectura

La página principal utiliza componentes independientes para cada sección:

```text
MainLayout
├── Header
├── Hero
├── About
├── Skills
├── Experience
├── Education
├── Projects
│   └── ProjectCard
├── Contact
└── Footer
```

Los datos de los proyectos se mantienen separados de la interfaz en:

```text
src/data/projects.ts
```

Esto permite modificar o añadir proyectos sin tener que alterar directamente los componentes encargados de mostrarlos.

## 🛠️ Instalación

Clona el repositorio:

```bash
git clone https://github.com/josealsola29/AlsolaPage.git
```

Entra al proyecto:

```bash
cd AlsolaPage
```

Instala las dependencias:

```bash
npm install
```

## 💻 Desarrollo

Inicia el servidor local:

```bash
npm run dev
```

Astro ejecutará el proyecto normalmente en:

```text
http://localhost:4321/
```

## 📦 Build

Para generar la versión de producción:

```bash
npm run build
```

El resultado será generado dentro de:

```text
dist/
```

Para visualizar localmente el build de producción:

```bash
npm run preview
```

## 📌 Estado del proyecto

AlsolaPage se encuentra actualmente en desarrollo.

Las siguientes etapas incluyen mejoras de:

- SEO y metadatos.
- Open Graph y redes sociales.
- Configuración de GitHub Pages.
- Validación automática mediante GitHub Actions.
- Contenido profesional y proyectos reales.
- Optimización adicional de accesibilidad y rendimiento.

## 👨‍💻 Autor

**José Alsola**

Desarrollador de software con interés en aplicaciones móviles, Android, arquitectura de software y tecnologías modernas.

GitHub:

https://github.com/josealsola29

---

Desarrollado con [Astro](https://astro.build/).