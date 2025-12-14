import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <div className={styles["skills-container"]}>
      <div className={styles["skills-container-left"]}>
        <h2 className={styles["skills-container-left-title"]}>Design Skills</h2>
        <h2 className={styles["skills-container-left-title"]}>Frontend Skills</h2>
        <h2 className={styles["skills-container-left-title"]}>Technologies</h2>
      </div>
      <div className={styles["skills-container-right"]}>
        <h2>Design Skills</h2>
        <p>Description</p>
      </div>
    </div>
  );
}
