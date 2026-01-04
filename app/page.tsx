// Home page
import { Contact, Experience, Footer, Header, Hero, Projects, Skills } from "./_components";

function HeaderSection() {
  const navigationItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];
  return <Header navigationItems={navigationItems} />;
}

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/jessicaborda",
    iconSrc: "/icon_linkedin_contact.svg",
  },
  { name: "GitHub", url: "https://github.com/jessicaborda", iconSrc: "/icon_github_contact.svg" },
  {
    name: "@ars_design_st",
    url: "https://instagram.com/ars_design_st",
    iconSrc: "/icon_instagram_contact.svg",
  },
  {
    name: "jessi.borda09@gmail.com",
    url: "mailto:jessi.borda09@gmail.com",
    iconSrc: "/icon_email_contact.svg",
  },
];

function HeroSection() {
  const heroData = {
    name: "Jessica Borda",
    title: "Frontend Developer / Design Developer",
    description: `Arquitecta civil orientada al diseño de experiencias digitales y al desarrollo frontend. Combino pensamiento estructural, diseño estratégico y código para crear productos digitales usables y escalables.

Cuento con dos años de experiencia en UX/UI, con más de 1000 proyectos diseñados para distintos contextos y necesidades de negocio. Además, tengo un año de experiencia en frontend a través de proyectos personales, enfocados en convertir diseños en interfaces funcionales y accesibles.

Me interesa crear productos digitales que no solo se vean bien, sino que funcionen de forma clara, eficiente y coherente para el usuario.`,
    cvUrl: "/CV_Jessica Borda.pdf",
    cvLabel: "Descargar CV",
    socialLinks: SOCIAL_LINKS,
  };

  return (
    <section id="about">
      <Hero {...heroData} />
    </section>
  );
}

function SkillsSection() {
  const skillCategories = [
    {
      id: "design",
      name: "Design Skills",
      description: [
        "UX Research y análisis de usuarios",
        "Wireframes y prototipos (low y high fidelity)",
        "Diseño de interfaces (UI Design)",
        "Design systems y componentes reutilizables",
        "Usabilidad y accesibilidad",
      ],
      skills: [
        { name: "Figma", icon: "/figma_icon.svg" },
        { name: "Affinity", icon: "/affinity_icon.svg" },
        { name: "Autocad", icon: "/autocad_icon.svg" },
        { name: "Sketchup", icon: "/sketchup_icon.svg" },
      ],
    },
    {
      id: "frontend",
      name: "Frontend Skills",
      description: [
        "Responsive design",
        "Implementación de interfaces a partir de diseño",
        "Componentización de UI",
        "Manejo de estados y flujos básicos",
        "Optimización visual y de rendimiento",
        "Buenas prácticas de código y estructura",
      ],
      skills: [
        { name: "HTML", icon: "/html_icon.svg" },
        { name: "CSS", icon: "/css_icon.svg" },
        { name: "Javascript", icon: "/javascript_icon.svg" },
      ],
    },
    {
      id: "technologies",
      name: "Technologies",
      description: [
        "Desarrollo de interfaces con React",
        "Creación de proyectos modernos con Astro",
        "Aplicaciones web con Next.js",
        "Componentización y manejo de estado básico",
        "Integración de diseño en flujos modernos de frontend",
        "Integración de APIs y contenido dinámico",
        "Arquitectura de proyectos frontend escalables",
      ],
      skills: [
        { name: "React", icon: "/react_icon.svg" },
        { name: "Astro", icon: "/astro_icon.svg" },
        { name: "Next.js", icon: "/nextjs_icon.svg" },
        { name: "Git", icon: "/git_icon.svg" },
      ],
    },
    {
      id: "artificial_intelligence",
      name: "Artificial Intelligence",
      description: [
        "Creación y edición de imágenes asistidas por IA",
        "Generación y optimización de textos y copys UX",
        "Uso de prompt engineering para obtener resultados precisos",
        "Asistencia en desarrollo frontend y refactorización de código",
        "Soporte en documentación técnica y funcional",
        "Optimización de flujos de trabajo en diseño y desarrollo",
        "Automatización y optimización de flujos con n8n",
      ],
      skills: [
        { name: "Cursor", icon: "/cursor_icon.svg" },
        { name: "N8N", icon: "/n8n_icon.svg" },
        { name: "Prompt", icon: "/prompt_icon.svg" },
      ],
    },
  ];

  return (
    <section id="skills">
      <Skills skills={skillCategories} />
    </section>
  );
}

function ExperienceSection() {
  const experienceItems = [
    { value: "+ 1.000", label: "Proyectos diseñados" },
    { value: "2 Años", label: "Experiencia en diseño UX/UI" },
    { value: "1 Año", label: "Desarrollando proyectos frontend" },
    { value: "100%", label: "Enfoque en el usuario" },
  ];

  return (
    <section id="experience">
      <Experience items={experienceItems} />
    </section>
  );
}

function ProjectsSection() {
  const projectsData = {
    intro: {
      title: "Projects",
      description:
        "Aquí se presentan algunos de los proyectos en los que he trabajado, integrando diseño y desarrollo.",
    },
    projects: [
      {
        image: "/bauhaus_components_portada.png",
        title: "Bauhaus Components",
        description: "Librería de componentes basados en el estilo Bauhaus.",
        tools: ["React", "TypeScript", "CSS", "Storybook"],
        figmaUrl:
          "https://www.figma.com/design/io9044XRoqlAUxopIsKMBQ/Bauhaus_components?node-id=0-1&t=ZElwSkrDinqWJBlY-1",
        websiteUrl: "https://www.npmjs.com/package/@ars-design/bauhaus-ui",
      },
      {
        image: "/bauhaus_concept_portada.jpg",
        title: "Bauhaus Concept",
        description: "Concepto de diseño desarrollado para la librería de componentes Bauhaus.",
        tools: ["Astro", "TypeScript", "SCSS"],
        figmaUrl:
          "https://www.figma.com/design/9K3ASYJ0ouwYxFDWsEQDqd/Bauhaus_concept?t=506teaUjrX14k37c-1",
        websiteUrl: "https://jessicaborda.github.io/Bauhaus_concept/",
      },
      {
        image: "/quali_portada.png",
        title: "Quali",
        description: "Plataforma para visualización de cursos laborales (Prueba de concepto).",
        tools: ["HTML", "CSS", "JavaScript"],
        figmaUrl: "https://www.figma.com/design/EbZ4p4jaSintcakTWZ3GwH/QUALI?t=506teaUjrX14k37c-1",
        websiteUrl: "https://jessicaborda.github.io/Quali/",
      },
      {
        image: "/entrelineas_portada.png",
        title: "Entrelíneas",
        description: "Sitio web oficial de la Fundación Entrelíneas, desarrollado con Astro.",
        tools: ["En proceso"],
        figmaUrl:
          "https://www.figma.com/design/KJaB8Vo3UENOKV8TsckzKK/EntreL%C3%ADneas?node-id=0-1&t=506teaUjrX14k37c-1",
        websiteUrl: "https://wtoloza-dev.github.io/fundacion-entre-lineas/",
      },
    ],
  };

  return (
    <section id="projects">
      <Projects {...projectsData} />
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact">
      <Contact socialLinks={SOCIAL_LINKS} />
    </section>
  );
}

function FooterSection() {
  return <Footer />;
}

export default function Layout() {
  return (
    <div className="app-layout">
      <HeaderSection />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
