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
  return <Hero />;
}

function SkillsSection() {
  return <Skills />;
}

function ExperienceSection() {
  return <Experience />;
}

function ProjectsSection() {
  return <Projects />;
}

function ContactSection() {
  return <Contact />;
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
