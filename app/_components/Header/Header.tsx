import styles from "./Header.module.scss";

export default function Header({
  navigationItems,
}: {
  navigationItems: { label: string; href: string }[];
}) {
  return (
    <header className={styles["header-container"]}>
      <div className={styles["header-container-line"]}></div>
      <nav className={styles["header-container-nav"]}>
        <ul className={styles["header-container-nav-list"]}>
          {navigationItems.map((item) => (
            <li className={styles["header-container-nav-list-item"]} key={item.label}>
              <a className={styles["header-container-nav-list-item-link"]} href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
