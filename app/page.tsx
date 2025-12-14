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
    description: "Passionate about creating beautiful and functional web experiences.",
    cvUrl: "/cv.pdf",
    cvLabel: "Download CV",
    profileImageSrc: "/profile.jpg",
    profileImageAlt: "Jessica Borda",
    socialLinks: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/jessicaborda",
        iconSrc: "/icons/linkedin.svg",
      },
      { name: "GitHub", url: "https://github.com/jessicaborda", iconSrc: "/icons/github.svg" },
      { name: "Behance", url: "https://behance.net/jessicaborda", iconSrc: "/icons/behance.svg" },
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
      description: "Creating beautiful and intuitive user interfaces",
      skills: [
        { name: "Figma", level: "Advanced" },
        { name: "Adobe XD", level: "Intermediate" },
        { name: "UI/UX Design", level: "Advanced" },
        { name: "Prototyping", level: "Advanced" },
      ],
    },
    {
      id: "frontend",
      name: "Frontend Skills",
      description: "Building responsive and performant web applications",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "Next.js", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "HTML/CSS", level: "Expert" },
      ],
    },
    {
      id: "technologies",
      name: "Technologies",
      description: "Tools and technologies I work with daily",
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "Node.js", level: "Intermediate" },
        { name: "SASS", level: "Advanced" },
        { name: "REST APIs", level: "Advanced" },
      ],
    },
  ];

  return (
    <section id="skills">
      <Skills categories={skillCategories} />
    </section>
  );
}

function ExperienceSection() {
  const experienceItems = [
    { value: "+ 1.000", label: "Hours of code" },
    { value: "+ 50", label: "Projects completed" },
    { value: "+ 3", label: "Years of experience" },
    { value: "+ 20", label: "Happy clients" },
  ];

  return (
    <section id="experience">
      <Experience items={experienceItems} />
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects">
      <Projects />
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
