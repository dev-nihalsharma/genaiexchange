import styles from "./patient.module.css"
export default function Patient({ name, age, category }: {
    name: string,
    age: number,
    category: string
}): React.ReactNode {
    return <div className={styles.patientContainer}>
        <div className={styles.left}>
           <span className={styles.name}>{name}</span>
           <span className={styles.category}>{category}</span>
        </div>
        <div className={styles.right}>
            Age
            <span className={styles.age}>{age}</span>
        </div>
    </div>
}