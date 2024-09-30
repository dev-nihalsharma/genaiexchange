
import styles from "./left-nav-button.module.css";
import Link from "next/link";

export default function LeftNavButton({ children, to, text, current }: {
    children: React.ReactNode;
    to: string;
    text: string;
    current: string
}) {
    console.log(to,current)
    return <Link href={to} className={current === to ? `${styles.link} ${styles.active}` : styles.link} >
        <div className={styles.imageContainer}>
            {children}
        </div>
        {text}
    </Link>
}