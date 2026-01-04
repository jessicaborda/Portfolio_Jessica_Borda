"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.scss";

interface NavigationItem {
  label: string;
  href: string;
}

interface HeaderProps {
  navigationItems: NavigationItem[];
}

export default function Header({ navigationItems }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles["header-container"]} ${scrolled ? styles["scrolled"] : ""}`}>
      <div className={styles["header-container-line"]}></div>
      <button
        className={`${styles["header-hamburger"]} ${isMenuOpen ? styles["is-active"] : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={styles["hamburger-box"]}>
          <span className={styles["hamburger-inner"]}></span>
        </span>
      </button>
      <nav className={`${styles["header-container-nav"]} ${isMenuOpen ? styles["is-open"] : ""}`}>
        <ul className={styles["header-container-nav-list"]}>
          {navigationItems.map((item) => (
            <li className={styles["header-container-nav-list-item"]} key={item.label}>
              <a
                className={styles["header-container-nav-list-item-link"]}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
