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
  return (
    <section id="skills">
      <Skills />
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
