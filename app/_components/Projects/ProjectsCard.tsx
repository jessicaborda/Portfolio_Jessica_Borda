
import styles from "./Projects.module.scss";

interface ProjectsCardProps {
  image: string;
  title: string;
  description: string;
  tools: string[];
}

export default function ProjectsCard({
  image,
  title,
  description,
  tools,
}: ProjectsCardProps) {
  return (
    <div className={styles["cards-container"]}>
      <img className={styles["cards-container-img"]} src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles["cards-container-tools"]}>
        {tools?.map((tool, index) => (
          <span key={index} className={styles["cards-container-tools-span"]}>
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
