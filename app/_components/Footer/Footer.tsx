import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-container"]}>
        <h6>© 2025</h6>
        <h6>Diseñado por Jessica Borda</h6>
      </div>
      <div className={styles["footer-container__line"]}></div>
    </footer>
  );
}
