"use client";

import { useEffect, useState } from "react";
import styles from "./AnimatedBackground.module.scss";

export default function AnimatedBackground() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const handleMove = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className={styles.background}
      style={
        {
          "--x": `${pos.x}%`,
          "--y": `${pos.y}%`,
        } as React.CSSProperties
      }
    />
  );
}