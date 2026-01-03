import HeroSocialMedia from "../Hero/HeroSocialMedia";
import styles from "./Contact.module.scss";

interface SocialLink {
  name: string;
  url: string;
  iconSrc: string;
}

interface ContactProps {
  socialLinks: SocialLink[];
}

export default function Contact({ socialLinks }: ContactProps) {
  return (
    <div className={styles["contact-container"]}>
      <div className={styles["contact-container-description"]}>
        <h2>Contacto</h2>
        <p>¿Tienes un proyecto, una idea o una oportunidad en mente? Me encantaría conocerla y ver cómo puedo aportar desde el diseño y el desarrollo.</p>
        <HeroSocialMedia links={socialLinks} />
        <div className={styles["contact-container-item-content"]}>
          
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
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
