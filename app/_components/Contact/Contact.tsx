import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <div className={styles["contact-container"]}>
      <div className={styles["contact-container-description"]}>
        <h2>Contact</h2>
        <p>Get in touch with me</p>
        <div className={styles["contact-container-item-content"]}>
          <img src="" alt="" />
          <p>Social Media</p>
        </div>
      </div>
      <form className={styles["contact-container-form"]} action="">
        <div className={styles["contact-container-form-inputs"]}>
          <input
            className={styles["contact-container-form-inputs__input"]}
            type="text"
            placeholder="Name"
          />
          <input
            className={styles["contact-container-form-inputs__input"]}
            type="email"
            placeholder="Email"
          />
        </div>
        <textarea
          className={styles["contact-container-form-textarea"]}
          placeholder="Message"
          name=""
          id=""
          cols={30}
          rows={10}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
