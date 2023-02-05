import Link from "next/link";
import styles from "@/styles/Home.module.css";

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Link className={styles.navbarlink} href="/posts/chart-post">
        Weather Chart
      </Link>
    </div>
  );
};
