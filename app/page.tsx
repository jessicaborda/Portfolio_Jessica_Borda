// Home page
import { Contact, Experience, Header, Hero, Projects, Skills } from "./_components";

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

function HeroSection() {
  const heroData = {
    name: "Jessica Borda",
    title: "Frontend Developer / Design Developer",
    description: `Arquitecta civil orientada al diseño de experiencias digitales y al desarrollo frontend. Combino pensamiento estructural, diseño estratégico y código para crear productos digitales usables y escalables.

Cuento con dos años de experiencia en UX/UI, con más de 1000 proyectos diseñados para distintos contextos y necesidades de negocio. Además, tengo un año de experiencia en frontend a través de proyectos personales, enfocados en convertir diseños en interfaces funcionales y accesibles.

Me interesa crear productos digitales que no solo se vean bien, sino que funcionen de forma clara, eficiente y coherente para el usuario.`,
    cvUrl: "/cv.pdf",
    cvLabel: "Descargar CV",
    socialLinks: [            
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/jessicaborda",
        iconSrc: "/icon_linkedin_contact.svg",
      },
      { name: "GitHub", url: "https://github.com/jessicaborda", iconSrc: "/icon_github_contact.svg" },
      { name: "@ars_design_st", url: "https://instagram.com/ars_design_st", iconSrc: "/icon_instagram_contact.svg" },
      { name: "jessi.borda09@gmail.com", url: "mailto:jessi.borda09@gmail.com", iconSrc: "/icon_email_contact.svg" },
    ],
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
      description: ["UX Research y análisis de usuarios", "Wireframes y prototipos (low y high fidelity)", "Diseño de interfaces (UI Design)", "Design systems y componentes reutilizables", "Usabilidad y accesibilidad", ],
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
      description: ["Responsive design", "Implementación de interfaces a partir de diseño", "Componentización de UI", "Manejo de estados y flujos básicos", "Optimización visual y de rendimiento", "Buenas prácticas de código y estructura" ],
      skills: [
        { name: "HTML", icon: "/icon_linkedin_contact.svg" },
        { name: "CSS", icon: "/icon_github_contact.svg" },
        { name: "Javascript", icon: "/icon_instagram_contact.svg" },
        { name: "Bootstrap", icon: "/icon_email_contact.svg" },
      ],
    },
    {
      id: "technologies",
      name: "Technologies",
      description: ["Desarrollo de interfaces con React", "Creación de proyectos modernos con Astro", "Aplicaciones web con Next.js", "Componentización y manejo de estado básico", "Integración de diseño en flujos modernos de frontend", "Integración de APIs y contenido dinámico", "Arquitectura de proyectos frontend escalables"],
      skills: [
        { name: "React", icon: "/icon_linkedin_contact.svg" },
        { name: "Astro", icon: "/icon_github_contact.svg" },
        { name: "Next.js", icon: "/icon_instagram_contact.svg" },
        { name: "Git", icon: "/icon_email_contact.svg" },
      ],
    },
    {
      id: "artificial_intelligence",
      name: "Artificial Intelligence",
      description: ["Creación y edición de imágenes asistidas por IA", "Generación y optimización de textos y copys UX", "Uso de prompt engineering para obtener resultados precisos", "Asistencia en desarrollo frontend y refactorización de código", "Soporte en documentación técnica y funcional", "Optimización de flujos de trabajo en diseño y desarrollo", "Automatización y optimización de flujos con n8n" ],
      skills: [
        { name: "Cursor", icon: "/icon_linkedin_contact.svg" },
        { name: "N8N", icon: "/icon_github_contact.svg" },
        { name: "Prompt", icon: "/icon_instagram_contact.svg" },
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
      description: "Aquí se presentan algunos de los proyectos en los que he trabajado, integrando diseño y desarrollo.",
    },
    projects: [
      {
        image: "/path-to-image.jpg",
        title: "Bauhaus Components",
        description: "Librería de componentes basados en el estilo Bauhaus.",
        tools: ["React", "TypeScript", "CSS", "Storybook"],
        figmaUrl: "https://www.figma.com/",
        websiteUrl: "https://github.com/",
      },
      {
        image: "/path-to-image.jpg",
        title: "Bauhaus Concept",
        description: "Concepto de diseño desarrollado para la librería de componentes Bauhaus.",
        tools: ["Astro", "TypeScript", "SCSS"],
        figmaUrl: "https://www.figma.com/",
        websiteUrl: "https://github.com/",
      },
      {
        image: "/path-to-image.jpg",
        title: "Quali",
        description: "Plataforma para visualización de cursos laborales (Prueba de concepto).",
        tools: ["HTML", "CSS", "JavaScript"],
        figmaUrl: "https://www.figma.com/",
        websiteUrl: "https://github.com/",
      },
      {
        image: "/path-to-image.jpg",
        title: "Quali",
        description: "Plataforma para visualización de cursos laborales (Prueba de concepto).",
        tools: ["HTML", "CSS", "JavaScript"],
        figmaUrl: "https://www.figma.com/",
        websiteUrl: "https://github.com/",
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
      <Contact />
    </section>
  );
}

function FooterSection() {
  return (
    <footer>
      <h2>Footer</h2>
    </footer>
  );
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
