import styles from './loader.module.css';

export default function Loader({ children }: {
    children: React.ReactNode
}): React.ReactNode {
    return <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
        <p className={styles.loadingText}>{children}</p>
    </div>
}