"use client";

import emailjs from "@emailjs/browser";
import { useRef } from "react";
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
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_l833rvj", "template_3oi8fd3", form.current, {
        publicKey: "2MzXezCNvIgR0ITqK",
      })
      .then(
        () => {
          alert("✅ Mensaje enviado con éxito!");
          form.current?.reset();
        },
        (error) => {
          alert("❌ Error al enviar: " + JSON.stringify(error));
        },
      );
  };

  return (
    <section className={styles["contact-section"]}>
      <div className={styles["contact-section-description"]}>
        <h2>Contacto</h2>
        <p>
          ¿Tienes un proyecto, una idea o una oportunidad en mente? Me encantaría conocerla y ver
          cómo puedo aportar desde el diseño y el desarrollo.
        </p>
        <HeroSocialMedia links={socialLinks} />
      </div>

      <form
        ref={form}
        id="contact-form"
        className={styles["contact-section-form"]}
        onSubmit={sendEmail}
      >
        <div className={styles["contact-section-form__group"]}>
          <label className={styles["contact-section-form__label"]} htmlFor="user_name">
            <span>Nombre completo</span>
            <input
              className={styles["contact-section-form__input"]}
              type="text"
              name="user_name"
              id="user_name"
              required
            />
          </label>

          <label className={styles["contact-section-form__label"]} htmlFor="email">
            <span>Correo electrónico</span>
            <input
              className={styles["contact-section-form__input"]}
              type="email"
              name="email"
              id="email"
              required
            />
          </label>
        </div>

        <label className={styles["contact-section-form__label"]} htmlFor="message">
          <span>Mensaje</span>
          <input
            className={styles["contact-section-form__input"]}
            type="text"
            name="message"
            id="message"
          />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
