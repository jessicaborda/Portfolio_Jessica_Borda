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
  figmaText?: string;
  websiteText?: string;
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

  const handlePrev = () => {
    if (activeIndex > 0) scrollToIndex(activeIndex - 1);
  };

  const handleNext = () => {
    if (activeIndex < projects.length - 1) scrollToIndex(activeIndex + 1);
  };

  return (
    <div className={styles["projects-container"]}>
      <div className={styles["projects-container-description"]}>
        <Intro title={intro.title} description={intro.description} />
        <div className={styles["projects-container-buttons"]}>
          <button
            className={styles["scroll-button"]}
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous project"
          >
            <svg viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            className={styles["scroll-button"]}
            onClick={handleNext}
            disabled={activeIndex === projects.length - 1}
            aria-label="Next project"
          >
            <svg viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>
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
              figmaText={project.figmaText}
              websiteText={project.websiteText}
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

