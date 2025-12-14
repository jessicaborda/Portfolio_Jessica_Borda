import styles from "./Skills.module.scss";

interface SkillCategory {
  id: string;
  name: string;
}

interface SkillsMenuProps {
  skills: SkillCategory[];
  activeSkillCategory: string;
  onSkillCategorySelect: (skillCategoryId: string) => void;
}

export default function SkillsMenu({
  skills,
  activeSkillCategory,
  onSkillCategorySelect,
}: SkillsMenuProps) {
  return (
    <div className={styles["skills-container-left"]}>
      {skills.map((skillCategory) => (
        <button
          key={skillCategory.id}
          className={`${styles["skills-container-left-title"]} ${
            activeSkillCategory === skillCategory.id ? styles["skills-container-left-title--active"] : ""
          }`}
          onClick={() => onSkillCategorySelect(skillCategory.id)}
          type="button"
        >
          {skillCategory.name}
        </button>
      ))}
    </div>
  );
}
