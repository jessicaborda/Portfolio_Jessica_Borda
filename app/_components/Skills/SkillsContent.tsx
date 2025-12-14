import styles from "./Skills.module.scss";

interface Skill {
  name: string;
  level?: string;
}

interface SkillsContentProps {
  title: string;
  description: string;
  skills: Skill[];
}

export default function SkillsContent({ title, description, skills }: SkillsContentProps) {
  return (
    <div className={styles["skills-container-right"]}>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul className={styles["skills-container-right-list"]}>
        {skills.map((skill) => (
          <li key={skill.name} className={styles["skills-container-right-list-item"]}>
            {skill.name}
            {skill.level && <span> - {skill.level}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

