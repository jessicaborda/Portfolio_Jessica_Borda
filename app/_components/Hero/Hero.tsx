import styles from "./Hero.module.scss";
import HeroDescription from "./HeroDescription";
import HeroSocialMedia from "./HeroSocialMedia";

interface SocialLink {
  name: string;
  url: string;
  iconSrc: string;
}

interface HeroProps {
  name: string;
  title: string;
  description: string;
  cvUrl: string;
  cvLabel: string;
  socialLinks: SocialLink[];
  profileImageSrc: string;
  profileImageAlt: string;
}

export default function Hero({
  name,
  title,
  description,
  cvUrl,
  cvLabel,
  socialLinks,
  profileImageSrc,
  profileImageAlt,
}: HeroProps) {
  return (
    <div className={styles["hero-container"]}>
      <HeroDescription
        name={name}
        title={title}
        description={description}
        cvUrl={cvUrl}
        cvLabel={cvLabel}
      />
      <HeroSocialMedia
        links={socialLinks}
        profileImageSrc={profileImageSrc}
        profileImageAlt={profileImageAlt}
      />
    </div>
  );
}
