import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <Link className={styles.navbarlink} href="/">
        Home
      </Link>
      <Link className={styles.navbarlink} href="/posts/chart-post">
        Weather Chart
      </Link>
      <Link className={styles.navbarlink} href="/posts/about-post">
        About Us
      </Link>
    </div>
  );
};
