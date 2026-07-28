import styles from "@/app/page.module.css";

export function LogoMark({ size = 28 }: { size?: number }) {
  const ringBorder = size * 0.15;
  const offset = size * 0.54;

  return (
    <div className={styles.logoMark} style={{ width: size + offset, height: size }}>
      <div
        className={styles.logoRing}
        style={{ left: offset, width: size, height: size, borderWidth: ringBorder }}
      />
      <div className={styles.logoDot} style={{ width: size, height: size }} />
    </div>
  );
}

export function Logo({ size = 28 }: { size?: number }) {
  return (
    <div className={styles.logo}>
      <LogoMark size={size} />
      <div className={styles.wordmark} style={{ fontSize: size - 1 }}>
        veritas
      </div>
    </div>
  );
}
