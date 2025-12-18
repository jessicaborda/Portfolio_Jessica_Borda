import Image from "next/image";
import styles from "./Hero.module.scss";

interface SocialLink {
  name: string;
  url: string;
  iconSrc: string;
}

interface HeroSocialMediaProps {
  links: SocialLink[];
}

export default function HeroSocialMedia({
  links,
}: HeroSocialMediaProps) {
  return (
    <div className={styles["hero-container-social"]}>
      <div className={styles["hero-container-social-links"]}>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className={styles["hero-container-social-links-item"]}
          >
            <Image
              className={styles["hero-container-social-links-icon"]}
              src={link.iconSrc}
              alt={link.name}
              width={32}
              height={32}
            />
            <h5>{link.name}</h5>
          </a>
        ))}
      </div>
    </div>
  );
}
