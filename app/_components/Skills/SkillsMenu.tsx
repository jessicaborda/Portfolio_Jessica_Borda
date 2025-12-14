import styles from "./Skills.module.scss";

interface SkillCategory {
  id: string;
  name: string;
}

interface SkillsMenuProps {
  categories: SkillCategory[];
  activeCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

export default function SkillsMenu({
  categories,
  activeCategory,
  onCategorySelect,
}: SkillsMenuProps) {
  return (
    <div className={styles["skills-container-left"]}>
      {categories.map((category) => (
        <button
          key={category.id}
          className={`${styles["skills-container-left-title"]} ${
            activeCategory === category.id ? styles["skills-container-left-title--active"] : ""
          }`}
          onClick={() => onCategorySelect(category.id)}
          type="button"
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
