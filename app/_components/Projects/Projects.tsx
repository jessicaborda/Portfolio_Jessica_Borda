import styles from "./Projects.module.scss";
import Cards from "../Cards/Cards";

export default function Projects() {
  return (
    <section className={styles["projects-container"]}>
      <div className={styles["projects-container-description"]}>
        <h2>Projects</h2>
        <p>Here are some of the projects I have worked on.</p>
      </div>
      <div className={styles["projects-container-cards"]}>
        <Cards />
      </div>
    </section>
  );
}
