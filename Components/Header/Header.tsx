import Navigation from "../Navbar/Navbar";
import styles from '@/styles/Home.module.css'


export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <h1>Logo</h1>
            </div>
            <Navigation />
            <h2>hello</h2>
        </div>
    )
}