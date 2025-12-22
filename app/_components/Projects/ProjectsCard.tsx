
import styles from "./Projects.module.scss";

interface ProjectsCardProps {
  image: string;
  title: string;
  description: string;
  tools: string[];
  figmaUrl?: string;
  websiteUrl?: string;
}

export default function ProjectsCard({
  image,
  title,
  description,
  tools,
  figmaUrl,
  websiteUrl,
}: ProjectsCardProps) {
  return (
    <div className={styles["cards-container"]}>
      <div className={styles["cards-container-img-wrapper"]}>
        <img className={styles["cards-container-img"]} src={image} alt={title} />
        <div className={styles["cards-container-img-hover"]}>
          {figmaUrl && (
            <a href={figmaUrl} target="_blank" rel="noopener noreferrer" className={styles["hover-button"]}>
              Figma
            </a>
          )}
          {websiteUrl && (
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className={styles["hover-button"]}>
              Sitioweb
            </a>
          )}
        </div>
      </div>
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
