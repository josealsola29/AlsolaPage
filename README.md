# AlsolaPage

[![CI](https://github.com/josealsola29/AlsolaPage/actions/workflows/ci.yml/badge.svg)](https://github.com/josealsola29/AlsolaPage/actions/workflows/ci.yml)
[![Deploy to GitHub Pages](https://github.com/josealsola29/AlsolaPage/actions/workflows/deploy.yml/badge.svg)](https://github.com/josealsola29/AlsolaPage/actions/workflows/deploy.yml)

Portafolio personal de **José Alsola**, desarrollado con Astro para presentar experiencia profesional, formación académica, tecnologías y proyectos relacionados con el desarrollo de software.

El proyecto está enfocado principalmente en desarrollo móvil, Android e ingeniería de software, manteniendo una arquitectura sencilla, rápida, accesible y fácil de mantener.

## 🌐 Sitio publicado

https://josealsola29.github.io/AlsolaPage/

## 🚀 Tecnologías

- Astro
- TypeScript
- HTML semántico
- CSS
- Kotlin y Android como enfoque profesional
- Git
- GitHub
- GitHub Actions
- GitHub Pages

## ✨ Características

- Diseño responsive para escritorio, tablet y dispositivos móviles.
- Navegación adaptable con menú móvil.
- Scroll Spy para indicar la sección activa.
- Componentes Astro reutilizables.
- Componentes UI compartidos.
- Información profesional separada de la presentación.
- Sistema global de estilos mediante variables CSS.
- Navegación por teclado.
- Compatibilidad con `prefers-reduced-motion`.
- SEO con metadatos y URL canónica.
- Open Graph para compartir el sitio en redes sociales.
- Imagen social personalizada.
- Sitemap generado automáticamente.
- `robots.txt`.
- Validación automática mediante GitHub Actions.
- Despliegue automático a GitHub Pages después de un CI exitoso.

## 📁 Estructura principal

```text
AlsolaPage/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
│
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   └── og-image.png
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
│   │   ├── Skills.astro
│   │   │
│   │   └── ui/
│   │       ├── DeveloperCard.astro
│   │       ├── EducationCard.astro
│   │       ├── Icon.astro
│   │       ├── SectionHeader.astro
│   │       ├── SkillCard.astro
│   │       ├── SocialLink.astro
│   │       └── TechBadge.astro
│   │
│   ├── data/
│   │   ├── education.ts
│   │   ├── experience.ts
│   │   ├── profile.ts
│   │   └── projects.ts
│   │
│   ├── layouts/
│   │   └── MainLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   └── robots.txt.ts
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

La página está organizada mediante componentes independientes:

```text
MainLayout
├── Header
├── Hero
├── About
│   └── DeveloperCard
├── Skills
│   └── SkillCard
├── Experience
├── Education
│   └── EducationCard
├── Projects
│   └── ProjectCard
├── Contact
│   └── SocialLink
└── Footer
```

Los componentes reutilizables de interfaz se encuentran en:

```text
src/components/ui/
```

La información del portafolio está separada de los componentes visuales:

```text
src/data/
├── profile.ts
├── experience.ts
├── education.ts
└── projects.ts
```

Esto permite modificar información profesional sin tener que alterar directamente la estructura visual de los componentes.

## 🛠️ Requisitos

El proyecto requiere:

```text
Node.js >= 22.12.0
```

## 📥 Instalación

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

Astro ejecutará normalmente el proyecto en:

```text
http://localhost:4321/
```

## ✅ Validación

Antes de realizar un commit se recomienda ejecutar:

```bash
npm run validate
```

Este comando ejecuta:

```text
astro check
    ↓
astro build
```

y permite detectar problemas de Astro y TypeScript antes de subir cambios.

## 📦 Build

Para generar la versión de producción:

```bash
npm run build
```

El resultado se genera en:

```text
dist/
```

Para visualizar localmente el build:

```bash
npm run preview
```

## 🔄 Integración continua

El proyecto utiliza GitHub Actions.

### CI

El workflow:

```text
.github/workflows/ci.yml
```

se ejecuta con cambios enviados a `main` y valida:

1. Instalación de dependencias.
2. `astro check`.
3. Build de producción.

### Deploy

El workflow:

```text
.github/workflows/deploy.yml
```

se ejecuta después de que CI termina correctamente.

El proceso:

```text
Push a main
    ↓
CI
    ↓
Astro Check
    ↓
Build
    ↓
CI exitoso
    ↓
Deploy
    ↓
GitHub Pages
```

De esta manera no se publica una nueva versión si la validación principal falla.

## 🔍 SEO

El portafolio incluye:

- Título y descripción personalizados.
- URL canónica.
- Open Graph.
- Twitter Card.
- Imagen `og-image.png`.
- Sitemap.
- `robots.txt`.
- Favicons.

## ♿ Accesibilidad

Entre las medidas implementadas se encuentran:

- HTML semántico.
- Navegación mediante teclado.
- Estados `focus-visible`.
- Skip link hacia el contenido principal.
- Etiquetas ARIA donde aportan contexto.
- Respeto por `prefers-reduced-motion`.
- Tamaños mínimos apropiados para controles interactivos.
- Diseño adaptable para pantallas pequeñas.

## 📌 Estado del proyecto

AlsolaPage se encuentra en desarrollo activo.

Actualmente ya cuenta con:

- Estructura principal del portafolio.
- Diseño responsive.
- Secciones de perfil, tecnologías, experiencia, formación, proyectos y contacto.
- Datos profesionales desacoplados de la interfaz.
- Componentes UI reutilizables.
- SEO y Open Graph.
- CI.
- Despliegue automático.
- Publicación mediante GitHub Pages.

Las siguientes mejoras estarán enfocadas principalmente en contenido profesional, proyectos reales, accesibilidad, optimización y nuevas funcionalidades del portafolio.

## 👨‍💻 Autor

**José Alsola**

Desarrollador de Software enfocado en Android, Kotlin, arquitectura de software y aplicaciones móviles.

GitHub:

https://github.com/josealsola29

Portafolio:

https://josealsola29.github.io/AlsolaPage/

---

Desarrollado con [Astro](https://astro.build/).
