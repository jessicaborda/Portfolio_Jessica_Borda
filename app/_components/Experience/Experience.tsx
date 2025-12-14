import styles from "./Experience.module.scss";

interface ExperienceItem {
  value: string;
  label: string;
}

interface ExperienceProps {
  items: ExperienceItem[];
}

export default function Experience({ items }: ExperienceProps) {
  return (
    <div className={styles["experience-container"]}>
      {items.map((item, index) => (
        <div className={styles["experience-container-item"]} key={index}>
          <h2>{item.value}</h2>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}
