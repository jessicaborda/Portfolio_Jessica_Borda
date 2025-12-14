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
  return (
    <section id="about">
      <Hero />
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills">
      <Skills />
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience">
      <Experience />
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
