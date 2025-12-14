import styles from "./Hero.module.scss";

interface HeroDescriptionProps {
  name: string;
  title: string;
  description: string;
  cvUrl: string;
  cvLabel: string;
}

export default function HeroDescription({
  name,
  title,
  description,
  cvUrl,
  cvLabel,
}: HeroDescriptionProps) {
  return (
    <div className={styles["hero-container-text"]}>
      <div className={styles["hero-container-text-content"]}>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <a href={cvUrl} download>
        <button>{cvLabel}</button>
      </a>
    </div>
  );
}
