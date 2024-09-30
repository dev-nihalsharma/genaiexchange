import styles from "./primary-button.module.css"
export default function PrimaryButton({ name, label, disabled }: {
    name: string;
    label: string;
    disabled: boolean;
}): React.ReactNode {
    return <button className={styles.button} id={name} disabled={disabled}>
        {label}
    </button>
}