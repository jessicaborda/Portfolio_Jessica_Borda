"use client";

import { useState } from "react";
import styles from "./Skills.module.scss";
import SkillsContent from "./SkillsContent";
import SkillsMenu from "./SkillsMenu";

interface Skill {
  name: string;
  level?: string;
}

interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: Skill[];
}

interface SkillsProps {
  categories: SkillCategory[];
}

export default function Skills({ categories }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || "");

  const selectedCategory = categories.find((cat) => cat.id === activeCategory);

  return (
    <div className={styles["skills-container"]}>
      <SkillsMenu
        categories={categories}
        activeCategory={activeCategory}
        onCategorySelect={setActiveCategory}
      />
      {selectedCategory && (
        <SkillsContent
          title={selectedCategory.name}
          description={selectedCategory.description}
          skills={selectedCategory.skills}
        />
      )}
    </div>
  );
}
