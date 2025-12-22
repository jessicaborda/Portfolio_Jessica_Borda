"use client";

import { useRef, useState } from "react";
import styles from "./Projects.module.scss";
import Intro from "./ProjectsIntro";
import ProjectsCard from "./ProjectsCard";

interface ProjectItem {
  image: string;
  title: string;
  description: string;
  tools: string[];
  figmaUrl?: string;
  websiteUrl?: string;
}

interface ProjectsProps {
  intro: {
    title: string;
    description: string;
  };
  projects: ProjectItem[];
}

export default function Projects({ intro, projects }: ProjectsProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // CARD_WIDTH = card width (400px) + gap (20px) = 420px
  const CARD_WIDTH = 420;

  const handleScroll = () => {
    if (!sliderRef.current) return;

    const scrollLeft = sliderRef.current.scrollLeft;
    const index = Math.round(scrollLeft / CARD_WIDTH);
    setActiveIndex(index);
  };

  const scrollToIndex = (index: number) => {
    sliderRef.current?.scrollTo({
      left: index * CARD_WIDTH,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles["projects-container"]}>
      <div className={styles["projects-container-description"]}>
        <Intro title={intro.title} description={intro.description} />
      </div>
      
      <div className={styles["projects-container-right"]}>
        <div 
          ref={sliderRef}
          className={styles["projects-container-cards"]}
          onScroll={handleScroll}
        >
          {projects.map((project, index) => (
            <ProjectsCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              tools={project.tools}
              figmaUrl={project.figmaUrl}
              websiteUrl={project.websiteUrl}
            />
          ))}
        </div>

        <div className={styles["pagination-dots"]}>
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`${styles.dot} ${
                activeIndex === index ? styles["dot-active"] : ""
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

