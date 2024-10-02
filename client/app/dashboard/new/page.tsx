import styles from "./page.module.css"
import PatientForm from "@/components/new/patient-form";

export default function Page() {
    return <div className={styles.container}>
        <h1 className={styles.header}>New Patient</h1>
        <PatientForm />
    </div>
}