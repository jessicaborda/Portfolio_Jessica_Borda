import styles from "./Experience.module.scss";

export default function Experience() {
    return (
        <section className={styles["experience-container"]}>
            <div className={styles["experience-container-item"]}>
                <h2>+ 1.000</h2>
                <p>Hours of code</p>
            </div>
            <div className={styles["experience-container-item"]}>
                <h2>+ 1.000</h2>
                <p>Hours of code</p>
            </div>
            <div className={styles["experience-container-item"]}>
                <h2>+ 1.000</h2>
                <p>Hours of code</p>
            </div>
            <div className={styles["experience-container-item"]}>
                <h2>+ 1.000</h2>
                <p>Hours of code</p>
            </div>
        </section>
    )
}
