import styles from "./Cards.module.scss";

export default function Cards() {
    return (
        <section className={styles["cards-container"]}>
            <img className={styles["cards-container-img"]} src="" alt="" />
            <h3>Project Name</h3>
            <p>Project description</p>
            <div className={styles["cards-container-tools"]}>
                <span className={styles["cards-container-tools-span"]}>Tool</span>
                <span className={styles["cards-container-tools-span"]}>Tool</span>
                <span className={styles["cards-container-tools-span"]}>Tool</span>
            </div>
        </section>
    );
}
