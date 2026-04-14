// Home page
import { Contact, Experience, Footer, Header, Hero, Projects, Skills } from "./_components";
import { getAssetPath } from "./_lib/utils";

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
    iconSrc: getAssetPath("/icon_linkedin_contact.svg"),
  },
  {
    name: "GitHub",
    url: "https://github.com/jessicaborda",
    iconSrc: getAssetPath("/icon_github_contact.svg"),
  },
  {
    name: "@ars_design_st",
    url: "https://instagram.com/ars_design_st",
    iconSrc: getAssetPath("/icon_instagram_contact.svg"),
  },
  {
    name: "jessi.borda09@gmail.com",
    url: "mailto:jessi.borda09@gmail.com",
    iconSrc: getAssetPath("/icon_email_contact.svg"),
  },
];

function HeroSection() {
  const heroData = {
    name: "Jessica Borda",
    title: "Diseñadora UX/UI con enfoque en frontend",
    description: "Diseño experiencias digitales funcionales y las llevo a la realidad a través del código. Con formación en arquitectura, abordo los productos digitales como sistemas estructurados, equilibrando estética, usabilidad y funcionalidad. Me enfoco en transformar ideas en experiencias reales y utilizables. Además, mi conocimiento en desarrollo frontend me permite reducir la brecha entre diseño y desarrollo, facilitando la comunicación con equipos técnicos y asegurando que las soluciones sean viables y coherentes desde su concepción.",
    cvUrl: getAssetPath("/Jessica Borda - ATS Format.pdf"),
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
        { name: "Figma", icon: getAssetPath("/figma_icon.svg") },
        { name: "Affinity", icon: getAssetPath("/affinity_icon.svg") },
        { name: "Autocad", icon: getAssetPath("/autocad_icon.svg") },
        { name: "Sketchup", icon: getAssetPath("/sketchup_icon.svg") },
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
        { name: "HTML", icon: getAssetPath("/html_icon.svg") },
        { name: "CSS", icon: getAssetPath("/css_icon.svg") },
        { name: "Javascript", icon: getAssetPath("/javascript_icon.svg") },
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
        { name: "React", icon: getAssetPath("/react_icon.svg") },
        { name: "Astro", icon: getAssetPath("/astro_icon.svg") },
        { name: "Next.js", icon: getAssetPath("/nextjs_icon.svg") },
        { name: "Git", icon: getAssetPath("/git_icon.svg") },
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
        { name: "Cursor", icon: getAssetPath("/cursor_icon.svg") },
        { name: "N8N", icon: getAssetPath("/n8n_icon.svg") },
        { name: "Prompt", icon: getAssetPath("/prompt_icon.svg") },
        { name: "Claude", icon: getAssetPath("/icon-claude-code.svg") },
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
    { value: "2.5 Años", label: "Desarrollando proyectos frontend" },
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
        "Selección de proyectos enfocados en experiencia de usuario, sistemas visuales y desarrollo de interfaces funcionales.",
    },
    projects: [
      {
        image: getAssetPath("/fondo-explora-cta.png"),
        title: "Explora Boyacá",
        description: "Diseño end-to-end enfocado en mejorar la experiencia de usuario mediante investigación, definición de flujos y prototipado funcional para plataforma de recomendación turística.",
        tools: ["Figjam", "Figma", "Prototype", "Next.js"],
        figmaUrl:
          "https://www.figma.com/proto/fFxbrg51k30lwLacb7dVNk/Descubre-Boyac%C3%A1?node-id=254-3871&t=prbix1yiUCvnzjSG-0&scaling=min-zoom&content-scaling=fixed&page-id=249%3A9443",
        websiteUrl: "https://exploraboyaca.com/",
        figmaText: "Case Study",
      },
      {
        image: getAssetPath("/quali_portada.png"),
        title: "Quali",
        description: "Sistema de interfaz centrado en consistencia visual, jerarquía y escalabilidad de componentes para visualización de cursos laborales.",
        tools: ["HTML", "CSS", "JavaScript"],
        figmaUrl: "https://www.figma.com/design/EbZ4p4jaSintcakTWZ3GwH/QUALI?t=506teaUjrX14k37c-1",
        websiteUrl: "https://www.quali.com.co/",
        figmaText: "Prueba de concepto",
        
      },
      {
        image: getAssetPath("/bauhaus_concept_portada.jpg"),
        title: "Bauhaus Concept",
        description: "Exploración conceptual que traduce los principios de la Bauhaus en una interfaz digital funcional y responsiva.",
        tools: ["Astro", "TypeScript", "SCSS"],
        figmaUrl:
          "https://www.figma.com/design/9K3ASYJ0ouwYxFDWsEQDqd/Bauhaus_concept?t=506teaUjrX14k37c-1",
        websiteUrl: "https://jessicaborda.github.io/Bauhaus_concept/",
        figmaText: "Case Study",
      },
      {
        image: getAssetPath("/bauhaus_components_portada.png"),
        title: "Bauhaus Components",
        description: "Implementación de librería de componentes basados en el estilo Bauhaus listos para instalación y uso.",
        tools: ["React", "TypeScript", "CSS", "Storybook"],
        figmaUrl:
          "https://www.figma.com/design/io9044XRoqlAUxopIsKMBQ/Bauhaus_components?node-id=0-1&t=ZElwSkrDinqWJBlY-1",
        websiteUrl: "https://www.npmjs.com/package/@ars-design/bauhaus-ui",
        figmaText: "Design System",
      },
      {
        image: getAssetPath("/adoption_report_portada.png"),
        title: "Adoption Report",
        description: "Diseño e implementación de reporte para análisis de tendencias de adopción y uso de herramientas IA para empresas.",
        tools: ["Next.js", "TypeScript", "CSS"],
        figmaUrl:
          "https://www.figma.com/design/TZxh6VRzyd2ls9QVdnIx9q/adoption_report?t=7XosbGvp4LagABUu-0",
        websiteUrl: "https://jessicaborda.github.io/adoption-report/",
      },
      {
        image: getAssetPath("/artista_musical_portada.png"),
        title: "Artista musical",
        description: "Diseño UI de Landing page para artista musical.",
        tools: ["Figma"],
        figmaUrl:
          "https://www.figma.com/design/6ce7kTEyChMVRWLpodteuv/ARTISTA-MUSICAL?node-id=0-1&p=f&t=vzJG37GwNzodrxGN-0",
        websiteUrl: "https://www.figma.com/proto/6ce7kTEyChMVRWLpodteuv/ARTISTA-MUSICAL?node-id=1-39&t=vzJG37GwNzodrxGN-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A39",
        websiteText: "Ver prototipo"
      },
      // {
      //   image: getAssetPath("/entrelineas_portada.png"),
      //   title: "Entrelíneas",
      //   description: "Sitio web oficial de la Fundación Entrelíneas, desarrollado con Astro.",
      //   tools: ["En proceso", "Astro"],
      //   figmaUrl:
      //     "https://www.figma.com/design/KJaB8Vo3UENOKV8TsckzKK/EntreL%C3%ADneas?node-id=0-1&t=506teaUjrX14k37c-1",
      //   websiteUrl: "https://jessicaborda.github.io/Fundacion_Entrelineas/",
      // },
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
