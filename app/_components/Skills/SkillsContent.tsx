import Image from "next/image";
import styles from "./Skills.module.scss";

interface Skill {
  name: string;
  icon?: string;
}

interface SkillsContentProps {
  title: string;
  description: string[];
  skills: Skill[];
}

export default function SkillsContent({ title, description, skills }: SkillsContentProps) {
  return (
    <div className={styles["skills-container-right"]}>
      <div className={styles["skills-container-right-title"]}>
        <h3>{title}</h3>
        <ul className={styles["skills-container-right-description"]}>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <ul className={styles["skills-container-right-list"]}>
        {skills.map((skill) => (
          <li key={skill.name} className={styles["skills-container-right-list-item"]}>
            {skill.icon && (
              <Image 
                src={skill.icon} 
                alt={skill.name} 
                width={20} 
                height={20} 
                className={styles["skills-container-right-list-item-icon"]} 
              />
            )}
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

