import Image from "next/image";
import styles from "./Hero.module.scss";

interface SocialLink {
  name: string;
  url: string;
  iconSrc: string;
}

interface HeroSocialMediaProps {
  links: SocialLink[];
  profileImageSrc: string;
  profileImageAlt: string;
}

export default function HeroSocialMedia({
  links,
  profileImageSrc,
  profileImageAlt,
}: HeroSocialMediaProps) {
  return (
    <div className={styles["hero-container-social"]}>
      <Image
        className={styles["hero-container-social-profile"]}
        src={profileImageSrc}
        alt={profileImageAlt}
        width={200}
        height={200}
      />
      <div className={styles["hero-container-social-links"]}>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            <Image
              className={styles["hero-container-social-links-icon"]}
              src={link.iconSrc}
              alt={link.name}
              width={32}
              height={32}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
