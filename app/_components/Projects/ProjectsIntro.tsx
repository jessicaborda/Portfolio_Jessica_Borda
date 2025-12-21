import styles from "./Projects.module.scss";

interface ProjectsIntroProps {
  title: string;
  description: string;
}

export default function ProjectsIntro({ title, description }: ProjectsIntroProps) {
  return (
    <div className={styles.intro}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}