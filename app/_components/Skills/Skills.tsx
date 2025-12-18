"use client";

import { useState } from "react";
import styles from "./Skills.module.scss";
import SkillsContent from "./SkillsContent";
import SkillsMenu from "./SkillsMenu";

interface Skill {
  name: string;
  icon?: string;
  level?: string;
}

interface SkillCategory {
  id: string;
  name: string;
  description: string[];
  skills: Skill[];
}

interface SkillsProps {
  skills: SkillCategory[];
}

export default function Skills({ skills }: SkillsProps) {
  const [activeSkillCategory, setActiveSkillCategory] = useState(skills[0]?.id || "");

  const selectedSkillCategory = skills.find((cat) => cat.id === activeSkillCategory);

  return (
    <div className={styles["skills-container"]}>
      <SkillsMenu
        skills={skills}
        activeSkillCategory={activeSkillCategory}
        onSkillCategorySelect={setActiveSkillCategory}
      />
      {selectedSkillCategory && (
        <SkillsContent
          title={selectedSkillCategory.name}
          description={selectedSkillCategory.description}
          skills={selectedSkillCategory.skills}
        />
      )}
    </div>
  );
}
