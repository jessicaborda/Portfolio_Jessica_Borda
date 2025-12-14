import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <div className={styles["hero-container"]}>
      <div className={styles["hero-container-text"]}>
        <div className={styles["hero-container-text-content"]}>
          <h1>Hero</h1>
          <h2>Frontend Developer / Design Developer</h2>
          <p>Description</p>
        </div>
        <button>Download CV</button>
      </div>
      <div className={styles["hero-container-image"]}>
        <img src="" alt="" />
        <p>Redes Sociales</p>
      </div>
    </div>
  );
}
